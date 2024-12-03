import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
import { IoIosAddCircleOutline } from "react-icons/io";
import { BiBox } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { RiBox3Line } from "react-icons/ri";


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-options">
                <NavLink to={'/add'} className="sidebar-option">
                    <p><IoIosAddCircleOutline /></p>
                    <p>Add Items</p>
                </NavLink>

                <NavLink to={'/list'} className="sidebar-option">
                    <p><BiBox /></p>
                    <p>List Foods</p>
                </NavLink>

                <NavLink to={'/edit'} className="sidebar-option">
                    <p><FaRegEdit /></p>
                    <p>Edit Food</p>
                </NavLink>

                <NavLink to={'/orders'} className="sidebar-option">
                    <p><RiBox3Line /></p>
                    <p>Orders</p>
                </NavLink>
            </div>

        </div>
    )
}

export default Sidebar
