// import React from 'react'
// import { ResponsiveNavbar } from '../../Layout';
// import { FaInstagram, FaFacebook, FaGoogle, FaYoutube } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <div className='h-90 w-90 bg-dark rounded d-flex ml-5 mt-4 mb-5'>
//     <div className='text-info mx-5' >
//       <h3>Follow Us </h3>

// <FaInstagram size={30} color="#833AB4" className="mx-2" />
// <FaFacebook size={30} color="#3B5998" className="mx-1" />
// <FaGoogle size={30} color="#DB4437" className="mx-1" />
// <FaYoutube size={30} color="#FF0000" className='mx-2' />

// <p className='mt-5 text-light '>About Us <br/> Contact Us <br/>
// Privacy and Policy <br/> Terms and Conditions</p>
// <p className='text-light mt-5 '>@2024 ExploreNepal.com</p>
// <p className='font-italic text-light'>All images are created by the Respective Authors</p>
//   </div>
//   {/* ----- */}
//   <div className='text-light mx-5 p-5'>
//     <p>Disclaimer <br/> Work with us</p>
//   </div>
//   {/* ------ */}
//   <div className='mx-5'>
//     <h3 className='text-info'>Contact Us</h3>
//     <p className='text-light mb-0'>98245623745</p>
//     <p className='text-light mb-0'>Sun to Fri - 7:00 AM to 5:00 PM</p>
//     <p className='text-light '>Saturday - 10:00 AM to 4:00 PM</p>
//     <h3 className='text-info'>Kathmnadu Office</h3>
//     <p className='text-light mb-0'>06, Mitrapark, Siphal Texas Colege Road</p>
//     <p className='text-light '>Kathmandu, Chabahil</p>
//   </div>

//   </div>

//   )
// }

// export default Footer

import React from "react";
import { FaInstagram, FaFacebook, FaGoogle, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container bg-dark rounded-3 h-75" >
      <div className="row">
        <div className="col-md-4 mb-4 mb-md-0">
          <div className="text-info">
            <h3>Follow Us </h3>
            <FaInstagram size={30} color="#833AB4" className="mx-2" />
            <FaFacebook size={30} color="#3B5998" className="mx-1" />
            <FaGoogle size={30} color="#DB4437" className="mx-1" />
            <FaYoutube size={30} color="#FF0000" className="mx-2" />
            <p className="mt-3 text-light " style={{marginTop:"70px"}}>
              About Us <br /> Contact Us <br />
              Privacy and Policy <br /> Terms and Conditions
            </p>
            <p className="text-light mt-5">@2024 ExploreNepal.com</p>
            <p className="font-italic text-light">
              All images are created by the Respective Authors
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-4 mb-md-0">
          <div className="text-light p-3">
            <p>
              Disclaimer <br /> Work with us
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="px-3">
            <h3 className="text-info">Contact Us</h3>
            <p className="text-light mb-2">98245623745</p>
            <p className="text-light mb-2">Sun to Fri - 7:00 AM to 5:00 PM</p>
            <p className="text-light mb-3">Saturday - 10:00 AM to 4:00 PM</p>
            <h3 className="text-info">Kathmnadu Office</h3>
            <p className="text-light mb-2">
              06, Mitrapark, Siphal Texas Colege Road
            </p>
            <p className="text-light ">Kathmandu, Chabahil</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
