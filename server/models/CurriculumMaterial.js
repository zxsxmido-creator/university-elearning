const mongoose = require('mongoose');

const CurriculumMaterialSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  subject: { type: String, required: true, trim: true },
  subjectCode: { type: String, default: 'GEN', trim: true },
  subjectDescription: { type: String, default: '', trim: true },
  weekNumber: { type: Number, default: 1, min: 1 },
  weekTitle: { type: String, default: 'Week Materials', trim: true },
  fileUrl: { type: String, required: true, trim: true },
  filePublicId: { type: String, default: '', trim: true },
  fileName: { type: String, default: '', trim: true },
  sizeLabel: { type: String, default: '', trim: true },
  pages: { type: Number, default: 0, min: 0 },
  type: { type: String, enum: ['pdf'], default: 'pdf' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }
}, { timestamps: true });

module.exports = mongoose.model('CurriculumMaterial', CurriculumMaterialSchema);
