import React, { useContext } from 'react'
import { burger_list } from '../../assets/assets'
import {FaShoppingCart} from 'react-icons/fa'
import { ManiCont } from '../../App'
const Burger = () => {

    let {AddToCart} = useContext(ManiCont)
  return (
    <div className="foods">
                { 
                    burger_list.map((food) => {
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

export default Burger
