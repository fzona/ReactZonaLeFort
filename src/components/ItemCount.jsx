import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function ItemCount({ inicial, stock, onAdd }) {
  const [count, setCount] = useState(inicial);

  const sumar = () => {
    count < stock
      ? setCount(count + 1)
      : alert("No puedes agregar más productos");
  };

  const restar = () => {
    count > inicial
      ? setCount(count - 1)
      : alert("No puedes quitar más productos");
  };

  return (
    <>
      <div className="count">
        <h2 className="count-number">{count}</h2>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <Button variant="primary" onClick={() => onAdd(count)}>
          Agregar al carrito
        </Button>
      </div>
    </>
  );
}
