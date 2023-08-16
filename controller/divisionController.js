const catchAsyncErorr = require("../middleware/catchAsyncErorr");
const divisionsModel = require("../model/divisionsModel");
const ErrorHandler = require("../utils/errorHandler");

//creating new divison
exports.updateDivision = catchAsyncErorr(async (req, res, next) => {  
   if (req.body._id===null ) {
      let a = req.body
      delete a._id
      console.log(a);
     division = await divisionsModel.create(a);
    }else{
      division = await divisionsModel.findByIdAndUpdate(req.body._id,req.body)
      
  }

  res.status(201).json({
    status: true,
    division,
  });
});

//get all divisions base on conditions
exports.getDivisions = catchAsyncErorr(async (req, res, next) => {
   console.log(req.params);
   const divisions = await divisionsModel.find({
    course: req.body.course,
    clgShortName: req.body.clgShortName, 
    department:req.body.department,
    year:{$in:req.body.year},
    status:"inUse"
  });
 
  if (divisions==="[]") {
    return next(new ErrorHandler("no divisions available",404))
  }
  res.status(201).json({
    status: true,
    divisions,
  });
});

//get single division by id
exports.getSingleDivision = catchAsyncErorr(async (req, res, next) => {
   const division = await divisionsModel.findById(req.params.id);
   
  res.status(201).json({
    status: true,
    division,
  });
});

// updating updateDivisionById
exports.updateDivisionById = catchAsyncErorr(async (req, res, next) => {
   const updatedDivision = await divisionsModel.findByIdAndUpdate(req.params.id,req.body);

  if (!updatedDivision) {
    return next(new ErrorHandler("division not updated",404))
  }
  res.status(201).json({
    status: true,
    updatedDivision,
  });
});


// updating updateDivisionById
exports.updateDivisionBydata = catchAsyncErorr(async (req, res, next) => {

  console.log(req.body);
   const updatedDivision = await divisionsModel.findByIdAndUpdate(req.body.dataForFinding,req.body.dataForUpdate);

  if (!updatedDivision) {
    return next(new ErrorHandler("division not updated",404))
  }
  res.status(201).json({
    status: true,
    updatedDivision,
  });
});


// updating updateDivisionById
exports.getDivisionByData = catchAsyncErorr(async (req, res, next) => {
   const division = await divisionsModel.findOne({div:req.params.div,course:req.params.course,clgShortName:req.params.clgShortName,year:req.params.year})

  if (!division) {
    return next(new ErrorHandler("no division avalable",404))
  }
  res.status(201).json({
    status: true,
    division,
  });
});


// Find Division By ID And Update En
exports.FindDivisionByIDAndUpdateEn = catchAsyncErorr(async (req, res, next) => {
   let division = await divisionsModel.findByIdAndUpdate(req.body.id ,{$push:{EN:req.body.en}})
      division.EN.push(req.body.en)
  if (!division) {
    return next(new ErrorHandler("En number fail to update",404))
  }
  res.status(201).json({
    status: true,
    division,
  });
});


 


// delette division

exports.deleteDivision = catchAsyncErorr(async (req, res, next) => {
   let division = await divisionsModel.findOneAndDelete(req.body.id)

   console.log(division);

  res.status(201).json({
    status: true,
    
  });
});


 

