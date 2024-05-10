import { Carousel } from 'react-bootstrap';

const PetCarouselComponent = () => {
    return(
    <Carousel>
      <Carousel.Item>
        <img
        className="d-block w-100"
        src="/images/carousel/Pets2.png"
        alt="First slide" 
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="d-block w-100"
        src="/images/carousel/Pets3.png"
        alt="First slide" 
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="d-block w-100"
        src="/images/carousel/Pets4.png"
        alt="First slide" 
        />
      </Carousel.Item>
    </Carousel>
  );
}


export default PetCarouselComponent