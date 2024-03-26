// import React from 'react';
// import './Booking.css';
// import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// type Props = {}

// const Booking = (props: Props) => {
//   return (
//     <div className="center-container">
//     <div className="container d-flex justify-content-center align-self-center h-100 w-100">
//       <div className="row   d-flex justify-content-center align-self-center">
//           <h1 className="d-flex justify-content-center align-items-center">
//               Explore 
//             </h1>
//             <h1 className="d-flex justify-content-center align-items-center text-primary">
//               The Wolrd
//             </h1>
//             <div className="d-flex justify-content-center align-items-center h4">
//               Book Your Destination
//             </div>

              
//             <div className="col-12 col-md-10 col-lg-8 w-50 h-25">
//                   <form className="card card-sm">
//                       <div className="card-body row no-gutters align-items-center">
//                           <div className="col-auto">
//                               <FontAwesomeIcon icon={faSearchengin} />
//                           </div>
//                           <div className="col">
//                               <input
//                                   className="form-control form-control-lg form-control-borderless"
//                                   type="search"
//                                   placeholder="Search topics or keywords"
//                                   style={{ border: "none" }}
//                               />
//                           </div>
//                           <div className="col-auto">
//                               <button className="btn btn-lg btn-success rounded-pill" type="submit">
//                                   Search
//                               </button>
//                           </div>
//                       </div>
//                   </form>
//               </div>
//         <div className="col-8  align-self-center m-4 p-4 ">
//           <form className="bg-danger">

            


//             <div className="p-3 ">
//               <div className="mb-3 mt-3">
//                 <label htmlFor="season" className="form-label">
//                   Name:
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="fullName"
//                   placeholder="Enter your Full Name"
//                   name="fullName"
//                 />
//               </div>
//               <div className="mb-3 mt-3">
//                 <label htmlFor="season" className="form-label">
//                   Age:
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="age"
//                   placeholder="Enter your Age"
//                   name="age"
//                 />
//               </div>
//               <div className="mb-3 mt-3">
//                 <label htmlFor="phone" className="form-label">
//                   Phone
//                 </label>
//                 <input
//                   type="tel"
//                   className="form-control"
//                   id="phoneNumber"
//                   placeholder="Enter your Phone"
//                   name="phoneNumber"
//                   pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
//                 />
//               </div>
//               <div className="mb-3 mt-3">
//                 <label htmlFor='season' className="form-label">
//                   Select the Season to Trek/Hike:
//                 </label>
//                 <input
//                   className="form-control"
//                   list="season"
//                   name="season"
//                   id="season"
//                   placeholder="season"
//                 />
//                 <datalist id="season">
//                   <option value="Autumn" />
//                   <option value="Winter" />
//                   <option value="Spring" />
//                   <option value="Summer" />
//                 </datalist>
//               </div>

//               <div className="mb-3 mt-3">
//                 <label htmlFor='sort' className="form-label">
//                   Sort By:
//                 </label>
//                 <input
//                   className="form-control"
//                   list="sort"
//                   name="sort"
//                   id="sort"
//                   placeholder="Recommeded"
//                 />
//                 <datalist id="sort">
//                   <option value="option1" />
//                   <option value="option2" />
//                   <option value="option3" />
//                   <option value="option4" />
//                 </datalist>
//               </div>

//               <div className="mb-3 mt-3">
//                 {/* <label for="price" className="form-label"> */}
//                 <label htmlFor='price' className="form-label">
//                   Price:
//                 </label>
//                 <input
//                   className="form-control"
//                   list="price"
//                   name="price"
//                   id="price"
//                   placeholder="Price"
//                 />
//                 <datalist id="price">
//                   <option value="option1" />
//                   <option value="option2" />
//                   <option value="option3" />
//                   <option value="option4" />
//                 </datalist>
//               </div>
//             </div>
//           </form>

//         <div className="d-flex justify-content-end gx-5 m-3  ">
//           <button type="button" className=" btn btn-primary btn-lg">
//             Pay with Khalti
//           </button>
//         </div>
//         </div>
//       </div>
//     </div>
//   </div>  )
// }

// export default Booking;


import React from 'react';
import './Booking.css';
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {}

const Booking = (props: Props) => {
  return (
    
    <div className="d-flex justify-content-center align-self-center min-vh-100 h-100 bg-info ">
    <div className="container d-flex justify-content-center align-self-center h-100 w-100 ">
      <div className="row   d-flex justify-content-center align-self-center bg-info">
          <h1 className="d-flex justify-content-center align-items-center ">
              Explore 
            </h1>
            <h1 className="d-flex justify-content-center align-items-center text-primary">
              The Wolrd
            </h1>
            <div className="d-flex justify-content-center align-items-center h4">
              Book Your Destination
            </div>

              
            <div className="col-12 col-md-10 col-lg-8 w-50 h-25">
                  <form className="card card-sm">
                      <div className="card-body row no-gutters align-items-center">
                          <div className="col-auto">
                              <FontAwesomeIcon icon={faSearchengin} />
                          </div>
                          <div className="col">
                              <input
                                  className="form-control form-control-lg form-control-borderless"
                                  type="search"
                                  placeholder="Search topics or keywords"
                                  style={{ border: "none" }}
                              />
                          </div>
                          <div className="col-auto">
                              <button className="btn btn-lg btn-success rounded-pill" type="submit">
                                  Search
                              </button>
                          </div>
                      </div>
                  </form>
              </div>
        <div className="col-8  align-self-center m-4 p-4 ">
          <form className="bg-danger">

            


            <div className="p-3 ">
              <div className="mb-3 mt-3">
                <label htmlFor="season" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Enter your Full Name"
                  name="fullName"
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="season" className="form-label">
                  Age:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  placeholder="Enter your Age"
                  name="age"
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="Enter your Phone"
                  name="phoneNumber"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="season" className="form-label">
                  Select the Season to Trek/Hike:
                </label>
                <input
                  className="form-control"
                  list="season"
                  name="season"
                  id="season"
                  placeholder="season"
                />
                <datalist id="season">
                  <option value="Autumn" />
                  <option value="Winter" />
                  <option value="Spring" />
                  <option value="Summer" />
                </datalist>
              </div>

              <div className="mb-3 mt-3">
                <label htmlFor="sort" className="form-label">
                  Sort By:
                </label>
                <input
                  className="form-control"
                  list="sort"
                  name="sort"
                  id="sort"
                  placeholder="Recommeded"
                />
                <datalist id="sort">
                  <option value="option1" />
                  <option value="option2" />
                  <option value="option3" />
                  <option value="option4" />
                </datalist>
              </div>

              <div className="mb-3 mt-3">
                <label htmlFor="price" className="form-label">
                  Price:
                </label>
                <input
                  className="form-control"
                  list="price"
                  name="price"
                  id="price"
                  placeholder="Price"
                />
                <datalist id="price">
                  <option value="option1" />
                  <option value="option2" />
                  <option value="option3" />
                  <option value="option4" />
                </datalist>
              </div>
            </div>
          </form>

        <div className="d-flex justify-content-end gx-5 m-3  ">
          <button type="button" className=" btn btn-primary btn-lg">
            Pay with Khalti
          </button>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
 }


export default Booking;


