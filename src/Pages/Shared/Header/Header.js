import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import letus from '../../../images/letus-logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div className='flex justify-between px-6 py-3 bg-white items-center'>
            <img onClick={() => navigate('/')} className='w-32 cursor-pointer' src={letus} alt="" />
            <nav className='flex gap-6 items-center text-xl'>
                <Link to='/cart'><FiShoppingCart /></Link>
                {
                    user ?
                        <button onClick={handleSignOut} className='bg-red-500 rounded-3xl py-1 px-4 text-white'>Log out</button>
                        :
                        <>
                            <Link to='/login'>Login</Link>
                            <Link className='bg-red-500 rounded-3xl py-1 px-4 text-white' to='/signup'>Sign up</Link>
                        </>
                }
            </nav>
        </div>
    );
};

export default Header;