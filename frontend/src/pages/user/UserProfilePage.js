import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";

const UserProfilePage = () => {
  const [validated, setValidated] = useState(false);

  const onChange = () => {
    const password = document.querySelector("input[name=password]");
    const confirm = document.querySelector("input[name=confirmPassword]");
    if (confirm.value === password.value) {
      confirm.setCustomValidity("");
    } else {
      confirm.setCustomValidity("Las contaseñas no son iguales");
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
          <h1>Cambiar perfil</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Your name</Form.Label>
              <Form.Control
                required
                type="text"
                defaultValue="John"
                name="name"
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingrese su nombre
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Tu apelido</Form.Label>
              <Form.Control
                required
                type="text"
                defaultValue="Doe"
                name="lastName"
              />
              <Form.Control.Feedback type="invalid">
              Por favor ingrese su nombre
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Dirección de correo</Form.Label>
              <Form.Control
                disabled
                value="john@doe.com  si quieres cambiar tu correo, cierra la sesión y crea una nueva cuenta"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Número de teléfono</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                defaultValue=""
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escriba su dirección (Residencial y datos)"
                defaultValue=""
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCountry">
              <Form.Label>País</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu país"
                defaultValue=""
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicZip">
              <Form.Label>Código de área</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu código de área"
                defaultValue=""
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCity">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu ciudad"
                defaultValue=""
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicState">
              <Form.Label>Departamento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu departamento"
                defaultValue=""
              />
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
                Contraseña debe tener un mínimo de 6 caractéres
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
              <Form.Label>Repite la contraseña</Form.Label>
              <Form.Control
                name="confirmPassword"
                required
                type="password"
                placeholder="Repite la contraseña"
                minLength={6}
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">
                Ambas contraseñas deben ser iguales
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">Actualizar</Button>
            <Alert show={true} variant="danger">
              Un usuario con ese correo ya existe!
            </Alert>
            <Alert show={true} variant="info">
              Usuario actualizado
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfilePage;

