const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    name: String,
    mobile: Number,
    email: String,
    Number: String,
    date: String,
    time: String
})

const Book = mongoose.model('booking', BookSchema)

module.exports = Book

