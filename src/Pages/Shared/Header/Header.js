import React from 'react';
import {FiShoppingCart} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between px-6 py-3 bg-white items-center'>
            <h1 className='text-3xl'>Letus Pata</h1>      
            <nav className='flex gap-6 items-center text-xl'>
                <Link to='/cart'><FiShoppingCart /></Link>
                <Link to='/login'>Login</Link>
                <Link className='bg-red-500 rounded-3xl py-1 px-4 text-white' to='/signup'>Sign up</Link>
            </nav>
        </div>
    );
};

export default Header;