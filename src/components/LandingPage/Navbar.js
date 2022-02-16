import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext'
import { Navigate, useNavigate } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Modal from 'react-bootstrap/Modal'
import { InputGroup, FormControl } from 'react-bootstrap'
import img from './img/logo.svg'
import cart from './img/cart.svg'
import profilePic from './img/erisqu.jpg'

import {API} from '../../config/api'

function MyLoginModal(props) {

  const [state, dispatch] = useContext(UserContext);

  //Store form input data
  const [form, setForm] = useState({
    email : "",
    password : ""
  })

  const { email, password } = form

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
      const response = await API.post("/login", body, config)
      console.log(response.data.data.user);
      
      if (response?.status == 200) {
        // Send data to useContext
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data.user,
        });

        /*
        // Status check
        if (response.data.data.status == "admin") {
          history.push("/complain-admin");
        } else {
          history.push("/");
        }

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

  function handleSwitchLogin(){
    setLoginShow(false)
    setRegisterShow(true)
  }

  function handleSwitchRegister(){
    setLoginShow(true)
    setRegisterShow(false)
  }

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={img}
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="Logo WaysBucks"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {state.isLogin 
          ? <Stack direction="horizontal" gap={4}>
              <img src={cart} width="35" height="35" alt="my-cart" />
              <img src={profilePic} width="60" height="60" className='rounded-circle border border-4 border-danger' alt="profilepic" />
            </Stack>
          : <Stack direction="horizontal" gap={3}>
              <Button value="login" className='px-5' variant="outline-danger" onClick={() => setLoginShow(true)}>Login</Button>{' '}
              <Button value="register" className='px-5 bg-2' variant="danger" onClick={() => setRegisterShow(true)}>Register</Button>{' '}
            </Stack>
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

export default NavigationBar;