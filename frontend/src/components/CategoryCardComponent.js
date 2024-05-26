import { Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CategoryCardComponent = ({ category, idx, onClick }) => {
  const images = [
    "/images/Puppy1.png",
    "/images/Kitties1.png",
    "/images/Animals1.png",
  ];
  
  return (
    <Card>
      <Card.Img 
        crossOrigin='anonymous'
        variant="top" 
        src={images[idx]}
      />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Entra aquí para ver todas las mascotas que están buscando un hogar.
        </Card.Text>
        <Button variant="primary" onClick={onClick}>Ir a Mascotas</Button>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardComponent;
