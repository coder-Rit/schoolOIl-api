const express = require('express')
const { registerClg, getAllregisterdClg, getClg ,getClgByShortName} = require('../controller/registerClgController')
const { authorizedRole, isAuthenticated } = require('../middleware/auth')
 
 

const Router = express.Router()

Router.route("/registerClg").post(isAuthenticated,authorizedRole("admin"),registerClg)
Router.route("/getAllRegisterClg").post(isAuthenticated,authorizedRole("admin"),getAllregisterdClg)
Router.route("/collegeCode/:clgCode").post(isAuthenticated,getClg)
Router.route("/clgShortName/:clgShortName").post(isAuthenticated,getClgByShortName)
 
module.exports =Router   