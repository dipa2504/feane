import React, { useContext, useState } from 'react'
import './AddReview.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { ManiCont } from '../../App';


const AddReview = () => {

    const { GetAllReviews } = useContext(ManiCont);

    let [review, setReview] = useState({
        img: '',
        name: '',
        view: '',
        feedback: ''
    })

    const PValue = (e) => {
        setReview({
            ...review, [e.target.name]: e.target.value
        })
    }

    const addReview = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:1000/reviews', review);
            if (result.data.success) {
                alert(result.data.msg);
                GetAllReviews();
                setReview({ img: '', name: '', view: '', feedback: '' });
            } else {
                alert('Failed to add review');
            }
        } catch (error) {
            console.error(error);
            alert('Failed to add review');
        }}


    return (
        <div>
            <div className="addreview">


                <form onSubmit={addReview} className="addreview-review">

                    <div className="addreview-img">
                        <img src={assets.upload_area} alt="" />
                    </div>

                    <input onChange={PValue} type="text" name="img" placeholder='Image URL' />

                    <input onChange={PValue} type="text" name="name" placeholder='name' />

                    <input onChange={PValue} type="text" name="view" placeholder='view' />

                    <input onChange={PValue} type="text" name="feedback" placeholder='feedback' />

                <button type="submit">Submit</button>
                </form>
                <br />



            </div>
        </div>
    )
}

export default AddReview
