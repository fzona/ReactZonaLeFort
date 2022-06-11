import React from "react";
import { Button, Card } from "react-bootstrap";

export default function ItemDetail({ camisetas }) {
  return camisetas.map((camiseta) => (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={camiseta.imagen} />
      <Card.Body>
        <Card.Title>`Camiseta oficial de {camiseta.club}`</Card.Title>
        <Card.Text>{camiseta.monto}</Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  ));
}
