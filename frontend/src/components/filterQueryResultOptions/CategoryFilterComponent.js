import { Form } from "react-bootstrap";

const categories = [
  { id: 1, name: 'Perros' },
  { id: 2, name: 'Gatos' },
  { id: 3, name: 'Hamsters' },
  { id: 4, name: 'Aves' },
  { id: 5, name: 'Otros' }
];

const CategoryFilterComponent = () => {
  return (
    <>
      <span className="fw-bold">Especies</span>
      <Form>
        {categories.map((category) => (
          <div key={category.id}>
            <Form.Check type="checkbox" id={`check-api2-${category.id}`}>
              <Form.Check.Input type="checkbox" isValid />
              <Form.Check.Label style={{ cursor: "pointer" }}>
                {category.name}
              </Form.Check.Label>
            </Form.Check>
          </div>
        ))}
      </Form>
    </>
  );
};

export default CategoryFilterComponent;
