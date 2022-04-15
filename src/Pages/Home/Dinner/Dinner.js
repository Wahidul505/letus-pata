import React, { useContext } from 'react';
import { DishContext } from '../../../App';
import Dish from '../Dish/Dish';

const Dinner = () => {
    const { dinner } = useContext(DishContext);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-12 lg:gap-28 px-10 lg:px-16'>
            {
                dinner.map(dish => <Dish
                    key={dish.id}
                    dish={dish}
                />)
            }
        </div>
    );
};

export default Dinner;