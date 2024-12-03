import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-img">
          <img src={assets.about_img} alt="about" />
        </div>
        <div className="about-detail">
          <h1>We Are Feane</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
          <button>Read more</button>
        </div>
      </div>

    </div>
  )
}

export default About
