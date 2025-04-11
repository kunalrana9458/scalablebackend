// CONNECTION TO DATABASE
const mongoose = require('mongoose')
const {MONGODB_URL} = require("./config")
require("dotenv").config()


const connectDB = async() => {
   try {
    const conn = mongoose.connect(MONGODB_URL)
    console.log("Database Connection Successfull")
   } catch (error) {
    console.log("Error in Database Connection:",error)
   }
}

module.exports = connectDB