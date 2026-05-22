const express = require('express');
const mongoose = require('mongoose');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const Quiz = require('../models/Quiz');
const QuizAttempt = require('../models/QuizAttempt');
const User = require('../models/User');

const router = express.Router();

function toLocalizedText(value) {
  return { en: value || '', ar: value || '' };
}

function formatDueDate(date) {
  const safeDate = new Date(date);

  if (Number.isNaN(safeDate.getTime())) {
    return '';
  }

  return safeDate.toISOString().slice(0, 10);
}

function normalizeQuiz(quizDocument) {
  return {
    id: String(quizDocument._id),
    courseCode: quizDocument.courseCode,
    course: toLocalizedText(quizDocument.courseName),
    title: toLocalizedText(quizDocument.title),
    description: toLocalizedText(quizDocument.description),
    due: toLocalizedText(formatDueDate(quizDocument.dueDate)),
    duration: quizDocument.duration,
    points: quizDocument.points,
    status: quizDocument.status || 'pending',
    questions: quizDocument.questions.map((question) => ({
      prompt: toLocalizedText(question.prompt),
      options: question.options.map((option) => toLocalizedText(option)),
      answer: question.answer
    }))
  };
}

router.get('/', async (req, res) => {
  try {
    const quizzes = await Quiz.find().sort({ createdAt: -1 });
    return res.json({ quizzes: quizzes.map(normalizeQuiz) });
  } catch (error) {
    return res.status(500).json({ msg: 'Failed to load quizzes' });
  }
});

router.post('/', auth, admin, async (req, res) => {
  try {
    const {
      courseCode,
      courseName,
      title,
      description,
      dueDate,
      duration,
      points,
      questions
    } = req.body;

    const safeQuestions = Array.isArray(questions) ? questions : [];

    if (!courseCode || !courseName || !title || !dueDate || !safeQuestions.length) {
      return res.status(400).json({ msg: 'Missing required quiz fields' });
    }

    const preparedQuestions = safeQuestions.map((question) => {
      const options = Array.isArray(question.options)
        ? question.options.map((option) => String(option || '').trim()).filter(Boolean)
        : [];

      return {
        prompt: String(question.prompt || '').trim(),
        options,
        answer: Number(question.answer)
      };
    });

    const hasInvalidQuestion = preparedQuestions.some((question) => {
      return !question.prompt || question.options.length < 2 || question.answer < 0 || question.answer >= question.options.length;
    });

    if (hasInvalidQuestion) {
      return res.status(400).json({ msg: 'One or more quiz questions are invalid' });
    }

    const quiz = await Quiz.create({
      courseCode: String(courseCode).trim(),
      courseName: String(courseName).trim(),
      title: String(title).trim(),
      description: String(description || '').trim(),
      dueDate: new Date(dueDate),
      duration: Number(duration) || 10,
      points: Number(points) || 100,
      status: 'pending',
      questions: preparedQuestions,
      createdBy: req.user.id
    });

    return res.status(201).json({ quiz: normalizeQuiz(quiz) });
  } catch (error) {
    return res.status(500).json({ msg: 'Failed to create quiz' });
  }
});

