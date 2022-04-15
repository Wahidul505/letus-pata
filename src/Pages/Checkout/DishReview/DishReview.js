import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DishContext } from '../../../App';

const DishReview = () => {
    const [dish, setDish] = useState({});
    const { dishName } = useParams();
    const navigate = useNavigate();
    const { breakfast, lunch, dinner } = useContext(DishContext);
    useEffect(() => {
        const dishes = [...breakfast, ...lunch, ...dinner];
        const currentDish = dishes.find(dish => dish.name === dishName);
        setDish(currentDish);
    }, [breakfast, dinner, dishName, lunch]);
    return (
        <div className='text-center text-2xl w-1/3 mx-auto mt-12'>
            <img className='w-full' src={dish.image} alt="" />
            <p>{dish.name}</p>
            <p>{dish.price}</p>
            <button onClick={()=>navigate('/cart')} className='bg-red-500 text-white rounded p-2 mt-6'>Add to Cart</button>
        </div>
    );
};

export default DishReview;