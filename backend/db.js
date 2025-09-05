const mongoose = require('mongoose')

const connect = ()=>{
    mongoose.connect('mongodb://localhost:27017/practice')
    console.log('connected to mongoDB')
}

module.exports = connect