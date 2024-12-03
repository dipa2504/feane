const mongoose = require('mongoose')

const FoodSchema = mongoose.Schema({
    img:  { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price:{ type: Number, required: true }
})

const Food = mongoose.model('foods', FoodSchema)

module.exports = Food

