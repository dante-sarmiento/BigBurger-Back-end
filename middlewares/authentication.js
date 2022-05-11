const secret = require('../config/config').secret;
const jwt = require('jsonwebtoken');


const checkAuthentication = (req, res, next)=>{
    const token = req.headers.authorization;

    jwt.verify(token, secret, (error, jwtDecoded)=> {
        if(error) return res.status(403).send({
            ok: false,
            msg: error
        })
        req.user = jwtDecoded;
        next();
    })
}

module.exports = checkAuthentication;
