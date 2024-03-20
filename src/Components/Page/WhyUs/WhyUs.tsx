import React from "react";
import khaptad from "../../../assets/Images/khaptad.jpg";

const WhyUs = () => {
  return (
    <div className="container text-center mt-5 bg-info rounded-5">
      <h1 className="justify-content-center">Why Us</h1>
      <div className="row mt-5">
        <div className="col-md-3 col-sm-6 mb-4">
          <img
            src={khaptad}
            alt="kdjf"
            style={{ height: "145px", width: "150px", borderRadius: "50%" }}
          />
          <p className="mt-3 h5">title</p>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <img
            src={khaptad}
            alt="kdjf"
            style={{ height: "145px", width: "150px", borderRadius: "50%" }}
          />
          <p className="mt-3 h5">title</p>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <img
            src={khaptad}
            alt="kdjf"
            style={{ height: "145px", width: "150px", borderRadius: "50%" }}
          />
          <p className="mt-3 h5">title</p>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <img
            src={khaptad}
            alt="kdjf"
            style={{ height: "145px", width: "150px", borderRadius: "50%" }}
          />
          <p className="mt-3 h5">title</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
