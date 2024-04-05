// // import { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";

// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {
// //   faLinkedinIn,
// //   faFacebook,
// //   faGoogle,
// // } from "@fortawesome/free-brands-svg-icons";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import { useLoginUserMutation } from "../../../Apis/authApi";
// // import { apiResponse, userModel } from "@/src/Interfaces";
// // import { MainLoader } from "../Loader";
// // import { useDispatch } from "react-redux";
// // import { setLoggedInUser } from "../../../Storage/Redux/userAuthSlice";
// // import { jwtDecode } from "jwt-decode";

// // const Login = () => {
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();
// //   const dispatch=useDispatch();
// //   const [userInput, setUserInput] = useState<{
// //     userName: string;
// //     password: string;
// //   }>({
// //     userName: "",
// //     password: "",
// //   });

// //   const [loginUser] = useLoginUserMutation();

// //   const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const updatedUserInput = {
// //       ...userInput,
// //       [e.target.name]: e.target.value,
// //     };
// //     setUserInput(updatedUserInput);
// //   };

// //   // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //   //   e.preventDefault();
// //   //   setLoading(true);

// //   //   try {
// //   //     const response: apiResponse = await loginUser({
// //   //       userName: userInput.userName,
// //   //       password: userInput.password,
// //   //     });

// //   //     if (response.data) {
// //   //       console.log(response.data);
// //   //       const{token}=response.data;
// //   //       console.log(token);
// //   //       navigate("/");
// //   //     }
// //   //     // else if (response.error) {
// //   //     //   setError(response.error);
// //   //     // }
// //   //   } catch (error) {
// //   //     setError("An error occurred during login.");
// //   //   }

// //   //   setLoading(false);
// //   // };


// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     const response: apiResponse = await loginUser({
// //       userName: userInput.userName,
// //       password: userInput.password,
// //     });
// //     if (response.data) {
// //       const { token } = response.data.result;
// //       const { fullName, id, email, role }: userModel = jwtDecode(token);
// //       localStorage.setItem("token", token);
// //       dispatch(setLoggedInUser({ fullName, id, email, role }));
// //       navigate("/");
// //     } else if (response.error) {
// //       // setError(response.error.data.errorMessages[0]);
// //       setError(error);
// //     }

// //     setLoading(false);
// //   };

// //   return (
// //     <div className="d-flex justify-content-center align-items-center vh-100 rounded-4">
// //       {loading && <MainLoader />}
// //       <div
// //         className="row justify-content-end p-0 bg-danger m-0 p-0 w-50"
// //         style={{ borderRadius: "20px" }}
// //       >
// //         <div className="col align-self-center p-0 h-50 rounded-5 col-sm-6">
// //           <form
// //             onSubmit={handleSubmit}
// //             className="form-control"
// //             style={{
// //               borderBottomRightRadius: "40px",
// //               borderTopRightRadius: "40px",
// //             }}
// //           >
// //             <h1 className="d-flex justify-content-center align-items-center">
// //               Log In
// //             </h1>
// //             <div className="d-flex justify-content-center align-items-center">
// //               <a
// //                 href="https://www.facebook.com"
// //                 className="border rounded-circle border-2 d-inline-flex justify-content-center align-items-center m-2"
// //                 style={{
// //                   borderColor: "#DDDDDD",
// //                   height: "40px",
// //                   width: "40px",
// //                 }}
// //               >
// //                 <FontAwesomeIcon icon={faFacebook} />
// //               </a>
// //               <a
// //                 href="https://www.facebook.com"
// //                 className="border rounded-circle border-2 d-inline-flex justify-content-center align-items-center m-2"
// //                 style={{
// //                   borderColor: "#DDDDDD",
// //                   height: "40px",
// //                   width: "40px",
// //                 }}
// //               >
// //                 <FontAwesomeIcon icon={faGoogle} />
// //               </a>
// //               <a
// //                 href="https://www.facebook.com"
// //                 className="border rounded-circle border-2 d-inline-flex justify-content-center align-items-center m-2"
// //                 style={{
// //                   borderColor: "#DDDDDD",
// //                   height: "40px",
// //                   width: "40px",
// //                 }}
// //               >
// //                 <FontAwesomeIcon icon={faLinkedinIn} />
// //               </a>
// //             </div>
// //             <div className="d-flex justify-content-center align-items-center">
// //               or use your account
// //             </div>
// //             <div className="mb-3 mt-3">
// //               <input
// //                 type="text"
// //                 className="form-control"
// //                 id="text"
// //                 placeholder="Enter UserName"
// //                 name="userName"
// //                 value={userInput.userName}
// //                 onChange={handleUserInput}
// //               />
// //             </div>
// //             <div className="mb-3">
// //               <input
// //                 type="password"
// //                 className="form-control"
// //                 id="pwd"
// //                 placeholder="Enter password"
// //                 name="password"
// //                 value={userInput.password}
// //                 onChange={handleUserInput}
// //               />
// //               <span className="d-flex justify-content-end">
// //                 <Link to="/reset" className="text-primary text-decoration-none">
// //                   Forget Password?
// //                 </Link>
// //               </span>
// //             </div>
// //             {/* <div className="form-check mb-3 d-flex justify-content-start">
// //                             <label className="form-check-label">
// //                                 <input className="form-check-input" type="checkbox" name="remember" /> Remember me
// //                             </label>
// //                         </div> */}
// //             <div className="d-grid">
// //               <div className="d-flex justify-content-center align-items-center mb-3">
// //                 <Link
// //                   to="/register"
// //                   className="text-primary fs-6 text-decoration-none"
// //                 >
// //                   Don't have an Account?
// //                 </Link>
// //               </div>
// //               {error && <p className="text-danger">{error}</p>}
// //               <button
// //                 type="submit"
// //                 className="btn btn-dark btn-block"
// //                 disabled={loading}
// //               >
// //                 {loading ? "Logging in..." : "Login"}
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //         <div className="col align-self-center p-0 bg-danger rounded-4 col-sm-6 d-none d-sm-block">
// //           <h1 className="h-100">Welcome Back!</h1>
// //           <p className="h-100 h6">
// //             To keep connected with us please login with your personal info
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;


// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faLinkedinIn,
//   faFacebook,
//   faGoogle,
// } from "@fortawesome/free-brands-svg-icons";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useLoginUserMutation } from "../../../Apis/authApi";
// import { apiResponse, userModel } from "../../../Interfaces";
// import { MainLoader } from "../Loader";

// import { useDispatch } from "react-redux";
// import { setLoggedInUser } from "../../../Storage/Redux/userAuthSlice";

// import { jwtDecode } from "jwt-decode";



// const Login = () => {
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//  const dispatch=useDispatch();
//   const [userInput, setUserInput] = useState<{
//     userName: string;
//     password: string;
//   }>({
//     userName: "",
//     password: "",
//   });

//   const [loginUser] = useLoginUserMutation();

//   const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const updatedUserInput = {
//       ...userInput,
//       [e.target.name]: e.target.value,
//     };
//     setUserInput(updatedUserInput);
//   };

//   // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   //   e.preventDefault();
//   //   setLoading(true);

//   //   try {
//   //     const response: apiResponse = await loginUser({
//   //       userName: userInput.userName,
//   //       password: userInput.password,
//   //     });

//   //     if (response.data) {
//   //       console.log(response.data.result);
        
//   //       //console.log(token);
//   //       navigate("/");
//   //     }
//   //     // else if (response.error) {
//   //     //   setError(response.error);
//   //     // }
//   //   } catch (error) {
//   //     setError("An error occurred during login.");
//   //   }

//   //   setLoading(false);
//   // };


//   // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   //   e.preventDefault();
//   //   setLoading(true);
//   //   const response: apiResponse = await loginUser({
//   //     userName: userInput.userName,
//   //     password: userInput.password,
//   //   });
//   //   if (response.data) {
//   //     console.log(response.data.result);
      
//   //     const {token} = response.data.result;
//   //     console.log(token);
//   //     const { fullName, id, email, role }: userModel = jwtDecode(token);
   
//   //     localStorage.setItem("token", token);
//   //     dispatch(setLoggedInUser({ fullName, id, email, role }));
//   //     navigate("/");
//   //   } else if (response.error) {
//   //     // setError(response.error.data.errorMessages[0]);
//   //     setError(error);
//   //   }

//   //   setLoading(false);
//   // };

 

// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   setLoading(true);
  
//   const response: apiResponse = await loginUser({
//     userName: userInput.userName,
//     password: userInput.password,
//   });
  
//   if (response.data) {
//     const { token } = response.data.result;
//     console.log(token);
    
//     const decodedToken:userModel = jwtDecode(token);
//     const firstName = decodedToken.fullName;
//     console.log('First Name:', firstName);
    
//     const { fullName, id, email, role }: userModel = decodedToken;
//     localStorage.setItem("token", token);
//     dispatch(setLoggedInUser({ fullName, id, email, role }));
//     navigate("/");
//   } else if (response.error) {
//     setError(error);
//   }

