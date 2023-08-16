const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const validator = require("validator")



const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: [true, "This username is aleady taken"],
        minLength: [6, "Username is too short"],
        maxLength: [14, "Username is too big"],
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: [true, "This email is aleady registerd"],
        required: [true, "Email address is required"],
        validate: [validator.isEmail, "Please Enter a valid Email"]

    },
    password: {
        type: String,
        required: true,
        select: false,
        minLength: [6, "Password is too short"],
        maxLength: [12, "Password is too big"],
    },
    role:{
        type: String,
        default:"teacher",
    }, 
      
    clgShortName:{
        type: String, 
        default:""
    },
    status:{
        type:String,
        default:"unBand"
    },
    settings:{
 type:Object,
 default:{
    theme:"light_theme"
 }
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
})

// converting password into hash
userSchema.pre("save", async function () {
    if (!this.isModified('password')) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

// compairing password
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

//josn web token genrator
userSchema.methods.getJWTtoken =  function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECREATE, {
        expiresIn: process.env.JWT_EXPIRE
    })
}

module.exports = mongoose.model('user', userSchema)

