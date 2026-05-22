const mongoose = require('mongoose');

const QuizAttemptAnswerSchema = new mongoose.Schema({
  prompt: { type: String, required: true },
  options: { type: [String], default: [] },
  selectedAnswer: { type: Number, default: null },
  selectedOption: { type: String, default: '' },
  correctAnswer: { type: Number, required: true },
  correctOption: { type: String, default: '' },
  isCorrect: { type: Boolean, required: true }
}, { _id: false });

const QuizAttemptSchema = new mongoose.Schema({
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true, index: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  studentName: { type: String, default: '', trim: true },
  studentEmail: { type: String, default: '', trim: true },
  answers: { type: [QuizAttemptAnswerSchema], default: [] },
  score: { type: Number, required: true, min: 0, max: 100 },
  pointsEarned: { type: Number, required: true, min: 0 },
  correctCount: { type: Number, required: true, min: 0 },
  totalQuestions: { type: Number, required: true, min: 1 },
  submittedAt: { type: Date, default: Date.now }
}, { timestamps: true });

QuizAttemptSchema.index({ quiz: 1, student: 1 }, { unique: true });

module.exports = mongoose.model('QuizAttempt', QuizAttemptSchema);