//   setLoading(false);
// };

  



//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 rounded-4">
//       {loading && <MainLoader />}
//       <div
//         className="row justify-content-end p-0 bg-danger m-0 p-0 w-50"
//         style={{ borderRadius: "20px" }}
//       >
//         <div className="col align-self-center p-0 h-50 rounded-5 col-sm-6">
//           <form
//             onSubmit={handleSubmit}
//             className="form-control"
//             style={{
//               borderBottomRightRadius: "40px",
//               borderTopRightRadius: "40px",
//             }}
//           >
//             <h1 className="d-flex justify-content-center align-items-center">
//               Log In
//             </h1>
//             <div className="d-flex justify-content-center align-items-center">
//               <a
//                 href="https://www.facebook.com"
//                 className="border rounded-circle border-2 d-inline-flex justify-content-center align-items-center m-2"
//                 style={{
//                   borderColor: "#DDDDDD",
//                   height: "40px",
//                   width: "40px",
//                 }}
//               >
//                 <FontAwesomeIcon icon={faFacebook} />
//               </a>
//               <a
//                 href="https://www.facebook.com"
//                 className="border rounded-circle border-2 d-inline-flex justify-content-center align-items-center m-2"
//                 style={{
//                   borderColor: "#DDDDDD",
//                   height: "40px",
//                   width: "40px",
//                 }}
//               >
//                 <FontAwesomeIcon icon={faGoogle} />
//               </a>
//               <a
//                 href="https://www.facebook.com"
//                 className="border rounded-circle border-2 d-inline-flex justify-content-center align-items-center m-2"
//                 style={{
//                   borderColor: "#DDDDDD",
//                   height: "40px",
//                   width: "40px",
//                 }}
//               >
//                 <FontAwesomeIcon icon={faLinkedinIn} />
//               </a>
//             </div>
//             <div className="d-flex justify-content-center align-items-center">
//               or use your account
//             </div>
//             <div className="mb-3 mt-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 id="text"
//                 placeholder="Enter UserName"
//                 name="userName"
//                 value={userInput.userName}
//                 onChange={handleUserInput}
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="password"
//                 className="form-control"
//                 id="pwd"
//                 placeholder="Enter password"
//                 name="password"
//                 value={userInput.password}
//                 onChange={handleUserInput}
//               />
//               <span className="d-flex justify-content-end">
//                 <Link to="/reset" className="text-primary text-decoration-none">
//                   Forget Password?
//                 </Link>
//               </span>
//             </div>
//             {/* <div className="form-check mb-3 d-flex justify-content-start">
//                             <label className="form-check-label">
//                                 <input className="form-check-input" type="checkbox" name="remember" /> Remember me
//                             </label>
//                         </div> */}
//             <div className="d-grid">
//               <div className="d-flex justify-content-center align-items-center mb-3">
//                 <Link
//                   to="/register"
//                   className="text-primary fs-6 text-decoration-none"
//                 >
//                   Don't have an Account?
//                 </Link>
//               </div>
//               {error && <p className="text-danger">{error}</p>}
//               <button
//                 type="submit"
//                 className="btn btn-dark btn-block"
//                 disabled={loading}
//               >
//                 {loading ? "Logging in..." : "Login"}
//               </button>
//             </div>
//           </form>
//         </div>
//         <div className="col align-self-center p-0 bg-danger rounded-4 col-sm-6 d-none d-sm-block">
//           <h1 className="h-100">Welcome Back!</h1>
//           <p className="h-100 h6">
//             To keep connected with us please login with your personal info
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// //function dispatch(arg0: {
//   // import { setLoggedInUser } from "../../../Storage/Redux/userAuthSlice";
//   // import { jwtDecode } from "jwt-decode";
//   // const Login = () => {
//   //   const [error, setError] = useState("");
//   //   const [loading, setLoading] = useState(false);
//   //   const navigate = useNavigate();
//   //   const dispatch=useDispatch();
//   //   const [userInput, setUserInput] = useState<{
//   //     userName: string;
//   //     password: string;
//   //   }>({
//   //     userName: "",
//   //     password: "",
//   //   });
//   //   const [loginUser] = useLoginUserMutation();
//   //   const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //     const updatedUserInput = {
//   //       ...userInput,
//   //       [e.target.name]: e.target.value,
//   //     };
//   //     setUserInput(updatedUserInput);
//   //   };
//   //   // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   //   //   e.preventDefault();
//   //   //   setLoading(true);
//   //   //   try {
//   //   //     const response: apiResponse = await loginUser({
//   //   //       userName: userInput.userName,
//   //   //       password: userInput.password,
//   //   //     });
//   //   //     if (response.data) {
//   //   //       console.log(response.data);
//   //   //       const{token}=response.data;
//   //   //       console.log(token);
//   //   //       navigate("/");
//   //   //     }
//   //   //     // else if (response.error) {
//   //   //     //   setError(response.error);
//   //   //     // }
//   //   //   } catch (error) {
//   //   //     setError("An error occurred during login.");
//   //   //   }
//   //   //   setLoading(false);
//   //   // };
//   //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   //     e.preventDefault();
//   //     setLoading(true);
//   //     const response: apiResponse = await loginUser({
//   //       userName: userInput.userName,
//   //       password: userInput.password,
//   //     });
//   //     if (response.data) {
//   //       const { token } = response.data.result;
//   //       const { fullName, id, email, role }: userModel = jwtDecode(token);
//   //       localStorage.setItem("token", token);
//   //       dispatch(setLoggedInUser({ fullName, id, email, role }));
//   //       navigate("/");
//   //     } else if (response.error) {
//   //       // setError(response.error.data.errorMessages[0]);
//   //       setError(error);
//   //     }
//   //     setLoading(false);
//   //   };
//   //   return (
//   //     <div className="d-flex justify-content-center align-items-center vh-100 rounded-4">
//   //       {loading && <MainLoader />}
//   //       <div
//   //         className="row justify-content-end p-0 bg-danger m-0 p-0 w-50"
//   //         style={{ borderRadius: "20px" }}
//   //       >
//   //         <div className="col align-self-center p-0 h-50 rounded-5 col-sm-6">
//   //           <form
//   //             onSubmit={handleSubmit}
//   //             className="form-control"
//   //             style={{
//   //               borderBottomRightRadius: "40px",
//   //               borderTopRightRadius: "40px",
//   //             }}
//   //           >
//   //             <h1 className="d-flex justify-content-center align-items-center">
//   //               Log In
//   //             </h1>
//   //             <div className="d-flex justify-content-center align-items-center">
//   //               <a
//   //                 href="https://www.facebook.com"
//   //                 className="border rounded-circle border-2 d-inline-flex justify-content-center align-items-center m-2"
//   //                 style={{
//   //                   borderColor: "#DDDDDD",
//   //                   height: "40px",
//   //                   width: "40px",
//   //                 }}
//   //               >
//   //                 <FontAwesomeIcon icon={faFacebook} />
//   //               </a>
//   //               <a
//   //                 href="https://www.facebook.com"
//   //                 className="border rounded-circle border-2 d-inline-flex justify-content-center align-items-center m-2"
//   //                 style={{
//   //                   borderColor: "#DDDDDD",
//   //                   height: "40px",
//   //                   width: "40px",
//   //                 }}
//   //               >
//   //                 <FontAwesomeIcon icon={faGoogle} />
//   //               </a>
//   //               <a
//   //                 href="https://www.facebook.com"
//   //                 className="border rounded-circle border-2 d-inline-flex justify-content-center align-items-center m-2"
//   //                 style={{
//   //                   borderColor: "#DDDDDD",
//   //                   height: "40px",
//   //                   width: "40px",
//   //                 }}
//   //               >
//   //                 <FontAwesomeIcon icon={faLinkedinIn} />
//   //               </a>
//   //             </div>
//   //             <div className="d-flex justify-content-center align-items-center">
//   //               or use your account
//   //             </div>
//   //             <div className="mb-3 mt-3">
//   //               <input
//   //                 type="text"
//   //                 className="form-control"
//   //                 id="text"
//   //                 placeholder="Enter UserName"
//   //                 name="userName"
//   //                 value={userInput.userName}
//   //                 onChange={handleUserInput}
//   //               />
//   //             </div>
//   //             <div className="mb-3">
//   //               <input
//   //                 type="password"
//   //                 className="form-control"
//   //                 id="pwd"
//   //                 placeholder="Enter password"
//   //                 name="password"
//   //                 value={userInput.password}
//   //                 onChange={handleUserInput}
//   //               />
//   //               <span className="d-flex justify-content-end">
//   //                 <Link to="/reset" className="text-primary text-decoration-none">
//   //                   Forget Password?
//   //                 </Link>
//   //               </span>
//   //             </div>
//   //             {/* <div className="form-check mb-3 d-flex justify-content-start">
//   //                             <label className="form-check-label">
//   //                                 <input className="form-check-input" type="checkbox" name="remember" /> Remember me
//   //                             </label>
//   //                         </div> */}
//   //             <div className="d-grid">
//   //               <div className="d-flex justify-content-center align-items-center mb-3">
//   //                 <Link
//   //                   to="/register"
//   //                   className="text-primary fs-6 text-decoration-none"
//   //                 >
//   //                   Don't have an Account?
//   //                 </Link>
//   //               </div>
//   //               {error && <p className="text-danger">{error}</p>}
//   //               <button
//   //                 type="submit"
//   //                 className="btn btn-dark btn-block"
//   //                 disabled={loading}
//   //               >
//   //                 {loading ? "Logging in..." : "Login"}
//   //               </button>
//   //             </div>
//   //           </form>
//   //         </div>
//   //         <div className="col align-self-center p-0 bg-danger rounded-4 col-sm-6 d-none d-sm-block">
//   //           <h1 className="h-100">Welcome Back!</h1>
//   //           <p className="h-100 h6">
//   //             To keep connected with us please login with your personal info
//   //           </p>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   );
//   // };
// //   // export default Login;
// //   payload: any; type: "userAuth/setLoggedInUser";
// // }) {
// //   throw new Error("Function not implemented.");
// // }



