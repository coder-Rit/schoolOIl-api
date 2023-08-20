const express = require('express')
const { genrateLecture,getAll_lectures,update_lecture_for_attendance,delete_lecture,findLectureByIDAndReplaceAttendance, findLectureByIDAndUpdate } = require('../controller/lectureController')
const { isAuthenticated } = require('../middleware/auth')
 

const Router = express.Router()

Router.route("/user/genrateL/:token").post(isAuthenticated,genrateLecture)
Router.route("/user/getAllLectures/:id/:from/:to/:token").get(isAuthenticated,getAll_lectures)
Router.route("/user/markMyAttendance/:updater/:update/:token").post(isAuthenticated,update_lecture_for_attendance)
Router.route("/user/lecture/:id/:token").delete(isAuthenticated,delete_lecture)
Router.route("/user/attendance/repace/:token").put(isAuthenticated,findLectureByIDAndReplaceAttendance)
Router.route("/user/lecture/info/udpate/:token").put(isAuthenticated,findLectureByIDAndUpdate)
   
module.exports =Router 