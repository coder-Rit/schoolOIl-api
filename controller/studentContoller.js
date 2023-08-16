const studentModel = require("../model/studentModel");
const catchAsyncErorr = require("../middleware/catchAsyncErorr");
const ErrorHandler = require("../utils/errorHandler");
 
// creating a studen account
exports.updateStudentEmail = catchAsyncErorr(async (req, res, next) => {
   const  user = await studentModel.findByIdAndUpdate(
      req.body.id ,
     { email:req.body.email}
    );
 

  res.status(201).json({
    status: true,
    user,
  });
});

exports.createAND_update = catchAsyncErorr(async (req, res, next) => {
 
  if (typeof req.body._id !="undefined") {
    user = await studentModel.findByIdAndUpdate(
       req.body._id ,
      req.body
     );
  }else{
    user = await studentModel.create(req.body);
  }
 

  res.status(201).json({
    status: true,
    user,
  });
});

exports.getStudnetByEN = catchAsyncErorr(async (req, res, next) => {
 
  const user = studentModel.findOne({enNumber:req.params.enNumber})

  if (!user) {
    return next(new ErrorHandler("Profile not found", 404));
  }

  res.status(201).json({
    status: true,
    user,
  });
});

// creating multiple accounts
exports.createAccs = catchAsyncErorr(async (req, res, next) => {
  console.log(req.body);
  let users = await studentModel.insertMany(req.body);

  res.status(201).json({ 
    status: true,
    users,
  });
});

// get all studen account
exports.getAllStudent = catchAsyncErorr(async (req, res, next) => {
  const userList = await studentModel.find({
    course: req.params.course,
    clgShortName: req.params.clgShortName,
    department:req.params.department,
    year:req.params.year,
    div: req.params.div
  });

  res.status(201).json({
    status: true,
    userList,
  });
});

// get single studen detail
exports.getStudentDetail = catchAsyncErorr(async (req, res, next) => {
  const userDetail = await studentModel.findOne({ enNumber: req.params.enNumber });

  if (!userDetail) {
    return next(new ErrorHandler("please update the profile detail", 404));
  }

  res.status(201).json({
    status: true,
    userDetail,
  });
});



// find_student_by_id_and_update_role
exports.findStudentByIdAndUpdateRole = catchAsyncErorr(async (req, res, next) => {
  const userDetail = await studentModel.findByIdAndUpdate(req.params.id,{role:req.params.role });

  if (!userDetail) {
    return next(new ErrorHandler("cant find user to update", 404));
  }

  res.status(201).json({
    status: true,
    userDetail,
  });
});
