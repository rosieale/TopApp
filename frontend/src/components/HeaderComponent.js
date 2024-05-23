import { Navbar, Nav, Container, NavDropdown, Badge, Form, DropdownButton, Dropdown, Button, InputGroup } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary header">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="/">PetMatch</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <DropdownButton id="dropdown-item-button" title="Todos">
              <Dropdown.ItemText>Elije una opción</Dropdown.ItemText>
              <Dropdown.Item>Mascotas</Dropdown.Item>
              <Dropdown.Item>Recursos</Dropdown.Item>
              <Dropdown.Item>Historias</Dropdown.Item>
            </DropdownButton>
            <InputGroup className="search-bar">
              <Form.Control type="text" placeholder="Busca mascotas..." />
              <Button variant="warning">
                <i className="bi bi-search-heart"></i>
              </Button>
            </InputGroup>
          </Nav>
          <Nav>
            <LinkContainer to="/admin/AdminAdoptionsPage">
              <Nav.Link>Admin</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Rosie Ale" id="collapsible-nav-dropdown">
              <NavDropdown.Item eventKey="/user/UserAdoptionsPage" as={Link} to="/user/UserAdoptionsPage">Mis adopciones</NavDropdown.Item>
              <NavDropdown.Item eventKey="/user/" as={Link} to="/user/UserProfilePage">Mi Perfil</NavDropdown.Item>
              <NavDropdown.Item>Cerrar sesión</NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/LoginPage">
              <Nav.Link>Inicia sesión</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/RegisterPage">
              <Nav.Link>Regístrate</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/UserPetPodPage">
              <Nav.Link>
                <Badge pill bg="danger">2</Badge>
                <i className="bi bi-house-heart-fill"></i> Pod
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
