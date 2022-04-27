import React from 'react';
import bannerBg from '../../../images/bannerbackground.png';

const Banner = () => {
    return (
        <div className='relative w-full'>
            <img className='w-full' src={bannerBg} alt="" />
            <h1 className='absolute right-0 left-0 top-12 text-center text-xl md:text-4xl mb-4 text-amber-500'>Fast, Fresh, Intent Dishes</h1>
        </div>
    );
};

export default Banner;