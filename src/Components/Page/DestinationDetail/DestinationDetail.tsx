

// import React from "react";
// // index.tsx or App.tsx
// import Khaptad from '../../../assets/Images/khaptad.jpg'
// import { FaClock, FaTachometerAlt, FaDollarSign, FaMountain } from 'react-icons/fa';
// import Simba from "../../../assets/Images/simba.jpg";
// // import IconClockFill from "../SVG/IconClockFill";
// // import IconBarChartFill from "../SVG/IconBarChartFill";
// // import IconMoneyCirlceFill from "../SVG/IconMoneyDollarCircleFill";
// // import IconMountain from "../SVG/IconMountain";

// const DestinationDetail = () => {

//   return (
//     <div>
//       {/* img */}

//       <img
//         src={Simba}
//         className=" w-100 top-0  rounded object-fit-cover"
//         alt="pic"
//         style={{ height: "300px", borderRadius: "20px", margin: "20px" }}
//       />

//       {/* title */}
//       <div className="row mt-4 text-center">
//         <div className="col-2 ">
//           {/* <IconClockFill style={{ height: "3rem", width: "3rem" }} /> */}
//           <FaClock/> 
//           <h4>Duration:1 week</h4>
//         </div>
//         <div className="col-2 ">
//           <FaTachometerAlt style={{ height: "3rem", width: "3rem" }} />
//           <h4>Difficulty:High</h4>
//         </div>
//         <div className="col-5">
//           <FaDollarSign style={{ height: "3rem", width: "3rem" }} />
//           <h4>Fee per Person:NPR 3000 to 4000 (for Nepali)</h4>
//           <h4>Fee per Person:NPR 12000 to 15000 (for Foreign)</h4>
//         </div>
//         <div className="col-3">
//           <FaMountain style={{ height: "3rem", width: "3rem" }} />
//           <h4>Max Altitude:13,450 ft</h4>
//         </div>
//       </div>

//       {/* map */}
//       <div className="d-flex justify-content-end ">
//         <button type="button" className="btn btn-success btn-lg rounded-5 m-3">
//           View Map
//         </button>
//         <button type="button" className="btn btn-success btn-lg rounded-5 m-3">
//           View Map
//         </button>
//       </div>
//       {/* detail */}
//       <div>
//         Overview : <br />
//         <br />
//         <br />
//         Nestled amidst the snow-capped peaks of the Jugal Himal in Nepal,
//         Pachpokhari, meaning "five ponds," is a breathtaking destination that
//         blends spiritual significance with natural beauty. The five glacial
//         lakes, shimmering like turquoise jewels, are considered sacred by both
//         Hindus and Buddhists, believed to have been formed from Lord Shiva's
//         tears.
//         <br />
//         <br />
//         <br />
//         A moderate trek through rhododendron forests and quaint villages leads
//         to the serene lakes, each imbued with its own mystical power. Pilgrims
//         bathe in their icy waters seeking blessings, while trekkers marvel at
//         the panoramic vistas of the surrounding mountains. The air hums with the
//         chants of prayer flags fluttering in the wind, creating an atmosphere of
//         tranquility that washes over the soul.
//         <br />
//         <br />
//         <br />
//         Beyond its spiritual allure, Pachpokhari offers a haven for nature
//         lovers. The diverse ecosystem shelters a wealth of flora and fauna, from
//         vibrant wildflowers to elusive musk deer. Rhododendrons paint the
//         hillsides in spring, while snow blankets the landscape in winter,
//         transforming it into a wonderland. Whether you seek spiritual solace,
//         breathtaking views, or a taste of authentic Nepali culture, Pachpokhari
//         awaits with open arms.
//         <br />
//         <br />
//         <br />
//         <br />
//         Why pachpokhari ?<br />
//         <br />
//         <br />
//         Pach Pokhari, nestled amidst the serene Himalayas, beckons hikers with
//         its unique blend of accessible challenge, breathtaking beauty, and
//         spiritual charm. This "Five Lakes" trek offers:
//         <br />
//         Moderate difficulty: Ideal for beginners seeking a taste of
//         high-altitude adventure, it winds through rhododendron forests past
//         cascading waterfalls, ascending gradually to the sparkling lakes.
//         Panoramic grandeur: Five glacial lakes reflecting the snow-capped peaks
//         create a scene unmatched in its tranquility and awe-inspiring majesty.
//         Spiritual significance: Held sacred by Hindus and Buddhists, the lakes
//         resonate with a mystical aura, enhancing the journey with a sense of
//         inner peace. Camping haven: Unlike many Himalayan treks, Pach Pokhari's
//         meadows provide ample space for comfortable tent camping, immersing you
//         in the wilderness. Proximity to Kathmandu: A short distance from the
//         city makes it a perfect weekend getaway, offering a rejuvenating escape
//         into the mountains.
//         <br />
//         <br />
//         <br />
//       </div>

