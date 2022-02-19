import React, { useEffect, useContext }from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { UserContext } from "./context/userContext";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Details from './pages/Details'
import Cart from './pages/Cart';
import AddProduct from './pages/AddProduct'
import AddTopping from './pages/AddTopping'
import Transaction from './pages/Transactions';

// Get API config & setAuthToken here ...
import { API, setAuthToken } from "./config/api";

// Init token on axios every time the app is refreshed here ...
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  
  // Init user context here ...
  const [state, dispatch] = useContext(UserContext);

  // Create function for check user token here ...
  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
  
      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }
  
      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;
      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    checkUser();
  }, []);
  // Call function check user with useEffect didMount here ...
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/product/:id" element={<Details />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/add-product" element={<AddProduct />} />
        <Route exact path="/add-topping" element={<AddTopping />} />
        <Route exact path="/transactions" element={<Transaction />} />
      </Routes>
    </Router>
      
  );
}

export default App;
