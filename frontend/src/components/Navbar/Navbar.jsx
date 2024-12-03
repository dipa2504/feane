import React, { useContext } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { ManiCont } from '../../App';

const Navbar = () => {
    // let { showCart, user, cartArr, LogoutHandler } = useContext(ManiCont);
    let { user, cartArr, LogoutHandler } = useContext(ManiCont);


    return (
        <div>
            <nav>
                <div className="logo">
                    <h1><NavLink to="/">Feane</NavLink></h1>
                </div>
                <ul className='menu'>
                    <li><NavLink to="/" end activeclassname="active">home</NavLink></li>
                    <li><NavLink to="/menu" activeclassname="active">menu</NavLink></li>
                    <li><NavLink to="/about" activeclassname="active">about</NavLink></li>
                    <li><NavLink to="/book" activeclassname="active">book table</NavLink></li>
                </ul>

                <div className="icons">
                    <ul>
                        {
                            user.isAuth ? <li><NavLink to="/account" activeclassname="active"><FaUser /></NavLink></li> : ''
                        }
                        {/* <li onClick={showCart}><NavLink to="/cart" activeclassname="active"><FaShoppingCart />{cartArr.length}</NavLink></li> */}
                        <li><NavLink to="/cart" activeclassname="active"><FaShoppingCart />{cartArr.length}</NavLink></li>
                        <li><FaSearch /></li>
                        {
                            user.isAuth ? <button onClick={LogoutHandler}>Log out</button> : <button><NavLink to="/login">Login</NavLink></button>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
