const express = require('express');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const Quiz = require('../models/Quiz');

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

module.exports = router;
