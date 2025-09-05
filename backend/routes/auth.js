const express = require('express')
const router = express.Router()
const User = require('../models/userModel')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: '../.env' });
// const SECRET = "vikas"
const fetchuser = require('../middleware/fetchuser')
const SECRET_KEY = process.env.SECRET_KEY;


//create the user POST '/users/auth/createuser'
router.post('/createuser', [
    body('name', "enter valid name").exists().isLength({ min: 3 }),
    body('email', 'enter valid email').isEmail().exists(),
    body('password', 'enter valid password').isLength({ min: 5 })
], async (req, res) => {

    let errors = validationResult(req)

    if (!errors.isEmpty()) {
        res.json({ errors: errors.array() })
    }

    let { name, email, password } = req.body

    try {

        let salt = await bcrypt.genSalt(10)

        let hashed = await bcrypt.hash(password, salt)

        let user = await User.create({
            name, email, password: hashed
        })

        res.send(user)
    } catch (error) {
        res.send(`mongo server error \n${error.message}`)
    }

})

//login user POST '/users/auth/login'
router.post('/login', [
    body('email', "email cannot be empty").exists(),
    body('email', "please enter valid email").isEmail(),
    body('password', "password cannot be empty").exists(),
    body('password', "please enter valid pasword").isLength({ min: 5 })
], async (req, res) => {

    let errors = validationResult(req)

    if (!errors.isEmpty()) {
        res.json({ errors: errors.array() })
    }

    try {
        let { email, password } = req.body;

        let user = await User.findOne({ email })

        if (!user) {
            res.send('user not found')
        }

        let verified = await bcrypt.compare(password, user.password)

        if (!verified) {
            res.send('incorrect password')
        }

        let data = {
            id: user._id
        }

        let token = jwt.sign(data, SECRET_KEY)

        res.cookie('token', token);

        res.json({
            message: 'user logged in successfully'
        })

    } catch (error) {
        res.send('internal server error')
    }
})

//fetch user GET '/users/auth/fetchuser' |  login required
router.get('/fetchuser', fetchuser, async (req, res) => {
    let userId = req.user.id;

    try {
        let user = await User.findOne({ _id: userId }, ['-password']);

        if (!user) {
            res.send('user not found')
        }

        res.json({
            message: 'logged in successfully',
            user
        })

    } catch (error) {
        res.send('internal server error')
    }
})

router.get('/logout', (req, res) => {
    res.cookie('token', '')
    res.json({ message: "logged out successfully" })
})



module.exports = router