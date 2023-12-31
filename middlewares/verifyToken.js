const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
    
        const bearerToken = req.headers.authorization;
        if (!bearerToken) {
            return res.json({
                success: true,
                message: "Error, token not provided"
            })
        }
        const token = bearerToken.split(" ")[1];
        const decoded = jwt.verify(token, 'secret');
        req.userId = decoded.userId;
        req.roleId = decoded.roleId;
        next();

        } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Invalid token",
            error: error
        })
    }
}

module.exports = auth;