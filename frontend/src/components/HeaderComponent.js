import {Navbar, Nav, Container, NavDropdown, Badge, Form, DropdownButton, Dropdown, Button, InputGroup} from "react-bootstrap";

import { LinkContainer } from 'react-router-bootstrap'

const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand href="/">PetMatch</Navbar.Brand>
            </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
          <DropdownButton id="dropdown-item-button" title="Dropdown button">
         <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
          <Dropdown.Item as="button">Action</Dropdown.Item>
          <Dropdown.Item as="button">Another action</Dropdown.Item>
             <Dropdown.Item as="button">Something else</Dropdown.Item>
                 </DropdownButton>
          <Form.Control type="text" placeholder="Normal text" />
          <Button variant="warning">Warning</Button>
          </InputGroup>
          </Nav>
          <Nav>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">
                <Badge pill bg="danger">
                    2
                    </Badge>
                    Pod
                </Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
    

export default HeaderComponent