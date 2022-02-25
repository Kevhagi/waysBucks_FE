import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { Button } from 'react-bootstrap'
import convertRupiah from "rupiah-format";
import { UserContext } from '../context/userContext'
import Navbar from '../components/LandingPage/Navbar'
import circleCheckmark from '../components/ProductDetails/img/circle-check-regular.svg'

//import API
import { API } from "../config/api";


function Details() {

  let { id } = useParams();

  const [state] = useContext(UserContext)

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

  const [sumState, setSumState] = useState(0)

  function Ceklis({data}){
    const [isiData, setData] = useState(data)

    const [checked, setChecked] = useState(false)
    const HandleChecked = () => {    
      setChecked(!checked)
      //return true/false based on checked
      topping.find(item => item.id === data.id).checked = !checked

      //get all topping which checked
      const selectedTopping = topping.filter(isi => isi.checked === true)
      //console.log("selectedTopping : ",selectedTopping);

      //map checked topping to get only toppingPrice
      let result = selectedTopping.map(a => a.toppingPrice)

      //sum toppingPrice of checked topping
      let sumTopping = result.reduce((partialSum, a) => partialSum + a, 0)
      setSumState(sumTopping)

      setData({
        ...isiData,
        checked: !checked
      })
    }

    return(
      <div className='col-12 d-flex flex-column justify-content-between' onClick={HandleChecked} style={{cursor:"pointer"}}>
        <img src={data.toppingImage} alt=""/>
        {isiData.checked && <img width={40} style={{position:"absolute", top:"0", right:"0"}} src={circleCheckmark}/>}
        <center className="color1">{data.toppingName}</center>
      </div>
    )
  }

  const [result, setResult] = useState([])

  const handleClick = async () => {
    const selectedTopping = topping.filter(isi => isi.checked === true)
    
    let orderan = {
      id : id,
      toppings : selectedTopping,
      userID : state.user.id
    }

    console.log(orderan);

    const config = {
      headers : {
        'Access-Control-Allow-Origin': '*',
        "Content-type" : "application/json"
      }
    }

    const body = JSON.stringify(orderan)

    const response = await API.post("/addtocart", body, config)

    const getOnCart = await API.get("/getcart")
    var data = getOnCart.data.data.onCart

    if (response?.status == 200) {
      alert(response.data.message)
      if (getOnCart?.status ==200) {
        console.log(data.length);
      }
      document.location.reload(true)
    }
  }

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
                          <div key={index} style={{position:"relative"}} className='col-3 d-flex flex-column justify-content-between'>
                            <Ceklis data={item}/>
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
                    {convertRupiah.convert(product.productPrice + sumState)}
                </div>
            </div>

            <div className='my-5 d-grid'>
              {state.isLogin ?
                <Button onClick={handleClick} className='fw-bold' variant="danger">Add to cart</Button>
              :
                <div className='text-danger'>Please login to place an order</div>
              }
                
            </div>
            
            <div></div>
          </div>
      </div>
      </div>
  )
}

export default Details;
