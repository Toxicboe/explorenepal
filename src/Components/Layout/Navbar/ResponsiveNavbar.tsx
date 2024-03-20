
// import React from 'react'
// import { Navbar, Nav, Container, NavLink } from 'react-bootstrap';
// import { Link } from 'react-router-dom';


// type Props = {}

// const ResponsiveNavbar = (props: Props) => {
//   return (
//     <Navbar  expand="lg">
//     <Container>
//       <Navbar.Brand href="#home">Explore Nepal</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
//         <Nav className="mr-auto">
//           <Nav.Item>
//             <Link to="/about" className="nav-link">About Us</Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Link to="/services" className="nav-link">Our Services</Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Link to="/destination" className="nav-link">Destination</Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Link to="/review" className="nav-link">Review</Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Link to="/contactus" className="nav-link">Contact Us</Link>
//           </Nav.Item>
//         </Nav>
//       </Navbar.Collapse>
//       <>
//                     <li className="nav-item text-white">
//                       <NavLink className="nav-link" to="/register">
//                         Register
//                       </NavLink>
//                     </li>
//                     <li className="nav-item text-white">
//                       <NavLink
//                         className="btn btn-success btn-outlined rounded-pill text-white mx-2"
//                         style={{
//                           border: "none",
//                           height: "40px",
//                           width: "100px",
//                         }}
//                         to="/login"
//                       >
//                         Login
//                       </NavLink>
//                     </li>
//                   </>
//     </Container>
//   </Navbar>
//   )
// }
// export default ResponsiveNavbar;



// import React from 'react';
// import { Navbar, Nav, Container, NavLink } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const ResponsiveNavbar = () => {
//   return (
//     <Navbar expand="lg" bg="light" variant="light">
//       <Container>
//         <Navbar.Brand href="#home">Explore Nepal</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
//           <Nav className="mr-auto">
//             <Nav.Item>
//               <Link to="/about" className="nav-link">About Us</Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Link to="/services" className="nav-link">Our Services</Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Link to="/destination" className="nav-link">Destination</Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Link to="/review" className="nav-link">Review</Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Link to="/contactus" className="nav-link">Contact Us</Link>
//             </Nav.Item>
//           </Nav>
//         </Navbar.Collapse>
//         <Nav>
//           <Nav.Item>
//             <Link to="/register" className="nav-link">Register</Link>
//           </Nav.Item>
//           <Nav.Item>
//             <NavLink
//               className="btn btn-success btn-outlined rounded-pill text-white mx-2"
//               style={{
//                 border: "none",
//                 height: "40px",
//                 width: "100px",
//               }}
//               to='/login'
//             >
//               Login
//             </NavLink>
//           </Nav.Item>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// };

// export default ResponsiveNavbar;


import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ResponsiveNavbar = () => {
  return (
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home" className='text-light'>Explore Nepal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center ">
          <Nav className="mr-auto">
            <Nav.Item>
              <Link to="/aboutus" className="nav-link text-light">About Us</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/services" className="nav-link text-light">Our Services</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/destination" className="nav-link text-light">Destination</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/review" className="nav-link text-light">Review</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contactus" className="nav-link text-light">Contact Us</Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Item className="text-light">
            <Link
                className="btn btn-success btn-outlined rounded-pill text-white m-4"
                style={{
                  border: "none",
                  height: "40px",
                  width: "100px",
                  
                }}
                to="/login"
              >
                Login
              </Link>
              <Link
                className="btn btn-success btn-outlined rounded-pill text-white m-4"
                style={{
                  border: "none",
                  height: "40px",
                  width: "100px",
                  
                }}
                to="/register"
              >
                Register
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ResponsiveNavbar;
