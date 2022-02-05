import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Details from './pages/Details'
import Cart from './pages/Cart';
import AddProduct from './pages/AddProduct'
import AddTopping from './pages/AddTopping'
import Transaction from './pages/Transactions';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/details/:id" element={<Details />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/add-product" element={<AddProduct />} />
        <Route exact path="/add-topping" element={<AddTopping />} />
        <Route exact path="/transactions" element={<Transaction />} />
      </Routes>
    </Router>
      
  );
}

export default App;
