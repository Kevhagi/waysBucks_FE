import React from 'react';
import Product1 from '../ProductDetails/img/Product1.png'

function AddProductBody() {
  return(
      <div className='container d-flex'>
            <div className='col-7 px-5'>
                <h1 className='color1'>Product</h1>
                <div className='mt-5'>
                    <input className='col-12 px-2 py-2 bg-1 border-2 border-danger rounded-3 mb-5' type="text" placeholder='Name Product'/>
                    <input className='col-12 px-2 py-2 bg-1 border-2 border-danger rounded-3 mb-5' type="number" placeholder='Price'/>
                    <input className='col-12 px-2 py-2 bg-1 border-2 border-danger rounded-3 mb-5 form-control' type="file" placeholder='Photo Product'/>
                </div>
                
                <div className='row justify-content-center'>
                   <button className='col-10 py-1 rounded-3 bg-2 text-white fw-bold'>Add Product</button> 
                </div>
                
            </div>

            <div className='col-5 px-5'>
                <img src={Product1} alt="" />
            </div>
      </div>
  )
}

export default AddProductBody;
