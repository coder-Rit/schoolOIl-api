const mongoose = require("mongoose");

const faculty = new mongoose.Schema({
   
    Name: {
      type: String,
      required: [true, "Enter you fist name"],
    },
    
  
  degree: {
    type: String,
    required: [true, "Enter your degree"],
  },
  course:{
    type:String,
    required:[true,"Enter your course"]
  },
  department: {
    type: String,
    required: [true, "Enter your department"],
  },
  year: {
    type: Array,
    required: [true, "Enter year of H.O.D."],
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  email: {
    type: String,
    required: [true, "Email is not inported"],
  },
  phoneNumber: {
    type: Number,
    required: [true, "Enter your phone number"],
    unique: [true, "alredy registerd with this number"],
  }, 
  clgShortName: {
    type: String,
    required:true
  },
  subject: {
    type: Array,
    required: true,
  },
  role: {
    type: String,
    default: "teacher",
  }, 
});

module.exports = mongoose.model("faculty", faculty);
