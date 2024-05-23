import {
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import AddedToPodMessageComponent from "../components/AddedToPodMessageComponent";

import ImageZoom from "js-image-zoom";
import { useEffect } from "react";

const PetDetailsPage = () => {
    var options = {
        // width: 400,
        // zoomWidth: 500,
        // fillContainer: true,
        // zoomPosition: "bottom",
        scale: 2,
        offset: { vertical: 0, horizontal: 0 },
      };
      useEffect(() => {
        new ImageZoom(document.getElementById("first"), options);
        new ImageZoom(document.getElementById("second"), options);
        new ImageZoom(document.getElementById("third"), options);
        new ImageZoom(document.getElementById("fourth"), options);
      });
  return (
    <Container>
      <AddedToPodMessageComponent />
      <Row className="mt-5">
      <Col style={{ zIndex: 1 }} md={4}>
          <div id="first">   
            <Image
              crossOrigin="anonymous"
              fluid
              src="/images/Kitties1.png"
            />
          </div>
          <br />
          <div id="second">
            <Image fluid src="/images/Cat1.png" />
          </div>
          <br />
          <div id="third">
            <Image fluid src="/images/Cat2.png" />
          </div>
          <br />
          <div id="fourth">
            <Image fluid src="/images/Cat3.png" />
          </div>
          <br />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h1>Fae</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating readonly size={20} initialValue={4} /> (1)
                </ListGroup.Item>
                <ListGroup.Item>
                  Ubicación: <span className="fw-bold">San Pedro Sula</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Porta ac consectetur ac Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Perferendis, illo.
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>Estado: disponible para adopción</ListGroup.Item>
                <ListGroup.Item>
                Ubicación: <span className="fw-bold">San Pedro Sula</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Tipo de entrega:
                  <Form.Select size="lg" aria-label="Default select example">
                    <option>Opciones</option>
                    <option value="1">Recoger/Dejar a mascota</option>
                    <option value="2">Pasaje para mascota</option>
                    <option value="3">Lugar común</option>
                  </Form.Select>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="danger">Agregar al pod de mascotas</Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <h5>Clasificaciones</h5>
              <ListGroup variant="flush">
              {Array.from({ length: 10 }).map((item, idx) => (
                  <ListGroup.Item key={idx}>
                      John Doe <br />
                      <Rating readonly size={20}  initialValue={4}/>
                      <br />
                      20-09-2001 <br />
                      Porta ac consectetur ac Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Perferendis, illo.
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <hr />
          <Alert variant="danger">
            Inicia sesión antes de dejar una reseña de dueño
          </Alert>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  
              <Form.Label>Enviar una clasificación</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Select aria-label="Default select example">
              <option value="5">5 (muy bueno)</option>
              <option value="4">4 (bueno)</option>
              <option value="3">3 (normal)</option>
              <option value="2">2 (aceptable)</option>
              <option value="1">1 (malo)</option>
            </Form.Select>
            <Button className="mb-3 mt-3" variant="primary">Enviar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PetDetailsPage;
