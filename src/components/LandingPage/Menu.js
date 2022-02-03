import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Product1 from './img/Product1.png'
import Product2 from './img/Product2.png'
import Product3 from './img/Product3.png'
import Product4 from './img/Product4.png'
import '../LandingPage/css/Menu.css'

function Menu() {
  return (
  <div className='container'>
      <h2 className='mx-5 my-5 fw-bold color1'>Let's Order</h2>
      
      <CardGroup className='mx-5 mb-5'>
        <Card className='me-4 pink' border="white" style={{borderRadius: '13px'}}>
            <Card.Img variant="top" src={Product1} />
            <Card.Body>
            <Card.Title className='fw-bold color1'>Ice Coffee Palm Sugar</Card.Title>
            <Card.Text className='color2'>Rp.27.000</Card.Text>
            </Card.Body>
        </Card>
        <Card className='me-4 pink' border="white" style={{borderRadius: '13px'}}>
            <Card.Img variant="top" src={Product2} />
            <Card.Body>
            <Card.Title className='fw-bold color1'>Ice Coffee Green Tea</Card.Title>
            <Card.Text className='color2'>Rp.31.000</Card.Text>
            </Card.Body>
        </Card>
        <Card className='me-4 pink' border="white" style={{borderRadius: '13px'}}>
            <Card.Img variant="top" src={Product3} />
            <Card.Body>
            <Card.Title className='fw-bold color1'>Hanami Latte</Card.Title>
            <Card.Text className='color2'>Rp.29.000</Card.Text>
            </Card.Body>
        </Card>
        <Card className='pink' border="white" style={{borderRadius: '13px'}}>
            <Card.Img variant="top" src={Product4} />
            <Card.Body>
            <Card.Title className='fw-bold color1'>Clepon Coffee</Card.Title>
            <Card.Text className='color2'>Rp.28.000</Card.Text>
            </Card.Body>
        </Card>
        </CardGroup>
  </div>
  )
}

export default Menu;
