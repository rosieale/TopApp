import React from "react";
import { useNavigate } from "react-router-dom";
import PetCarouselComponent from "../components/user/PetsCarouselComponent";
import CategoryCardComponent from "../components/CategoryCardComponent";
import { Row, Container } from "react-bootstrap";

const Homepage = () => {
  const categories = ["Caninos", "Felinos", "Otros animales"];
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/pets/${category}`);
  };

  return (
    <>
      <PetCarouselComponent />
      <Container>
        <Row xs={1} md={2} className="g-4 mt-5">
          {categories.map((category, idx) => (
            <CategoryCardComponent 
              key={idx} 
              category={category} 
              idx={idx} 
              onClick={() => handleCategoryClick(category)} 
            />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Homepage;
