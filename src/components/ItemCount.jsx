import { useState } from "react";
import { Button } from "react-bootstrap";

export default function ItemCount({ inicial, stock, onAdd }) {
  const [count, setCount] = useState(inicial);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > inicial) {
      setCount(count - 1);
    }
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
