const mongoose = require('mongoose')

 
const registerCollegeModel = new mongoose.Schema({ 
    
    clgShortName:{
        type:String,
        required:[true,"Please enter college short form"],
        unique:[true,"clgShortName : This college is aready register"] 
    },
    clgName:{
        type:String,
        required:[true,"Please enter college name"],
        unique:[true,"clgName : This college is aready register"] 
    },
    clgCode:{
        type:String,
        required:true,
        unique:[true,"college code is alredy taken"]
    },  
    courses:{
        type:Array,
        required:true, 
    }, 
    years:{
        type:Array,
        required:true, 
    }, 
    departments:{
        type:Array,
        required:true, 
    },  
    metaData:{
        type:Object,
        required:true
    }
    

})


module.exports = mongoose.model('college', registerCollegeModel)

