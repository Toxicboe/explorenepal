// import React from 'react'
// import BethanChowk from '../../../assets/Images/bethanchowk.jfif'
// import { ResponsiveNavbar } from '../../Layout'

// type Props = {}

// const Rate = (props: Props) => {
//   const Rate = () => {

//     const [selectedSeason, setSelectedSeason] = useState("");
  
//     const handleSeasonChange = (e) => {
//       setSelectedSeason(e.target.value);
//     };
//   return (
//     <div className="row container d-flex justify-content-center bg-info min-vw-100">
//     <ResponsiveNavbar/>
//     <div className="col-4 g-5 text-center"style={{ borderRight: '1px solid #000' }}>
//       <h4 className=" mb-3">Tell us, how was your visit?</h4>
//       <div className="d-flex justify-content-center align-items-center ">
//         <img
//           src={BethanChowk}
//           alt="review pic"
//           style={{ height: "140px", width: "200px" }}
//           className=""
//         />
//       </div>
//       <p className="fs6 mt-4">
//         Gosaikunda, also spelled Gosainkunda, is an alpine freshwater
//         oligotrophic lake in Nepal's Langtang National Park, located at an
//         elevation of 4,380 m (14,370 ft) in the Rasuwa District with a surface
//         area of 13.8 ha (34 acres).[2] Together with associated lakes, the
//         Gosaikunda Lake complex is 1,030 ha (2,500 acres) in size and was
//         designated a Ramsar site on 29 September 2007.[3] The lake melts to
//         form the Trishuli River; it remains frozen for six months in the
//         winter October to June. There are 108 lakes in the vicinity. The
//         Lauribina La pass at an elevation of 4,610 m (15,120 ft) is on its
//         outskirts
//       </p>
//     </div>

//     <div className="col-8 g-5">
//       <div className="h4">Which tour did you do?</div>
//       <div className="input-group">
//   <div className="form-outline col-12 col-md-auto mb-3 mb-md-0">
//     <input type="search" id="form1" className="form-control" />
//     <label className="form-label" htmlFor="form1">Search</label>
//   </div>
//   <button type="button" className="btn btn-primary col-12 col-md-auto" data-mdb-ripple-init>
//     <i className="fas fa-search"></i>
//   </button>
// </div>



//      <div className="mb-3 mt-3 rounded-pill bg-dark text-light w-25 d-flex justify-content-center "style={{height:"30px"}} >Rating Div</div>

//       <div className="mb-3 mt-3">
//       <label htmlFor="season" className="form-label">
//         Select the Season :
//       </label>
//       <select
//         className="form-select"
//         id="season"
//         name="season"
//         // value={selectedSeason}
//         // onChange={handleSeasonChange}
//       >
//         <option value="" disabled>Select a season</option>
//         <option value="Autumn">Autumn</option>
//         <option value="Winter">Winter</option>
//         <option value="Spring">Spring</option>
//         <option value="Summer">Summer</option>
//       </select>

//       <div className="mb-3 mt-3">
//         <label htmlFor="comment">Comments:</label>
//         <textarea
//           className="form-control"
//           // rows="5"
//           id="comment"
//           name="text"
//         ></textarea>
//       </div>
//       <div >
//         <label htmlFor="imageUpload" className="form-label">
//           ADD Some photos
//         </label>
//         <div className="mb-3" style={{ height: "20px" }}>
//           <input type="file" className="form-control" id="imageUpload" />
//         </div>
//       </div>

//       <div>
//         <div className="form-check mb-3"></div>
//         <label className="form-check-label">
//           <input className="form-check-input" type="checkbox" name="remember" /> I
//           certify that this review is based on my own experience and is my
//           genuine opinion of this establishment and that I have no personal or
//           business relationship with this establishment, and have not been
//           offered any incentive or payment originating from the establishment
//           to write this review. I understand that Tripadvisor has a
//           zero-tolerance policy on fake reviews.
//         </label>

//         <div className="d-flex justify-content-center align-items-center mb-3 mt-3">
//           <button type="button" className="btn btn-primary btn-lg w-75">
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
//   </div>
//   )
// }

// export default Rate


import React from 'react';
import BethanChowk from '../../../assets/Images/bethanchowk.jfif';
import { ResponsiveNavbar } from '../../Layout';

const Rate = () => {
  return (
    <div className="container bg-info rounded-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-4 col-md-6 col-sm-8 col-10 g-5 text-center border-end border-dark">
          <h4 className="mb-3">Tell us, how was your visit?</h4>
          <div className="d-flex justify-content-center align-items-center">
            <img
              src={BethanChowk}
              alt="review pic"
              style={{ height: "140px", width: "200px" }}
              className=""
            />
          </div>
          <p className="fs-6 mt-4">
            Gosaikunda, also spelled Gosainkunda, is an alpine freshwater
            oligotrophic lake in Nepal's Langtang National Park, located at an
            elevation of 4,380 m (14,370 ft) in the Rasuwa District with a surface
            area of 13.8 ha (34 acres).[2] Together with associated lakes, the
            Gosaikunda Lake complex is 1,030 ha (2,500 acres) in size and was
            designated a Ramsar site on 29 September 2007.[3] The lake melts to
            form the Trishuli River; it remains frozen for six months in the
            winter October to June. There are 108 lakes in the vicinity. The
            Lauribina La pass at an elevation of 4,610 m (15,120 ft) is on its
            outskirts
          </p>
        </div>

        <div className="col-lg-8 col-md-6 col-sm-8 col-10 g-5">
          <div className="h4">Which tour did you do?</div>
          <div className="input-group mb-3">
            <input type="search" id="form1" className="form-control" />
            <label className="form-label" htmlFor="form1">Search</label>
            <button type="button" className="btn btn-primary" data-mdb-ripple-init>
              <i className="fas fa-search"></i>
            </button>
          </div>

          <div className="mb-3 mt-3 rounded-pill bg-dark text-light d-flex justify-content-center align-items-center" style={{ height: "30px" }}>Rating Div</div>

          <div className="mb-3 mt-3">
            <label htmlFor="season" className="form-label">
              Select the Season :
            </label>
            <select className="form-select" id="season" name="season">
              <option value="" disabled>Select a season</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="comment">Comments:</label>
            <textarea className="form-control" id="comment" name="text"></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="imageUpload" className="form-label">Add Some photos</label>
            <input type="file" className="form-control" id="imageUpload" />
          </div>

          <div className="mb-3 form-check">
            <input className="form-check-input" type="checkbox" name="remember" id="remember" />
            <label className="form-check-label" htmlFor="remember">
              I certify that this review is based on my own experience and is my
              genuine opinion of this establishment and that I have no personal or
              business relationship with this establishment, and have not been
              offered any incentive or payment originating from the establishment
              to write this review. I understand that Tripadvisor has a
              zero-tolerance policy on fake reviews.
            </label>
          </div>

          <div className="d-flex justify-content-center align-items-center mb-3 mt-3">
            <button type="button" className="btn btn-primary btn-lg w-75">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rate;
