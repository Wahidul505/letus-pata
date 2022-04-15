import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Breakfast from './Pages/Home/Breakfast/Breakfast';
import Lunch from './Pages/Home/Lunch/Lunch';
import Dinner from './Pages/Home/Dinner/Dinner';
import DishReview from './Pages/Checkout/DishReview/DishReview';
import { createContext, useEffect, useState } from 'react';
import Cart from './Pages/Checkout/Cart/Cart';
import Login from './Pages/Forms/Login/Login';
import Signup from './Pages/Forms/Signup/Signup';

export const DishContext = createContext();
function App() {
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  useEffect(() => {
    fetch('breakfast.json')
      .then(res => res.json())
      .then(data => setBreakfast(data));
  }, []);
  useEffect(() => {
    fetch('lunch.json')
      .then(res => res.json())
      .then(data => setLunch(data));
  }, []);
  useEffect(() => {
    fetch('dinner.json')
      .then(res => res.json())
      .then(data => setDinner(data));
  }, [])
  return (
    <div>
      <DishContext.Provider value={{ breakfast, lunch, dinner }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}>
            <Route path='breakfast' element={<Breakfast />}></Route>
            <Route index path='lunch' element={<Lunch />}></Route>
            <Route path='dinner' element={<Dinner />}></Route>
          </Route>
          <Route path='/preview/:dishName' element={<DishReview />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
      </DishContext.Provider>
    </div>
  );
}

export default App;
