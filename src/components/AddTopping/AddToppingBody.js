import React from 'react';
import Toping6 from './img/Toping6.png'

function AddToppingBody() {
  return(
      <div className='container d-flex'>
            <div className='col-7 px-5'>
                <h1 className='color1'>Toping</h1>
                <div className='mt-5'>
                    <input className='col-12 px-2 py-2 bg-1 border-2 border-danger rounded-3 mb-5' type="text" placeholder='Name Product'/>
                    <input className='col-12 px-2 py-2 bg-1 border-2 border-danger rounded-3 mb-5' type="number" placeholder='Price'/>
                    <input className='col-12 px-2 py-2 bg-1 border-2 border-danger rounded-3 mb-5 form-control' type="file" placeholder='Photo Product'/>
                </div>
                
                <div className='row justify-content-center'>
                   <button className='col-10 py-1 rounded-3 bg-2 text-white fw-bold'>Add Toping</button> 
                </div>
                
            </div>

            <div className='col-5 px-5'>
                <img src={Toping6} alt="" />
            </div>
      </div>
  )
}

export default AddToppingBody;
