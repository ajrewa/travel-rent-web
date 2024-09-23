import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { Loginpage } from './Pages/Loginpage'
import Header from './Components/Header/Header'
import ShopContextProvider from './Context/ShopContext';
import CartPage from './Components/Cart/CartPage';
import Bicycle from './Pages/Bicycle';
import './App.css'
const App = () => {
  return (
<div className='App'>
    <ShopContextProvider>
        <BrowserRouter>
              <Header />
              <Routes>
                <Route path='/' element={<Home/> }/>
                <Route path='/Login' element={<Loginpage/> }/>
                <Route path="/Bicycle" element={<Bicycle/>} />
              <Route path="/Cart" element={<CartPage/>} />
              </Routes>
        </BrowserRouter>
    </ShopContextProvider>
</div>
  )
}
export default App;
