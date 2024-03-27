


import { Footer, Header } from '../Components/Layout'
import DestinationList from '../Components/Page/Destination/DestinationList'




const Home = ()=> {
  return (
    <div>
      <Header/>  
      
      <div className="row">
        <DestinationList/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home