import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Edit.css';

const Edit = () => {
  const { id } = useParams();
  const [food, setFood] = useState({
    img: '',
    title: '',
    description: '',
    price: ''
  });

  useEffect(() => {
    const fetchFood = async () => {
      const result = await axios.get(`http://localhost:1000/food/${id}`);
      setFood(result.data);
    };
    fetchFood();
  }, [id]);

  const handleChange = (e) => {
    setFood({ ...food, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:1000/update/food`, { ...food, _id: id });
    alert('Food updated successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="img" value={food.img} onChange={handleChange} placeholder="Image URL" />
      <input type="text" name="title" value={food.title} onChange={handleChange} placeholder="Title" />
      <input type="text" name="description" value={food.description} onChange={handleChange} placeholder="Description" />
      <input type="number" name="price" value={food.price} onChange={handleChange} placeholder="Price" />
      <button type="submit">Update Food</button>
    </form>
  );
};

export default Edit;
