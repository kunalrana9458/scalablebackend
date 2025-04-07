const express = require('express')
const app = express()
require('dotenv').config();

app.use(express.json())

app.get('/health',(req,res) => {
    res.status(200).json({status:"Server is Healthy"})
})

const PORT = process.env.PORT || 5000

app.listen(PORT,() => {
    console.log(`Server is Listening at Port Number: ${PORT}`)
})
