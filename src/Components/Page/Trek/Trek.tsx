// import React from "react";

// const Trek = () => {
//   return (
//     <div className="container min-vh-100 d-flex justify-content-center align-items-center ">
//       <div className="row align-items-center justify-content-center w-100 bg-danger" style={{height:"320px"}}>
//         {/* season column */}
//         <div className="col-3 col-md-12 text-center">
//             <h4 className="fw-bold mb-4">Trek by Season</h4>
//           <div className="col text-center">
//             <div className="row">
//               <div className="col text-center">
//                 <p>January</p>
//                 <p>February</p>
//                 <p>March</p>
//                 <p>April</p>
//                 <p>April</p>
//                 <p>April</p>
                
//               </div>
//               {/* <div classNameName="col text-center">
//                 <p>July</p>
//                 <p>August</p>
//                 <p>September</p>
//                 <p>October</p>
//                 <p>October</p>
//                 <p>October</p>
               
//               </div> */}
//             </div>
//           </div>
//         </div>
    
//         {/* Difficulty */}
//         <div className="col-3 col-md-12 text-center">
//             <h4 className="fw-bold mb-4">Trek by Season</h4>
//           <div className="col text-center">
//             <div className="row">
//               <div className="col text-center">
//                 <p>January</p>
//                 <p>February</p>
//                 <p>March</p>
//                 <p>April</p>
//                 <p>April</p>
//                 <p>April</p>
                
//               </div>
//               {/* <div className="col text-center">
//                 <p>July</p>
//                 <p>August</p>
//                 <p>September</p>
//                 <p>October</p>
//                 <p>October</p>
//                 <p>October</p>
               
//               </div> */}
//             </div>
//           </div>
//         </div>
      

//         {/* Month */}
//         <div className="col-3 col-md-12 text-center">
//             <h4 className="fw-bold mb-4">Trek by Season</h4>
//           <div className="col text-center">
//             <div className="row">
//               <div className="col text-center">
//                 <p>January</p>
//                 <p>February</p>
//                 <p>March</p>
//                 <p>April</p>
//                 <p>April</p>
//                 <p>April</p>
                
//               </div>
//               <div className="col text-center">
//                 <p>July</p>
//                 <p>August</p>
//                 <p>September</p>
//                 <p>October</p>
//                 <p>October</p>
//                 <p>October</p>
               
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Region */}
//         <div className="col-3  col-md-12 text-center ">
//             <h4 className="fw-bold mb-4">Trek by Season</h4>
//           <div className="col text-center">
//             <div className="row">
//               <div className="col text-center">
//                 <p>January</p>
//                 <p>February</p>
//                 <p>March</p>
//                 <p>April</p>
//                 <p>April</p>
//                 <p>April</p>
                
//               </div>
//               {/* <div className="col text-center">
//                 <p>July</p>
//                 <p>August</p>
//                 <p>September</p>
//                 <p>October</p>
//                 <p>October</p>
//                 <p>October</p>
               
//               </div> */}
//             </div>
//           </div>
//         </div>
      

        
//       </div>
//     </div>
//   );
// };

// export default Trek;



import React from "react";

const Trek = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center ">
      <div className="row align-items-center justify-content-center w-100 bg-danger" style={{ height: "320px" }}>
        {/* Season column */}
        <div className="col-md-3 col-12 text-center mb-3">
          <h4 className="fw-bold mb-4">Trek by Season</h4>
          <div className="row">
            <div className="col text-center">
              <p>January</p>
              <p>February</p>
              <p>March</p>
              <p>April</p>
              <p>April</p>
              <p>April</p>
            </div>
          </div>
        </div>

        {/* Difficulty */}
        <div className="col-md-3 col-12 text-center mb-3">
          <h4 className="fw-bold mb-4">Trek by Difficulty</h4>
          <div className="row">
            <div className="col text-center">
              <p>Easy</p>
              <p>Medium</p>
              <p>Hard</p>
            </div>
          </div>
        </div>

        {/* Month */}
        <div className="col-md-3 col-12 text-center mb-3">
          <h4 className="fw-bold mb-4">Trek by Month</h4>
          <div className="row">
            <div className="col-6 text-center">
              <p>January</p>
              <p>February</p>
              <p>March</p>
              <p>April</p>
            </div>
            <div className="col-6 text-center">
              <p>July</p>
              <p>August</p>
              <p>September</p>
              <p>October</p>
            </div>
          </div>
        </div>

        {/* Region */}
        <div className="col-md-3 col-12 text-center mb-3">
          <h4 className="fw-bold mb-4">Trek by Region</h4>
          <div className="row">
            <div className="col text-center">
              <p>Mountain</p>
              <p>Forest</p>
              <p>Desert</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trek;
