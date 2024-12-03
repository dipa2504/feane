import './Menu.css'
import { useContext, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { foods_list } from '../../assets/assets';
import { ManiCont } from '../../App';

const Menu = () => {
    let {AddToCart} = useContext(ManiCont)
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Filter foods based on the selected category
    const filteredFoods = selectedCategory === 'All'
        ? foods_list
        : foods_list.filter(food => food.category === selectedCategory);

    return (
        <div className="menu-page">
            <h1>Our Menu</h1>

            <div className="menu">
                <ul>
                    <li><button onClick={() => setSelectedCategory('All')}>All</button></li>
                    <li><button onClick={() => setSelectedCategory('Burger')}>Burger</button></li>
                    <li><button onClick={() => setSelectedCategory('Pizza')}>Pizza</button></li>
                    <li><button onClick={() => setSelectedCategory('Pasta')}>Pasta</button></li>
                    <li><button onClick={() => setSelectedCategory('Fries')}>Fries</button></li>
                </ul>
            </div>

            <div className="foods">
                {filteredFoods.map(food => (
                    <div className="box" key={food.id}>
                        <div className="img">
                            <img src={food.img} alt={food.title} />
                        </div>
                        <div className="title">
                            <h3>{food.title}</h3>
                            <p>{food.description}</p>
                        </div>
                        <div className="price">
                            <p>${food.price}</p>
                            <button onClick={() => AddToCart(food.id)}><FaShoppingCart /></button>
                        </div>
                    </div>
                ))}
            </div>

            <button>View More</button>
        </div>
    );
}

export default Menu;
