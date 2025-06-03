const winston = require("winston")

const logger = winston.createLogger({
    level:"info",
    format:winston.format.combine(
        winston.format.timestamp(),
        winston.format.prettyPrint()
    ),
    transports:[
        new winston.transports.Console(), // show in terminal
        new winston.transports.File({filename:"logs/error.log",level:"error"}), // set file name in which all error are logged
        new winston.transports.File({filename:"logs/combined.log"}) // files in which all logged are saved
    ]
})

module.exports = logger