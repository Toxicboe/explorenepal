// import React from "react";
// import { ResponsiveNavbar } from "../../Layout";
// import "bootstrap/dist/css/bootstrap.min.css";
// import khaptad from "../../../assets/Images/khaptad.jpg";

// const AboutUs = () => {
//   return (
//     <div className="bg-info">
     
//       <div className="container">
//         <h1 className="text-center" style={{ fontStyle: "italic" }}>
//           About Us
//         </h1>
//         <div className="row">
//           <div className="col-md-12">
//             <img
//               src={khaptad}
//               alt="simba"
//               className="img-fluid rounded"
//               style={{ width: "100%", height: "400px" }}
//             />
//           </div>
//         </div>
//         <div className="row mt-3">
//           <div className="col-md-12">
//             <p>
//               "Welcome to Explore Nepal, your gateway to the breathtaking beauty
//               and rich cultural tapestry of this Himalayan jewel. Our web app
//               is a labor of love dedicated to showcasing the diverse landscapes,
//               vibrant traditions, and hidden gems that make Nepal a truly unique
//               destination. Immerse yourself in the stunning mountain vistas,
//               discover ancient temples, and connect with the warm-hearted locals
//               who make this country so special. Whether you're an avid trekker
//               seeking adventure, a history enthusiast delving into centuries-old
//               heritage, or a wanderer yearning for a serene escape, Explore
//               Nepal is your digital companion on a journey of discovery. Join us
//               as we celebrate the splendor of Nepal, and let this platform be
//               your virtual passport to an unforgettable experience in the heart
//               of the Himalayas."
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;


import React from 'react';
import khatpad from '../../../assets/Images/khaptad.jpg';

const AboutUs = () => {
  return (
    <div className='bg-info min-vh-100 p-5 my-0 rounded-5'>
    
  
        <h1 className="d-flex justify-content-center align-items-center " style={{ fontSize: "60px" }}>About Us</h1>

        <img
          src={khatpad}
          alt="kdjj"
          className='w-100 my-4'
      
          style={{ objectFit: "cover", borderRadius: "25px" ,height:"360px"}}
        />

        <div className='mt-3'>
        <p className="justify-content-center">
          Welcome to Explore Nepal, your gateway to the breathtaking beauty and rich cultural tapestry of this Himalayan jewel. Our web app is a labor of love dedicated to showcasing the diverse landscapes, vibrant traditions, and hidden gems that make Nepal a truly unique destination. Immerse yourself in the stunning mountain vistas, discover ancient temples, and connect with the warm-hearted locals who make this country so special. Whether you're an avid trekker seeking adventure, a history enthusiast delving into centuries-old heritage, or a wanderer yearning for a serene escape, Explore Nepal is your digital companion on a journey of discovery. Join us as we celebrate the splendor of Nepal, and let this platform be your virtual passport to an unforgettable experience in the heart of the Himalayas."
        </p>

        </div>
          
          </div>
  

  );
};

export default AboutUs;
