// import React from 'react'
// import { Footer, ResponsiveNavbar } from '../../Layout';
// import { FaInstagram, FaFacebook, FaGoogle, FaYoutube } from 'react-icons/fa';


// const Privacy = () => {
//   return (
//     <div className="container">
//       <ResponsiveNavbar/>
//         {/* <NavbarLand/> */}
//         {/* <div className="">  */}
//         <div><h1 className='text-center'>privacy policy</h1></div> 
//         <div className="p1">This privacy policy sets out how Explore nepal uses and protects any information that you give Explore Nepal when you use this website.</div>
//         <div className="mt-4">Explore  nepal is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be<br/>
//         identified when using this website, then you can be
//          assured that it will only be used in accordance with this privacy statement.</div>
//         <div className="my-5">Explore nepal may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are<br/>
//         happy with any changes. This policy is effective from 1/04/2013.</div>
//         <div className="mini-heading my-4">
//         <div className="h3"> What data do we collect, use, and share?</div>
//         </div>
//         <div className="mx-5">Personal Identifiers, such as your name, alias, postal address, email address, telephone number, online identifier, Internet Protocol<br/>
//         address, account name, education, employment, credit or debit card number, any financial information as well as information<br/>
//         considered sensitive such as social security number, account log-in, and any information on your government identification cards.<br/>
//         Providing our Services and carrying out your requests.</div>

//         {/* </div> */}
//         <div className="mini-heading"> 
//         <div className="h3 mt-5">Purpose of collecting personal information?</div>
//         </div>
//         <div className="ms-5 my-4">
//           <li> To register and secure your account.</li>
//           <li>To receive and respond to calls and messages from you.</li>
//           <li>To check your identity and eligibility for our Services.</li>
//           <li>To help you get the best pricing and products we have.</li>
//           <li>To direct you to the websites of our partners.</li>
//           <li>To process transactions between you and us, or our partners.</li>
//           <li>To personalize the Service you get.</li>
//           <li>To keep your data up to date.</li>
//           <li>To provide customer service and support.</li>
//           <li>To complete data rights requests you have made.</li>
//           <li>To enable you to use social sharing tools.</li>
//           <li>To track sales and get paid by our partners.</li>
//           <li>To allow you to use our Services on one device and pick up seamlessly where you left off on another device.</li>
//         </div>
//         <div>Improving and promoting our Services and those of others.</div>
//         <div className='my-4'>To help improve and promote our Services, and the Services of our partners, we may use your data:</div>
//         <div className='ms-5 my-4'>
//           <li>To carry out analysis and market research.</li>
//           <li>To help present our Services clearly and in the most effective way.</li>
//           <li>To run sweepstakes and surveys.</li>
//           <li>To help us and our partners create better products for you.</li>
//           <li>To process any rewards we may offer to you.</li>
//           <li>To send updates and Service messages about your products and services.</li>
//           <li>To let you know about our services and promotions by email, social media (e.g., Facebook), and using push notifications (where you agree).</li>
//           <li>To let you know about the Services of other Red Ventures’ brands.</li>
//           <li>To build, train, and augment models which help us understand your likely interests and those of other consumers.</li>
//           <li>To target advertising to you, on this and other websites, based on data we have collected or created.</li>
//           <li>To provide location-based offers based on your device’s physical location (where you agree).</li>
//           <li>To help us understand if and how our and others marketing works. </li>
//         </div>
//         <div className='p7'>Please note:We do not use profiling in a way that could have legal or similar effects.</div>
//         <div className='h2 my-4'>Security</div>
        
//         <div className='p8'>
//           We are committed to ensuring that your information is secure. In order<br/>
//           to prevent unauthorised access or disclosure we have put in place suitable<br/> 
//           physical, electronic and managerial procedures to safeguard and secure the<br/> 
//           information we collect online.
          
//         </div>

//         {/* ----------------------------------------- */}


//        <Footer/>
        
//     </div>
//   )
// }

// export default Privacy


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Using Bootstrap 5 components
import { Footer, ResponsiveNavbar } from '../../Layout';
import { FaInstagram, FaFacebook, FaGoogle, FaYoutube } from 'react-icons/fa';

const Privacy = () => {
  return (
    <div className="privacy-policy">
      <ResponsiveNavbar />

      <Container className="mt-5">
        <Row>
          <Col xs={12} className="text-center">
            <h1 className="privacy-title">Privacy Policy</h1>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={12}>
            <p className="privacy-text">
              This privacy policy sets out how Explore Nepal uses and protects any information that you give Explore Nepal when you use this website.
            </p>
            <p className="privacy-text mt-2">
              Explore Nepal is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.
            </p>
            <p className="privacy-text mt-3">
              Explore Nepal may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. This policy is effective from 1/04/2013.
            </p>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={12}>
            <h3 className="privacy-subheading">What data do we collect, use, and share?</h3>
            <p className="privacy-text mt-2">
              We collect a variety of information, including:
            </p>
            <ul className="privacy-list ms-5 mt-2">
              <li>Personal Identifiers: Name, address, email, phone number, etc.</li>
              <li>Online Information: IP address, account information, browsing data.</li>
              <li>Financial Information (if applicable): Credit card details (for transactions).</li>
            </ul>
            <p className="privacy-text mt-3">
              We use this information to:
            </p>
            <ul className="privacy-list ms-5 mt-2">
              <li>Provide and improve our services.</li>
              <li>Process transactions and fulfill requests.</li>
              <li>Personalize your experience.</li>
              <li>Communicate with you about our services and promotions (with your consent).</li>
              <li>Analyze and improve our offerings.</li>
              <li>Comply with legal and regulatory requirements.</li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={12}>
            <h3 className="privacy-subheading">Security</h3>
            <p className="privacy-text mt-2">
              We are committed to protecting your information. We implement appropriate physical, electronic, and managerial procedures to safeguard the information we collect.
            </p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Privacy;
