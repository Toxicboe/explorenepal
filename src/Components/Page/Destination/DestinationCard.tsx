

import React from 'react';
import { DestinationModel } from '../../../Interfaces';
import { Link } from 'react-router-dom';

interface Props {
  destinationItem: DestinationModel;
}

const DestinationCard: React.FC<Props> = ({ destinationItem }) => {
  // Destructure destinationItem to access properties directly
  const { code, difficulty, destinationImages } = destinationItem;

  // Check if destinationImages array is not empty before accessing the first image
  const firstImage = destinationImages.length > 0 ? destinationImages[0].destinationImageBytes : '';

  return (
    <div className="col-lg-4 col-md-6 col-12 p-4">
      <Link to={`/destinationdetails/${code}`}>
        <div className="card" style={{ boxShadow: "0 1px 7px 0 rgb(0 0 0 / 50%)" }}>
          <img src={`data:image/png;base64,${firstImage}`} className="card-img-top" alt="Destination" />
          <div className="card-body pt-2">
            <div className="row col-10 offset-1 p-4">
              <h4 className="card-title text">{difficulty}</h4>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, error vero? Beatae sequi culpa eos placeat accusamus animi dolorem at officiis quasi nobis sapiente illum, voluptatem natus numquam in non quidem. Ea blanditiis maxime eligendi vero ad pariatur, aliquid nesciunt!</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default DestinationCard;