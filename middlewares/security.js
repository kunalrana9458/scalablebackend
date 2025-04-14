const helmet = require('helmet')
const cors = require('cors')
const rateLimit = require('express-rate-limit')

const applySecurity = (app) => {
    app.use(helmet())
    app.use(cors())
    app.use(rateLimit({
        windowMs:15*30*1000,
        max:10,
        message:"Too many requests, please Try again later"
    }))
}

module.exports = applySecurity