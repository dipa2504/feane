import React, { useState } from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

    let [user, setUser] = useState({
        name: '', mobile: '', email: '', password: '', date: '', address: '', gender: ''
    })

    let navigate = useNavigate()

    const UserRegister = async (x) => {
        x.preventDefault()

        try {
            let result = await axios.post('http://localhost:1000/register', user)
            if (result.data.success) {
                let msg = 'Hello ' + result.data.user.name + ' you are now registered!'
                alert(msg)
                navigate('/login')
            } else {
                alert(result.data.msg)
            }
        } catch (error) {
            console.error("Error during registration:", error)
            alert('Registration failed. Please try again.')
        }
    }

  return (
    <div className="register">
                <div className="register2">
                    <div className="wrapper">
                        <form className="form-box register" onSubmit={UserRegister}>
                            <h1>Register</h1>
                            <div className="input-box">
                                <input onChange={(x) => setUser({ ...user, [x.target.name]: x.target.value })} type="text" name="name" placeholder='Full Name' required />
                            </div>

                            <div className="input-box">
                                <input onChange={(x) => setUser({ ...user, [x.target.name]: x.target.value })} type="tel" name="mobile" placeholder='Mobile' pattern='[0-9]{10}' required />
                            </div>

                            <div className="input-box">
                                <input onChange={(x) => setUser({ ...user, [x.target.name]: x.target.value })} type="email" name="email" placeholder='Email' />
                            </div>

                            <div className="input-box">
                                <input onChange={(x) => setUser({ ...user, [x.target.name]: x.target.value })} type="password" name="password" placeholder='Password' required />
                            </div>

                            <div className="input-box">
                                <input onChange={(x) => setUser({ ...user, [x.target.name]: x.target.value })} type="date" name="date" placeholder='Date Of Birth' required />
                            </div>

                            <div className="input-box">
                                <input onChange={(x) => setUser({ ...user, [x.target.name]: x.target.value })} type="text" name="address" placeholder='Address' required />
                            </div>


                            <div className="gender-dropdown" required>
                                <select id="gender" name="gender" onChange={(x) => setUser({ ...user, gender: x.target.value })}>

                                    <option value="" disabled selected>Select Gender</option>
                                    <option value="male" >Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>


                            <div className="remember-forgot">
                                <label><input type="checkbox" required />
                                    I agree to the terms & conditions
                                </label>
                            </div>

                            <div className="register-button">
                                <button type="submit"  >Register</button>
                                <button type="reset" value={'Reset'} >Reset</button>
                            </div>



                            <div className="register-link">
                                <p>Already have an account? <a href="/login">Login</a></p>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
  )
}

export default Register
