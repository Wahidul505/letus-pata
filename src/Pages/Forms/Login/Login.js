import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import letus from '../../../images/letus-logo.png';
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleLogin = e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
    }
    return (
        <div className='text-center w-2/3 md:w-1/3 mx-auto mt-12'>
            <img className='mb-8 mx-auto' src={letus} alt="" />
            <form onSubmit={handleLogin} className='flex flex-col gap-4 mb-2'>
                <input ref={emailRef} className='bg-slate-200 rounded p-1 text-lg' type="email" name="" id="email" placeholder='Email' />
                <input ref={passwordRef} className='bg-slate-200 rounded p-1 text-lg' type="password" name="" id="password" placeholder='Password' />
                <input className='bg-green-500 p-1 text-xl text-white rounded' type="submit" value="Login" />
            </form>
            <Link className='text-green-500' to='/signup'>New to Letus Pata?</Link>
        </div>
    );
};

export default Login;