const winston = require("winston")

const logger = winston.createLogger({
    level:"info",
    format:winston.format.combine(
        winston.format.timestamp(),
        winston.format.prettyPrint()
    ),
    transports:[
        new winston.transports.Console(), // show in terminal
        new winston.transports.File({filename:"logs/error.log",level:"error"}),
        new winston.transports.File({filename:"logs/combined.log"})
    ]
})

module.exports = logger