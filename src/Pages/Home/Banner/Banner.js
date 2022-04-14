import React from 'react';
import bannerBg from '../../../images/bannerbackground.png';

const Banner = () => {
    return (
        <div className='relative w-full'>
            <img className='w-full' src={bannerBg} alt="" />
            <div className='absolute left-0 right-0 top-0 flex justify-center items-center h-full flex-col'>
                <h1 className='text-xl md:text-4xl mb-4 text-amber-500'>Fast, Fresh, Intent Dishes</h1>
                <div className='bg-white flex justify-between rounded-3xl w-1/2'>
                    <input className='w-full p-1 md:p-2 rounded-3xl' type="text" name="" placeholder='Search Your Favorite Dishes' /><button className='rounded-3xl bg-red-500 text-white px-3 py-2'>Search</button></div>
            </div>
        </div>
    );
};

export default Banner;