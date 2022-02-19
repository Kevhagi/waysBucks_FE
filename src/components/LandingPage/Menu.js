import React from 'react';
import { Link } from "react-router-dom"
import convertRupiah from "rupiah-format";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import '../LandingPage/css/Menu.css'

function Menu({item}) {
  return (
      <div className='col'>
        <CardGroup className='ms-5 mb-5'>
            <Link to={`/product/` + item.id} style={{ textDecoration: "none" }}>
            <Card className='pink' border="white" style={{borderRadius: '13px'}}>
                <Card.Img variant="top" src={item.productImage} />
                <Card.Body>
                <Card.Title className='fw-bold color1'>{item.productName}</Card.Title>
                <Card.Text className='color2'>{convertRupiah.convert(item.productPrice)}</Card.Text>
                </Card.Body>
            </Card>
            </Link>
        </CardGroup>  
      </div>
  )
}

export default Menu;
