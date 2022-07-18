import React, { createContext, useState } from "react";
export const MiContexto = createContext({});

export default function CartContext({ children }) {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

  const [cart, setCart] = useState(cartFromLocalStorage);

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
      if (findItem.cantidad < item.stock) {
        findItem.cantidad += newItem.cantidad;
        setCart([...cart]);
      }
    } else {
      setCart([...cart, newItem]);
    }
  };

  const decreaseQuantity = (item) => {
    const newItems = cart.map((i) => {
      if (i.id === item.id && i.cantidad > 1) {
        return { ...i, cantidad: i.cantidad - 1 };
      }
      return i;
    });
    setCart(newItems);
  };

  const increaseQuantity = (item) => {
    const newItems = cart.map((i) => {
      if (i.id === item.id && i.cantidad < item.stock) {
        return { ...i, cantidad: i.cantidad + 1 };
      }
      return i;
    });
    setCart(newItems);
  };

  const emptyCart = () => {
    setCart([]);
  };
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  const getItemQty = () => {
    return cart.reduce((total, item) => total + item.cantidad, 0);
  };

  const getItemPrice = (item) => {
    return cart.reduce((total, item) => total + item.cantidad * item.precio, 0);
  };

  const total = cart.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <MiContexto.Provider
      value={{
        isInCart,
        addItem,
        emptyCart,
        removeItem,
        getItemPrice,
        getItemQty,
        decreaseQuantity,
        increaseQuantity,
        cart,
        total,
      }}
    >
      {children}
    </MiContexto.Provider>
  );
}
