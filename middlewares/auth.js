const jwt = require('jsonwebtoken')

exports.auth = async(req,res,next) => {
    try {
        // extract token 
        const token = req.body.token || req.cookies.token || req.header("Authorization")?.replace("Bearer ","");

        // check token fetched successfully or not
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token is Invalid",
            })
        }
        // verify the token 
        try {
            const decode = jwt.verify(token,process.env.JWT_SECRET)
            req.user = decode
        } catch (error) {
            return res.status(401).json({
                success:false,
                message:"Token is Invalid"
            })
        }
        next()
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Server Error",
            error:error.message
        })
    }
}