const express = require('express')
const { registerClg, getAllregisterdClg, getClg ,getClgByShortName} = require('../controller/registerClgController')
const { authorizedRole, isAuthenticated } = require('../middleware/auth')
 
 

const Router = express.Router()

Router.route("/registerClg/:token").post(isAuthenticated,authorizedRole("admin"),registerClg)
Router.route("/getAllRegisterClg/:token").get(isAuthenticated,authorizedRole("admin"),getAllregisterdClg)
Router.route("/collegeCode/:clgCode/:token").get(isAuthenticated,getClg)
Router.route("/clgShortName/:clgShortName/:token").get(isAuthenticated,getClgByShortName)
 
module.exports =Router   