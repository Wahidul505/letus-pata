import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import letus from '../../../images/letus-logo.png';
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loader from '../../Shared/Loader/Loader';
import useToken from '../../../hooks/useToken';


const Signup = () => {
    const navigate = useNavigate();
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const [displayError, setDisplayError] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const handleSignup = async e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password.length < 6) {
            setDisplayError("Password is too short");
            return;
        }
        else if (password !== confirmPassword) {
            setDisplayError("Password didn't matched");
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        e.target.reset();
    };
    const [token] = useToken(user);
    useEffect(() => {
        if (token || user) {
            setDisplayError('');
            console.log(user);
            navigate('/');
        }
        else if (error) {
            console.log(error.message)
            setDisplayError(error?.message);
            return;
        }
        else if (updateError) {
            setDisplayError(updateError);
            return;
        }
    }, [navigate, user, displayError, error, updateError, token]);
    if (loading || updating) {
        return <Loader />
    }
    return (
        <div className='text-center w-2/3 md:w-1/3 mx-auto mt-12'>
            <img className='mb-8 mx-auto' src={letus} alt="" />
            <form onSubmit={handleSignup} className='flex flex-col gap-4 mb-2'>
                <input ref={nameRef} className='bg-slate-200 rounded p-1 text-lg' type="text" name="name" id="name" placeholder='Name' required />
                <input ref={emailRef} className='bg-slate-200 rounded p-1 text-lg' type="email" name="email" id="email" placeholder='Email' required />
                <input ref={passwordRef} className='bg-slate-200 rounded p-1 text-lg' type="password" name="password" id="password" placeholder='Password' required />
                <input ref={confirmPasswordRef} className='bg-slate-200 rounded p-1 text-lg' type="password" name="confirm_password" id="confirm_password" placeholder='Confirm Password' required />
                {
                    displayError && <p className='text-red-600'>{displayError}</p>
                }
                <input className='bg-green-500 p-1 text-xl text-white rounded cursor-pointer' type="submit" value="Signup" />
            </form>
            <Link className='text-green-500' to='/login'>Already have an Account?</Link>
        </div>
    );
};

export default Signup;