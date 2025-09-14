const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY; 
// const SECRET = "vikas";

const fetchuser = (req, res, next) => {
    let token = req.headers['auth-token'];

    if (!token) {
        res.send('Please login again')
    }

    try {
        let data = jwt.verify(token, SECRET_KEY)

        if (!data) {
            res.send('token is not verified')
        }

        req.user = data;

        next();
    } catch (error) {
        res.send(`unable to verify the token\n${error.message}`)
    }
}

module.exports = fetchuser;