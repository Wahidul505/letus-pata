import React from 'react';

const OrderItem = ({order, handleRemoveItem}) => {
    const {name, image, price, _id} = order;
    return (
        <div className='w-full md:w-2/3 bg-white rounded mx-auto flex justify-between px-6 items-center'>
            <img className='w-16' src={image} alt="" />
            <div className='flex flex-col'>
                <p className='text-lg text-red-700'>{name}</p>
                <p className='text-gray-700'>${price}</p>
            </div>
            <button onClick={()=>handleRemoveItem(_id)} className='bg-red-600 text-white rounded p-1'>Remove</button>
        </div>
    );
};

export default OrderItem;