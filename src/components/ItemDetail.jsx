import { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MiContexto } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ItemDetail({ producto }) {
  const { club, precio, imagen, stock, descripcion, id } = producto;
  const [mostrarItemCount, setMostrarItemCount] = useState(true);

  const { isInCart, addItem, cart } = useContext(MiContexto);
  const mensaje = () => {
    toast.success("Se agregaron productos al carrito", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    isInCart(id) ? setMostrarItemCount(false) : setMostrarItemCount(true);
  });

  const onAdd = (cantidad) => {
    mensaje();
    isInCart(id);
    addItem(producto, cantidad);
  };

  return (
    <>
      <div className="tabla">
        <div className="imagen">
          <img variant="top" src={imagen} />
        </div>
        <div className="descripcion">
          <h2 className="descripcion-titulo">Camiseta oficial de {club}</h2>
          <p className="descripcion-precio">${precio}</p>
          <p className="descripcion-info">{descripcion}</p>
          {mostrarItemCount ? (
            <ItemCount inicial={1} stock={stock} onAdd={onAdd} />
          ) : (
            <>
              <p className="descripcion-compra">
                Su producto ya se encuentra en el carrito
              </p>
              <Link to="/">
                <button variant="primary" className="descripcion-inicio">
                  Continuar comprando
                </button>
              </Link>
              <Link to="/cart">
                <button variant="primary" className="descripcion-carro">
                  Ir al carrito
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
