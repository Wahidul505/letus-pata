import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';

const DishDetail = () => {
    const { id } = useParams();
    const [dish, setDish] = useState({});
    const [user] = useAuthState(auth);
    useEffect(() => {
        const url = `http://localhost:5000/dish/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDish(data));
    }, [id]);
    const handleAddToCart = dish => {
        const order = {
            name: dish.name,
            image: dish.image,
            price: dish.price,
            email: user?.email
        };
        fetch('http://localhost:5000/order', {
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Item Added', { id: 'addedSuccess' });
                }
            })
    };
    return (
        <div className='flex flex-col gap-2 px-12 items-center justify-center py-12 w-1/2 mx-auto'>
            <img src={dish.image} alt="" />
            <p className='text-3xl text-red-500'>{dish.name}</p>
            <p className='text-gray-700 text-xl'>${dish.price}</p>
            <button onClick={() => handleAddToCart(dish)} className='text-white rounded p-2 bg-red-500 hover:bg-green-500'>Add to Cart</button>
        </div>
    );
};

export default DishDetail;