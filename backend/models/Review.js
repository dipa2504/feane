const mongoose = require('mongoose')

const ReviewSchema = mongoose.Schema({
    feedback: String,
    img: String,
    name: String,
    view: String
})

const Review = mongoose.model('review', ReviewSchema)

module.exports = Review