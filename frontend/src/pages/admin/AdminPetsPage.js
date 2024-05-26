import { Row, Col, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";
const deleteHandler = () => {
    if(window.confirm("Are you sure?")) alert("Pet deleted!")
}
const AdminPetsPage = () => {
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <h1>
          Lista de Mascotas{" "}
          <LinkContainer to="/admin/AdminCreateAdoptionPage">
            <Button variant="primary" size="lg">
              Crear nueva
            </Button>
          </LinkContainer>
        </h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre de Mascota</th>
              <th>Ubicación</th>
              <th>Tipo</th>
              <th>Editar/Borrar</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Bruno", location: "San Pedro Sula", category: "Dog" },
            ].map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>{item.location}</td>
                <td>{item.category}</td>
                <td>
                  <LinkContainer to="/admin/AdminEditAdoptionPage">
                    <Button className="btn-sm">
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                  </LinkContainer>
                  {" / "}
                  <Button variant="danger" className="btn-sm" onClick={deleteHandler}>
                    <i className="bi bi-x-circle"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AdminPetsPage;

