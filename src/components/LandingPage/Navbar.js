import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Modal from 'react-bootstrap/Modal'
import { InputGroup, FormControl } from 'react-bootstrap'
import img from './img/logo.svg'

function MyLoginModal(props) {
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
            <InputGroup className='py-1 mb-3'>
                <FormControl className='border border-danger bg-light'
                    type='email'
                    placeholder="Email"
                    aria-label="Email"
                />
            </InputGroup>
            <InputGroup className='py-1 mb-3'>
                <FormControl className='border border-danger bg-light'
                    type='password'
                    placeholder="Password"
                    aria-label="Password"
                />
            </InputGroup>
            <Button variant="danger" className='px-3 py-2 mb-4'>Login</Button>
        </div>

        <center className='pb-4'>Don't have an account? Klik <span className='text-decoration-none text-black fw-bold' style={{cursor:"pointer"}}> Here</span></center>
      </div>
      </Modal.Body>
    </Modal>
  );
}

function MyRegisterModal(props) {

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
            <InputGroup className='py-1 mb-3'>
                <FormControl className='border border-danger bg-light'
                    type='email'
                    placeholder="Email"
                    aria-label="Email"
                />
            </InputGroup>
            <InputGroup className='py-1 mb-3'>
                <FormControl className='border border-danger bg-light'
                    type='password'
                    placeholder="Password"
                    aria-label="Password"
                />
            </InputGroup>
            <InputGroup className='py-1 mb-3'>
                <FormControl className='border border-danger bg-light'
                    placeholder="Full Name"
                    aria-label="Full Name"
                />
            </InputGroup>
            <Button variant="danger" className='px-3 py-2 mb-4'>Register</Button>
        </div>

        <center className='pb-4'>Already have an account? Klik <span className='text-decoration-none text-black fw-bold' style={{cursor:"pointer"}}> Here</span></center>
      </div>
      </Modal.Body>
    </Modal>
  );
}


function NavigationBar() {
  const [loginShow, setLoginShow] = React.useState(false);
  const [registerShow, setRegisterShow] = React.useState(false);
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
          <Stack direction="horizontal" gap={3}>
            <Button value="login" className='px-5' variant="outline-danger" onClick={() => setLoginShow(true)}>Login</Button>{' '}
            <Button value="register" className='px-5 bg-2' variant="danger" onClick={() => setRegisterShow(true)}>Register</Button>{' '}
          </Stack>
        </Navbar.Collapse>
      </Container>

      <MyLoginModal
        show={loginShow}
        onHide={() => setLoginShow(false)}
      />

      <MyRegisterModal
        show={registerShow}
        onHide={() => setRegisterShow(false)}
      />
    </Navbar>
  )
}

export default NavigationBar;