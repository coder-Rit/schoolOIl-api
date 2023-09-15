const facultyModel = require("../model/facultyModel");
const catchAsyncErorr = require("../middleware/catchAsyncErorr");
 
const ErrorHandler = require("../utils/errorHandler");

// creating and update a faculty account
exports.createfaultyORupdate = catchAsyncErorr(async (req, res, next) => {
  let userDetail = await facultyModel.findOne({ email: req.body.email });

 

  if (!userDetail) {
    userDetail = await facultyModel.create(req.body);
  } else {
    userDetail = await facultyModel.findOneAndUpdate(
      { email: req.body.email },
      req.body
    );
  }

  

  res.status(201).json({
    status: true,
    userDetail,
  });
});

// get all  faculty account
exports.getAllfaculty = catchAsyncErorr(async (req, res, next) => {
  const facultyList = await facultyModel.find({});

  res.status(201).json({
    status: "all faculty list s",
    facultyList,
  });
});

// get single faculty detail
exports.getFacultyDetail = catchAsyncErorr(async (req, res, next) => {
  const userDetail = await facultyModel.findOne({ email: req.params.email });
  if (!userDetail) {
    return next(new ErrorHandler("please update the profile detail", 404));
  }

  res.status(201).json({  
    status: true,
    userDetail,
  });
});

//find faculty memebers by data

exports.findFacultyMembersBydata = catchAsyncErorr(async (req, res, next) => {
   const allFacultyMembers = await facultyModel.find({
    clgShortName: req.params.clgShortName,
    department: req.params.department,
    course: req.params.course, 
    year:req.params.year
  });
  

  res.status(201).json({
    status: true,
    allFacultyMembers,
  });
});
