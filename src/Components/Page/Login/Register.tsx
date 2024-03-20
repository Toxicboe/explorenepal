// import { useRef, useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faGoogle,
//   faLinkedinIn,
// } from "@fortawesome/free-brands-svg-icons";
// import { Link } from "react-router-dom";
// import axios from "axios"; // Assuming axios is installed

// const REGISTER_URL = "https://localhost:44369/api/Account/register";

// const Register = () => {
//   const usernameRef = useRef();
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const confirmPasswordRef = useRef();
//   const errRef = useRef();

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [location, setLocation] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");

//   const [validUsername, setValidUsername] = useState(false);
//   const [validEmail, setValidEmail] = useState(false);
//   const [validPassword, setValidPassword] = useState(false);
//   const [validConfirmPassword, setValidConfirmPassword] = useState(false);
//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     usernameRef.current.focus();
//   }, []);

//   useEffect(() => {
//     setValidUsername(username.length > 0);
//   }, [username]);

//   useEffect(() => {
//     setValidEmail(/^\S+@\S+\.\S+$/.test(email));
//   }, [email]);

//   useEffect(() => {
//     setValidPassword(password.length >= 6);
//   }, [password]);

//   useEffect(() => {
//     setValidConfirmPassword(confirmPassword === password);
//   }, [confirmPassword, password]);

//   useEffect(() => {
//     setErrMsg("");
//   }, [
//     username,
//     email,
//     password,
//     confirmPassword,
//     firstName,
//     lastName,
//     location,
//     phoneNumber,
//   ]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log("validUsername:", validUsername);
//     console.log("validEmail:", validEmail);
//     console.log("validPassword:", validPassword);
//     console.log("validConfirmPassword:", validConfirmPassword);

//     if (
//       !validUsername ||
//       !validEmail ||
//       !validPassword ||
//       !validConfirmPassword
//     ) {
//       setErrMsg("Invalid Entry");
//       return;
//     }
//     try {
//       const response = await axios.post(REGISTER_URL, {
//         Username: username,
//         Email: email,
//         Password: password,
//         ConfirmPassword: confirmPassword,
//         FirstName: firstName,
//         LastName: lastName,
//         Location: location,
//         PhoneNumber: phoneNumber,
//       });
//       console.log(response.data);
//       setSuccess(true);
//       // Clear form fields
//       setUsername("");
//       setEmail("");
//       setPassword("");
//       setConfirmPassword("");
//       setFirstName("");
//       setLastName("");
//       setLocation("");
//       setPhoneNumber("");
//     } catch (err) {
//       console.error(err);
//       if (!err.response) {
//         setErrMsg("No Server Response");
//       } else if (err.response.status === 409) {
//         setErrMsg("Username or Email already exists.");
//       } else {
//         setErrMsg("Registration Failed");
//       }
//       errRef.current.focus();
//     }
//   };

//   return (
//     <>
//       {success ? (
//          <section className="d-flex justify-content-center align-items-center vh-100">
//          <div>
//            <h1>Success!</h1>
//            <p>
//              <Link to="/signin">Sign In</Link>
//            </p>
//          </div>
//        </section>
//       ) : (
//         <div class="d-flex justify-content-center align-items-center vh-100 rounded-4 ">
//           <div class="container text-center d-flex justify-content-center  align-items-center">
//             <div
//               className="row justify-content-end  p-0 bg-primary m-0 p-0 w-50 h-75 "
//               style={{
//                 borderBottomLeftRadius: "40px",
//                 borderTopLeftRadius: "40px",
//               }}
//             >
//               {/* right side div */}

//               <div className="col align-self-center rounded-5  col-sm-6 d-none d-sm-block g-0 ">
//                 <h1 className="h-100">Welcome Back!</h1>
//                 <p className="h-100 h6">
//                   To keep connected with us please login with your personal info
//                 </p>
//               </div>

