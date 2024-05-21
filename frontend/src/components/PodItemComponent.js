import { Row, Col, Image, ListGroup, Form, Button } from "react-bootstrap";

const PodItemComponent = ({ name, breed, location, image }) => {
  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col md={2}>
            <Image crossOrigin="anonymous" src={image} fluid />
          </Col>
          <Col md={2}>
            {name} <br />
            {breed}
          </Col>
          <Col md={2}>
            <b>{location}</b>
          </Col>
          <Col md={3}>
            <Form.Select>
              <option value="1">1</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Button
              type="button"
              variant="secondary"
              onClick={() => window.confirm("Vas a Eliminar la mascota del pod. Estás seguro?")}
            >
              <i class="bi bi-archive-fill"></i>
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
      <br />
    </>
  );
};

export default PodItemComponent;
