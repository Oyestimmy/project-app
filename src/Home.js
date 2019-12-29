import React from 'react'
import Carousels from './Carousels'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SectionSix from './SectionSix'
import Footer from './Footer.js'


const Home =()=>{
  return(
  <div>
  <Carousels/>
  <SectionTwo/>
  <SectionFive/>
  <br/>
  <br/>
  <SectionThree/>
  <br/>
  <SectionFour/>
  <SectionSix/>
  <Footer/>
  </div>
)
}

export default Home
