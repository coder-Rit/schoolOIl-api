const userModel = require("../model/userModel")
const ErrorHandler = require("../utils/errorHandler")
const jwt = require('jsonwebtoken')
const catchAsyncErorr = require("./catchAsyncErorr") 

exports.isAuthenticated = catchAsyncErorr(async(req,res,next)=>{
    const {token} = req.cookies 
    if (!token) {
        next(new ErrorHandler("Please login to access this source",400))
    }
    
    const decoded =  jwt.verify(token,process.env.JWT_SECREATE)
  
    req.user =  await userModel.findById(decoded.id)
     next()
    
})

exports.authorizedRole = (...Role)=>{
  return  (req,res,next)=>{
        if (!Role.includes(req.user.role)) {
            return next( new ErrorHandler(`${req.user.role} is not allowed to access this source` ))
        }
        next()
    }
}