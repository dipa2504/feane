import React, { useContext, useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { FaArrowLeft } from "react-icons/fa";
import { ManiCont } from '../../App';

const Login = () => {
    let { getAuthDetails } = useContext(ManiCont)
    let [user, setUser] = useState({
        mobile: '', email: '', password: ''});
    let navigate = useNavigate();

    const UserLogin = async (x) => {
        x.preventDefault();

        try {
            const result = await axios.post('http://localhost:1000/login', user)
            
            if (result.data.success) {
                let msg = 'Hi ' + result.data.user.name + ' you are now logged in!'
                alert(msg)
                localStorage.setItem('user', JSON.stringify({ ...result.data.user, isAuth: true }))
                getAuthDetails()
                navigate('/')
            } else {
                // If user doesn't exist, navigate to register page
            if (result.data.msg === 'You are not registered yet, go back to register') {
                navigate('/register');
                alert(result.data.msg);
            } else {
                // Display alert if password is wrong, but stay on login page
                alert(result.data.msg);
            }
            }
        } catch (error) {
            console.error("Error logging in:", error)
            alert('Login failed. Please try again.')
        }
    }

    // const handleForgotPassword = () => {
    //     console.log('Forgot password clicked');
    // };

    // const handleForgotPassword = async () => {
    //     console.log('Forgot password clicked')
        
    //     const email = prompt("Enter your email to reset your password");
    //     if (email) {
    //         try {
    //             const response = await axios.post('http://localhost:1000/forgot-password', { email });
    //             alert(response.data.msg);
    //         } catch (error) {
    //             alert('Error. Please try again.');
    //         }
    //     } else {
    //         alert('Email is required');
    //     }
    // };
    

    return (
        <div className="login">
            <div className="login2">
                <div className="wrapper">
                    <form className="form-box login" onSubmit={UserLogin}>
                        <h1>Login</h1>

                        <div className="input-box">
                            <input onChange={(x) => setUser({ ...user, [x.target.name]: x.target.value })} type="text" name="mobile" placeholder='Mobile or email' required />
                        </div>

                        <div className="input-box">
                            <input onChange={(x) => setUser({ ...user, [x.target.name]: x.target.value })} type="password" name="password" placeholder='Password' required />
                        </div>

                        <div className="remember-forgot">
                            <label><input type="checkbox" required />
                                Remember me</label>
                            {/* <a href="#" onClick={handleForgotPassword}>Forgot Password</a> */}
                        </div>

                        <button type="submit">Login</button>

                        <div className="register-link">
                            <p>Don't have an account? <a href="/register">Register</a></p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
