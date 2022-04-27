import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dish = ({ dish }) => {
    const { name, image, price, _id } = dish;
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/dish/${_id}`)} className='bg-white text-center px-6 rounded-lg cursor-pointer shadow-lg hover:scale-110 mb-12 md:mb-0 py-4'>
            <img className='w-full mb-3' src={image} alt="" />
            <p className='text-xl mb-3 text-red-600'>{name}</p>
            <p className='text-lg text-green-700'>${price}</p>
        </div>
    );
};

export default Dish;