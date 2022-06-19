import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

export default function ItemDetail({ producto }) {
  const { club, monto, imagen, stock, descripcion } = producto;
  const [mostrarItemCount, setMostrarItemCount] = useState(true);

  const onAdd = (cantidad) => {
    alert("Se agregó al carrito: " + cantidad);
    setMostrarItemCount(false);
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>Camiseta oficial de {club}</Card.Title>
          <Card.Text>{monto}</Card.Text>
          <p className="descripcion">{descripcion}</p>
        </Card.Body>
      </Card>
      {mostrarItemCount ? (
        <ItemCount inicial={1} stock={stock} onAdd={onAdd} />
      ) : (
        <Link to="/cart">
          <Button variant="primary">Terminar mi compra</Button>
        </Link>
      )}
    </>
  );
}
