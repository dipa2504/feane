import React, { useState } from 'react'
import './Order.css'
import { useNavigate } from 'react-router-dom'

const Order = () => {

    let [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    })

    let subtotal = 100
    let shippingcharge = 10
    let navigate =useNavigate()

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    // const onSubmitHandler = (e) => {
    //     e.preventDefault()
    //     // Perform form submission actions (e.g., send data to the server)
    //     console.log(data)
    // }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

       // Check if user is logged in
       const user = JSON.parse(localStorage.getItem('user'));
       if (!user || !user.isAuth) {
           alert('Please log in first to proceed with the order.');
           navigate('/login'); // Redirect to login page
           return; // Prevent order from proceeding
       }

        console.log(data)
    
        try {
          const orderData = {
            ...data,
            subtotal,
            shippingCharge: shippingcharge, 
            total: subtotal + shippingcharge
          };
    
          const response = await fetch('http://localhost:1000/place-order', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
          });
    
          const result = await response.json();
    
          if (result.success) {
            alert('Order placed successfully!');
            setData({
              firstName: '',
              lastName: '',
              email: '',
              street: '',
              city: '',
              state: '',
              zipcode: '',
              country: '',
              phone: ''
            });
          } else {
            alert('Failed to place order: ' + result.msg);
          }
        } catch (error) {
          console.error('Error placing order:', error);
          alert('Error placing order. Please try again later.');
        }
    };
  
    
    return (
        <div>
            <form className='place-order' onSubmit={onSubmitHandler}>
                <div className="place-order-left">
                    <p className="title">Delivery Information</p>
                    <div className="multi-fields">
                        <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name' required />
                        <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name' required />
                    </div>

                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email Adress' required />
                    <input name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' required />

                    <div className="multi-fields">
                        <input name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' required />
                        <input name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' required />
                    </div>

                    <div className="multi-fields">
                        <input name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip Code' required />
                        <input name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' required />
                    </div>
                    
                    <input name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' required />

                </div>
                <div className="place-order-right">
                    <div className="cart-total">
                        <h2>Cart Totals</h2>
                        <div>
                            <div className="cart-total-details">
                                <p>Subtotal</p>
                                <p>${subtotal}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <p> Delivery Fee</p>
                                <p>${shippingcharge}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <p>Total</p>
                                <p>${subtotal + shippingcharge}</p>
                            </div>
                        </div>
                        <button type='submit'>PROCEED TO PAYMENT</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Order
