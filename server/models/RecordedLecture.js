const mongoose = require('mongoose');

const RecordedLectureSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, default: '', trim: true },
  subject: { type: String, required: true, trim: true },
  subjectCode: { type: String, default: 'LEC', trim: true },
  instructor: { type: String, required: true, trim: true },
  durationMinutes: { type: Number, default: 0, min: 0 },
  videoUrl: { type: String, required: true, trim: true },
  videoPublicId: { type: String, default: '', trim: true },
  sourceType: { type: String, enum: ['upload', 'link'], default: 'link' },
  code: { type: String, default: '', trim: true },
  views: { type: Number, default: 0, min: 0 },
  isNew: { type: Boolean, default: true },
  progress: { type: Number, default: 0, min: 0, max: 100 },
  watched: { type: Boolean, default: false },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }
}, { timestamps: true });

module.exports = mongoose.model('RecordedLecture', RecordedLectureSchema);
