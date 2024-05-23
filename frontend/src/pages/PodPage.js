import { Container, Row, Col, Alert, ListGroup, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import PodItemComponent from "../components/PodItemComponent";

const PodPage = () => {  
  // Simulamos tener una mascota en el pod
  const podItems = [
    {
      id: 1,
      name: 'Fae',
      breed: 'Gata Angora Mezclada Gris',
      location: 'San Pedro Sula',
      image: '/images/Kitties1.png'
    }
  ];

  return (
    <Container fluid>
      <Row className="mt-4">
        <Col md={8}>
          <h1>Pod de Mascotas</h1>
          {podItems.length > 0 ? (
            <ListGroup variant="flush">
              {podItems.map((item, idx) => (
                <PodItemComponent 
                  key={idx} 
                  name={item.name} 
                  breed={item.breed} 
                  location={item.location} 
                  image={item.image} 
                />
              ))}
            </ListGroup>
          ) : (
            <Alert variant="info">No hay nada aquí</Alert>
          )}
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Adoptante ({podItems.length})</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Ubicación: <span className="fw-bold">{podItems.length > 0 ? podItems[0].location : "Desconocido"}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <LinkContainer to="/user/UserPetPodDetailsPage">
                <Button type="button">Ver detalles</Button>
              </LinkContainer>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default PodPage;
