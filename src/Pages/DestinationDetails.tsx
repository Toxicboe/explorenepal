import {
  FaClock,
  FaTachometerAlt,
  FaDollarSign,
  FaMountain,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useGetDestinationItemsByCodeQuery } from "../Apis/destinationItemApi";
import { MiniLoader } from "../Components/Page/Loader";
import { DestinationImage } from "../Interfaces";

// import Khaptad from '../assets/Images/khaptad.jpg';

const DestinationDetails = () => {
  const { code } = useParams();
  const { data, isLoading } = useGetDestinationItemsByCodeQuery(code);
  //const navigate = useNavigate();

  return (
    <>
      {isLoading ? (
        <MiniLoader />
      ) : (
        data && (
          <div className="container bg-info px-4" style={{ maxWidth: "100%" }}>
            {/* Image */}
            <img
              src={`data:image/png;base64,${data.destinationImages[0].destinationImageBytes}`}
              className="img-fluid rounded object-fit-cover mt-4"
              alt="pic"
              style={{ height: "300px", width: "1500px", borderRadius: "20px" }}
            />

            {/* Title */}
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
                <h4 className="mt-2">
                  Fee per Person: NPR 3000 to 4000 (for Nepali)
                </h4>
                <h4 className="mt-2">
                  Fee per Person: NPR 12000 to 15000 (for Foreign)
                </h4>
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
                Nestled amidst the snow-capped peaks of the Jugal Himal in
                Nepal, Pachpokhari, meaning "five ponds," is a breathtaking
                destination that blends spiritual significance with natural
                beauty. The five glacial lakes, shimmering like turquoise
                jewels, are considered sacred by both Hindus and Buddhists,
                believed to have been formed from Lord Shiva's tears.
              </p>
              {/* Remaining Overview content */}
            </div>

            {/* Photo Gallery */}
            <div className="mt-4">
              <h3>Photo Gallery</h3>
              {/* <div className="row">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-3">
                    <img src={Khaptad} alt={`pic-${index}`} className="img-fluid rounded object-fit-cover" style={{ height: "200px" }} />
                  </div>
                ))}
              </div> */}

              <div className="row">
                {data &&
                  data.length > 0 &&
                  data
                    .slice(0, 8)
                    .map((image: DestinationImage, index: number) => (
                      <div
                        key={image.id}
                        className="col-lg-3 col-md-4 col-sm-6 mb-3"
                      >
                        <img
                          src={`data:image/png;base64,${image.destinationImageBytes}`}
                          alt={`pic-${index}`}
                          className="img-fluid rounded object-fit-cover"
                          style={{ height: "200px" }}
                        />
                      </div>
                    ))}
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default DestinationDetails;
