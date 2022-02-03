import React from 'react';
import Pfp from './img/jkw.png'
import QR from './img/QR.svg'
import Logo from '../LandingPage/img/logo.svg'
import Product1 from '../LandingPage/img/Product1.png'

function ProfileInfo() {
  return(
    <div className='container d-flex my-4'>
        {/* My Profile */}
        <div className='col-6 ms-5'>
            <h2 className='fw-bold mb-4'>My Profile</h2>
            <div className='row'>
                <div className='col-4 pe-3'>
                    <img src={Pfp} alt="" style={{width:"100%"}}/>
                </div>
                <div className='col-8'>
                    <div className='mb-5'>
                        <p className='fw-bold'>Full Name</p>
                        <p>Yurete</p>
                    </div>
                    <div className=''>
                        <p className='fw-bold'>Email</p>
                        <p>Email@email.com</p>
                    </div>
                </div>
            </div>
        </div>

        {/* My Transaction */}
        <div className='col-6 me-5'>
            <h2 className='fw-bold mb-4'>My Transaction</h2>
            <div className='row pink rounded-3 py-3'>
                {/* Kiri */}
                <div className='col-8'>
                    <div className='col d-flex'>
                        <div className='d-flex align-items-center px-2'>
                            <img src={Product1} alt="" style={{height: 125}}/>
                        </div>
                        <div>
                            <p className='fw-bold mb-0'>Ice Coffe Palm Sugar</p>
                            <p className=''><span className='fw-bold'>Saturday</span>, 5 March 2020</p>
                            <p>Toping : Bill Berry Boba, Bubble Tea Gelatin</p>
                            <p>Price : Rp.33.000</p>                          
                        </div>
                    </div>
                    <div className='col d-flex'>
                        <div className='d-flex align-items-center px-2'>
                            <img src={Product1} alt="" style={{height: 125}}/>
                        </div>
                        <div>
                            <p className='fw-bold mb-0'>Ice Coffe Palm Sugar</p>
                            <p className=''><span className='fw-bold'>Saturday</span>, 5 March 2020</p>
                            <p>Toping : Bill Berry Boba, Bubble Tea Gelatin</p>
                            <p>Price : Rp.33.000</p>                          
                        </div>
                    </div>                    <div className='col d-flex'>
                        <div className='d-flex align-items-center px-2'>
                            <img src={Product1} alt="" style={{height: 125}}/>
                        </div>
                        <div>
                            <p className='fw-bold mb-0'>Ice Coffe Palm Sugar</p>
                            <p className=''><span className='fw-bold'>Saturday</span>, 5 March 2020</p>
                            <p>Toping : Bill Berry Boba, Bubble Tea Gelatin</p>
                            <p>Price : Rp.33.000</p>                          
                        </div>
                    </div>
                </div>
                {/* Kanan */}
                <div className='col-4 d-flex flex-column align-items-center'>
                    <img className='mb-5' src={Logo} alt="" style={{width:100}}/>
                    <img className='mb-5' src={QR} alt="" style={{width:100}}/>
                    <p className='mb-5 fw-bold' style={{background: "lightCyan", width : "70%", textAlign : "center", color:"#00D1FF"}}>On The Way</p>
                    <p className='color2 fw-bold mb-5'>Sub Total : 69.000</p>
                </div>
            </div>
        </div>
  </div>
  )
}

export default ProfileInfo;