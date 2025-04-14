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
const profileRouter = require('./routes/profile.routes')
const healthRoute = require('./routes/health.route')

app.use(express.json())
app.use(cookieParser())
applySecurity(app)
app.use(morgan('dev'))
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/profile',profileRouter)
dbConnect();

app.get('/api/test',(req,res) => {
    res.send('Security middlware are working properly !')
})

app.use('/api/v1',healthRoute)


app.listen(PORT,() => {
    logger.info(`Server is started and Listen at Port ${PORT}`)
})

