const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String }, // Optional field
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to user
  },
  { timestamps: true }
);

module.exports = mongoose.model('Category', CategorySchema);