//               {/* left side form div */}
//               <div className="col align-self-center m-0 p-0 h-50  col-sm-6 border-0 border-danger">
//                 <form className="form-control bg-danger  " onSubmit={handleSubmit} autoComplete="off">
//                   <h1 className="d-flex justify-content-center align-items-center">
//                     Create New Account
//                   </h1>
//                   <div className="d-flex justify-content-center align-items-center">
//                     <a
//                       href="https://www.facebook.com"
//                       className="border rounded-circle border-2 d-inline-flex bg-light justify-content-center  align-items-center m-2"
//                       style={{
//                         borderColor: "#000000",
//                         height: "40px",
//                         width: "40px",
//                       }}
//                     >
//                       {" "}
//                       <FontAwesomeIcon icon={faFacebookF} />
//                     </a>
//                     <a
//                       href="https://www.facebook.com"
//                       className="border rounded-circle border-2 d-inline-flex bg-light justify-content-center align-items-center m-2"
//                       style={{
//                         borderColor: "#000000",
//                         height: "40px",
//                         width: "40px",
//                       }}
//                     >
//                       {" "}
//                       <FontAwesomeIcon icon={faGoogle} />
//                     </a>
//                     <a
//                       href="https://www.facebook.com"
//                       className="border rounded-circle border-2 d-inline-flex bg-light justify-content-center align-items-center m-2"
//                       style={{
//                         borderColor: "#000000",
//                         height: "40px",
//                         width: "40px",
//                       }}
//                     >
//                       {" "}
//                       <FontAwesomeIcon icon={faLinkedinIn} />
//                     </a>
//                   </div>
//                   <div className="d-flex justify-content-center align-items-center h3">
//                     OR
//                   </div>

//                   <div className="mb-3 mt-3">
//                     {/* <label htmlFor="username">Username:</label> */}
//                     <input
//                       type="text"
//                       id="username"
//                       ref={usernameRef}
//                       className="form-control"
//                       onChange={(e) => setUsername(e.target.value)}
//                       value={username}
//                       required
//                       placeholder="Enter your username"
//                     />
//                   </div>
//                   <div className="mb-3 mt-3">
//                     {/* <label htmlFor="firstname">First Name:</label> */}
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="firstName"
//                       placeholder="Enter your First Name"
//                       name="firstName"
//                       onChange={(e) => setFirstName(e.target.value)}
//                       value={firstName}
//                     />
//                   </div>
//                   <div className="mb-3 mt-3">
//                     {/* <label htmlFor="lastName">Last Name:</label> */}
//                     <input
//                       type="text"
//                       id="lastName"
//                       className="form-control"
//                       onChange={(e) => setLastName(e.target.value)}
//                       value={lastName}
//                       placeholder="Enter your  lastName"
//                     />
//                   </div>
//                   <div className="mb-3 mt-3">
//                     {/* <label htmlFor="location">Location:</label> */}
//                     <input
//                       type="text"
//                       id="location"
//                       className="form-control"
//                       onChange={(e) => setLocation(e.target.value)}
//                       value={location}
//                       placeholder="Enter your  location"


//                     />
//                   </div>
//                   <div className="mb-3 mt-3">
//                     {/* <label htmlFor="phoneNumber">Phone Number:</label> */}
//                     <input
//                       type="tel"
//                       id="phoneNumber"
//                       className="form-control"
//                       onChange={(e) => setPhoneNumber(e.target.value)}
//                       value={phoneNumber}
//                       placeholder="Enter your  phoneNumber"
//                     />
//                   </div>
//                   <div className="mb-3 mt-3">
//                     {/* <label htmlFor="email">Email:</label> */}
//                     <input
//                       type="email"
//                       id="email"
//                       className="form-control"
//                       ref={emailRef}
//                       onChange={(e) => setEmail(e.target.value)}
//                       value={email}
//                       placeholder="Enter your  Email"
//                       required
//                     />
//                   </div>

                 
//                   <div className="mb-3">
//                     {/* <label htmlFor="password">Password:</label> */}
//                     <input
//                       type="password"
//                       id="password"
//                       className="form-control"
//                       ref={passwordRef}
//                       onChange={(e) => setPassword(e.target.value)}
//                       value={password}
//                       placeholder="Enter your Password"
//                       required
//                     />
//                   </div>
//                   <div className="mb-3 mt-3">
//                     {/* <label htmlFor="confirmPassword">Confirm Password:</label> */}
//                     <input
//                       type="password"
//                       id="confirmPassword"
//                       className="form-control"
//                       ref={confirmPasswordRef}
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                       value={confirmPassword}
//                       placeholder="Confirm Your Password"
//                       required
//                     />
//                   </div>

