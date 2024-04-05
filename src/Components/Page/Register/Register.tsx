
// import React, { useState } from "react";
// import { useRegisterUserMutation } from "../../../Apis/authApi";
// import { apiResponse } from "../../../Interfaces";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
// import { Link, useNavigate } from "react-router-dom";
// import { MainLoader } from "../Loader";
// import { inputHelper, toastNotify } from "../../../Helper";

// const Register = () => {
//   const [registerUser] = useRegisterUserMutation();
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const [userInput, setUserInput] = useState<UserInput>({
//     userName: "",
//     password: "",
//     email: "",
//     name: "",
//   });

//   const handleUserInput = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     // const tempData = inputHelper(e, userInput);
//     const tempData = inputHelper(e, { ...userInput });
//     setUserInput(tempData);
//   };

//   // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   //   e.preventDefault();
//   //   setLoading(true);
//   //   try {
//   //     const response: apiResponse = await registerUser({
//   //       userName: userInput.userName,
//   //       password: userInput.password,
//   //       email: userInput.email,
//   //       name: userInput.name,
//   //     });
//   //     if (response.data) {
//   //       toastNotify("Registration successful! Please login to continue.");
//   //       navigate("/login");
//   //     } 
//   //     // else if (response.error) {
//   //     //   toastNotify() "error");
//   //     // }
//   //   } catch (error) {
//   //     toastNotify("An error occurred during registration.", "error");
//   //   }
//   //   setLoading(false);
//   // };


//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     const response: apiResponse = await registerUser({
//       userName: userInput.userName,
//       password: userInput.password,
//       email: userInput.role,
//       name: userInput.name,
//     });
//     if (response.data) {
//       toastNotify("Registeration successful! Please login to continue.");
//       navigate("/login");
//     } else if (response.error) {
//       // toastNotify(response.error.data.errorMessages[0], "error");
//       toastNotify("Registeration failed! please try again");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//      {loading && <MainLoader />}

//       <div className="container text-center d-flex justify-content-center  align-items-center">
//         <div className="row justify-content-end p-0 bg-primary m-0 p-0 w-50 h-75 " style={{ borderBottomLeftRadius: "40px", borderTopLeftRadius: "40px" }}>
//           <div className="col align-self-center rounded-5 col-sm-6 d-none d-sm-block g-0 ">
//             <h1 className="h-100">Welcome Back!</h1>
//             <p className="h-100 h6">To keep connected with us please login with your personal info</p>
//           </div>
//           <div className="col align-self-center m-0 p-0 h-50 col-sm-6 border-0 border-danger">
//             <form className="form-control bg-danger" onSubmit={handleSubmit} autoComplete="off">
//               <h1 className="d-flex justify-content-center align-items-center">Create New Account</h1>
//               <div className="d-flex justify-content-center align-items-center">
//                 <a href="https://www.facebook.com" className="border rounded-circle border-2 d-inline-flex bg-light justify-content-center  align-items-center m-2" style={{ borderColor: "#000000", height: "40px", width: "40px" }}>
//                   <FontAwesomeIcon icon={faFacebookF} />
//                 </a>
//                 <a href="https://www.facebook.com" className="border rounded-circle border-2 d-inline-flex bg-light justify-content-center align-items-center m-2" style={{ borderColor: "#000000", height: "40px", width: "40px" }}>
//                   <FontAwesomeIcon icon={faGoogle} />
//                 </a>
//                 <a href="https://www.facebook.com" className="border rounded-circle border-2 d-inline-flex bg-light justify-content-center align-items-center m-2" style={{ borderColor: "#000000", height: "40px", width: "40px" }}>
//                   <FontAwesomeIcon icon={faLinkedinIn} />
//                 </a>
//               </div>
//               <div className="d-flex justify-content-center align-items-center h3">OR</div>
//               <div className="mb-3 mt-3">
//                 <input type="text" className="form-control" id="name" placeholder="Enter your Full Name" name="name" value={userInput.name} onChange={handleUserInput}  required/>
//               </div>
//               <div className="mb-3 mt-3">
//                 <input type="text" className="form-control" id="userName" placeholder="Enter your User Name" name="userName" value={userInput.userName} onChange={handleUserInput} />
//               </div>
              
//               <div className="mb-3 mt-3">
//                 <input type="email" id="email" className="form-control" name="email" placeholder="Enter your  Email" value={userInput.email} onChange={handleUserInput} required />
//               </div>
//               <div className="mb-3">
//                 <input type="password" id="password" className="form-control" name="password" placeholder="Enter your Password" value={userInput.password} onChange={handleUserInput} required />
//               </div>
             
//               <div>
//                 Already have an Account? <Link to="/login" className="text-primary fs-5 text-decoration-none">Log In</Link>
//                 <div className="d-grid">
//                   <button type="submit" className="btn btn-dark btn-block" disabled={loading}>Submit</button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;










import React, { useState } from "react";
import { useRegisterUserMutation } from "../../../Apis/authApi";
import { apiResponse } from "../../../Interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { MainLoader } from "../Loader";
import {  toastNotify } from "../../../Helper";

const Register = () => {
  const [registerUser] = useRegisterUserMutation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState<UserInput>({
    userName: "",
    password: "",
    email: "",
    name: "",
  });

  const handleUserInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response: apiResponse = await registerUser({
        userName: userInput.userName,
        password: userInput.password,
        email: userInput.email,
        name: userInput.name,
      });
      if (response.data) {
        toastNotify("Registration successful! Please login to continue.");
        navigate("/login");
      } else if (response.error) {
        toastNotify("Registration failed! Please try again.", "error");
      }
    } catch (error) {
      toastNotify("An error occurred during registration.", "error");
    }
    setLoading(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {loading && <MainLoader />}

      <div className="container text-center d-flex justify-content-center  align-items-center">
        <div className="row justify-content-end p-0 bg-primary m-0 p-0 w-50 h-75 " style={{ borderBottomLeftRadius: "40px", borderTopLeftRadius: "40px" }}>
          <div className="col align-self-center rounded-5 col-sm-6 d-none d-sm-block g-0 ">
            <h1 className="h-100">Welcome Back!</h1>
            <p className="h-100 h6">To keep connected with us please login with your personal info</p>
          </div>
          <div className="col align-self-center m-0 p-0 h-50 col-sm-6 border-0 border-danger">
            <form className="form-control bg-danger" onSubmit={handleSubmit} autoComplete="off">
              <h1 className="d-flex justify-content-center align-items-center">Create New Account</h1>
              <div className="d-flex justify-content-center align-items-center">
                <a href="https://www.facebook.com" className="border rounded-circle border-2 d-inline-flex bg-light justify-content-center  align-items-center m-2" style={{ borderColor: "#000000", height: "40px", width: "40px" }}>
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://www.facebook.com" className="border rounded-circle border-2 d-inline-flex bg-light justify-content-center align-items-center m-2" style={{ borderColor: "#000000", height: "40px", width: "40px" }}>
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="https://www.facebook.com" className="border rounded-circle border-2 d-inline-flex bg-light justify-content-center align-items-center m-2" style={{ borderColor: "#000000", height: "40px", width: "40px" }}>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
              <div className="d-flex justify-content-center align-items-center h3">OR</div>
              <div className="mb-3 mt-3">
                <input type="text" className="form-control" id="name" placeholder="Enter your Full Name" name="name" value={userInput.name} onChange={handleUserInput} required />
              </div>
              <div className="mb-3 mt-3">
                <input type="text" className="form-control" id="userName" placeholder="Enter your User Name" name="userName" value={userInput.userName} onChange={handleUserInput} />
              </div>

              <div className="mb-3 mt-3">
                <input type="email" id="email" className="form-control" name="email" placeholder="Enter your  Email" value={userInput.email} onChange={handleUserInput} required />
              </div>
              <div className="mb-3">
                <input type="password" id="password" className="form-control" name="password" placeholder="Enter your Password" value={userInput.password} onChange={handleUserInput} required />
              </div>

              <div>
                Already have an Account? <Link to="/login" className="text-primary fs-5 text-decoration-none">Log In</Link>
                <div className="d-grid">
                  <button type="submit" className="btn btn-dark btn-block" disabled={loading}>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

export interface UserInput {
  userName: string;
  password: string;
  email: string;
  name: string;
  [key: string]: string; // Add index signature
}
