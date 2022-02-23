import React, { useEffect } from 'react';
import Product1 from '../ProductDetails/img/Product1.png'
import Bin from './img/Bin.svg'
import Invoice from './img/Invoice.svg'

import { API } from "../../config/api";

function CartInfo() {

    const getOnCart = async () => {
        try {
            const response = await API.get("/getcart")
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getOnCart();
      }, []);

    return(
        <div className='container px-5'>
            <h2 className='color1 fw-bold'>My Cart</h2>

            <p className='color1'>Review your Order</p>

            <div className='container d-flex my-4 px-0'>
                    
                {/* My Cart */}
                <div className='col-8 me-5'>
                    <div className='border-top border-bottom mb-5'>
                        <div className='d-flex col my-3'>
                            <img src={Product1} alt="" width={80} className='rounded-3 me-3'/>
                            <div>
                                <p className='color1 fw-bold'>Ice Coffe Palm Sugar</p>
                                <p className='color2'>Toping : Bill Berry Boba, Bubble Tea Gelatin</p>
                            </div>
                            <div className='d-flex col flex-column align-items-end'>
                                <p className='color1'>Rp.33.000</p>
                                <img src={Bin} alt="" width={20}/>
                            </div>
                        </div>
                        <div className='d-flex col my-3'>
                            <img src={Product1} alt="" width={80} className='rounded-3 me-3'/>
                            <div>
                                <p className='color1 fw-bold'>Ice Coffe Palm Sugar</p>
                                <p className='color2'>Toping : Bill Berry Boba, Bubble Tea Gelatin</p>
                            </div>
                            <div className='d-flex col flex-column align-items-end'>
                                <p className='color1'>Rp.33.000</p>
                                <img src={Bin} alt="" width={20}/>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <div className='col-5 px-2 py-2'>
                            <div className='border-top border-bottom py-2'>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <p className='color1'>Subtotal</p>
                                    </div>
                                    <div>
                                        <p className='color1'>69.000</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <p className='color1'>Qty</p>
                                    </div>
                                    <div>
                                        <p className='color1'>2</p>
                                    </div>
                                </div>    
                            </div>
                            
                            <div className='d-flex justify-content-between py-2'>
                                <div>
                                    <p className='color1 fw-bold'>Total</p>
                                </div>
                                <div>
                                    <p className='color1 fw-bold'>69.000</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-5 d-flex justify-content-end'>
                            <img src={Invoice} alt="" style={{width:"100%"}}/>
                        </div>
                    </div>
                        

                    
                </div>
                    

                {/* Delivery Info */}
                <div className='col-4'>
                    <div className='my-3'>
                        <input className='col-12 px-2 py-2 bg-1 border-2 border-danger rounded-3 mb-3' type="text" placeholder='Name'/>
                        <input className='col-12 px-2 py-2 bg-1 border-2 border-danger rounded-3 mb-3' type="email" placeholder='Email'/>
                        <input className='col-12 px-2 py-2 bg-1 border-2 border-danger rounded-3 mb-3' type="number" placeholder='Phone'/>
                        <input className='col-12 px-2 py-2 bg-1 border-2 border-danger rounded-3 mb-3' type="number" placeholder='Pos Code'/>
                        <textarea className='col-12 px-2 py-2 bg-1 border-2 border-danger rounded-3 mb-3' placeholder='Address'></textarea>
                        
                        <button className='col-12 py-2 rounded-3 bg-2 text-white fw-bold'>Pay</button>
                    </div>
                </div>

            </div>    
        </div>
        
  )
}

export default CartInfo;