//       {/* photo gallery */}
//       <h3>Photo Gallery</h3>
//       <div className="row">
      
//           <img src={Khaptad} alt="pic" className=" col-3 rounded-4 mt-3 object-fit-cover " style={{height:"500px"}}/>
//           <img src={Khaptad} alt="pic" className=" col-3 rounded-4 mt-3 object-fit-cover " style={{height:"500px"}}/>
//           <img src={Khaptad} alt="pic" className=" col-3 rounded-4 mt-3 object-fit-cover " style={{height:"500px"}}/>
//           <img src={Khaptad} alt="pic" className=" col-3 rounded-4 mt-3 object-fit-cover " style={{height:"500px"}}/>
//           <img src={Khaptad} alt="pic" className=" col-3 rounded-4 mt-3 object-fit-cover " style={{height:"500px"}}/>
//           <img src={Khaptad} alt="pic" className=" col-3 rounded-4 mt-3 object-fit-cover " style={{height:"500px"}}/>
//           <img src={Khaptad} alt="pic" className=" col-3 rounded-4 mt-3 object-fit-cover " style={{height:"500px"}}/>
//           <img src={Khaptad} alt="pic" className=" col-3 rounded-4 mt-3 object-fit-cover " style={{height:"500px"}}/>
       
   
        
       
//       </div>

//     </div>
//   );
// };

// export default DestinationDetail;

import React from "react";
import { FaClock, FaTachometerAlt, FaDollarSign, FaMountain } from 'react-icons/fa';
import backgroundImage from "../../assets/backgroundImage.jpg";
import Simba from "../../../assets/Images/simba.jpg";
import Khaptad from '../../../assets/Images/khaptad.jpg';

