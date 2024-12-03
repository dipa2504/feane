import React, { useContext } from 'react'
import { pizza_list } from '../../assets/assets'
import {FaShoppingCart} from 'react-icons/fa'
import { ManiCont } from '../../App'

const Pizza = () => {
    
    let {AddToCart} = useContext(ManiCont)
  return (
    <div className="foods">
                {
                    pizza_list.map((food) => {
                        return (
                            <div className="box" key={food.id}>
                                <div className="img">
                                    <img src={food.img} alt="food" />
                                </div>
                                <div className="title">
                                    <h3>{food.title}</h3>
                                    <p>{food.description}</p>
                                </div>
                                <div className="price">
                                    <p>${food.price}</p>
                                    <button onClick={() => AddToCart(food.id)}><FaShoppingCart /></button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
  )
}

export default Pizza
