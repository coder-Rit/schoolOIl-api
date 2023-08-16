const mongoose = require("mongoose");

// divison
// clgShortName
// creter info
// bactches
// gfms
// year of class
// subjects
// cr selection
// auto fetched student list
const divisionSchema = new mongoose.Schema({
  id: {
    type: String,
    default: null,
  },
  subjects: {
    type: Array,
    require: true,
  },
  div: {
    type: String,
    required: [true, "division name"],
  },
  course: {
    type: String,
    required: [true, "course name"],
  },
  clgShortName: {
    type: String,
    required: true,
  },
  updatedBy: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "user",
  },
  batches: {
    type: Object,
    default: {},
  },
  rollNumbers: {
    from: {
      type: Number,
      required: [true, "please enter the starting of roll number"],
    },
    To: {
      type: Number,
      required: [true, "please enter the ending of roll number"],
    },
  },
  year: {
    type: String,
    required: [true, "please enter the year of class"],
  },
  CR: {
    type: Array,
    default: [],
  },
  department:{
    type:String,
    required:true
  },
  timeTableID:{
    type:mongoose.Types.ObjectId,
    default:null
  },
  status:{
type:String,
default:"inUse"
  },
  EN:{
    type :Array,
    default:[]
  }
});

module.exports = mongoose.model("division", divisionSchema);
