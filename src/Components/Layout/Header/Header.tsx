import { ResponsiveNavbar } from "..";
import simba from '../../../assets/Images/simba.jpg';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Header = () => {
  const backgroundStyles = {
    backgroundImage: `url(${simba})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", // Use minHeight instead of height for responsiveness
    // Add other styles as needed
  };

  return (
    <div style={backgroundStyles}>
      <ResponsiveNavbar />
      <Container fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <Row className="text-center">
          <Col>
            <div className="display-2 text-uppercase text-light" style={{ fontSize: "clamp(50px, 10vw, 100px)" }}>Explore Nepal</div>
            <div className="h5 mt-4 text-light">"Discover Nepal's beauty, culture, and adventure in every<br /> breathtaking corner."</div>
            <Button variant="outline-light" size="lg" className="mt-5 px-5 py-3">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
