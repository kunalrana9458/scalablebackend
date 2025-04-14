const express = require('express')
const router = express.Router()
const {checkMongoDb,checkRedis} = require('../utils/healthCheck')

router.get('/health',async (req,res) => {

    const redisStatus = await checkRedis()
    const mongoStatus = await checkMongoDb()

    res.status(200).json({
        status:"OK",
        uptime: process.uptime(),
        timestamp: Date.now(),
        redis:redisStatus,
        mongoDb:mongoStatus
    })
})

module.exports = router