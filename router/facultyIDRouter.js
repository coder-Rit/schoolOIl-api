const express = require('express')
const { addFacultyID, getFacultyID } = require('../controller/facultyIDController')
 

const Router = express.Router()

Router.route("/addfacultyID").post(addFacultyID)
Router.route("/getFacultyID").get(getFacultyID)
 

module.exports =Router