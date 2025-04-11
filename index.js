const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
require('dotenv').config();
const dbConnect = require('./config/Database')
const authRoutes = require('./routes/auth.routes')
const {applySecurity} = require('./middlewares/index')
const morgan = require('morgan')
const {PORT} = require("./config/config")
const logger = require("./utils/logger")

app.use(express.json())
app.use(cookieParser())
applySecurity(app)
app.use(morgan('dev'))
app.use('/api/v1/auth',authRoutes)
dbConnect();

app.get('/api/test',(req,res) => {
    res.send('Security middlware are working properly !')
})

app.get('/health',(req,res) => {
    res.status(200).json({status:"Server is Healthy"})
})


app.listen(PORT,() => {
    logger.info(`Server is started and Listen at Port ${PORT}`)
})

