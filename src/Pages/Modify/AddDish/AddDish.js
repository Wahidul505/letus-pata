import React from 'react';
import toast from 'react-hot-toast';

const AddDish = () => {
    const handleAddDish = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const image = e.target.image.value;
        const category = e.target.category.value;
        const dish = { name, price, image, category };
        console.log(dish)
        fetch('http://localhost:5000/dish', {
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(dish)
        }).then(res => res.json()).then(data => {
            if (data) {
                toast.success('Dish Added', { id: 'addSuccess' });
                e.target.reset();
            }
        })
    }
    return (
        <div>
            <h1 className='text-center text-2xl mb-4'>Add Dish</h1>
            <form onSubmit={handleAddDish} className='flex flex-col gap-4 w-1/2 mx-auto'>
                <input className='border border-gray-500 rounded p-1' type="text" name="name" id="name" placeholder='Dish Name' />
                <input className='border border-gray-500 rounded p-1' type="number" name="price" id="price" placeholder='Price' />
                <input className='border border-gray-500 rounded p-1' type="text" name="image" id="image" placeholder='Photo URL' />
                <input className='border border-gray-500 rounded p-1' type="text" name="category" id="category" placeholder='Category' />
                <input className='bg-green-600 text-white rounded cursor-pointer' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddDish;