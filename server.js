const app = require('./app')
 const http = require('http');
const Cloudinary = require('cloudinary')
const schedule = require('node-schedule');

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });
}



// Cloudinary config
Cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

  if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "./config/config.env" });
  }

// server code
const server = http.createServer(app);
server.listen(process.env.PORT,()=>{
    console.log(`🚀🚀🚀 server is runing at ${process.env.PORT} 🚀🚀🚀`);
})

const job = schedule.scheduleJob(' */13 * * * *', function(){
  console.log('♻️ ♻️ ♻️  Server is reloaded ♻️ ♻️ ♻️');
});



// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });
