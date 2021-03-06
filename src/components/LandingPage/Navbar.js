import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'

import { InputGroup, FormControl, Modal, Navbar, Container, Button, Stack } from 'react-bootstrap'
import img from './img/logo.svg'
import cart from './img/cart.svg'
import profilePic from './img/erisqu.jpg'
import adminPic from './img/A.png'
import profile from './img/profile.svg'
import productAddIcon from './img/product.svg'
import toppingAddIcon from './img/topping.svg'
import logoutImg from './img/logout.svg'
import 'bootstrap/js/dist/dropdown'

import {API} from '../../config/api'

function MyLoginModal(props) {

  const [state, dispatch] = useContext(UserContext);

  //Store form input data
  const [form, setForm] = useState({
    email : "",
    password : ""
  })

  const { email, password } = form

  let navigate = useNavigate()

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()

      const config = {
        headers : {
          "Content-type" : "application/json"
        }
      }

      //XML to String
      const body = JSON.stringify(form)

      //Insert data
      const response = await API.post("/login", body, config)
      
      if (response?.status == 200) {
        // Send data to useContext
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data.user,
        });

        console.log(response.data.data.user.role);

        // Status check
        if (response.data.data.user.role == "Admin") {
          navigate("/transactions");
          document.location.reload(true)
        } else {
          navigate("/profile");
          document.location.reload(true)
        }

        /*
        const alert = (
          <Alert variant="success" className="py-1">
            Login success
          </Alert>
        );
        setMessage(alert);
        */
      }
    
    } catch (error) {
      let errorAlert = error.response.request.response
      errorAlert = errorAlert.replace('{"status":"Failed","message":', '')
      errorAlert = errorAlert.replace('{"error":{"message":', '')
      errorAlert = errorAlert.replace('fullName', 'Full name')
      errorAlert = errorAlert.replace(/[^\w\s]/gi, '')

      //capitalize first letter
      function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      errorAlert = capitalizeFirstLetter(errorAlert)

      alert(errorAlert)
    }
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
      <div className='px-5'>
        <h1 className='text-danger py-4 fw-bold'>Login</h1>
        <div className='d-flex flex-column'>

          <form id="loginForm" onSubmit={handleSubmit}>
            <InputGroup className='py-1 mb-3'>
                <FormControl className='border border-danger bg-light'
                    type='email'
                    placeholder="Email"
                    aria-label="Email"
                    value={email}
                    name="email"
                    onChange={handleChange}
                />
            </InputGroup>
            <InputGroup className='py-1 mb-3'>
                <FormControl className='border border-danger bg-light'
                    type='password'
                    placeholder="Password"
                    aria-label="Password"
                    value={password}
                    name="password"
                    onChange={handleChange}
                />
            </InputGroup>
            <button type="submit" className='btn btn-danger px-3 py-2 mb-4'>Login</button>
          </form>
        </div>
        <center className='pb-4'>Don't have an account? Klik <span className='text-decoration-none text-black fw-bold' style={{cursor:"pointer"}} onClick={props.switchToRegister}> Here</span></center>
      </div>
      </Modal.Body>
    </Modal>
  );
}

function MyRegisterModal(props) {

  //Store form input data
  const [form, setForm] = useState({
    fullName : "",
    email : "",
    password : ""
  })

  const { fullName, email, password } = form

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()

      const config = {
        headers : {
          'Access-Control-Allow-Origin': '*',
          "Content-type" : "application/json"
        }
      }

      //XML to String
      const body = JSON.stringify(form)

      //Insert data
      const response = await API.post("/register", body, config)

      console.log(response);

      // Notification
      if (response.data.status == "Success") {
        document.getElementById("switchToLoginText").click()
        alert("Registration success!")
      } else {
        alert("Failed")
      }
    
    } catch (error) {
      let errorAlert = error.response.request.response
      errorAlert = errorAlert.replace('{"status":"Failed","message":', '')
      errorAlert = errorAlert.replace('{"error":{"message":', '')
      errorAlert = errorAlert.replace('fullName', 'Full name')
      errorAlert = errorAlert.replace(/[^\w\s]/gi, '')

      //capitalize first letter
      function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      errorAlert = capitalizeFirstLetter(errorAlert)

      alert(errorAlert)
    }
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
      <div className='loginBox px-5'>
        <h1 className='text-danger py-4 fw-bold'>Register</h1>
        <div className='loginInput d-flex flex-column'>
          <form id="registerForm" onSubmit={handleSubmit}>
            <InputGroup className='py-1 mb-3'>
              <FormControl className='border border-danger bg-light'
                type='email'
                placeholder="Email"
                aria-label="Email"
                value={email}
                name="email"
                onChange={handleChange}
              />
              </InputGroup>
              <InputGroup className='py-1 mb-3'>
                <FormControl className='border border-danger bg-light'
                  type='password'
                  placeholder="Password"
                  aria-label="Password"
                  value={password}
                  name="password"
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroup className='py-1 mb-3'>
                <FormControl className='border border-danger bg-light'
                  placeholder="Full Name"
                  aria-label="Full Name"
                  value={fullName}
                  name="fullName"
                  onChange={handleChange}
                />
              </InputGroup>
              <button type="submit" className='btn btn-danger px-3 py-2 mb-4'>Register</button>  
          </form>
        </div>
        <center className='pb-4'>Already have an account? Klik <span id="switchToLoginText" className='text-decoration-none text-black fw-bold' style={{cursor:"pointer"}} onClick={props.switchToLogin}> Here</span></center>
      </div>
      </Modal.Body>
    </Modal>
  );
}

