import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Details from './pages/Details'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
      
  );
}

export default App;
