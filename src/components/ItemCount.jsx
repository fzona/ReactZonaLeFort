import React, { useState } from "react";

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
      <h2>{count}</h2>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </>
  );
}
