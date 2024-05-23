import { Form } from "react-bootstrap";

const SortOptionsComponent = () => {
  return (
    <Form.Select aria-label="Default select example">
      <option>Mostrar por</option>
      <option value="rating_-1">Clasificación de dueño</option>
      <option value="name_1">Nombre A-Z</option>
      <option value="name_-1">Nombre Z-A</option>
    </Form.Select>
  );
};

export default SortOptionsComponent;

