import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import DishDetail from './Pages/Checkout/DishDetail/DishDetail';
import Cart from './Pages/Checkout/Cart/Cart';
import Login from './Pages/Forms/Login/Login';
import Signup from './Pages/Forms/Signup/Signup';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import AddDish from './Pages/Modify/AddDish/AddDish';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='bg-pink-50'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/dish/:id' element={<DishDetail />}></Route>
        <Route path='/cart' element={
          <RequireAuth>
            <Cart />
          </RequireAuth>
        }></Route>
        <Route path='/addDish' element={<AddDish />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