const DestinationDetail = () => {
  return (
    <div className="container bg-info px-4" style={{maxWidth:"100%"}}>
      {/* Image */}
      <img
        src={Simba}
        className="img-fluid rounded object-fit-cover mt-4"
        alt="pic"
        style={{ height: "300px",width:"1500px", borderRadius: "20px" }}
      />

      {/* Title */}
      {/* <div className="row mt-3 text-center">
        <div className="col-md-3">
          <FaClock style={{ height: "3rem", width: "3rem" }} /> 
          <h4 className="mt-2">Duration: 1 week</h4>
        </div>
        <div className="col-md-3">
          <FaTachometerAlt style={{ height: "3rem", width: "3rem" }} />
          <h4 className="mt-2">Difficulty: High</h4>
        </div>
        <div className="col-md-6">
          <FaDollarSign style={{ height: "3rem", width: "3rem" }} />
          <h4 className="mt-2">Fee per Person: NPR 3000 to 4000 (for Nepali)</h4>
          <h4 className="mt-2">Fee per Person: NPR 12000 to 15000 (for Foreign)</h4>
        </div>
        <div className="col-md-12 mt-4">
          <FaMountain style={{ height: "3rem", width: "3rem" }} />
          <h4 className="mt-2">Max Altitude: 13,450 ft</h4>
        </div>
      </div> */}
      <div className="row mt-4 text-center">
  <div className="col-md-3">
    <FaClock style={{ height: "2rem", width: "2rem" }} /> 
    <h4 className="mt-2">Duration: 1 week</h4>
  </div>
  <div className="col-md-3">
    <FaTachometerAlt style={{ height: "2rem", width: "2rem" }} />
    <h4 className="mt-2">Difficulty: High</h4>
  </div>
  <div className="col-md-3">
    <FaDollarSign style={{ height: "2rem", width: "2rem" }} />
    <h4 className="mt-2">Fee per Person: NPR 3000 to 4000 (for Nepali)</h4>
    <h4 className="mt-2">Fee per Person: NPR 12000 to 15000 (for Foreign)</h4>
  </div>
  <div className="col-md-3">
    <FaMountain style={{ height: "2rem", width: "2rem" }} />
    <h4 className="mt-2">Max Altitude: 13,450 ft</h4>
  </div>
</div>


      {/* Map and Detail Buttons */}
      <div className="d-flex justify-content-end mt-3">
        <button type="button" className="btn btn-success rounded-5 mx-2">
          View Map
        </button>
        <button type="button" className="btn btn-success rounded-5 mx-2">
          View Details
        </button>
      </div>

      {/* Overview */}
      <div className="mt-4">
        <h3>Overview</h3>
        <p>
          Nestled amidst the snow-capped peaks of the Jugal Himal in Nepal, Pachpokhari, meaning "five ponds," is a breathtaking destination that blends spiritual significance with natural beauty. The five glacial lakes, shimmering like turquoise jewels, are considered sacred by both Hindus and Buddhists, believed to have been formed from Lord Shiva's tears.
        </p>
        <p>
          A moderate trek through rhododendron forests and quaint villages leads to the serene lakes, each imbued with its own mystical power. Pilgrims bathe in their icy waters seeking blessings, while trekkers marvel at the panoramic vistas of the surrounding mountains. The air hums with the chants of prayer flags fluttering in the wind, creating an atmosphere of tranquility that washes over the soul.
        </p>
        <p>
          Beyond its spiritual allure, Pachpokhari offers a haven for nature lovers. The diverse ecosystem shelters a wealth of flora and fauna, from vibrant wildflowers to elusive musk deer. Rhododendrons paint the hillsides in spring, while snow blankets the landscape in winter, transforming it into a wonderland. Whether you seek spiritual solace, breathtaking views, or a taste of authentic Nepali culture, Pachpokhari awaits with open arms.
        </p>
        <p>
          Why pachpokhari ?<br /><br />
          Pach Pokhari, nestled amidst the serene Himalayas, beckons hikers with its unique blend of accessible challenge, breathtaking beauty, and spiritual charm. This "Five Lakes" trek offers:<br />
          - Moderate difficulty: Ideal for beginners seeking a taste of high-altitude adventure, it winds through rhododendron forests past cascading waterfalls, ascending gradually to the sparkling lakes.<br />
          - Panoramic grandeur: Five glacial lakes reflecting the snow-capped peaks create a scene unmatched in its tranquility and awe-inspiring majesty.<br />
          - Spiritual significance: Held sacred by Hindus and Buddhists, the lakes resonate with a mystical aura, enhancing the journey with a sense of inner peace.<br />
          - Camping haven: Unlike many Himalayan treks, Pach Pokhari's meadows provide ample space for comfortable tent camping, immersing you in the wilderness.<br />
          - Proximity to Kathmandu: A short distance from the city makes it a perfect weekend getaway, offering a rejuvenating escape into the mountains.
        </p>
      </div>

      {/* Photo Gallery */}
      <div className="mt-4">
        <h3>Photo Gallery</h3>
        <div className="row">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <img src={Khaptad} alt={`pic-${index}`} className="img-fluid rounded object-fit-cover" style={{ height: "200px" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
