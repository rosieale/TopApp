import PetCarouselComponent from "../components/user/PetsCarouselComponent";
import CategoryCardComponent from "../components/CategoryCardComponent";
import { Row, Container } from "react-bootstrap";
const HomePage = () => {
    const categories = [
        "Caninos", "Felinos", "Otros animales"
    ];
    return (
        <>
        <PetCarouselComponent/>
        <Container>
        <Row xs={1} md={2} className="g-4 mt-5"> 
        {
            categories.map((category, idx) => (
            < CategoryCardComponent key={idx} category={category} idx={ idx } />
            ))}
        </Row>
        </Container>
        </>
    )
}

export default HomePage;