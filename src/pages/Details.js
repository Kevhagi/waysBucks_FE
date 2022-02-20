import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Navbar from '../components/LandingPage/Navbar'
import Button from 'react-bootstrap/esm/Button';
import convertRupiah from "rupiah-format";
import Toping1 from '../components/ProductDetails/img/Toping1.png'

import { API } from "../config/api";

function Details() {

  let { id } = useParams();

  const [product, setProduct] = useState({})
  const [topping, setTopping] = useState([])

  // Fetching detail product data by id from database
  const getProduct = async (id) => {
    try {
      const response = await API.get("/product/" + id);
      // Store product data to useState variabel
      let data = response.data.data.product.dataValues
      let imageData = response.data.data.product.productImage
      let result = {
        ...data,
        productImage : imageData
      }
      setProduct(result)
    } catch (error) {
      console.log(error)
    }
  };

  const getTopping = async () => {
    try {
      const response = await API.get("/toppings")
      let data = response.data.data.toppings
      setTopping(data)
    } catch (error) {
      console.log(error);
    }
  }

  console.log(topping);

  useEffect(() => {
    getProduct(id);
    getTopping()
  }, []);

  return(
      <div>
          <Navbar />
          <div className='container d-flex mt-5'>

          <div className='col-4'>
            <img src={product.productImage} alt="" style={{width:"100%"}}/>
          </div>

          <div className='col-8 px-5'>
            <h2 className='color1 fw-bold'>{product.productName}</h2>
            <p className='color2 fs-4'>{convertRupiah.convert(product.productPrice)}</p>

            <div>
                <p className='color2 fs-4 fw-bold'>Toping</p>
                <div className='d-flex row'>
                    {topping.length !== 0 ? (
                      <>
                        {topping.map((item, index) => (
                          <div key={index} className='col-3 d-flex flex-column justify-content-between'>
                            <img src={item.toppingImage} alt=""/>
                            <center className="color1">{item.toppingName}</center>
                          </div>
                        ))}
                        
                      </>
                    ) : (
                      <div>Topping kosong</div>
                    )}
                </div>
            </div>

            <div className='my-5 row'>
                <div className='d-flex justify-content-start color2 fw-bold fs-3 col-6'>
                    Total :
                </div>

                <div className='d-flex justify-content-end color2 fw-bold fs-3 col-6'>
                    {convertRupiah.convert(product.productPrice)}
                </div>
            </div>

            <div className='my-5 d-grid'>
                <Button className='fw-bold' variant="danger">Add to cart</Button>
            </div>
            
            <div></div>
          </div>
      </div>
      </div>
  )
}

export default Details;
