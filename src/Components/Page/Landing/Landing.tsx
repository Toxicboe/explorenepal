import React from 'react'
import { Footer } from '../../Layout'

import { AboutUs, Rate, Service, Trek, WhyUs } from '..'
import { Header } from '../../Layout'


const Landing = () => {
  return (
    <div  style={{backgroundColor: "#D9D9D9"}}>
      <Header/>
      <br/>
     
      <br/>
      <Service/>
      <br/>
      <AboutUs/>
      <br/>
      <WhyUs/>
      <br></br>
      <Rate/>
      <br/>
      <Trek/>
      <br/>
      <Footer/>
    </div>
  )
}

export default Landing