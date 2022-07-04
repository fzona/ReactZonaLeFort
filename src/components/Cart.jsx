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
    total,
  } = useContext(MiContexto);

  return (
    <>
      <div className="wrap cf">
        <div className="heading cf">
          <h1>Mi Carrito</h1>
          {cart.length > 0 ? (
            <Link to="/" className="continue">
              Continuar comprando
            </Link>
          ) : null}
        </div>
        {cart.length > 0 ? (
          <>
            <div className="cart">
              <ul className="cartWrap">
                <li className="items odd">
                  {cart.map((item) => (
                    <div key={item.id} className="infoWrap">
                      <div className="cartSection">
                        <img src={item.imagen} alt="" className="itemImg" />
                        <h3>Camiseta de {item.club}</h3>
                        <p>
                          <button
                            onClick={() => increaseQuantity(item)}
                            className="add"
                          >
                            +
                          </button>
                          {item.cantidad}
                          <button
                            onClick={() => decreaseQuantity(item)}
                            className="decrease"
                          >
                            -
                          </button>{" "}
                          x ${item.precio}
                        </p>
                        <p className="stockStatus"> En Stock</p>
                      </div>
                      <div className="prodTotal cartSection">
                        <p>${item.cantidad * item.precio}</p>
                      </div>
                      <div className="cartSection removeWrap">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="remove"
                        >
                          x
                        </button>
                      </div>
                    </div>
                  ))}
                </li>
              </ul>
            </div>
            <div className="subtotal cf">
              <ul>
                <li className="totalRow final">
                  <span className="label">Total</span>
                  <span className="value">${total}</span>
                </li>
                <li className="totalRow">
                  <button onClick={() => emptyCart()} className="btn-vaciar">
                    Vaciar carrito
                  </button>
                </li>
                <li className="totalRow">
                  <Link to="/checkout" className="btn continue">
                    Finalizar compra
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div>
            <h3>No hay productos en el carrito</h3>
            <Link to="/" className="btn continue">
              ¡Quiero ver productos!
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
