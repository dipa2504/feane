import React, { useState, useEffect } from 'react';
import './Review.css';
import { review_list } from '../../assets/assets';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Review = () => {
  // Track the current review index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the review every 5 seconds (5000 ms)
  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next review or loop back to the first
      setCurrentIndex((prevIndex) => (prevIndex + 1) % review_list.length);
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Function to go to the next review
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % review_list.length);
  };

  // Function to go to the previous review
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + review_list.length) % review_list.length);
  };

  return (
    <div className="client">
      <h2>What our customers say</h2>

      <div className="client-container">
        <div className="client-box">
          <div className="client-review">
            <p>{review_list[currentIndex].feedback}</p>
            <br />
            <h3>{review_list[currentIndex].name}</h3>
            <p>{review_list[currentIndex].view}</p>
          </div>

          <div className="client-img">
            <img src={review_list[currentIndex].img} alt="Customer" />
          </div>
        </div>
      </div>

      <div className="client-button">
        <button onClick={handlePrev}><FaChevronLeft /></button>
        <button onClick={handleNext}><FaChevronRight /></button>
      </div>
    </div>
  );
};

export default Review;
