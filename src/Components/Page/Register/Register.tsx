
import React, { useState } from "react";
import { useRegisterUserMutation } from "../../../Apis/authApi";
import { apiResponse } from "../../../Interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { MainLoader } from "../Loader";

const Register = () => {
  const [registerUser] = useRegisterUserMutation();
  const [Loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    firstName: "",
    userName: "",
    lastName: "",
    location: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate(); // Hook to navigate to other pages

  const handleUserInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(Loading);
    setUserInput(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response: apiResponse = await registerUser(userInput);
      if (response) {
        //console.log(response);
        // If registration is successful, navigate to the login page
        navigate("/login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };
  
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
     {Loading && <MainLoader />}

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
                <input type="text" className="form-control" id="firstName" placeholder="Enter your First Name" name="firstName" value={userInput.firstName} onChange={handleUserInput} />
              </div>
              <div className="mb-3 mt-3">
                <input type="text" className="form-control" id="userName" placeholder="Enter your User Name" name="userName" value={userInput.userName} onChange={handleUserInput} />
              </div>
              <div className="mb-3 mt-3">
                <input type="text" id="lastName" className="form-control" name="lastName" placeholder="Enter your  lastName" value={userInput.lastName} onChange={handleUserInput} />
              </div>
              <div className="mb-3 mt-3">
                <input type="text" id="location" className="form-control" name="location" placeholder="Enter your  location" value={userInput.location} onChange={handleUserInput} />
              </div>
              <div className="mb-3 mt-3">
                <input type="tel" id="phoneNumber" className="form-control" name="phoneNumber" placeholder="Enter your  phoneNumber" value={userInput.phoneNumber} onChange={handleUserInput} />
              </div>
              <div className="mb-3 mt-3">
                <input type="email" id="email" className="form-control" name="email" placeholder="Enter your  Email" value={userInput.email} onChange={handleUserInput} required />
              </div>
              <div className="mb-3">
                <input type="password" id="password" className="form-control" name="password" placeholder="Enter your Password" value={userInput.password} onChange={handleUserInput} required />
              </div>
              <div className="mb-3 mt-3">
                <input type="password" id="confirmPassword" className="form-control" name="confirmPassword" placeholder="Confirm Your Password" value={userInput.confirmPassword} onChange={handleUserInput} required />
              </div>
              <div>
                Already have an Account? <Link to="/login" className="text-primary fs-5 text-decoration-none">Log In</Link>
                <div className="d-grid">
                  <button type="submit" className="btn btn-dark btn-block">Submit</button>
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
