const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY; 
// const SECRET = "vikas";

const fetchuser = (req, res, next) => {
    let token = req.headers['auth-token'];

    if (!token) {
        res.send({message : 'Please login again'})
    }

    try {
        let data = jwt.verify(token, SECRET_KEY)

        if (!data) {
            res.send({message : 'token is not verified'})
        }

        req.user = data;

        next();
    } catch (error) {
        res.send({error : error.message})
    }
}

module.exports = fetchuser;