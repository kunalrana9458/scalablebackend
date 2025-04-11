// CONNECTION TO DATABASE
const mongoose = require('mongoose')
require("dotenv").config()


const connectDB = async() => {
   try {
    const conn = mongoose.connect(process.env.MONGODB_URL)
    console.log("Database Connection Successfull")
   } catch (error) {
    console.log("Error in Database Connection:",error)
   }
}

module.exports = connectDB