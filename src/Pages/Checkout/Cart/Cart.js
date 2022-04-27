import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import OrderItem from '../OrderItem/OrderItem';

const Cart = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const email = user?.email;
    const token = JSON.parse(localStorage.getItem('token'));
    useEffect(() => {
        fetch('http://localhost:5000/order', {
            headers: {
                'authorization': `${email} ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [email, token]);

    const handleRemoveItem = id => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'DELETE'
        }).then(res => res.json()).then(data => {
            const remaining = orders.filter(item => item._id !== id);
            setOrders(remaining);
        })

    }
    return (
        <div className='flex flex-col gap-3 py-12'>
            {
                orders.map(order => <OrderItem
                    key={order._id}
                    order={order}
                    handleRemoveItem={handleRemoveItem}
                />)
            }
        </div>
    );
};

export default Cart;