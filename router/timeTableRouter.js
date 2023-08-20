const express = require('express')
const { updateTimeTable, getTimetableByID } = require('../controller/timeTableController')
const { isAuthenticated, authorizedRole } = require('../middleware/auth')

const Router = express.Router()

Router.route("/timeTable/:id/:token").get(isAuthenticated,getTimetableByID) 
Router.route("/timeTable/update/:token").post(isAuthenticated,authorizedRole("teacher"),updateTimeTable) 
 
module.exports =Router    