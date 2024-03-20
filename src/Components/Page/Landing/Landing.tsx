import React from 'react'
import { Footer, ResponsiveNavbar } from '../../Layout'
import { Home } from '@/src/Pages'
import { AboutUs, Destination, Rate, Service, Trek, WhyUs } from '..'
import { Header } from '../../Layout'


const Landing = () => {
  return (
    <div  style={{backgroundColor: "#D9D9D9"}}>
      <Header/>
      <br/>
      <Destination/>
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