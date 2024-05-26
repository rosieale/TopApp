import { Row, Col, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";

const deleteHandler = () => {
    if(window.confirm("Estás seguro?")) alert("Usuario eliminado!");
}

const AdminUsersPage = () => {
  return (
    <Row className="m-5">
        <Col md={2}>
        <AdminLinksComponent />
        </Col>
      <Col md={10}>
        <h1>Lista de usuarios</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Primer Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Es admin</th>
              <th>Editar/Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map(
              (item, idx) => (
                <tr key={idx}>
                  <td>{idx +1}</td>
                  <td>Patty</td>
                  <td>Morgana</td>
                  <td>email@email.com</td>
                  <td>
                    <i className={item}></i>
                  </td>
                  <td>
                    <LinkContainer to="/admin/AdminEditUserPage">
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
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AdminUsersPage;

