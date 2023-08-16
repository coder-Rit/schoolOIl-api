const mongoose = require('mongoose')

const Time = ()=>new Date().getTime()

const lectureSchema = new mongoose.Schema({ 
    type:{
        type:String,
        default:'lecture' 
    },
    batch:{
        type:String,
        required:[true,"Please select the batch"] 

    },
    subject:{
        type:String,
        required:[true,"Please select the subject"] 
    },
    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "faculty"
    },
    divisionID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "division"
    },
    // coordinates:{
    //     lat:{
    //         type:Number,
    //         required:true,

    //     },lng:{
    //         type:Numb`er,
    //         required:true 
    //     },
    //     elevation:{
    //         type:Number,
    //         default:"" 
    //     }
    // },
    faculty:{
        type:String,
        required:[true,"Select faculty name"],
    },
    timeStamp:{
        type:Number,
        require:true
    },
    activationStatus:{
        type:Boolean,
        required:true
    },
    duplicated:{
        type:Boolean,
        default:false,
    },
    // range:{
    //     type:Number,
    //     required:true,
    // },
    presentStudents:{
        type:Array,
        default:[]
    }
    

})


module.exports = mongoose.model('lecture', lectureSchema)

