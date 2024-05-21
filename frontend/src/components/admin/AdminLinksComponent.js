import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const AdminLinksComponent = () => {
  return (
    <Navbar bg="light" variant="light">
      <Nav className="flex-column">
        <LinkContainer to="/admin/AdminAdoptionsPage">
          <Nav.Link>Adopciones</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/AdminPetsPage">
          <Nav.Link>Mascotas</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/AdminUsersPage">
          <Nav.Link>Usuarios</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/AdminChatsPage">
          <Nav.Link>Chats</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/analytics">
          <Nav.Link>Placeholder</Nav.Link>
        </LinkContainer>
        <Nav.Link>Logout</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default AdminLinksComponent;

