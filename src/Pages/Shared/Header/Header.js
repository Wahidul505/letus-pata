import React from 'react';
import {FiShoppingCart} from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import letus from '../../../images/letus-logo.png';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-between px-6 py-3 bg-white items-center'>
            <img onClick={()=>navigate('/')} className='w-32 cursor-pointer' src={letus} alt="" />      
            <nav className='flex gap-6 items-center text-xl'>
                <Link to='/cart'><FiShoppingCart /></Link>
                <Link to='/login'>Login</Link>
                <Link className='bg-red-500 rounded-3xl py-1 px-4 text-white' to='/signup'>Sign up</Link>
            </nav>
        </div>
    );
};

export default Header;