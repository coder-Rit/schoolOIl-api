const express = require('express')
 const {  getDivisions ,getSingleDivision,updateDivisionById, updateDivision,updateDivisionBydata,deleteDivision, getDivisionByData,FindDivisionByIDAndUpdateEn} = require('../controller/divisionController')
const { isAuthenticated, authorizedRole } = require('../middleware/auth')
  

const Router = express.Router()

Router.route("/division/update/:token").post(isAuthenticated,authorizedRole("teacher"), updateDivision) 
Router.route("/divisions/:token").post(isAuthenticated,getDivisions) 
Router.route("/division/:id/:token").get(isAuthenticated, getSingleDivision) 
Router.route("/divisions/update/:id/:token").put(isAuthenticated,authorizedRole("teacher"),updateDivisionById) 
Router.route("/division/updateBydata/:token").post(isAuthenticated,authorizedRole("teacher"),updateDivisionBydata) 
Router.route("/division/myDivision/:div/:course/:clgShortName/:year/:token").get(isAuthenticated,getDivisionByData) 
Router.route("/division/enupdate/:token").put(isAuthenticated,FindDivisionByIDAndUpdateEn) 
Router.route("/division/delete/:id/:token").delete(isAuthenticated,deleteDivision) 
   

module.exports =Router 