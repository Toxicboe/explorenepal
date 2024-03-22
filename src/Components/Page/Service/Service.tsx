// import React from 'react'
// import Simba from "../../../assets/Images/simba.jpg";

// const Service = () => {
//   return (
//     <div className="container-fluid bg-info vh-100 d-flex ">
//     <div className="row p-0 mx-5">
//       <div
//         className="card p-0 mx-3 mb-3 col-md-4"
//         style={{ width: "18rem", height: "500px", border: "0px" }}
//       >
//         <img
//           src={Simba}
//           className="card-img-top w-100"
//           alt="..."
//           style={{
//             height: "250px",
//             borderRadius: "10px",

//           }}
//         />
//         <div className="card-body ">
//           <h3 className="card-title ">Card title</h3>
//           <h6>Subtitle</h6>
//           <p className="card-text mb-0">
//             Khaptad National Park is a popular destination for trekking and
//             hiking. The park offers a variety of trails that range in
//             difficulty from easy to challenging. The park is also a popular
//             destination for bird watching.
//           </p>
//         </div>
//       </div>

//       <div
//         className="card p-0 mb-3 mx-3 col-md-4"
//         style={{ width: "18rem", height: "500px", border: "0px" }}
//       >
//         <img
//           src={Simba}
//           className="card-img-top w-100"
//           alt="..."
//           style={{
//             height: "250px",
//             borderRadius: "10px",

//           }}
//         />
//         <div className="card-body ">
//           <h3 className="card-title ">Card title</h3>
//           <h6>Subtitle</h6>
//           <p className="card-text mb-0">
//             Khaptad National Park is a popular destination for trekking and
//             hiking. The park offers a variety of trails that range in
//             difficulty from easy to challenging. The park is also a popular
//             destination for bird watching.
//           </p>
//         </div>
//       </div>

//       <div
//         className="card p-0 mx-3 md-3 col-md-4"
//         style={{ width: "18rem", height: "500px", border: "0px" }}
//       >
//         <img
//           src={Simba}
//           className="card-img-top w-100"
//           alt="..."
//           style={{
//             height: "250px",
//             borderRadius: "10px",

//           }}
//         />
//         <div className="card-body ">
//           <h3 className="card-title ">Card title</h3>
//           <h6>Subtitle</h6>
//           <p className="card-text mb-0">
//             Khaptad National Park is a popular destination for trekking and
//             hiking. The park offers a variety of trails that range in
//             difficulty from easy to challenging. The park is also a popular
//             destination for bird watching.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Service

import React from "react";
import Simba from "../../../assets/Images/simba.jpg";

const Service = () => {
  return (
    <div
      className="container p-5 bg-info d-flex align-items-center justify-content-center rounded-5"
      style={{ justifyContent: "space-between" }}
    >
      <div className="row">
        <div className="col-md-4 d-flex">
          <div className="card mx-3 p-0 mb-3 w-100">
            <img
              src={Simba}
              className="card-img-top"
              alt="..."
              style={{
                height: "250px",
                borderRadius: "5px",
              }}
            />
            <div className="card-body">
              <h3 className="card-title">Planning Itinerary</h3>
              <p className="card-text mb-0" />
              We help you customise your itinerary basaed on your preferences
              and choice and schedule of locations. We also recommend you the
              best places to visit in that location so that you don't miss out
              on important loactions in your trip.
            </div>
          </div>
        </div>

        <div className="col-md-4 d-flex">
          <div className="card mx-3 p-0 mb-3 w-100">
            <img
              src={Simba}
              className="card-img-top"
              alt="..."
              style={{
                height: "250px",
                borderRadius: "5px",
              }}
            />
            <div className="card-body">
              <h3 className="card-title">Booking Destination</h3>
              <p className="card-text mb-0">
                Khaptad National Park is a popular destination for trekking and
                hiking. The park offers a variety of trails that range in
                difficulty from easy to challenging. The park is also a popular
                destination for bird watching.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 d-flex">
          <div className="card mx-3 p-0 mb-3 w-100">
            <img
              src={Simba}
              className="card-img-top"
              alt="..."
              style={{
                height: "250px",
                borderRadius: "5px",
              }}
            />
            <div className="card-body">
              <h4 className="card-title">24-7 hrs availability</h4>
              <p className="card-text mb-0">
                Khaptad National Park is a popular destination for trekking and
                hiking. The park offers a variety of trails that range in
                difficulty from easy to challenging. The park is also a popular
                destination for bird watching.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
