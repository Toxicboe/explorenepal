import { Footer,  ResponsiveNavbar } from "../Components/Layout";
import {
  // Booking,
  // ContactUs,
  Privacy,
  TaC,
  //Destination,
  UserProfile,
  AboutUs,
  Register,
  WhyUs,
  Service,
  Rate,
  Trek,
  Landing,
 // DestinationDetail,
  GuideInformation,
} from "../Components/Page";
import { Routes, Route } from "react-router-dom";
import {  Home,LoginPage, NotFound, ContactUsPage,  } from "../Pages";
//import DestinationDetail from "../Components/Page/Destination/DestinationDetail";
import DestinationDetails from "../Pages/DestinationDetails";


// import Register from "../Components/Page/Login/Register";
// import UserProfile from "../Components/Page/UserProfile/UserProfile";
// import TaC from "../Components/Page/Privacy/TaC";

function App() {

  
  return (
   
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="register" element={<Register />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contactuspage" element={<ContactUsPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tac" element={<TaC />} />
        <Route path="/responsivenavbar" element={<ResponsiveNavbar />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="rate" element={<Rate />} />
        {/* <Route path="/destinationpage" element={<DestinationPage/>}/> */}
        
        <Route path="trek" element={<Trek/>}/>
        <Route path="landing" element={<Landing/>}/>
        {/* <Route path="/destinationdetails/:code" element={<DestinationDetail/>}/> */}
        {/* <Route path="/destinationdetails" element={<DestinationDetails />}/>  */}
        <Route path="/destinationdetails/:code" element={<DestinationDetails  />} />

        <Route path="guideinformation" element={<GuideInformation/>}/>
      </Routes>
 
  );
}

export default App;


