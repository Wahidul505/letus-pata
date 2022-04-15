import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dish = ({dish}) => {
    const {name, image, price } = dish;
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`/preview/${name}`)} className='text-center px-6 rounded-lg cursor-pointer hover:shadow-lg hover:scale-110 mb-12 md:mb-0'>
            <img className='w-full mb-3' src={image} alt="" />
            <p className='text-lg mb-3'>{name}</p>
            <p className='text-xl font-semibold'>${price}</p>
        </div>
    );
};

export default Dish;