const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const port = 3001
const connectDB = require('./db')
require('dotenv').config();


connectDB()
app.use(express.json())
app.use(cookieParser())
app.use('/users/auth', require('./routes/auth'))
app.use('/users/notes', require('./routes/notes'))

app.listen(port, ()=>{
    console.log(`app is running on the port ${port}`)
})