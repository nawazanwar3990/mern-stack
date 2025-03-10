const mongoose = require('mongoose');

const PermissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, 
      unique: true,
    },

    label: {
      type: String,
      required: true,
      trim: true, 
      unique: true,
    },


  },
  { timestamps: true } // Automatically adds createdAt & updatedAt
);

module.exports = mongoose.model('Permission', PermissionSchema);
