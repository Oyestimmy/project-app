import React, {Component} from 'react'
import {Carousel, Button} from 'react-bootstrap'



const Carousels = ()=>{
  return(

    <Carousel>

     <Carousel.Item>
     <img
       className="d-block w-100"
       src="images/polar.jpg"
       alt="First Slide"
       />

       <Carousel.Caption>
       <h3>Slay Like never before</h3>

       <p>swipe left</p>
       </Carousel.Caption>
       </Carousel.Item>

       <Carousel.Item>
       <img
       className="d-block w-100"
       src="images/ska.jpeg"
       alt="Second slide"
       />

       <Carousel.Caption>
       <h3>Slay Like never before</h3>
       <p>swipe left</p>
       </Carousel.Caption>
       </Carousel.Item>


       <Carousel.Item>
       <img
       className="d-block w-100"
       src="images/whitesnks.jpeg"
       alt="Third slide"
       />

       <Carousel.Caption>
         <h3>Slay Like never before</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
         </Carousel.Caption>
         </Carousel.Item>



         </Carousel>


 )
}
export default Carousels
