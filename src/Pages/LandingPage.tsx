import React from 'react'
import { ResponsiveNavbar } from '../Components/Layout'
import { Home } from '.'
import { AboutUs, Destination, Landing, Rate, Service, Trek, WhyUs } from '../Components/Page'
import { Footer } from 'react-bootstrap/lib/Modal'

type Props = {}

const LandingPage = () => {
  return (
    <div>
        <ResponsiveNavbar/>
    </div>
  )
}

export default LandingPage