import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLoginUserMutation } from "../../../Apis/authApi";
import { apiResponse, userModel } from "../../../Interfaces";
import { MainLoader } from "../Loader";
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "../../../Storage/Redux/userAuthSlice";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState<{
    userName: string;
    password: string;
  }>({
    userName: "",
    password: "",
  });

  const [loginUser] = useLoginUserMutation();

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedUserInput = {
      ...userInput,
      [e.target.name]: e.target.value,
    };
    setUserInput(updatedUserInput);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response: apiResponse = await loginUser({
        userName: userInput.userName,
        password: userInput.password,
      });
      
      if (response.data) {
        const { token } = response.data.result;
        const decodedToken: userModel = jwtDecode(token);
        const { fullName, id, email, role } = decodedToken;
        
        localStorage.setItem("token", token);
        dispatch(setLoggedInUser({ fullName, id, email, role }));
        navigate("/");
      } else if (error) {
        setError(error); // Set error from response if any
      }
    } catch (error) {
      setError("An error occurred during login."); // Set generic error message if error occurs
    }

    setLoading(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 rounded-4">
      {loading && <MainLoader />} {/* Show loader when loading */}
      <div className="row justify-content-end p-0 bg-danger m-0 p-0 w-50" style={{ borderRadius: "20px" }}>
        <div className="col align-self-center p-0 h-50 rounded-5 col-sm-6">
          <form onSubmit={handleSubmit} className="form-control" style={{ borderBottomRightRadius: "40px", borderTopRightRadius: "40px" }}>
            <h1 className="d-flex justify-content-center align-items-center">Log In</h1>
            {/* Social Login Buttons */}
            <div className="d-flex justify-content-center align-items-center">
              <a href="https://www.facebook.com" className="border rounded-circle border-2 d-inline-flex justify-content-center align-items-center m-2" style={{ borderColor: "#DDDDDD", height: "40px", width: "40px" }}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.facebook.com" className="border rounded-circle border-2 d-inline-flex justify-content-center align-items-center m-2" style={{ borderColor: "#DDDDDD", height: "40px", width: "40px" }}>
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="https://www.facebook.com" className="border rounded-circle border-2 d-inline-flex justify-content-center align-items-center m-2" style={{ borderColor: "#DDDDDD", height: "40px", width: "40px" }}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <div className="d-flex justify-content-center align-items-center">or use your account</div>
            {/* Form Inputs */}
            <div className="mb-3 mt-3">
              <input type="text" className="form-control" id="text" placeholder="Enter UserName" name="userName" value={userInput.userName} onChange={handleUserInput} />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" value={userInput.password} onChange={handleUserInput} />
              <span className="d-flex justify-content-end">
                <Link to="/reset" className="text-primary text-decoration-none">Forget Password?</Link>
              </span>
            </div>
            {/* Login Button */}
            <div className="d-grid">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <Link to="/register" className="text-primary fs-6 text-decoration-none">Don't have an Account?</Link>
              </div>
              {error && <p className="text-danger">{error}</p>} {/* Display error message if any */}
              <button type="submit" className="btn btn-dark btn-block" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
            </div>
          </form>
        </div>
        <div className="col align-self-center p-0 bg-danger rounded-4 col-sm-6 d-none d-sm-block">
          <h1 className="h-100">Welcome Back!</h1>
          <p className="h-100 h6">To keep connected with us please login with your personal info</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
