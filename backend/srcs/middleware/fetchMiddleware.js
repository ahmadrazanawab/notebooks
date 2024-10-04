var jwt = require('jsonwebtoken');
var JWT_SECRET = "Ahmadraza@786";

const fetchUser = (req, res,next) => {
    try {
        let token = req.header('auth-token');
        if (!token) {
            return res.status(401).json("Please authenticate using a valid token");
        }
        
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
        
    } catch (error) {
        console.log(error.message);
        res.status(501).json("Please check your authentication token");
    }
}

module.exports = fetchUser;
