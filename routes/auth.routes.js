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
        message:"This is a protected route"
    })
})

module.exports = router