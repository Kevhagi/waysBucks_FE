import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Modal from 'react-bootstrap/Modal'
import Login from './Login'
import Register from './Register'
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
        <Login />
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
        <Register />
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
            <Button value="register" className='px-5' variant="danger" onClick={() => setRegisterShow(true)}>Register</Button>{' '}
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