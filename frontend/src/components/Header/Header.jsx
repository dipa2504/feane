import React from 'react';
import './Header.css';
import { FaShoppingCart } from "react-icons/fa";
import { assets } from '../../assets/assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Header = () => {
    return (
        <>
            <div className="header-bg">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="header-slider">
                            <h1>Fast Food Restaurant</h1>
                            <h2>
                                Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                            </h2>
                            <button>Order Online</button>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="header-slider">
                            <h1>Fast Food Restaurant</h1>
                            <h2>
                                Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                            </h2>
                            <button>Order Online</button>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="header-slider">
                            <h1>Fast Food Restaurant</h1>
                            <h2>
                                Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                            </h2>
                            <button>Order Online</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="offer">
                <div className="offer-container">
                    <div className="offer-box">
                        <div className="img">
                            <img src={assets.order1} alt="offer1" />
                        </div>
                        <div className="offer-details">
                            <h2>Tasty Thursdays</h2>
                            <h2><span>20%</span> off</h2>
                            <button>Order Now <FaShoppingCart /></button>
                        </div>
                    </div>

                    <div className="offer-box">
                        <div className="img">
                            <img src={assets.order2} alt="offer2" />
                        </div>
                        <div className="offer-details">
                            <h2>Pizza Days</h2>
                            <h2><span>15%</span> off</h2>
                            <button>Order Now <FaShoppingCart /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
