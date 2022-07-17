import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import CartContext, { MiContexto } from "./context/CartContext";
import { initializeApp } from "firebase/app";
import "./scss/estilos.scss";
import Checkout from "./components/Checkout";
import Confirmacion from "./components/Confirmacion";
import { useContext, useEffect } from "react";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCehA5nxaTslDw1mZgBAPvlpFlEpnE2kmo",
    authDomain: "casacas-bfe4e.firebaseapp.com",
    projectId: "casacas-bfe4e",
    storageBucket: "casacas-bfe4e.appspot.com",
    messagingSenderId: "295931440490",
    appId: "1:295931440490:web:7c3e8c23599f0965980913",
  };

  initializeApp(firebaseConfig);

  return (
    <>
      <CartContext>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmacion" element={<Confirmacion />} />
          </Routes>
        </BrowserRouter>
      </CartContext>
    </>
  );
}

export default App;
