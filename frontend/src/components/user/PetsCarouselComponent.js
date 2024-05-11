import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const PetCarouselComponent = () => {
    const cursorP = {
      cursor: "pointer"
    }
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          style={{ height: "400px", objectFit: "cover" }}
          src="/images/carousel/Pets2.png"
          alt="Primer slide"
        />
        <Carousel.Caption>
          <LinkContainer style= {cursorP} to="/PetDetailsPage">
          <h3>Adopta al nuevo integrante de tu familia</h3>
          </LinkContainer>
          <p>Navega las mascotas disponibles para adopción</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "400px", objectFit: "cover" }}
          src="/images/carousel/Pets3.png"
          alt="Segundo slide"
        />

<Carousel.Caption>
          <LinkContainer style= {cursorP} to="/PetDetailsPage">
          <h3>Lee sobre la importancia del cuidado de tu mascota</h3>
          </LinkContainer>
          <p>Aumenta tu conocimiento con nuestros recursos.</p>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "400px", objectFit: "cover" }}
          src="/images/carousel/Pets4.png"
          alt="Tercer slide"
          
        />
        <Carousel.Caption>
          <LinkContainer style= {cursorP} to="/PetDetailsPage">
          <h3>Conoce las mascotas</h3>
          </LinkContainer>
          <p>Lee las historias de las mascotas.</p>
        </Carousel.Caption>
        
      </Carousel.Item>
    </Carousel>
  );
};

export default PetCarouselComponent;
