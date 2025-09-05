const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    title :{
        type : String,
        required : true,
        nullable : false,
        unique : true
    },
    description : {
        type : String,
        required : true
    },
    tag : {
        type : String
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    }

})

let Note = mongoose.model('note', noteSchema)

module.exports = Note;