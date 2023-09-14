const express = require('express')
const error = require('./middleware/error')
const connectTODatabase = require('./config/dataBase')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors  = require("cors")
const app = express()
const fileUpload = require("express-fileupload")
const path = require("path");

 
 
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "./config/config.env" });
  }
//connection to the data base 
connectTODatabase() 

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(fileUpload())

 



const facultyRouter = require('./router/facultyRouter')
const userRouter = require('./router/userRouter') 
const studentRouter = require('./router/studentRouter')
const lectuerRouter = require('./router/lectuerRouter')
const facultyID = require('./router/facultyIDRouter')
const registerClgRouter = require('./router/registerClgRouter')
const divisionRouter = require('./router/divisionRouter')
const timeTableRouter = require('./router/timeTableRouter')
const messageRouter = require('./router/messageRouter')
 

app.use(cors({ origin: ['https://delicate-kataifi-8ae037.netlify.app','http://localhost:3000'],credentials: 'true' }))




app.use("/api/v1", facultyRouter)
app.use("/api/v1", userRouter)
app.use("/api/v1",studentRouter ) 
app.use("/api/v1", lectuerRouter)
app.use("/api/v1", facultyID)
app.use("/api/v1",registerClgRouter )
app.use("/api/v1",divisionRouter)
app.use("/api/v1",timeTableRouter)
app.use("/api/v1",messageRouter)
 

//app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("/", (err,req, res,next) => {
  
  res.status(200).json({
    message:'bad request'
  })
  
});


 
 
 app.use(error)
module.exports = app
