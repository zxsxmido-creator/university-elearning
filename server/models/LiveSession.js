const mongoose = require('mongoose');

const LiveSessionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  channelName: { type: String, required: true, unique: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  instructors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  scheduledAt: { type: Date, required: true },
  isActive: { type: Boolean, default: false },
  recordingUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('LiveSession', LiveSessionSchema);