import { useState } from "react";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCategorias from "../hooks/useCategorias";
const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.values(busqueda).includes('')){
        setError('Todos los campos son obligatorios');
        return
    }
    setError('');
  }

  const { categorias } = useCategorias();
  console.log(categorias);
  return (
    <Form onSubmit={handleSubmit}>
        {error && <Alert className="my-5 text-center" variant="danger">{error}</Alert>}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
            <Form.Control
              id="nombre"
              type="text"
              placeholder="Tequila, Vodka, etc..."
              name="nombre"
              value={busqueda.nombre}
              onChange={(e) =>
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="categoria">Categoria Bebida</Form.Label>
            <Form.Select
              value={busqueda.categoria}
              onChange={(e) =>
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                })
              }
              id="categoria"
              name="categoria"
            >
              <option>-- Selecciona Categoria --</option>
              {categorias.map((categoria) => (
                <option
                  key={categoria.strCategory}
                  value={categoria.strCategory}
                >
                  {categoria.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
          <Button variant="danger" type="submit" className="text-uppercase w-100">
            Buscar Bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
