const mongoose = require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/feane').then(() => console.log('mongodb connected'))
mongoose.connect('mongodb+srv://feane:12312323@cluster0.vuean.mongodb.net/feane').then(() => console.log('mongodb connected'))