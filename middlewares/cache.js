const redis = require('../config/redis')  // redis connection is done in that file 

const cacheMiddleware = async (req, res, next) => {
    const userId = req.params.id.trim();
    try {
        // Check if data exists in Redis
        const cacheData = await redis.get(`user:${userId}.trim()`);
        if (cacheData) {
            // If data exists in cache, return it
            return res.status(200).json(JSON.parse(cacheData));
        }
        next(); // Proceed to database if no cache exists
    } catch (error) {
        console.log("Cache middleware error:", error);
        next(); // Proceed if Redis fails or throws an error
    }
};

module.exports = cacheMiddleware;
