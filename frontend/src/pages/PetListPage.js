import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Container, ListGroup, Button, Alert } from 'react-bootstrap';
import PaginationComponent from '../components/PaginationComponent';
import PetForListComponent from '../components/PetForListComponent';
import SortOptionsComponent from '../components/SortOptionsComponent';
import LocationFilterComponent from '../components/filterQueryResultOptions/LocationFilterComponent';
import RatingFilterComponent from '../components/filterQueryResultOptions/RatingFilterComponent';
import CategoryFilterComponent from '../components/filterQueryResultOptions/CategoryFilterComponent';
import AttributeFilterComponent from '../components/filterQueryResultOptions/AttributeFilterComponent';

const PetListPage = () => {
  const { category } = useParams();
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch(`/pets?type=${category}`);
        if (!response.ok) {
          if (response.status === 404) {
            setPets([]);
          } else {
            throw new Error('Network response was not ok');
          }
        } else {
          const data = await response.json();
          setPets(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
          {pets.length === 0 ? (
            <Alert variant="warning">No Pets Found</Alert>
          ) : (
            pets.map((pet) => (
              <PetForListComponent
                key={pet.id}
                name={pet.name}
                description={pet.description}
                location={pet.location}
                rating={pet.rating}
                image={pet.image}
              />
            ))
          )}
          <PaginationComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default PetListPage;
