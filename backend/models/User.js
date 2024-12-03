const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    password: String,
    date: String,
    address: String,
    gender: String,
    date: { type: Date, default: Date.now }
})

const User = mongoose.model('user', UserSchema)

module.exports = User