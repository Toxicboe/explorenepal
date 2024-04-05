
import { Footer, Header } from '../Components/Layout'
import { ContactUs, Rate, Service, WhyUs } from '../Components/Page'
import DestinationList from '../Components/Page/Destination/DestinationList'




const Home = ()=> {
  return (
    <div>
      <Header/>  
      
      <div className="row">
        <DestinationList/>

      </div>
      <Rate/>
      <Service/>
      <WhyUs/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home