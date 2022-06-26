import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Item({ camisetas }) {
  const { club, precio, imagen, id } = camisetas;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>Camiseta oficial de {club}</Card.Title>
        <Card.Text>${precio}</Card.Text>
        <Link to={`/item/${id}`}>
          <Button variant="primary">Ver más detalle del producto</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
