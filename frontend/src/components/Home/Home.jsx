import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import About from '../About/About'
import Book from '../Book/Book'
import Footer from '../Footer/Footer'
import Review from '../Review/Review'

const Home = () => {
    return (
        <div>
            <Header />
            <Menu />
            <About />
            <Book />
            <Review />
            <Footer />

        </div>
    )
}

export default Home
