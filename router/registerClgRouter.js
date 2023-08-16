const express = require('express')
const { registerClg, getAllregisterdClg, getClg ,getClgByShortName} = require('../controller/registerClgController')
const { authorizedRole, isAuthenticated } = require('../middleware/auth')
 
 

const Router = express.Router()

Router.route("/registerClg").post(isAuthenticated,authorizedRole("admin"),registerClg)
Router.route("/getAllRegisterClg").get(isAuthenticated,authorizedRole("admin"),getAllregisterdClg)
Router.route("/collegeCode/:clgCode").get(isAuthenticated,getClg)
Router.route("/clgShortName/:clgShortName").get(isAuthenticated,getClgByShortName)
 
module.exports =Router   