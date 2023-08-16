const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Please enter you  name"],
  },
  department: {
    type: String,
    required: [true, "Please enter your department"],
  },
  year: {
    type: String,
    required: [true, "Please enter year of Study"],
  },
  avatar: {
    public_id: {
      type: String,
      default: null,
    },
    url: {
      type: String,
      default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
  },
  email: {
    type: String,
    default: "NA",
  },
  phoneNumber: {
    type: Number,
    required: [true, "Please enter your phone number"],
  },
  enNumber: {
    type: String,
    required: [true, "Please enter college name"],
    unique: [true, "This username is aleady taken"],
  },
  rollNumber: {
    type: Number,
    required: [true, "Please enter your roll number"],
  },
  div: {
    type: String,
    required: [true, "Please enter your divison"],
  },
  role: {
    type: String,
    default: "student",
  },
  clgShortName: {
    type: String,
    required:[true,"please enter the college name"]
  },
  status:{
    type:String,
    default:"unBan"
  },
  course:{
    type:String,
    required:[true,"please select the course"]
  }
});

module.exports = mongoose.model("student", studentSchema);
