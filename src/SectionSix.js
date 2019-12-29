import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'


const SectionSix= ()=>{
  return(

    <div className="best">
    <h2>Latest News</h2>

    <Container>
    <Row>
    <Col className="overlap">
    <img
    className="d-block w-100"
    src="images/carol1.jpg"
    alt="First slide"
    />
    <figcaption className="style6x1">SEPTEMBER 09,2019
    </figcaption>
    <figcaption className="style6x">
    NIKE SB ORANGE LABEL ISHOD WAIR JACKET - MEDIUM OLIVE/SEQUIRE
     <br/>$29.0</figcaption>
    </Col>

    <Col className="overlap">
    <img
    className="d-block w-100"
    src="images/carol2.jpg"
    alt="First slide"
    />
    <figcaption className="style6x1">SEPTEMBER 09,2019
    </figcaption>
    <figcaption className="style6x">
    NIKE SB ORANGE LABEL ISHOD WAIR JACKET - MEDIUM OLIVE/SEQUIRE
     <br/> $29.0</figcaption>
    </Col>

    <Col className="overlap">
    <img
    className="d-block w-100"
    src="images/carol3.jpg"
    alt="First slide"
    />
    <figcaption className="style6x1">SEPTEMBER 09,2019
    </figcaption>
    <figcaption className="style6x">
    NIKE SB ORANGE LABEL ISHOD WAIR JACKET - MEDIUM OLIVE/SEQUIRE
     <br/> $29.0</figcaption>
    </Col>
    </Row>
    </Container>
    </div>

  )
}

export default SectionSix
