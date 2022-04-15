import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import letus from '../../../images/letus-logo.png';

const Signup = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const handleSignup = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
    }
    return (
        <div className='text-center w-2/3 md:w-1/3 mx-auto mt-12'>
            <img className='mb-8 mx-auto' src={letus} alt="" />
            <form onSubmit={handleSignup} className='flex flex-col gap-4 mb-2'>
                <input ref={nameRef} className='bg-slate-200 rounded p-1 text-lg' type="text" name="name" id="name" placeholder='Name' />
                <input ref={emailRef} className='bg-slate-200 rounded p-1 text-lg' type="email" name="email" id="email" placeholder='Email' />
                <input ref={passwordRef} className='bg-slate-200 rounded p-1 text-lg' type="password" name="password" id="password" placeholder='Password' />
                <input ref={confirmPasswordRef} className='bg-slate-200 rounded p-1 text-lg' type="password" name="confirm_password" id="confirm_password" placeholder='Confirm Password' />
                <input className='bg-green-500 p-1 text-xl text-white rounded' type="submit" value="Signup" />
            </form>
            <Link className='text-green-500' to='/login'>Already have an Account?</Link>
        </div>
    );
};

export default Signup;