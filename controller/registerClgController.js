const studentModel = require("../model/studentModel")
const catchAsyncErorr = require("../middleware/catchAsyncErorr")
const registerCollegeModel = require("../model/registerCollegeModel")
const ErrorHandler = require("../utils/errorHandler")

// register college
exports.registerClg = catchAsyncErorr(async (req, res, next) => {
    const registerClg = await registerCollegeModel.create(req.body)  
    res.status(201).json({
        status: "ceated s",
        registerClg
    })
})
 

// get all registerd college
exports.getAllregisterdClg = catchAsyncErorr(async (req, res, next) => {
    const getAllregisterdClg =  await registerCollegeModel.find({})

    res.status(201).json({
        status: "all clg list",
        getAllregisterdClg 
    })
})

// get all registerd college by code
exports.getClg = catchAsyncErorr(async (req, res, next) => {
    const  clgDetail =  await registerCollegeModel.findOne({clgCode:req.params.clgCode})
 
    if (!clgDetail) {
       return  next( new ErrorHandler("College details not found",404))
    }

    res.status(201).json({
        status: true,
        clgDetail: clgDetail 
    })
})


// get all registerd college
exports.getClgByShortName = catchAsyncErorr(async (req, res, next) => {
    const  clgDetail =  await registerCollegeModel.findOne({clgShortName:req.params.clgShortName})
 
    if (!clgDetail) {
       return  next( new ErrorHandler("College details not found",404))
    }

    res.status(201).json({
        status: true,
        clgDetail 
    })
})
