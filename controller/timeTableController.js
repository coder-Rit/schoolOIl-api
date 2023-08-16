const catchAsyncErorr = require("../middleware/catchAsyncErorr");
const timeTableModel = require("../model/timeTableModel");

// creating a timeTable
exports.updateTimeTable = catchAsyncErorr(async (req, res, next) => {

   let timeTable
  if (req.body._id) {
    timeTable = await timeTableModel.findByIdAndUpdate(req.body._id,req.body)
  }
  else{ 
   
    timeTable = await timeTableModel.create(req.body);
  }
 
    res.status(201).json({
      status: true,
      timeTable
    });
  });
  

// get timetable by id
exports.getTimetableByID = catchAsyncErorr(async (req, res, next) => {
    let timeTable = await timeTableModel.findOne({_id:req.params.id});
    res.status(201).json({
      status: true,
      timeTable
    });
  });


 