import React, { useContext } from 'react'
import './Account.css'
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { ManiCont } from '../../App';


const Account = () => {
    let { user } = useContext(ManiCont)
    return (
        <div>

            <div className="account">
                <div className="account-bg">
                </div>

                <div className="account-container">
                    <div className="account-img">
                        <img src={assets.client1} alt="My Account" />
                    </div>

                    <div className="account-self">
                        <h2>{user.name}</h2>
                        <h3>0 followers . 0 following</h3>
                        <h3><FaLocationDot /> Location</h3>
                    </div>
                </div>


                <div className="btn">
                    <button><NavLink to={'/addreview'}>add review</NavLink> </button>
                    <button>add photo</button>
                    <button><NavLink to={'/settings'}>settings</NavLink> </button>
                </div>
            </div>

        </div>
    )
}

export default Account
