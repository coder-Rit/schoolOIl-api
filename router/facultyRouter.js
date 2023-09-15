const express = require('express')
const {   getAllfaculty, getFacultyDetail, createfaultyORupdate, findFacultyMembersBydata } = require('../controller/facultyCotroller')
const { isAuthenticated, authorizedRole } = require('../middleware/auth')

const Router = express.Router()

Router.route("/update/faculty").post(isAuthenticated,authorizedRole("teacher"),createfaultyORupdate)
Router.route("/getfaculties").post(isAuthenticated,authorizedRole("teacher"),getAllfaculty)
Router.route("/faculty/detail/:email").post(isAuthenticated,getFacultyDetail)
Router.route("/faculty/details/:clgShortName/:department/:course/:year").post(isAuthenticated,findFacultyMembersBydata)

module.exports =Router 