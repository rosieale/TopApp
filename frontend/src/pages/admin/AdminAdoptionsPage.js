import { Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";

const AdminAdoptionsPage = () => {
  return (
    <Row className="m-5">
        <Col md={2}>
        <AdminLinksComponent />
        </Col>
      <Col md={10}>
        <h1>Adopciones</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Usuario</th>
              <th>Fecha</th>
              <th>Mascota</th>
              <th>Entrega</th>
            </tr>
          </thead>
          <tbody>
            {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map(
              (item, idx) => (
                <tr key={idx}>
                  <td>{idx +1}</td>
                  <td>Mark Ronson</td>
                  <td>2024-09-12</td>
                  <td>San Pedro Sula</td>
                  <td>
                    <i className={item}></i>
                  </td>
                  <td>
                    <Link to="/admin/AdminAdoptionsDetailsPage">ir a detalles de adopción</Link>
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

export default AdminAdoptionsPage;

