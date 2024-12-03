import { createContext, useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'
import About from './components/About/About'
import Book from './components/Book/Book'
import Review from './components/Review/Review'
import Cart from './components/Cart/Cart'
import { foods_list } from './assets/assets'
import Order from './components/Order/Order'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Account from './My Account/Account/Account'
import Profile from './My Account/Profile/Profile'
import Settings from './My Account/Settings/Settings'
import AddReview from './My Account/AddReview/AddReview'
import axios from 'axios'
import ResetPassword from './components/ResetPassword/ResetPassword'


const url = process.env.REACT_APP_API_URL;


export const ManiCont = createContext()

function App() {
  let [user, setUser] = useState({ isAuth: false })
  let [foods, setFoods] = useState(foods_list)
  let [cartArr, setcartArr] = useState([])
  let [allFoods, setAllFoods] = useState([...foods])
  let [reviews, setReviews] = useState([])
  // let [cart, setCart] = useState(false)

  let getAuthDetails = () => {
    let user = JSON.parse(localStorage.getItem('user')) || { isAuth: false }
    console.log(user)
    setUser(user)
  }
  useEffect(() => {
    getAuthDetails()
  }, [])

  let LogoutHandler = () => {
    localStorage.removeItem('user')

    getAuthDetails()
  }

  // const showCart = () => {
  //   setCart(!cart)
  // }

  const AddToCart = (id) => {
    let obj = allFoods.find((x) => x.id == id)
    let existing = cartArr.find((x) => x.id == id)

    if (existing) {
      alert('existed already')
    }
    else {
      // setcartArr([...cartArr, obj])
      // setCart(true)
      setcartArr([...cartArr, { ...obj, qty: 1 }]);       
    }
  }

  const remove = (id) => {
    setcartArr(cartArr.filter((x) => x.id != id))
  }



  const GetAllReviews = async () => {
    try {
      const response = await axios.get('http://localhost:1000/reviews')
      setReviews(response.data)
    } catch (error) {
      console.error('Error fetching reviews', error)
    }
  }

  useEffect(() => {
    GetAllReviews()
  }, [])


  return (
    <>
      {/* <ManiCont.Provider value={{ getAuthDetails, foods, user, LogoutHandler, showCart, cartArr, AddToCart, remove, setcartArr, reviews, GetAllReviews, cart, setCart }}> */}
      <ManiCont.Provider value={{ getAuthDetails, foods, user, LogoutHandler, cartArr, AddToCart, remove, setcartArr, reviews, GetAllReviews }}>
        
        <Navbar />
        {/* <Cart /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/book' element={<Book />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/review' element={<Review />} />
          <Route path='/order' element={<Order />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/reset-password' element={<ResetPassword />} /> */}
          <Route path='/reset-password/:token' element={<ResetPassword />} />
          <Route path='/account' element={<Account />} />
          <Route path='/addreview' element={<AddReview />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />

        </Routes>
      </ManiCont.Provider>

    </>
  )
}

export default App
