const mongoose = require('mongoose')
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Required"],
    },
    email:{
        type:String,
        required:[true,"Email is Required"]
    },
    password:{
        type:String,
        required:[true,"Password is Required"]
    },
    accountType:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
})

// hash the password before saving into the DB
userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password,10);
    next()
})

const User = mongoose.model('User',userSchema)
module.exports = User