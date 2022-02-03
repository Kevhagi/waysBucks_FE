import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Modal from 'react-bootstrap/Modal'
import img from './img/logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';



function MyVerticallyCenteredModal(props) {

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function NavigationBar() {
  const [modalShow, setModalShow] = React.useState(false);
  return(
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
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
            <Button href="#login" value="login" className='px-5' variant="outline-danger" onClick={()=> setModalShow(true)}>Login</Button>{' '}
            <Button href="#register" value="register" className='px-5' variant="danger" onClick={()=> setModalShow(true)}>Register</Button>{' '}
          </Stack>
        </Navbar.Collapse>
      </Container>

      <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
      />
      </Navbar>
  )
}

export default NavigationBar;