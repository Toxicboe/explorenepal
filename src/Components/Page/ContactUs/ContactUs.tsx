import React from 'react';

interface Props {}

const ContactUs: React.FC<Props> = () => {
  return (
    <div>
      <div className="container-fluid d-flex align-items-center justify-content-center">
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
        <form action="/action_page.php">
          <div className="mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter your Full Name"
              name="fullName"
            />
          </div>
          <div className="mb-3 mt-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <div className="mb-3 mt-3">
            <textarea
              className="form-control"
              id="textArea"
              placeholder="How can we help you?"
              name="textArea"
            />
          </div>
          <button type="submit" className="btn btn-lg btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
