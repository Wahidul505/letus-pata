import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='flex gap-6 justify-center mt-6 mb-4 font-semibold text-gray-700'>
                <NavLink to='/home/breakfast'>Breakfast</NavLink>
                <NavLink to='/home/lunch'>Lunch</NavLink>
                <NavLink to='/home/dinner'>Dinner</NavLink>
            </div>
            <div>
                <Outlet />
            </div>

        </div>
    );
};

export default Home;