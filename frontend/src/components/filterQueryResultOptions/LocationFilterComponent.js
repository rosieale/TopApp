import { Form } from "react-bootstrap";

const PetFilterComponent = () => {
  return (
    <>
      <Form.Label>
        <span className="fw-bold">Rango de Edad:</span> 2 meses
      </Form.Label>
      <Form.Range min={10} max={1000} step={10} />
    </>
  );
};

export default PetFilterComponent;

