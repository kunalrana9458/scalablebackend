const redis = require('../config/redis')
const mongoose = require('mongoose')

// function to check redis status
const checkRedis = async() => {
    return new Promise((resolve,reject) => {
        redis.ping((err,result) => {
            if(err) return reject("Redis error")
            return resolve('Redis is Running')
        })
    })
}

// function to check the status of the mongodb database
const checkMongoDb = async() => {
    try {
        await mongoose.connection.db.admin().ping() // ping mongoDB
        return 'MongoDB is Runnig'
    } catch (error) {
        throw new Error('MongoDB error')   
    }
}

module.exports = {checkMongoDb,checkRedis}