function NavigationBar() {
  const [loginShow, setLoginShow] = React.useState(false);
  const [registerShow, setRegisterShow] = React.useState(false);

  const [state, dispatch] = useContext(UserContext);

  const [onCart, setOnCart] = useState(0)

  const getOnCart = async () => {
    try {
        const response = await API.get("/getcart")
        var data = response.data.data.onCart
        setOnCart(data.length)
    } catch (error) {
        console.log(error);
    }
  }

  function handleSwitchLogin(){
    setLoginShow(false)
    setRegisterShow(true)
  }

  function handleSwitchRegister(){
    setLoginShow(true)
    setRegisterShow(false)
  }

  let navigate = useNavigate()

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/")
  };

  const goToProfile = () => {
    navigate("/profile")
  }

  const goToAddProduct = () => {
    navigate("/add-product")
  }

  const goToAddTopping = () => {
    navigate("/add-topping")
  }

  const goToCart = () => {
    navigate("/cart")
  }

  useEffect(() => {
    getOnCart();
  }, []);

  return (
    <Navbar>
      <Container>
        {
          ( () => {
            if(state.isLogin){
              if(state.user.role == "Admin"){
              return(
                <Navbar.Brand href="/transactions">
                  <img
                    src={img}
                    width="80"
                    height="80"
                    className="d-inline-block align-top"
                    alt="Logo WaysBucks"
                  />
                </Navbar.Brand>
              )
              } else if (state.user.role == "Customer"){
              return(
                <Navbar.Brand href="/">
                  <img
                    src={img}
                    width="80"
                    height="80"
                    className="d-inline-block align-top"
                    alt="Logo WaysBucks"
                  />
                </Navbar.Brand>
              )
              }
            } else {
            return(
              <Navbar.Brand href="/">
                <img
                  src={img}
                  width="80"
                  height="80"
                  className="d-inline-block align-top"
                  alt="Logo WaysBucks"
                />
              </Navbar.Brand>
            )
            }
          })()
        }
        <Navbar.Collapse className="justify-content-end">
        {
          ( () => {
            if(state.isLogin){
              if(state.user.role == "Admin"){
                //Menu admin
              return(
                <Stack direction="horizontal" gap={4}>
                <div class="btn-group">
                  <button class="btn shadow-none pe-0" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={adminPic} width="60" height="60" className='rounded-circle border border-4 border-danger' alt="profilepic" />
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li onClick={goToAddProduct} className='d-flex align-items-center'>
                      <button class="btn shadow-none px-2 pe-2 py-4 d-flex align-items-center">
                        <div>
                          <img src={productAddIcon} width="40" height="40" alt="profile" />
                        </div>
                        <div className='ms-2'>
                          Add Product
                        </div>
                      </button>
                    </li>
                    <li onClick={goToAddTopping} className='d-flex align-items-center'>
                      <button class="btn shadow-none px-2 ps-2 py-4 d-flex align-items-center">
                        <div>
                          <img src={toppingAddIcon} width="40" height="40" alt="profile" />
                        </div>
                        <div className='ms-2'>
                          Add Topping
                        </div>
                      </button>
                    </li>
                    <li onClick={logout} className='d-flex border-3 border-secondary border-top'>
                      <button class="btn shadow-none px-3 pe-5 py-4 d-flex align-items-center">
                        <div>
                          <img src={logoutImg} width="40" height="40" alt="logout" />
                        </div>
                        <div className='ms-2'>
                          Logout
                        </div>
                      </button>
                    </li> 
                  </ul>
                </div>
                </Stack>
              )
              } else if (state.user.role == "Customer"){
                //Menu customer
              return(
                <Stack direction="horizontal" gap={4}>
                <div onClick={goToCart} className='pe-1' style={{cursor:"pointer", position:"relative"}}>
                  <img src={cart} width="35" height="35" alt="my-cart" />
                  <span className='badge bg-danger rounded-circle' style={{position:"absolute", top:"5px", right:"0", fontSize:"12px", padding:"2px 4px"}}>{onCart}</span>
                </div>

                <div class="btn-group">
                  <button class="btn shadow-none pe-0" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={profilePic} width="60" height="60" className='rounded-circle border border-4 border-danger' alt="profilepic" />
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li onClick={goToProfile} className='d-flex align-items-center border-1 border-secondary border-bottom'>
                      <button class="btn shadow-none px-3 pe-5 py-4 d-flex align-items-center">
                        <div>
                          <img src={profile} width="40" height="40" alt="profile" />
                        </div>
                        <div className='ms-3'>
                          Profile
                        </div>
                      </button>
                    </li>
                    <li onClick={logout} className='d-flex border-1 border-secondary border-top'>
                      <button class="btn shadow-none px-4 pe-5 py-4 d-flex align-items-center">
                        <div>
                          <img src={logoutImg} width="40" height="40" alt="logout" />
                        </div>
                        <div className='ms-2'>
                          Logout
                        </div>
                      </button>
                    </li>  
                  </ul>
                </div>
                </Stack>
              )}
            } else {
              //Menu login register
              return(
                <Stack direction="horizontal" gap={3}>
                  <Button value="login" className='px-5' variant="outline-danger" onClick={() => setLoginShow(true)}>Login</Button>{' '}
                  <Button value="register" className='px-5 bg-2' variant="danger" onClick={() => setRegisterShow(true)}>Register</Button>{' '}
                </Stack>
              )
            }
          })()
        }
        </Navbar.Collapse>
      </Container>

      <MyLoginModal
        show={loginShow}
        onHide={() => setLoginShow(false)}
        switchToRegister={handleSwitchLogin}
      />

      <MyRegisterModal
        show={registerShow}
        onHide={() => setRegisterShow(false)}
        switchToLogin={handleSwitchRegister}
      />
    </Navbar>
  )
}

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

export default NavigationBar;