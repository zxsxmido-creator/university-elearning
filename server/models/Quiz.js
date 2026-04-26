const mongoose = require('mongoose');

const QuizQuestionSchema = new mongoose.Schema({
  prompt: { type: String, required: true, trim: true },
  options: {
    type: [String],
    validate: {
      validator(value) {
        return Array.isArray(value) && value.length >= 2 && value.every((entry) => typeof entry === 'string' && entry.trim());
      },
      message: 'Quiz questions must include at least two non-empty options.'
    }
  },
  answer: { type: Number, required: true, min: 0 }
}, { _id: false });

const QuizSchema = new mongoose.Schema({
  courseCode: { type: String, required: true, trim: true },
  courseName: { type: String, required: true, trim: true },
  title: { type: String, required: true, trim: true },
  description: { type: String, default: '', trim: true },
  dueDate: { type: Date, required: true },
  duration: { type: Number, default: 10, min: 1 },
  points: { type: Number, default: 100, min: 1 },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  questions: {
    type: [QuizQuestionSchema],
    validate: {
      validator(value) {
        return Array.isArray(value) && value.length > 0;
      },
      message: 'A quiz must include at least one question.'
    }
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }
}, { timestamps: true });

module.exports = mongoose.model('Quiz', QuizSchema);
