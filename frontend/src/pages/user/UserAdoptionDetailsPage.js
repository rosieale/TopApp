import {
    Container,
    Row,
    Col,
    Form,
    Alert,
    ListGroup,
    Button,
  } from "react-bootstrap";
  import PodItemComponent from "../../components/PodItemComponent";
  
  const UserAdoptionDetailsPage = () => {
    return (
      <Container fluid>
        <Row className="mt-4">
          <h1>Detalles de adopción</h1>
          <Col md={8}>
            <br />
            <Row>
              <Col md={6}>
                <h2>Entrega</h2>
                <b>Nombre</b>: Adriana Cerna <br />
                <b>Dirección</b>: Residencial Villas, Bloque 1 <br />
                <b>Número</b>: 9667 8546
              </Col>

              <Row>
                <Col>
                  <Alert className="mt-3" variant="success">
                    Entregado
                  </Alert>
                </Col>
                <Col>
                  <Alert className="mt-3" variant="success">
                    Completado en 2024-3-9
                  </Alert>
                </Col>
              </Row>
            </Row>
            <br />
            <h2>Mascota</h2>
            <ListGroup variant="flush">
              {Array.from({ length: 1 }).map((item, idx) => (
                <PodItemComponent key={idx} />
              ))}
            </ListGroup>
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroup.Item>
                <h3>Resumen</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                Mascota: <span className="fw-bold">Minnie</span>
              </ListGroup.Item>
              <ListGroup.Item>
              Ubicación: <span className="fw-bold">San Pedro Sula</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-grid gap-2">
                  <Button size="lg" variant="danger" type="button">
                    Reportar problema
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default UserAdoptionDetailsPage;
  
  