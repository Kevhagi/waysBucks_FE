import React from 'react';
import Pfp from './img/jkw.png'
import QR from './img/QR.svg'
import Logo from '../LandingPage/img/logo.svg'
import convertRupiah from "rupiah-format";

import dateFormat, { masks } from "dateformat";

function ProfileInfo({item, item2}) {
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
                        <p>{item.fullName}</p>
                    </div>
                    <div className=''>
                        <p className='fw-bold'>Email</p>
                        <p>{item.email}</p>
                    </div>
                </div>
            </div>
        </div>

        {/* My Transaction */}
        <div className='col-6 me-5'>
            <h2 className='fw-bold mb-4'>My Transaction</h2>

            {item2.length !== 0 ? (
                <>
                    {item2.map((scarlet, index) => {
                        if (scarlet.status !== 'On Cart') {
                        return (
                            <div className='row pink rounded-3 py-3 mb-4'>
                                <div className='col-8'>
                                    {scarlet.order.map((vodka, index) => {
                                        var test = scarlet.createdAt
                                        var day = dateFormat(test, "dddd")
                                        var date = dateFormat(test, "dd mmmm yyyy")
                                        let a = []
                                        return (
                                            <div className='col d-flex mb-4'>
                                                <div className='d-flex align-items-start px-2 py-2'>
                                                    <img src={vodka.image} alt="" style={{height: 125}}/>
                                                </div>
                                                <div>
                                                    <p className='fw-bold mb-0'>{vodka.title}</p>
                                                    <p className=''><span className='fw-bold'>{day}</span>, {date}</p>
                                                    <p className='fw-bold'>Topping :  </p>
                                                    {vodka.toppings.map((teio, index) => {
                                                        a.push(teio.price)
                                                        return <p>{teio.name}</p>
                                                    })}
                                                    <p>Price : {convertRupiah.convert(vodka.price + a.reduce((partialSum, a) => partialSum + a, 0))}</p>               
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                <div className='col-4 d-flex flex-column align-items-center'>
                                    <img className='mb-5' src={Logo} alt="" style={{width:100}}/>
                                    <img className='mb-5' src={QR} alt="" style={{width:100}}/>
                                    <p className='mb-5 fw-bold' style={{background: "lightCyan", width : "70%", textAlign : "center", color:"#00D1FF"}}>{scarlet.status}</p>
                                    <p className='color2 fw-bold mb-5'>Sub Total : {scarlet.totalAmount}</p>
                                </div>
                            </div>
                        )    
                        }
                        
                    })}
                </>
                
            ) : (
                <div>Kosong</div>
            )}
        </div>
  </div>
  )
}

export default ProfileInfo;