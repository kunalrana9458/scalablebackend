const jwt = require('jsonwebtoken')
require("dotenv").config()

exports.auth = async(req,res,next) => {
    try {
        // extract token 
        const token =   req.cookies.token || req.header("Authorization")?.replace("Bearer ","");
        console.log("Token is:",token)
        // check token fetched successfully or not
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token is Invalid",
            })
        }
        // verify the token 
        try {
            const decode = jwt.verify(token,process.env.JWT_SECRET)
            req.user = decode
            console.log("Deocde is:",decode)
        } catch (error) {
            return res.status(401).json({
                success:false,
                message:"Token is Invalid"
            })
        }
        next()
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Server Error",
            error:error.message
        })
    }
}

exports.isUser = async(req,res) => {
    if(req.user.role !== "user"){
        return res.status(403).json({
            success:false,
            message:"Access Denied"
        })
    } 
    return res.status(200).json({
        success:false,
        message:"User protected route"
    })
}

exports.isAdmin = async(req,res) => {
    if(req.user.role !== "admin"){
        return res.status(403).json({
            success:false,
            message:"Access Denied"
        })
    }
    return res.status(200).json({
        success:false,
        message:"Admin Protected route"
    })
}