import React from 'react'
import './Profile.css'
import { FaArrowLeft } from "react-icons/fa";

const Profile = () => {
  return (
    <div>
      <div className="profile">
        <button><a href="/account"><FaArrowLeft />go back</a></button>
        <br />

        <h1>Profile</h1>
        <form className="profile-container">
          <input type="text" name="name" placeholder='Full Name' />
          <input type="tel" name="mobile" placeholder='Mobile' />
          <input type="email" name="email" placeholder='Email' />
          <input type="date" name="date" placeholder='Date Of Birth' />
          <input type="text" name="address" placeholder='Address' />
          <button>send</button>

        </form>
      </div>
    </div>
  )
}

export default Profile
