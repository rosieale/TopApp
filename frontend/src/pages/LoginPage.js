import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'
const LoginPage = () => {
  const [validated, setValidated] = useState(false);


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>Inicia sesión</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Dirección de correo</Form.Label>
              <Form.Control
                name="email"
                required
                type="email"
                placeholder="Ingresa el correo"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                required
                type="password"
                placeholder="Contraseña"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                name="doNotLogout"
                type="checkbox"
                label="No cerrar sesión"
              />
            </Form.Group>

            <Row className="pb-2">
              <Col>
               No tienes una cuenta?
                <Link to={"/register"}> Registrate </Link>
              </Col>
            </Row>

            <Button variant="primary" type="submit">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Inicia sesión
            </Button>
            <Alert show={true} variant="danger">
                Credenciales incorrectas
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;

