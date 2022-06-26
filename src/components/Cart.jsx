import { useContext } from "react";
import { Link } from "react-router-dom";
import { MiContexto } from "../context/CartContext";

export default function Cart() {
  const {
    cart,
    removeItem,
    emptyCart,
    decreaseQuantity,
    getItemPrice,
    increaseQuantity,
  } = useContext(MiContexto);

  return (
    <div>
      <h2 className="cart-title">Tu carrito</h2>
      {cart.length > 0 ? (
        <div className="cart-items">
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {" "}
                ♠ {item.club} - $ {item.precio} x {item.cantidad} = ${" "}
                {item.cantidad * item.precio}{" "}
                <button onClick={() => decreaseQuantity(item)}>-</button>
                <button onClick={() => increaseQuantity(item)}>+</button>
                <button onClick={() => removeItem(item.id)}>X</button>
              </li>
            ))}
          </ul>
          <h3>Total = $ {getItemPrice()}</h3>
          <Link to="">
            {" "}
            <button>Finalizar compra</button>{" "}
          </Link>
          <button onClick={emptyCart}>Vaciar carrito</button>
        </div>
      ) : (
        <div className="cart-items">
          <h3>No hay productos en el carrito</h3>
          <Link to="/">
            <button>¡Quiero ver productos!</button>
          </Link>
        </div>
      )}
    </div>
  );
}
