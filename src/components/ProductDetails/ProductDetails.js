import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Product1 from './img/Product1.png'
import Toping1 from './img/Toping1.png'
import Toping2 from './img/Toping2.png'
import Toping3 from './img/Toping3.png'
import Toping4 from './img/Toping4.png'
import Toping5 from './img/Toping5.png'
import Toping6 from './img/Toping6.png'
import Toping7 from './img/Toping7.png'
import Toping8 from './img/Toping8.png'

function ProductDetails() {
  return(
      <div className='container d-flex mt-5'>

          <div className='col-4'>
            <img src={Product1} alt="" style={{width:"100%"}}/>
          </div>

          <div className='col-8 px-5'>
            <h2 className='color1 fw-bold'>Ice Coffee Palm Sugar</h2>
            <p className='color2 fs-4'>Rp.27.000</p>

            <div>
                <p className='color2 fs-4 fw-bold'>Toping</p>
                <div className='d-flex row'>
                    <div className='col-3 d-flex flex-column justify-content-center'>
                        <img src={Toping1} alt=""/>
                        <center className="color1">Bubble Tea Gelatin</center>
                    </div>
                    <div className='col-3 d-flex flex-column justify-content-center'>
                        <img src={Toping2} alt=""/>
                        <center className="color1">Manggo</center>
                    </div>
                    <div className='col-3 d-flex flex-column justify-content-center'>
                        <img src={Toping3} alt=""/>
                        <center className="color1">Green Coconut</center>
                    </div>
                    <div className='col-3 d-flex flex-column justify-content-center'>
                        <img src={Toping4} alt=""/>
                        <center className="color1">Boba Manggo</center>
                    </div>
                    <div className='col-3 d-flex flex-column justify-content-center'>
                        <img src={Toping5} alt=""/>
                        <center className="color1">Bill Berry Boba</center>
                    </div>
                    <div className='col-3 d-flex flex-column justify-content-center'>
                        <img src={Toping6} alt=""/>
                        <center className="color1" style={{paddingTop : 20}}>Kiwi Popping Pearl</center>
                    </div>
                    <div className='col-3 d-flex flex-column justify-content-center'>
                        <img src={Toping7} alt=""/>
                        <center className="color1">Matcha Cantaloupe</center>
                    </div>
                    <div className='col-3 d-flex flex-column justify-content-center'>
                        <img src={Toping8} alt=""/>
                        <center className="color1">Strawberry Popping</center>
                    </div>
                </div>
            </div>

            <div className='my-5 row'>
                <div className='d-flex justify-content-start color2 fw-bold fs-3 col-6'>
                    Total :
                </div>

                <div className='d-flex justify-content-end color2 fw-bold fs-3 col-6'>
                    Rp.27.000
                </div>
            </div>

            <div className='my-5 d-grid'>
                <Button className='fw-bold' variant="danger">Add to cart</Button>
            </div>
            
            <div></div>
          </div>
      </div>
  )
}

export default ProductDetails;
