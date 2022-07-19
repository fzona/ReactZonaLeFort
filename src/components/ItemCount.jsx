import { useState } from "react";
import { Button } from "react-bootstrap";

export default function ItemCount({ inicial, stock, restante, onAdd }) {
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
        <div className="count-button">
          {count === stock ? (
            <button onClick={sumar} className="count-button-off">
              +
            </button>
          ) : (
            <button onClick={sumar} className="count-button-on">
              +
            </button>
          )}
          <h2 className="count-number">{count}</h2>
          <button onClick={restar} className="count-button-on">
            -
          </button>
        </div>
        {count === stock ? (
          <>
            <button
              variant="primary"
              onClick={() => onAdd(count)}
              className="count-compra"
            >
              Agregar al carrito
            </button>
            <p className="count-mensaje">No hay más unidades disponibles</p>
          </>
        ) : (
          <button
            variant="primary"
            onClick={() => onAdd(count)}
            className="count-compra"
          >
            Agregar al carrito
          </button>
        )}
      </div>
    </>
  );
}
