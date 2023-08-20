const express = require('express')
const {   getAllfaculty, getFacultyDetail, createfaultyORupdate, findFacultyMembersBydata } = require('../controller/facultyCotroller')
const { isAuthenticated, authorizedRole } = require('../middleware/auth')

const Router = express.Router()

Router.route("/update/faculty/:token").post(isAuthenticated,authorizedRole("teacher"),createfaultyORupdate)
Router.route("/getfaculties/:token").get(isAuthenticated,authorizedRole("teacher"),getAllfaculty)
Router.route("/faculty/detail/:email/:token").get(isAuthenticated,getFacultyDetail)
Router.route("/faculty/details/:clgShortName/:department/:course/:year/:token").get(isAuthenticated,findFacultyMembersBydata)

module.exports =Router 