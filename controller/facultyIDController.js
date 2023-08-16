 const catchAsyncErorr = require("../middleware/catchAsyncErorr")
const facultyIdModel = require("../model/facultyIdModel")

 
 

// adding facultyID
exports.addFacultyID = catchAsyncErorr(async (req, res, next) => { 
        const  allFacultyIds = await facultyIdModel.create(req.body)  
        res.status(201).json({
            status: "Faculty IDs created  successfully",
            allFacultyIds
        })  
    
})
// get facultyID
exports.getFacultyID = catchAsyncErorr(async (req, res, next) => { 
        const  getFacultyID = await facultyIdModel.find({})  
        res.status(201).json({
            status: "Faculty IDs here are",
            getFacultyID
        })  
    
})

 