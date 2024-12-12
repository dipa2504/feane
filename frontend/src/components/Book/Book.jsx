import React, { useState } from 'react';
import './Book.css';

const Book = () => {
    const [result, setResult] = useState("");
    const [firstName, setFirstName] = useState(""); // State variable to store first name

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "1490ced9-4208-496a-b617-1556bd47c4de");
        formData.append("subject", `${firstName} sent a message from Feane`); // Include first name in subject

        const response = await fetch("https://api.web3forms.com/submit", {
        // const response = await fetch("http://localhost:1000/book-table", {    
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Booking Successful");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            setFirstName(value);
        }
    };

    return (
        <div className="book">
            <div className='flex-table'>
                <div className='book-container'>
                    <h1>Book A Table</h1>
                    <form onSubmit={onSubmit} onChange={handleChange}>
                        <input type="text" name="name" placeholder='Your Name' required />
                        <input type="tel" name="mobile" placeholder='Phone Number' required />
                        <input type="email" name="email" placeholder='Your Email' />
                        <input type="number" name="number" placeholder='How many Person' min={1} max={12} required />
                        {/* <input type='datetime-local' name="time" required /> */}
                        <input type="date" name="date" required />
                        <input type="time" name="time" required />
                        <button type="submit">BOOK NOW</button>
                    <span>{result}</span>
                    </form>
                </div>
                <div className="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.674390766099!2d72.55926827516492!3d23.035724679164556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e837ae22fe273%3A0xe6c960874031d0f2!2sCODING%20CLOUD%20INSTITUTE%20%7C%20React%20js%2C%20Mern%20stack%2CWeb%20Development%2CData%20Science%2CPython%20Training%20classes%20in%20Ahmedabad!5e0!3m2!1sen!2sin!4v1714554020987!5m2!1sen!2sin" width="600" height="450" style={{ width: '100%', height: '100%' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Book;
