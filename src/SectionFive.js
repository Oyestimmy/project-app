import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'


const SectionFive = ()=> {
  return(
    <Container-grid className="Brands">
    <h2>Popular Categories</h2>
    <Row>
      <Col className="overlap">
        <img
        className="d-block w-100"
        src="images/Popular_Cats_Shorts_4_295x.jpg"
        alt="First slide"
        />
      </Col>

      <Col className="overlap">
        <img
        className="d-block w-100"
        src="images/Popular_Cats_Shoes_2_295x.jpg"
        alt="First slide"
        />
      </Col>

      <Col className="overlap">
      <img
        className="d-block w-100"
        src="images/Popular_Cats_Tee_5_295x.jpg"
        alt="First slide"
        />
        </Col>
        </Row>
        </Container-grid>
  )
}

export default SectionFive
