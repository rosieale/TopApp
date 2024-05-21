import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [validated, setValidated] = useState(false);

  const onChange = () => {
    const password = document.querySelector("input[name=password]");
    const confirm = document.querySelector("input[name=confirmPassword]");
    if (confirm.value === password.value) {
      confirm.setCustomValidity("");
    } else {
      confirm.setCustomValidity("Las contraseñas no coinciden");
    }
  };

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
          <h1>Regístrate</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Tu nombre</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Ingresa tu nombre"
                name="name"
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa un nombre
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Tu apellido</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Ingresa tu apellido"
                name="lastName"
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa tu apellido
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Dirección de Correo</Form.Label>
              <Form.Control
                name="email"
                required
                type="email"
                placeholder="Ingresa tu correo"
              />
              <Form.Control.Feedback type="invalid">
                Ingresa una dirección de correo válida
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                name="password"
                required
                type="password"
                placeholder="Contraseña"
                minLength={6}
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa una contraseña válida
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                La contraseña debe tener mínimo 6 caracteres
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
              <Form.Label>Repite contraseña</Form.Label>
              <Form.Control
                name="confirmPassword"
                required
                type="password"
                placeholder="Vuelve a escribir la contraseña"
                minLength={6}
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">
                Ambas contraseñas deben ser iguales
              </Form.Control.Feedback>
            </Form.Group>

            <Row className="pb-2">
              <Col>
                ¿Ya tienes una cuenta?
                <Link to="/login"> Login </Link>
              </Col>
            </Row>

            <Button type="submit" className="w-100">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Guardar
            </Button>
            <Alert show={true} variant="danger" className="mt-3">
              ¡Un usuario con ese correo ya existe!
            </Alert>
            <Alert show={true} variant="info" className="mt-3">
              Usuario creado
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
