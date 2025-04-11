const express = require('express')
const {register,login} = require('../controllers/index')
const router = express.Router()
const {auth,isAdmin,isUser} = require("../middlewares/index")

router.post('/register',register)
router.post('/login',login)
router.post('/profile',auth,(req,res) => {
    console.log("This is protected route")
    return res.status(200).json({
        success:true,
        message:`Welcome ${req.user.email}`
    })
})
// admin protected route
router.post('/admin-protected',auth,isAdmin,(req,res) => {
    return res.status(200).json({
        success:true,
        message:"Protected route for admin"
    })
})
// user protected route
router.post("/user-protected",auth,isUser,(req,res) => {
    return res.status(200).json({
        success:true,
        message:"Protected route for admin"
    })
})

module.exports = router