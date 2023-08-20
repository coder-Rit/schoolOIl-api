const express = require('express')
const {  getAllStudent, getStudentDetail, findStudentByIdAndUpdateRole, createAccs, updateStudentEmail, createAND_update, getStudnetByEN } = require('../controller/studentContoller')
const { isAuthenticated, authorizedRole } = require('../middleware/auth')

const Router = express.Router()

Router.route("/updateStudentEmail/:token").post(isAuthenticated,updateStudentEmail) 
Router.route("/updateNcreate/:token").post(isAuthenticated,authorizedRole("teacher"),createAND_update) 
 Router.route("/addstudents/:token").post(isAuthenticated,authorizedRole("teacher"),createAccs) 
Router.route("/getstudents/:course/:clgShortName/:department/:year/:div/:token").get(isAuthenticated,authorizedRole("HOD","teacher"),getAllStudent)
Router.route("/user/detail/:enNumber/:token").get(isAuthenticated,getStudentDetail)
Router.route("/user/student/update/role/:id/:role/:token").put(isAuthenticated,findStudentByIdAndUpdateRole)


module.exports =Router      