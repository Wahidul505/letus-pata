import React from 'react';
import Banner from '../Banner/Banner';
import Dishes from '../Dishes/Dishes';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner />
            <Dishes />
        </div>
    );
};

export default Home;