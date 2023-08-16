const mongoose = require('mongoose')
 


const facultyID = new mongoose.Schema({
    
    ID:{
        type: String,
        required: [true, "add facultyID"],
        unique:true 
    },
    role:{
        type: String,
        required: [true, "faculty Role"], 
    }
    
})



module.exports = mongoose.model('facultyID', facultyID)

