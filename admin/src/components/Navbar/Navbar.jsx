import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo"><h1>Logo</h1></div>
      <img src={assets.profile_image} alt="" className="profile" />
    </div>
  )
}

export default Navbar
