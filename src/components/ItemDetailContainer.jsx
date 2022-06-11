import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [camisetas, setCamisetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const productos = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          {
            id: 1,
            club: "River",
            monto: "$100",
            imagen: "/imagenes/River.jpg",
          },
        ]);
      }, 2000);
    });

    productos
      .then((res) => {
        setCamisetas(res);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>{loading && "Cargando..."}</h1>
      <h1>{error && "Hubo un Error"}</h1>
      <h1>{camisetas && <ItemDetail camisetas={camisetas} />}</h1>
    </>
  );
}
