import { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MiContexto } from "../context/CartContext";
import ItemCount from "./ItemCount";

export default function ItemDetail({ producto }) {
  const { club, precio, imagen, stock, descripcion, id } = producto;
  const [mostrarItemCount, setMostrarItemCount] = useState(true);

  const { isInCart, addItem } = useContext(MiContexto);

  const onAdd = (cantidad) => {
    alert("Se agregó al carrito: " + cantidad);
    setMostrarItemCount(false);
    isInCart(id);
    addItem(producto, cantidad);
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>Camiseta oficial de {club}</Card.Title>
          <Card.Text>{precio}</Card.Text>
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
