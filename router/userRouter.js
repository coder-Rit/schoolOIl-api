const express = require('express')
const { signUp, getAllUser, login, logOut, updatePassword, getUserDetails, updateUser, changeTheme, isExist, login_withoutPass, signUpFaculty } = require('../controller/userContoller')
const { isAuthenticated, authorizedRole } = require('../middleware/auth')
 

const Router = express.Router()

Router.route("/signup").post(signUp)
Router.route("/signup/faculty").post(isAuthenticated,authorizedRole("teacher"),signUpFaculty)
Router.route("/login").post(login)
Router.route("/logout").post(logOut)
Router.route("/user/isExist/:email").post(isExist)
Router.route("/user/login_withoutPass/:email/:sendedOTP/:recivedOTP").post(login_withoutPass)
Router.route("/allUser").post(getAllUser)
Router.route("/user/updatePass").put(isAuthenticated,updatePassword)
Router.route("/user/me").post(isAuthenticated,getUserDetails)
Router.route("/user/update").put(isAuthenticated,updateUser)
Router.route("/user/update/setting/:id/:theme").put(isAuthenticated,changeTheme)

module.exports =Router
