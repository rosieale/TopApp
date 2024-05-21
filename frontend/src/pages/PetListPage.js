import { Row, Col, Container, ListGroup, Button } from "react-bootstrap";
import PaginationComponent from "../components/PaginationComponent";
import PetForListComponent from "../components/PetForListComponent";
import SortOptionsComponent from "../components/SortOptionsComponent";
import LocationFilterComponent from "../components/filterQueryResultOptions/LocationFilterComponent";
import RatingFilterComponent from "../components/filterQueryResultOptions/RatingFilterComponent";
import CategoryFilterComponent from "../components/filterQueryResultOptions/CategoryFilterComponent";
import AttributeFilterComponent from "../components/filterQueryResultOptions/AttributeFilterComponent";

const pets = [
  {
    id: 1,
    name: 'Luna',
    description: 'Luna es una gata juguetona de 7 meses. Le gusta jugar, estar acompañada y que la acaricien.',
    location: 'San Pedro Sula',
    rating: 5,
    image: '/images/Kitties1.png'
  },
  {
    id: 2,
    name: 'Bella',
    description: 'Bella es una perrita cariñosa de 2 años. Le gusta correr y jugar con otros perros.',
    location: 'Tegucigalpa',
    rating: 4,
    image: '/images/Carousel/Pets2.png'
  },
  // ...otros animales
];

const PetListPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item className="mb-3 mt-3">
              <SortOptionsComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              FILTRO: <br />
              <LocationFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <RatingFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <CategoryFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <AttributeFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <Button variant="primary">Filtro</Button>
              <Button variant="danger">Reiniciar Filtros</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          {pets.map((pet) => (
            <PetForListComponent
              key={pet.id}
              name={pet.name}
              description={pet.description}
              location={pet.location}
              rating={pet.rating}
              image={pet.image}
            />
          ))}
          <PaginationComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default PetListPage;
