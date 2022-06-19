import React, { createContext, useState } from "react";
export const MiContexto = createContext({});

export default function CartContext({ children }) {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const addItem = (item, cantidad) => {
    const newItem = {
      ...item,
      cantidad,
    };
    if (isInCart(item.id)) {
      const findItem = cart.find((item) => item.id === newItem.id);
      findItem.cantidad += newItem.cantidad;
      setCart([...cart]);
    } else {
      setCart([...cart, item]);
    }
  };

  const emptyCart = () => {
    setCart([]);
  };
  const removeItem = (id) => {
    return cart.filter((item) => item.id !== id);
  };
  const getItemQty = () => {
    return cart.reduce((total, item) => total + item.cantidad, 0);
  };

  const getItemPrice = () => {
    return cart.reduce((total, item) => total + item.cantidad * item.monto, 0);
  };
  return (
    <MiContexto.Provider
      value={
        (isInCart,
        addItem,
        emptyCart,
        removeItem,
        getItemPrice,
        getItemQty,
        cart)
      }
    >
      {children}
    </MiContexto.Provider>
  );
}
