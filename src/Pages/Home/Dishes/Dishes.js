import React, { useEffect, useState } from 'react';
import Dish from '../Dish/Dish';
import './Dishes.css';

const Dishes = () => {
    const [dishes, setDishes] = useState([]);
    const [selected, setSelected] = useState('Breakfast');
    const categories = ['Breakfast', 'Lunch', 'Dinner'];
    const handleSelect = category => {
        setSelected(category);
    };
    useEffect(() => {
        fetch(`http://localhost:5000/dish?category=${selected}`)
            .then(res => res.json())
            .then(data => setDishes(data));
    }, [selected]);

    return (
        <>
            <div className='flex justify-center gap-6 my-16 text-xl'>
                {
                    categories.map(category => <button
                        key={category}
                        className={selected === category ? 'selected-btn' : ''}
                        onClick={() => handleSelect(category)}>{category}
                    </button>)
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-16 md:px-12 pb-16'>
                {
                    dishes.map(dish => <Dish
                        key={dish._id}
                        dish={dish}
                    />)
                }
            </div>
        </>
    );
};

export default Dishes;