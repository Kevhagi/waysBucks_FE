import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Product1 from '../ProductDetails/img/Product1.png'
import Bin from './img/Bin.svg'
import Invoice from './img/Invoice.svg'
import convertRupiah from "rupiah-format";

import { API } from "../../config/api";

function CartInfo() {

    var navigate = useNavigate()

    const [onCart, setOnCart] = useState([])

    const getOnCart = async () => {
        try {
            const response = await API.get("/getcart")
            var data = response.data.data.onCart
            setOnCart(data)
        } catch (error) {
            console.log(error);
        }
    }

    var jumlahPerProduct = []
    var jumlahPerOrder = []

    var Total = []

    for (let i = 0; i < onCart.length; i++) {
        for (let j = 0; j < onCart[i].order[0].topping.length; j++){
            jumlahPerProduct.push(onCart[i].order[0].topping[j].toppingPrice)
        }
        var jumlah = jumlahPerProduct.reduce((partialSum, a) => partialSum + a, 0)
        jumlahPerOrder.push(jumlah)
        jumlahPerProduct.splice(0,jumlahPerProduct.length)

        var hargaProduct = onCart[i].order[0].productPrice
        var hargaTopping = jumlahPerOrder[i]
        var subtotal = hargaProduct + hargaTopping

        Total.push(subtotal)
    }

    const handleClick = async (id) => {
        if(window.confirm("Are you sure want to remove this order?") == true){
            const response = await API.delete(`/transaction/${id}`)
            alert("Order removed from cart!")

            if (response?.status == 200) {            
            console.log(response);
            document.location.reload(true)
            }
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
                        {onCart.length !== 0 ? (
                            <>
                                {onCart.map((item, index) => (
                                    <div key={index} className='d-flex col my-3'>
                                        <img src={Product1} alt="" width={80} height={120} className='rounded-3 me-3'/>
                                        <div>
                                            <p className='color1 fw-bold'>{item.order[0].productName}</p>
                                            <>
                                                {item.order[0].topping.length !== 0 ? (
                                                    <>
                                                    {item.order[0].topping.map((isiTopping, index) => (
                                                        <p className='color2'>{isiTopping.toppingName}</p>
                                                    ))}
                                                    </>
                                                ) : (
                                                    <p className='color2'>Topping : -</p>
                                                )}
                                            </>
                                            
                                        </div>
                                        <div className='d-flex col flex-column align-items-end'>
                                            <p className='color1'>{convertRupiah.convert(item.order[0].productPrice + jumlahPerOrder[index])}</p>
                                            <img onClick={()=>{handleClick(item.transactionID)}} src={Bin} alt="" width={20} style={{cursor:"pointer"}} />
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div>Cart kosong</div>
                        )}
                    </div>
                    
                    
                    <div className='d-flex justify-content-between'>
                        <div className='col-5 px-2 py-2'>
                            <div className='border-top border-bottom py-2'>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <p className='color1'>Subtotal</p>
                                    </div>
                                    <div>
                                        <p className='color1'>{convertRupiah.convert(Total.reduce((partialSum, a) => partialSum + a, 0))}</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <p className='color1'>Qty</p>
                                    </div>
                                    <div>
                                        <p className='color1'>{onCart.length}</p>
                                    </div>
                                </div>    
                            </div>
                            
                            <div className='d-flex justify-content-between py-2'>
                                <div>
                                    <p className='color1 fw-bold'>Total</p>
                                </div>
                                <div>
                                    <p className='color1 fw-bold'>{convertRupiah.convert(Total.reduce((partialSum, a) => partialSum + a, 0))}</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-5 d-flex justify-content-end'>
                            <img src={Invoice} alt="" style={{width:"100%", cursor:"pointer"}}/>
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