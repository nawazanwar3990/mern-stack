const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    dob: {
      type: Date,
      default: null,
      trim: true,
    },


    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    roles:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        default: null
      }
    ],

    active:{
      type:Boolean,
      default:false
    },

    verified:{
      type:Boolean,
      default:false
    },

    gender:{
      type:String,
      enum:['female','male','shemale']
    },

    socialLinks:{
      facebook:{type:String,trim:true,default:''},
      twitter:{type:String,trim:true,default:''},
      linkedin:{type:String,trim:true,default:''},
      instagram:{type:String,trim:true,default:''}
    },

    eductions:[
      {
        degree:{type:String,trim:true,default:''},
        institute:{type:String,trim:true,default:''},
        startYear:{type:String,trim:true,default:''},
        endYear:{type:String,trim:true,default:''}
      }
    ],

    address:{
      country:{type:String,trim:true,default:''},
      state:{type:String,trim:true,default:''},
      city:{type:String,trim:true,default:''},
      street:{type:String,trim:true,default:''},
      zipCode:{type:String,trim:true,default:''}
    },
    
  },
  { 
    timestamps: true
   }
);

module.exports = mongoose.model('User', UserSchema);
