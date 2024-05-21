import { Card, Button, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { LinkContainer } from "react-router-bootstrap";

const PetForListComponent = ({ name, description, location, rating, image }) => {
  return (
    <Card style={{ marginTop: "30px", marginBottom: "50px" }}>
      <Row>
        <Col lg={5}>
          <Card.Img variant="top" src={image} alt={name} />
        </Col>
        <Col lg={7}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>
              <Rating readonly size={20} initialValue={rating} /> ({rating})
            </Card.Text>
            <Card.Text className="h4">
              {location}{" "}
              <LinkContainer to="/PetDetailsPage">
                <Button variant="danger">Ver mascota</Button>
              </LinkContainer>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default PetForListComponent;
