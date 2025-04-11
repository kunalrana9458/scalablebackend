const {User} = require('../models/index')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

require('dotenv').config()

const generateToken = (user) => {
    // creation of payload for the jwt token
    const payload = {
        email:user.email,
        id:user._id,
        role:user.accountType,
    }
    const token = jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn:'1d',
    })
    return token;
}

exports.register = async(req,res) => {
    try {
        // fetch all data from the req body
        const {name,email,password} = req.body;
        const userExists = await User.findOne({email})
        if(userExists){
            return res.status(400).json({
                success:false,
                message:"User Already Exists"
            })
        }
        // creation of user and save its entry into the database
        const user = await User.create({name,email,password})
        return res.status(201).json({
            success:true,
            message:"User Created Successfully",
        })
    } catch (err) {   
        return res.status(500).json({
            message:'Server Error',
            error:err.message
        })   
    }
}

exports.login = async (req,res) => {
    try {
        // fetch the data from the req body
        const {email,password} = req.body
        // find user into the db
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Invalid Credentials"
            })
        }
        // compare the password with the hashed password
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({
                success:false,
                message:"Password is Incorrect"
            })
        }
         // generate jwt token here
         const token = generateToken(user)
         console.log("Token is:",token)

         //pass jwt token to the cokkie
         const options = {
             expires:new Date(Date.now()+3*24*60*60*1000),
             httpOnly:true
         }
         res.cookie("token",token,options).status(200).json({
             sucess:true,
             token,
             message:"Login Successfull"
         })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Server Error",
            error:error.message
        })
    }
}