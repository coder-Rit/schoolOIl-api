const lectuerModel = require("../model/lectuerModel");
const catchAsyncErorr = require("../middleware/catchAsyncErorr");
const ErrorHandler = require("../utils/errorHandler");

// genraing lecture by cr
exports.genrateLecture = catchAsyncErorr(async (req, res, next) => {
  const lecture = await lectuerModel.create(req.body);

  res.status(201).json({
    status: true,
    lecture,
  });
});

// get genrated lectures
exports.getAll_lectures = catchAsyncErorr(async (req, res, next) => {
 console.log(req.params);
  const lectures = await lectuerModel.find({
    divisionID: req.params.id,
    timeStamp: { $gt: req.params.from ,$lt:req.params.to},
  });

  res.status(201).json({
    status: true,
    lectures,
  });
});

// mark attendace by pushing use id in lecture
exports.update_lecture_for_attendance = catchAsyncErorr(async (req, res, next) => {
  const lecture = await lectuerModel.findByIdAndUpdate(req.params.updater,{$push:{presentStudents:req.params.update}} );

  res.status(201).json({
    status: true,
    lecture,
  });
});

// find Lecture By ID And Replace Attendance
exports.findLectureByIDAndReplaceAttendance = catchAsyncErorr(async (req, res, next) => {
  let lecture = await lectuerModel.findByIdAndUpdate(req.body.id,{presentStudents:req.body.array} ); 
  if (!lecture) {
    return next(new ErrorHandler("Unable to find lecture",404))
  }
  lecture.presentStudents =req.body.array 
  res.status(201).json({
    status: true,
    lecture,
  });
});

// find Lecture By ID And update
exports.findLectureByIDAndUpdate = catchAsyncErorr(async (req, res, next) => {
  let lecture = await lectuerModel.findByIdAndUpdate(req.body.id,{timeStamp: req.body.timeStamp,subject:req.body.subject,duplicated:req.body.duplicated} ); 
  if (!lecture) {
    return next(new ErrorHandler("Unable to find lecture",404))
  }

  lecture.timeStamp= req.body.timeStamp
  lecture.subject=req.body.subject
  lecture.duplicated=req.body.duplicated
 
  console.log(lecture);



  res.status(201).json({
    status: true,
    lecture,
  });
});





// mark attendace by pushing use id in lecture
exports.delete_lecture = catchAsyncErorr(async (req, res, next) => {
  const lecture = await lectuerModel.findByIdAndDelete(req.params.id);

  res.status(201).json({
    status: true, 
    lecture,
  });
});


 