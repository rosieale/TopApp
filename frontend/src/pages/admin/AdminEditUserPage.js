import {
    Row,
    Col,
    Container,
    Form,
    Button,
  } from "react-bootstrap";
  import { Link } from "react-router-dom";
  import { useState } from "react";
  
  
  const AdminEditUserPage = () => {
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
        <Row className="justify-content-md-center mt-5">
          <Col md={1}>
            <Link to="/admin/AdminUsersPage" className="btn btn-info my-3">
              Ir atrás
            </Link>
          </Col>
          <Col md={6}>
            <h1>Editar usuario</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>Primer Nombre</Form.Label>
                <Form.Control name="name" required type="text" defaultValue="John" />
              </Form.Group>
  
              <Form.Group
                className="mb-3"
                controlId="formBasicLastName"
              >
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  name="lastName"
                  required
                  type="text"
                  defaultValue="Doe"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control name="email" required type="email" defaultValue="John@email.com" />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check name="isAdmin" type="checkbox" label="Es administrador" />
              </Form.Group>
              
              <Button variant="primary" type="submit">
                Guardar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default AdminEditUserPage;
  
  