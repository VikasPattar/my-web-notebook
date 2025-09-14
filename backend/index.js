const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const port = 5000
const connectDB = require('./db')
require('dotenv').config();


connectDB()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/users/auth', require('./routes/auth'))
app.use('/users/notes', require('./routes/notes'))

app.listen(port, ()=>{
    console.log(`app is running on the port ${port}`)
})