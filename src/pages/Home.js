import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Navbar from '../components/LandingPage/Navbar'
import Jumbotron from '../components/LandingPage/Jumbotron';
import Menu from '../components/LandingPage/Menu'

import { API } from "../config/api";

function Home() {

  // Variabel for store product data
  const [products, setProducts] = useState([]);

  // Get product data from database
  const getProducts = async () => {
    try {
      const response = await API.get("/products");
      // Store product data to useState variabel
      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
        <Navbar />
        <Jumbotron />

        <Container>
          <Row>
            <Col>
            <h2 className='mx-5 my-5 fw-bold color1'>Let's Order</h2>
            </Col>
          </Row>
          <Row className="row row-cols-4">
            {products.length !== 0 ? (
              <>
                {products.products.map((item, index) => (
                  <Menu item={item} key={index} />
                ))}
              </>
            ) : (
              <Col>
                <div className="text-center pt-5">
                  <div className="mt-3">No data product</div>
                </div>
              </Col>
            )}
          </Row>
        </Container>
    </div>
  );
}

export default Home;
