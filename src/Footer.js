import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Socials from './Socials'



const Footer = ()=> {
  return(
     <div className="Fot">
     <Container className="Fot1">
         <Row>
           <Col sm={4}>
           <div className="F">
            About <br/>
            </div>
            <br/>
            <div className="F2">
            An Independent UK Skateboard retailer since '97- Shop online and in-store for
            Skateboarding,<br/> Clothing, Shoes and More.</div>
           </Col>
           <Col sm={2}>
           <div className="F">
           Store <br/>
           </div>
           <br/>
           <div className="F2">
            23 Albert Road
            Southsea <br/>
            PO5 2SE
           </div>
            </Col>
           <Col sm={4}>
           <div className="F">
            Get in touch <br/>
            </div>
            <br/>
            <div className="F2">
            Mon - Sat: 9:30am - 6pm / Sun: 11am - 4pm<br/>
            +44(0)2392 426 388 <br/>
            +234 81 3133 2637 <br/>
            +234 80 7957 6248
            shop@boredofsouthsea.co.uk
            </div>
            </Col>
           <Col sm={2}>
           <div className="F">
           Social
           </div>


           </Col>
         </Row>

       <Row>
         <Col sm={9} className="F1">
          About &nbsp;
          Delivery & Returns &nbsp;
          Contact &nbsp;
          Terms & Conditions &nbsp;
          Privacy &nbsp;
          Cookies &nbsp;
         </Col>
         <Col sm={4}>
         </Col>
       </Row>


       <Row>
       <Col sm={4}>
       <div className="F21">
       &copy; 2019 Bored of Southsea. Website by Oyelese Timilehin Samuel.
       </div>
       </Col>
       <Col sm={4}></Col>
       <Col sm={4}></Col>
       </Row>
    </Container>
     </div>

  )
}


 export default Footer
