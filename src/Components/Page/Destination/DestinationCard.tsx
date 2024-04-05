// DestinationCard.tsx
import { Link } from 'react-router-dom';
import { DestinationModel } from '../../../Interfaces';

interface Props {
  destinationItem: DestinationModel;
}

const DestinationCard: React.FC<Props> = ({ destinationItem }) => {
  const firstImage = destinationItem.destinationImages.length > 0 ? destinationItem.destinationImages[0].destinationImageBytes : '';

  return (
    <div className="col-lg-4 col-md-6 col-12 p-4">
      <Link to={`/destinationdetails/${destinationItem.code}`}>
        <div className="card" style={{ boxShadow: "0 1px 7px 0 rgb(0 0 0 / 50%)" }}>
          <img src={`data:image/png;base64,${firstImage}`} className="card-img-top" alt="Destination" />
          <div className="card-body pt-2">
            <div className="row col-10 offset-1 p-4">
              <h4 className="card-title text">{destinationItem.difficulty}</h4>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, error vero? Beatae sequi culpa eos placeat accusamus animi dolorem at officiis quasi nobis sapiente illum, voluptatem natus numquam in non quidem. Ea blanditiis maxime eligendi vero ad pariatur, aliquid nesciunt!</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DestinationCard;







