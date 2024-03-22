import { Footer, Header, ResponsiveNavbar } from "../Components/Layout";
import {
  Booking,
  ContactUs,
  Privacy,
  TaC,
  Destination,
  UserProfile,
  AboutUs,
  Register,
  WhyUs,
  Service,
  Rate,
  Trek,
  Landing,
  DestinationDetail,
  GuideInformation,
} from "../Components/Page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, LoginPage, NotFound, ContactUsPage,  } from "../Pages";
// import Register from "../Components/Page/Login/Register";
// import UserProfile from "../Components/Page/UserProfile/UserProfile";
// import TaC from "../Components/Page/Privacy/TaC";

function App() {
  return (
    <BrowserRouter>
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
        <Route path="destination" element={<Destination/>}/>
        <Route path="trek" element={<Trek/>}/>
        <Route path="landing" element={<Landing/>}/>
        <Route path="destinationdetail" element={<DestinationDetail/>}/>
        <Route path="guideinformation" element={<GuideInformation/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
