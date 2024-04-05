import { useContactUserMutation } from '../../../Apis/contactApi';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLoader } from '../Loader';
import { apiResponse } from '../../../Interfaces';
import { toastNotify } from '../../../Helper';

const ContactUs = () => {
  const [contactUser] = useContactUserMutation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [contact, setContact] = useState<userInput>({
    fullName: "",
    email: "",
    phoneNumber: "",
    location: "",
    additionalText: "",
  });

  const handleUserInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     const response: apiResponse = await contactUser({
  //       fullName: contact.fullName,
  //       email: contact.email,
  //       phoneNumber: contact.phoneNumber,
  //       location: contact.location,
  //       additionalText: contact.additionalText,
  //     });
  //     if (response.data) {
  //       toastNotify("Contact successful!");
  //       navigate("/");
  //     } else if (response.error) {
  //       toastNotify("Contact failed!", "error");
  //     }
  //   } catch (error) {
  //     toastNotify("An error occurred during contact.", "error");
  //   }
  //   setLoading(false);
  // };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response: apiResponse = await contactUser({
        fullName: contact.fullName,
              email: contact.email,
              phoneNumber: contact.phoneNumber,
              location: contact.location,
              additionalText: contact.additionalText,
      });
      if (response.data) {
        toastNotify("contact successful! ");
        navigate("/");
      } 
      // else if (response.error) {
      //   toastNotify() "error");
      // }
    } catch (error) {
      toastNotify("An error occurred .", "error");
    }
    setLoading(false);
  };


  return (
    <div>
      <div className="container-fluid d-flex align-items-center justify-content-center">
        {loading && <MainLoader />}
        <div className="row mb-5">
          <h3 className="h3">You can reach us at saipalmessi@gmail.com</h3>
          <span>
            Have questions about your upcoming trek? Call us and our Experts
            will guide you with trek information.
          </span>
          <h3 className="h3 mt-lg-5 ">
            If you do need to speak with someone
            <br />
            please call 01264 773850 between 10am and 4pm.
          </h3>
        </div>
      </div>
      <div className="container bg-danger rounded-5 p-5 m-5">
        <div className="h3">Contact US</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter your Full Name"
              name="fullName"
              value={contact.fullName}
              onChange={handleUserInput}
            />
          </div>
          <div className="mb-3 mt-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={contact.email}
              onChange={handleUserInput}
            />
          </div>
          <div className="mb-3 mt-3">
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter your phone"
              name="phoneNumber"
              value={contact.phoneNumber}
              onChange={handleUserInput}
            />
          </div>
          <div className="mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="Enter your Location"
              name="location"
              value={contact.location}
              onChange={handleUserInput}
            />
          </div>
          <div className="mb-3 mt-3">
            <textarea
              className="form-control"
              id="textArea"
              placeholder="How can we help you?"
              name="additionalText"
              value={contact.additionalText}
              onChange={handleUserInput}
            />
          </div>
          <button type="submit" className="btn btn-lg btn-primary w-100" disabled={loading}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

interface userInput {
  fullName: string;
  email: string;
  phoneNumber: string;
  location: string;
  additionalText: string;
}
