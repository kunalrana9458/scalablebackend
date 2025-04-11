const express = require('express')
const {register,login} = require('../controllers/index')
const router = express.Router()
const {auth} = require("../middlewares/index")

router.post('/register',register)
router.post('/login',login)

module.exports = router