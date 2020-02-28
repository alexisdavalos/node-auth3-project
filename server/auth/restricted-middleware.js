//restricted-middleware.js
const jwt = require("jsonwebtoken"); //npm module

//require the secret.js file configured in previous step
const { jwtSecret } = require("../config/secret.js");

module.exports = (req, res, next) => {
const { authorization } = req.headers;
if (authorization) {
    jwt.verify(authorization, jwtSecret, (err, decodedToken) => {
    if (err) {
        res.status(401).json({ message: "Invalid Credentials" });
    } else {
        req.decodedToken = decodedToken;
        //tokens match = pass to router
        next();
    }
    });
} else {
    res.status(400).json({ message: "No credentials provided" });
    }
};