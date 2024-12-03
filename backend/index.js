const express = require('express')
const app = express()
app.use(express.json())

const cors = require('cors')
const User = require('./models/User')
const Food = require('./models/Food')
const Review = require('./models/Review')
const Order = require('./models/Order')

app.use(cors({origin: 'http://localhost:5173'}))
require('./mongoose')

app.listen(1000, () => {
    console.log('app started on 1k')
})

app.get('/', (req, res) => {
    res.send('hi')
})

app.post('/register', async (req, res) => {
    const { name, email, mobile, password, date, address, gender } = req.body
    
    try {
        let existingUser = await User.findOne({ email: email })
        if (existingUser) {
            return res.send({ success: false, msg: 'User already registered with this email.' })
        }

        let data = new User({ name, email, mobile, password, date, address, gender })
        let result = await data.save()

        if (result) {
            console.log('Register done!')
            res.send({ success: true, msg: 'Register done!', user: result })
        } else {
            console.log('Error in registration')
            res.send({ success: false, msg: 'Registration not completed!' })
        }
    } catch (error) {
        console.error(error)
        res.send({ success: false, msg: 'Server error' })
    }
})


app.post('/login', async (req, res) => {
    const identifier = req.body.mobile
    try {
        let existingUser = {}
        
        if (isNaN(identifier)) {
            existingUser = await User.findOne({ email: identifier })
        } else {
            existingUser = await User.findOne({ mobile: identifier })
        }   

        if (!existingUser) {
            return res.send({ success: false, msg: 'You are not registered yet, go back to register' })
        }

        if (existingUser.password !== req.body.password) {
            return res.send({ success: false, msg: 'Wrong password' })
        }

        res.send({ success: true, msg: 'User logged in', user: existingUser })
    } catch (e) {
        console.log(e)
        res.send({ success: false, msg: 'Server error' })
    }
})


const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

// Email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'deepa.worksol@gmail.com',
        //**/ pass: 'qvze ajia fpmq hzya',**//
        pass: 'hmwq rnga redo kjse', 
    },
});

// Generate token and send reset email
app.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.send({ success: false, msg: 'User not found' });
        }

        const token = jwt.sign({ id: user._id }, 'your-secret-key', { expiresIn: '1h' });

        // Email content
        const resetLink = `http://localhost:3000/reset-password/${token}`;
        const mailOptions = {
            from: 'deepa.worksol@gmail.com',
            to: email,
            subject: 'Password Reset',
            html: `
                <p>Hello ${user.name},</p>
                <p>Click the link below to reset your password:</p>
                <a href="${resetLink}" style="color: blue;">Reset Password</a>
                <p>The link is valid for 1 hour.</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        res.send({ success: true, msg: 'Password reset email sent!' });
    } catch (error) {
        console.error(error);
        res.send({ success: false, msg: 'Error sending email' });
    }
});

// Reset password endpoint
app.post('/reset-password', async (req, res) => {
    const { token, newPassword } = req.body;
  
    try {
      console.log('Received token:', token);
      console.log('Received newPassword:', newPassword);
  
      // Verify the token
      const decoded = jwt.verify(token, 'your-secret-key');
      console.log('Decoded token:', decoded);
  
      const user = await User.findById(decoded.id);
      if (!user) {
        return res.send({ success: false, msg: 'Invalid or expired token' });
      }
  
      console.log('User found:', user);
  
      // Update the password (no hashing, storing plain text)
      user.password = newPassword;
      await user.save();
  
      res.send({ success: true, msg: 'Password reset successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.send({ success: false, msg: 'Error resetting password' });
    }
  });
  





app.post('/reviews', async (req, res) => {
    const data = new Review(req.body)
    try {
        const result = await data.save()
        res.send({ success: true, msg: 'Review added', review: result })
    } catch (error) {
        console.error(error)
        res.send({ success: false, msg: 'Failed to add review' })
    }
})



app.get('/reviews', async (req, res) => {
    try {
        const reviews = await Review.find()
        res.json(reviews)
    } catch (error) {
        console.error(error)
        res.send({ success: false, msg: 'Failed to fetch reviews' })
    }
})



app.post('/add/food', async (req, res) => {
    console.log(req.body)
    let data = Food({
        ...req.body
    })

    let result = await data.save()
    if (result) {
        res.send('food added')
    }
})


app.get('/getallfoods', async (req, res) => {
    let foods = await Food.find()

    res.send(foods)
})



app.delete('/delete/food/:id', async (req, res) => {
    let p = await Food.findByIdAndDelete(req.params.id)
    res.send('food deleted successfully')
})

app.put('/update/food', async (req, res) => {
    let result = await Food.findByIdAndUpdate(req.body._id, { title: req.body.title, img: req.body.img, price: req.body.price, description: req.body.description })
    res.send('product udated')
})


app.post('/place-order', async (req, res) => {
    console.log(req.body); // Log the received data to check the structure
    try {
        const { firstName, lastName, email, street, city, state, zipcode, country, phone, subtotal, shippingCharge } = req.body;
        const total = subtotal + shippingCharge;

        const newOrder = new Order({
            firstName,
            lastName,
            email,
            street,
            city,
            state,
            zipcode,
            country,
            phone,
            subtotal,
            shippingCharge,
            total
        });

        const result = await newOrder.save();
        res.send({ success: true, msg: 'Order placed successfully', order: result });
    } catch (error) {
        console.error(error); // Log the error to check for issues
        res.send({ success: false, msg: 'Error placing order' });
    }
});


