import { Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
const UserAdoptionsPage = () => {
  return (
    <Row className="m-5">
      <Col md={12}>
        <h1>Mis adopciones</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Completado</th>
              <th>Detalles de adopción</th>
            </tr>
          </thead>
          <tbody>
            {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map(
              (item, idx) => (
                <tr key={idx}>
                  <td>{idx +1}</td>
                  <td>Rosie Maldonado</td>
                  <td>2024-3-2</td>
                  <td>Si</td>
                  <td>
                    <i className={item}></i>
                  </td>
                  <td>
                    <Link to="/user/UserAdoptionDetailsPage">Ver detalles de adopción</Link>
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

export default UserAdoptionsPage;

