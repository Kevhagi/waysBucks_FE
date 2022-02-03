<<<<<<< HEAD
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Jumbotron.css'
import img from './img/jumbotron-img.png'

function Jumbotron() {
  return(
  <div className='container d-flex my-4'>
    <div className='kiri col-9 ms-5'>
      <h1 className='text-white fw-bold'>WAYSBUCKS</h1>

      <p className='text-white fs-4 fw-light my-4'>Things are changing, but we’re still here for you</p>

      <p className='line3 text-white fs-6 my-4'>We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open. <span className='fw-bold'>Waysbucks</span> Drivers is also available</p>

      <p className='text-white my-4'>Let's Order...</p>
    </div>

    <div className='kanan me-5'>
      <img src={img} alt="" />
    </div>
  </div>
  );
}

export default Jumbotron;
=======
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Jumbotron.css'
import img from './img/jumbotron-img.png'

function Jumbotron() {
  return(
  <div className='container d-flex my-4'>
    <div className='kiri col-9 ms-5'>
      <h1 className='text-white fw-bold'>WAYSBUCKS</h1>

      <p className='text-white fs-4 fw-light my-4'>Things are changing, but we’re still here for you</p>

      <p className='line3 text-white fs-6 my-4'>We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open. <span className='fw-bold'>Waysbucks</span> Drivers is also available</p>

      <p className='text-white my-4'>Let's Order...</p>
    </div>

    <div className='kanan me-5'>
      <img src={img} alt="" />
    </div>
  </div>
  );
}

export default Jumbotron;
>>>>>>> e27699244d1195f870321db03361377831d39727
