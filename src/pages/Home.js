import React from 'react'
import Navbar from '../components/LandingPage/Navbar'
import Jumbotron from '../components/LandingPage/Jumbotron';
import Menu from '../components/LandingPage/Menu'

function Home() {
  return (
    <div>
        <Navbar />
        <Jumbotron />
        <Menu />
    </div>
  );
}

export default Home;
