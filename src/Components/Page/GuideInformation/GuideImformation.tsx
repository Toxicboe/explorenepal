// import React from "react";
// import Khaptad from "../../../assets/Images/khaptad.jpg";
// // import { Form } from "react-bootstrap";

// const GuideInformation = () => {
//   return (
//     <div className="Guide">
//       <h1>Guide Information</h1>
//       <br></br>
//       <div className="Container">
//         <div className="GuideInformation">
//           <p>Name: Nabin Rokaya</p>
//           <p>Gender: Female</p>
//           <p>Experience: 50 Years</p>
//           <p>Email: nabenarokaya123@gmail.com</p>
//           <p>Phone No.: +977 98364732647</p>
//           <p>
//             Completed Trek: Chandragiri, Pachpokhari, Bethanchowk, Khaptad, etc.
//           </p>
//           <button typeof="onclick">Edit</button>
//         </div>
//         <div className="GuideIntro">
//           <img className="ProfilePicture"src={Khaptad} alt="" />
//             <h2>Nabin Rokaya</h2>

//             <p>
//               fgjkdgbdfhou ghrrut <br />
//               gruytbrhbt gfsjsgdfgduv
//               <br />
//               rvtebu
//             </p>
//         </div>
//       </div>
//       <h3 className="fw-bold">Services Offered :</h3>
//       <h5 className="fw-bold">Guided Tours: </h5>
//       <p>sfghdsfvdbsvjdsbkvbvdbvkjdsg  gruhrghkfjhgkjdfhgf udgsfuhekugureh hjdvbjhdgvjhsdgbjhvbsdjhvbjhsdbvjhsdbjhv<br/>
//       dvjsdbkjvdvbkjdsbvkjbsdkjvb dgvjhsdgbjhvbsdjhvbjhsdbvjhsdbjhvdvjsdbkjvdvbkjdsbvkjbsdkjvbvkbsdkvbkjdsbvkjbdkv<br/>
//       kbdskbvskjbvkd</p>
//       <h5 className="fw-bold">Nature Execution: </h5>
//     </div>
//   );
// };

// export default GuideInformation;



import React from "react";
import Khaptad from "../../../assets/Images/khaptad.jpg";

const Guide = () => {
  return (
    <div className="container-fuild bg-info p-3">
      <h1 className="text-center">Guide Information</h1>
      <br></br>
      <div className="row">
      <img className="ProfilePicture rounded-5 float-md-end" style={{height:"250px", width:"180px"}} src={Khaptad} alt="" />
        <div className="col-md-6">
          <div className="GuideInformation bg-danger p-3 rounded">
            <p><strong>Name:</strong> Nabin Rokaya</p>
            <p><strong>Gender:</strong> Female</p>
            <p><strong>Experience:</strong> 50 Years</p>
            <p><strong>Email:</strong> nabenarokaya123@gmail.com</p>
            <p><strong>Phone No.:</strong> +977 98364732647</p>
            <p><strong>Completed Trek:</strong> Chandragiri, Pachpokhari, Bethanchowk, Khaptad, etc.</p>
            <button className="btn btn-primary">Edit</button>
          </div>
       
        {/* <div className="col-md-6">
          <div className="GuideIntro">
            <img className="ProfilePicture rounded-5 float-end" style={{height:"250px", width:"180px"}} src={Khaptad} alt="" />
            <h2 className="">Nabin Rokaya</h2>
            <p>
              fgjkdgbdfhou ghrrut <br />
              gruytbrhbt gfsjsgdfgduv
              <br />
              rvtebu
            </p>
          </div>
        </div> */}
          <div className="card-body">
          <img className="ProfilePicture rounded-5 float-end" style={{height:"250px", width:"180px"}} src={Khaptad} alt="" />
              <h3 className="card-title">Khaptad National Park</h3>
              <h6>Far-western region</h6>
              <p className="card-text mb-0">
                Khaptad National Park is a popular destination for trekking and
                hiking. The park offers a variety of trails that range in
                difficulty from easy to challenging. The park is also a popular
                destination for bird watching.
              </p>
            </div>
            </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <h3 className="fw-bold">Services Offered :</h3>
          <h5 className="fw-bold">Guided Tours: </h5>
          <p>sfghdsfvdbsvjdsbkvbvdbvkjdsg  gruhrghkfjhgkjdfhgf udgsfuhekugureh hjdvbjhdgvjhsdgbjhvbsdjhvbjhsdbvjhsdbjhv<br/>
          dvjsdbkjvdvbkjdsbvkjbsdkjvb dgvjhsdgbjhvbsdjhvbjhsdbvjhsdbjhvdvjsdbkjvdvbkjdsbvkjbsdkjvbvkbsdkvbkjdsbvkjbdkv<br/>
          kbdskbvskjbvkd</p>
          <h5 className="fw-bold">Nature Execution: </h5>
        </div>
      </div>
    </div>
  );
};

export default Guide;
