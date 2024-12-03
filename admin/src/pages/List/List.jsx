import React, { useEffect, useState } from 'react';
import axios from 'axios';

const List = ({ url }) => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const response = await axios.get(`${url}/getallfoods`);
                setFoods(response.data);
            } catch (err) {
                console.error('Error fetching foods', err);
            }
        };
        fetchFoods();
    }, [url]);

    return (
        <div>
            <h2>Food List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {foods.map((food) => (
                        <tr key={food._id}>
                            <td>{food.name}</td>
                            <td>{food.description}</td>
                            <td>{food.price}</td>
                            <td>{food.category}</td>
                            <td><img src={`http://localhost:1000/${food.image}`} alt={food.name} width="50" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;
