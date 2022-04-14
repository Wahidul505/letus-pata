import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Breakfast from './Pages/Home/Breakfast/Breakfast';
import Lunch from './Pages/Home/Lunch/Lunch';
import Dinner from './Pages/Home/Dinner/Dinner';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}>
          <Route path='breakfast' element={<Breakfast />}></Route>
          <Route path='lunch' element={<Lunch />}></Route>
          <Route path='dinner' element={<Dinner />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
