import React from 'react'
import './Footer.css'
import { FaLocationDot } from "react-icons/fa6"
import { IoCall } from "react-icons/io5"
import { IoIosMail } from "react-icons/io"
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaPinterest } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer'>
      <footer>

        <div className="footer1">
          <h2>Contact Us</h2>
          <p><a href=""><FaLocationDot /> Location</a></p>
          <p><a href="tel:+91 1234567890"><IoCall /> +91 1234567890</a></p>
          <p><a href="mailto:demo@gmail.com"><IoIosMail /> demo@gmail.com</a></p>
        </div>

        <div className="footer1">
          <h2>Feane</h2>
          <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
          <br />
          <div className="icons">
            <p><FaFacebookF /></p>
            <p><FaTwitter /></p>
            <p><FaLinkedinIn /></p>
            <p><FaInstagram /></p>
            <p><FaPinterest /></p>
          </div>
        </div>

        <div className="footer1">
          <h2>Opening Hours</h2>
          <p>Everyday</p>
          <p>10.00AM - 10.00PM</p>
        </div>
      </footer>

      <div className="footer2">
        <p>© 2024 All Rights Reserved By Free Html Templates</p>
        <p>© Distributed By ThemeWagon</p>
      </div>

    </div>
  )
}

export default Footer
