import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'


const SectionFour =()=>{
  return(
    <Container-grid className='twosectioncol'>
   <Row>
    <Col>
    <img
    className="d-block w-100" id="over"
    src="images/Polar_Summer19_Blog_12_700x.jpg"
    alt="First slide"
    />
    </Col>

    <Col>
    <img
    className="d-block w-100" id="over"
    src="images/Blog_Polar_LK_Grey_394x.png"
    alt="First slide"
    />
    </Col>
    </Row>
    </Container-grid>
  )
}

export default SectionFour
