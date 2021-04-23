const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    fullName: {
        type:String,
        required:True
    },
    username: {
        type:String,
        required:True
    },
    email: {
        type:String,
        required: True
    },
    password:{
        type:String,
        required: True
    },
    date:{
        type:Date,
        default:Dtae.now
    }
})

module.exports = mongoose.model('mytable', signUpTemplate)