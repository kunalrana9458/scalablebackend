const joi = require('joi')

const registerSchema = joi.object({
    name:joi.string().min(3).max(30).required(),
    email:joi.string().email().required(),
    password: joi.string().min(6).required(),
    accountType:joi.string().valid('admin','user').required(),
})

module.exports = {registerSchema}