router.post('/:id/attempts', auth, async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ msg: 'Invalid quiz id' });
    }

    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({ msg: 'Quiz not found' });
    }

    const submittedAnswers = Array.isArray(req.body.answers) ? req.body.answers : [];
    const preparedAnswers = quiz.questions.map((question, index) => {
      const rawSelectedAnswer = submittedAnswers[index];
      const selectedAnswer = Number(rawSelectedAnswer);
      const hasValidSelection = rawSelectedAnswer !== null
        && rawSelectedAnswer !== undefined
        && rawSelectedAnswer !== ''
        && Number.isInteger(selectedAnswer)
        && selectedAnswer >= 0
        && selectedAnswer < question.options.length;
      const safeSelectedAnswer = hasValidSelection ? selectedAnswer : null;
      const isCorrect = safeSelectedAnswer === question.answer;

      return {
        prompt: question.prompt,
        options: question.options,
        selectedAnswer: safeSelectedAnswer,
        selectedOption: safeSelectedAnswer === null ? '' : question.options[safeSelectedAnswer],
        correctAnswer: question.answer,
        correctOption: question.options[question.answer] || '',
        isCorrect
      };
    });

    const correctCount = preparedAnswers.filter((answer) => answer.isCorrect).length;
    const totalQuestions = quiz.questions.length;
    const score = Math.round((correctCount / totalQuestions) * 100);
    const pointsEarned = Math.round((correctCount / totalQuestions) * quiz.points * 100) / 100;
    const student = await User.findById(req.user.id).select('name email');

    const attempt = await QuizAttempt.findOneAndUpdate(
      { quiz: quiz._id, student: req.user.id },
      {
        $set: {
          quiz: quiz._id,
          student: req.user.id,
          studentName: student?.name || req.user.name || '',
          studentEmail: student?.email || '',
          answers: preparedAnswers,
          score,
          pointsEarned,
          correctCount,
          totalQuestions,
          submittedAt: new Date()
        }
      },
      { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true }
    );

    return res.status(201).json({
      result: {
        score: attempt.score,
        pointsEarned: attempt.pointsEarned,
        correctCount: attempt.correctCount,
        totalQuestions: attempt.totalQuestions,
        completedAt: attempt.submittedAt.toISOString(),
        answers: attempt.answers.map((answer) => answer.selectedAnswer)
      }
    });
  } catch (error) {
    return res.status(500).json({ msg: 'Failed to submit quiz attempt' });
  }
});

router.get('/:id/attempts', auth, admin, async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ msg: 'Invalid quiz id' });
    }

    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({ msg: 'Quiz not found' });
    }

    const attempts = await QuizAttempt.find({ quiz: quiz._id })
      .sort({ submittedAt: -1 })
      .populate('student', 'name email');

    return res.json({
      quiz: {
        id: String(quiz._id),
        title: quiz.title,
        courseCode: quiz.courseCode,
        points: quiz.points,
        questions: quiz.questions.length
      },
      attemptCount: attempts.length,
      attempts: attempts.map((attempt) => ({
        id: String(attempt._id),
        student: {
          id: String(attempt.student?._id || attempt.student),
          name: attempt.student?.name || attempt.studentName,
          email: attempt.student?.email || attempt.studentEmail
        },
        score: attempt.score,
        pointsEarned: attempt.pointsEarned,
        correctCount: attempt.correctCount,
        totalQuestions: attempt.totalQuestions,
        submittedAt: attempt.submittedAt,
        answers: attempt.answers.map((answer, index) => ({
          questionNumber: index + 1,
          prompt: answer.prompt,
          selectedAnswer: answer.selectedAnswer,
          selectedOption: answer.selectedOption,
          correctAnswer: answer.correctAnswer,
          correctOption: answer.correctOption,
          isCorrect: answer.isCorrect
        }))
      }))
    });
  } catch (error) {
    return res.status(500).json({ msg: 'Failed to load quiz attempts' });
  }
});

router.patch('/:id/duration', auth, admin, async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ msg: 'Invalid quiz id' });
    }

    const duration = Number(req.body.duration);

    if (!Number.isFinite(duration) || duration < 1) {
      return res.status(400).json({ msg: 'Duration must be a positive number' });
    }

    const quiz = await Quiz.findByIdAndUpdate(
      req.params.id,
      { $set: { duration } },
      { new: true, runValidators: true }
    );

    if (!quiz) {
      return res.status(404).json({ msg: 'Quiz not found' });
    }

    return res.json({ quiz: normalizeQuiz(quiz) });
  } catch (error) {
    return res.status(500).json({ msg: 'Failed to update quiz duration' });
  }
});

module.exports = router;
