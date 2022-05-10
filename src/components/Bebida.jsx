import { Card, Col, Button } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const Bebida = ({ bebida }) => {
  const { handleModalClick, handleBebidaId } = useBebidas();
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={bebida.strDrinkThumb}
          alt={`Bebida de ${bebida.strDrink}`}
        />
        <Card.Body>
          <Card.Title>{`Bebida de ${bebida.strDrink}`}</Card.Title>
          <Button
            onClick={() => {
              handleModalClick();
              handleBebidaId(bebida.idDrink);
            }}
            className="w-100 text-uppercase mt-2"
            variant="warning"
          >
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Bebida;
