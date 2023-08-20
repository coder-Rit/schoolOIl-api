const express = require('express')
const { whatsapp_message, genrateOtp_email, genrateOtp_mobile} = require('../controller/messageController')
const { isAuthenticated ,authorizedRole} = require('../middleware/auth')
 

const Router = express.Router()
 
Router.route("/user/sendUpadate/:token").post(isAuthenticated,authorizedRole("teacher"),whatsapp_message)
Router.route("/user/gerateOTP/email").post(genrateOtp_email)
Router.route("/user/gerateOTP/mobile").post(genrateOtp_mobile)
    
module.exports =Router