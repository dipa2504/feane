const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({

    items: [
        {
            name: String,
            quantity: Number,
            price: Number
        }
      ],
      amount: { type: Number, required: true },
    firstName: String,
    lastName: String,
    email: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
    phone: String,
    subtotal: Number,
    shippingCharge: Number,
    total: Number,
    createdAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Food Processing', 'Out for delivery', 'Delivered'],
        default: 'Food Processing'
      }
},{ timestamps: true });

const Order = mongoose.model('order', OrderSchema)

module.exports = Order
