const jwt = require("jsonwebtoken");

require('dotenv').config();

module.exports = (req, res, next) => {
    let token = req.headers['token']
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.log(token)
            res.status(401).json({status:"unauthorized"})
        }else {
            let email = decoded['data']
            console.log(email);
            req.headers.email=email
            next();
        }
    })
}