import { Container, Row, Col } from 'react-bootstrap';

const FooterCompomnent = () => {
    return (
    <footer>
    <Container fluid>
      <Row className='mt-5'>
        <Col className="bg-dark text-white text-center py-5">'Todos los derechos reservados @ PetMatch'</Col>
      </Row>
    </Container>
    </footer>

  );
}

export default FooterCompomnent