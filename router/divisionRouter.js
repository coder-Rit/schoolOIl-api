const express = require('express')
 const {  getDivisions ,getSingleDivision,updateDivisionById, updateDivision,updateDivisionBydata,deleteDivision, getDivisionByData,FindDivisionByIDAndUpdateEn} = require('../controller/divisionController')
const { isAuthenticated, authorizedRole } = require('../middleware/auth')
  

const Router = express.Router()

Router.route("/division/update").post(isAuthenticated,authorizedRole("teacher"), updateDivision) 
Router.route("/divisions").post(isAuthenticated,getDivisions) 
Router.route("/division/:id").get(isAuthenticated, getSingleDivision) 
Router.route("/divisions/update/:id").put(isAuthenticated,authorizedRole("teacher"),updateDivisionById) 
Router.route("/division/updateBydata").post(isAuthenticated,authorizedRole("teacher"),updateDivisionBydata) 
Router.route("/division/myDivision/:div/:course/:clgShortName/:year").get(isAuthenticated,getDivisionByData) 
Router.route("/division/enupdate").put(isAuthenticated,FindDivisionByIDAndUpdateEn) 
Router.route("/division/delete/:id").delete(isAuthenticated,deleteDivision) 
   

module.exports =Router 