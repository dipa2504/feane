import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { ManiCont } from '../../App'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  // let { cartArr, remove, setcartArr, cart, setCart } = useContext(ManiCont)
  let { cartArr, remove, setcartArr } = useContext(ManiCont)
  let [subtotal, setsubTotal] = useState(0)
  let [shippingcharge, setshippingCharge] = useState(50)

  const navigate = useNavigate()

  useEffect(() => {
    let total = cartArr.reduce((x, y) => x + (y.price * y.qty), 0)
    setsubTotal(total)
  }, [cartArr])

  const qtyInc = (id) => {
    let obj = cartArr.find((x) => x.id == id)
    obj.qty++
    setcartArr([...cartArr])

    // setsubTotal(subtotal + arr.find((x) => x.id == id).price)
    setsubTotal(prevSubtotal => prevSubtotal + obj.price)
  }

  const qtyDec = (id) => {
    let obj = cartArr.find((x) => x.id == id)
    if (obj.qty > 1) {
      obj.qty--
      setcartArr([...cartArr])
      
      setsubTotal(prevSubtotal => prevSubtotal - obj.price) // Update subtotal after decreasing the quantity
    } else {
      alert('Minimum 1 quantity is required')
    }
  }


  // const qtyDec = (id) => {
  //   let obj = cartArr.find((x) => x.id == id)
  //   if (obj.qty <= 1) {
  //     alert('minimum 1 quantity is required')
  //   }
  //   else
  //     obj.qty--
  //   setcartArr([...cartArr])

  //   setsubTotal(subtotal - arr.find((x) => x.id == id).price)
  // }

  // const close = () => {
  //   setCart(!cart)
  // } 

  const clear = () => {
    setcartArr([])
    setsubTotal(0)
    // setCart(false)
  }


  return (
    // <div className="cart" style={{ right: cart ? "0" : "100%" }}>
      <div className="cart">

      <div className="close">
        {/* <button onClick={close}>X</button> */}
        <button onClick={clear}>Clear All</button>
      </div>

      {
        cartArr.length == '0' ? <h1>Your cart is empty</h1>
          :
          <div>
            {
              cartArr.map((x) => {
                return (
                  <div className="container" key={x.id}>
                    <div className="box">
                      <div className="img">
                        <img src={x.img} alt="food" />
                      </div>
                      <div className="foods">
                        <h2>{x.title}</h2>
                        <p>{x.description}</p>
                      </div>


                      <div className="flex">

                        <div className="price">
                          <h2>${x.price * x.qty}</h2>
                        </div>

                        <div className="qty">
                          <button onClick={() => qtyDec(x.id)}>-</button>
                          <p>{x.qty}</p>
                          <button onClick={() => qtyInc(x.id)}>+</button>
                        </div>

                        <div className="remove">
                          <button onClick={() => remove(x.id)}>Remove</button>
                        </div>
                      </div>
                    </div>

                  </div>
                )
              })
            }
          </div>
      }

      <div className="cart-total">
        <div className='cart-flex1'>
          <h2>Cart Totals</h2>
          <br />
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
          <br /> <br />
          <button onClick={() => navigate('/order')} type='submit'>PROCEED TO PAYMENT</button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Promo Code' />
              <button>Submit</button>
            </div>
          </div>
        </div>


      </div>


    </div>

  )
}

export default Cart
