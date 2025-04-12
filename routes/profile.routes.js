const express = require('express')
const router = express.Router()
const cache = require('../middlewares/cache')
const User = require('../models/User.model')
const redis = require('../config/redis')

router.get('/user/:id',cache,async(req,res) => {
    const user = await User.findById(req.params.id.trim()).select('-password')
    await redis.set(`user:${req.params.id.trim()}`,JSON.stringify(user),'EX',3600)
    res.status(200).json(user)
})

module.exports = router