//                   <div>
//                     Already have an Account?
//                     <Link
//                       to="/SignIn"
//                       className="text-primary fs-5 text-decoration-none "
//                     >
//                       Log In
//                     </Link>
//                     <div className="d-grid">
//                       <button type="submit" className="btn btn-dark btn-block">
//                         Submit
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };


// export default Register;





import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

const REGISTER_URL = "";

const Register = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setErrMsg("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setErrMsg("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(REGISTER_URL, {
        Username: username,
        Email: email,
        Password: password,
        ConfirmPassword: confirmPassword,
        FirstName: firstName,
        LastName: lastName,
        Location: location,
        PhoneNumber: phoneNumber,
      });
      console.log(response.data);
      setSuccess(true);
      // Clear form fields
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setFirstName("");
      setLastName("");
      setLocation("");
      setPhoneNumber("");
    } catch (err) {
      console.error(err);
      if (!err.response) {
        setErrMsg("No server response");
      } else if (err.response.status === 409) {
        setErrMsg("Username or email already exists");
      } else {
        setErrMsg("Registration failed");
      }
    }
  };

  return (
    
      <>
      {success ? (
        <section className="d-flex justify-content-center align-items-center vh-100">
          <div>
            <h1>Success!</h1>
            <p>
              <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </section>
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="container text-center d-flex justify-content-center  align-items-center">
            <div
              className="row justify-content-end p-0 bg-primary m-0 p-0 w-50 h-75 "
              style={{
                borderBottomLeftRadius: "40px",
                borderTopLeftRadius: "40px",
              }}
            >
              {/* right side div */}
              <div className="col align-self-center rounded-5 col-sm-6 d-none d-sm-block g-0 ">
                <h1 className="h-100">Welcome Back!</h1>
                <p className="h-100 h6">
                  To keep connected with us please login with your personal info
                </p>
              </div>

              {/* left side form div */}
              <div className="col align-self-center m-0 p-0 h-50 col-sm-6 border-0 border-danger">
                <form className="form-control bg-danger" onSubmit={handleSubmit} autoComplete="off">
                  <h1 className="d-flex justify-content-center align-items-center">
                    Create New Account
                  </h1>
                  <div className="d-flex justify-content-center align-items-center">
                    <a
                      href="https://www.facebook.com"
                      className="border rounded-circle border-2 d-inline-flex bg-light justify-content-center  align-items-center m-2"
                      style={{
                        borderColor: "#000000",
                        height: "40px",
                        width: "40px",
                      }}
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a
                      href="https://www.facebook.com"
                      className="border rounded-circle border-2 d-inline-flex bg-light justify-content-center align-items-center m-2"
                      style={{
                        borderColor: "#000000",
                        height: "40px",
                        width: "40px",
                      }}
                    >
                      <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a
                      href="https://www.facebook.com"
                      className="border rounded-circle border-2 d-inline-flex bg-light justify-content-center align-items-center m-2"
                      style={{
                        borderColor: "#000000",
                        height: "40px",
                        width: "40px",
                      }}
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </div>
                  <div className="d-flex justify-content-center align-items-center h3">
                    OR
                  </div>

                  <div className="mb-3 mt-3">
                    <input
                      type="text"
                      id="username"
                      ref={usernameRef}
                      className="form-control"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      required
                      placeholder="Enter your username"
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="Enter your First Name"
                      name="firstName"
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <input
                      type="text"
                      id="lastName"
                      className="form-control"
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                      placeholder="Enter your  lastName"
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <input
                      type="text"
                      id="location"
                      className="form-control"
                      onChange={(e) => setLocation(e.target.value)}
                      value={location}
                      placeholder="Enter your  location"
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <input
                      type="tel"
                      id="phoneNumber"
                      className="form-control"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      placeholder="Enter your  phoneNumber"
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      ref={emailRef}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="Enter your  Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      ref={passwordRef}
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      placeholder="Enter your Password"
                      required
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <input
                      type="password"
                      id="confirmPassword"
                      className="form-control"
                      ref={confirmPasswordRef}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                      placeholder="Confirm Your Password"
                      required
                    />
                  </div>
                  <div>
                    Already have an Account?
                    <Link
                      to="/SignIn"
                      className="text-primary fs-5 text-decoration-none"
                    >
                      Log In
                    </Link>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-dark btn-block">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;






