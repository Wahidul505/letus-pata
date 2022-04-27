import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import letus from '../../../images/letus-logo.png';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loader from '../../Shared/Loader/Loader';
import useToken from '../../../hooks/useToken';
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '';
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [displayError, setDisplayError] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const [token] = useToken(user);


    useEffect(() => {
        if (error) {
            setDisplayError(error.message);
        }
        if (token) {
            navigate(from, { replace: true });
        }
    }, [navigate, token, error, from]);
    if (loading) {
        return <Loader />
    };
    return (
        <div className='text-center w-2/3 md:w-1/3 mx-auto mt-12'>
            <img className='mb-8 mx-auto' src={letus} alt="" />
            <form onSubmit={handleLogin} className='flex flex-col gap-4 mb-2'>
                <input ref={emailRef} className='bg-slate-200 rounded p-1 text-lg' type="email" name="" id="email" placeholder='Email' required />
                <input ref={passwordRef} className='bg-slate-200 rounded p-1 text-lg' type="password" name="" id="password" placeholder='Password' required />
                {
                    displayError && <p className='text-red-600'>{displayError}</p>
                }
                <input className='bg-green-500 p-1 text-xl text-white rounded' type="submit" value="Login" />
            </form>
            <Link className='text-green-500' to='/signup'>New to Letus Pata?</Link>
        </div>
    );
};

export default Login;