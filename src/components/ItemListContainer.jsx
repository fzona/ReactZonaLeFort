import React, { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function ItemListContainer() {
  const { id } = useParams();
  const [camisetas, setCamisetas] = useState([]);

  const productos = [
    {
      id: 1,
      club: "River",
      monto: "$100",
      imagen: "/imagenes/River.jpg",
      categoría: "nacional",
    },
    {
      id: 2,
      club: "Boca",
      monto: "$100",
      imagen: "/imagenes/Boca.jpg",
      categoría: "nacional",
    },
    {
      id: 3,
      club: "Velez",
      monto: "$100",
      imagen: "/imagenes/Velez.jpg",
      categoría: "nacional",
    },
    {
      id: 4,
      club: "Independiente",
      monto: "$100",
      imagen: "/imagenes/Independiente.jpg",
      categoría: "nacional",
    },
    {
      id: 5,
      club: "Racing",
      monto: "$100",
      imagen: "/imagenes/Racing.jpg",
      categoría: "nacional",
    },
    {
      id: 6,
      club: "Barcelona",
      monto: "$100",
      imagen: "/imagenes/Barcelona.jpg",
      categoría: "internacional",
    },
    {
      id: 7,
      club: "Real Madrid",
      monto: "$100",
      imagen: "/imagenes/RealMadrid.jpg",
      categoría: "internacional",
    },
    {
      id: 8,
      club: "Liverpool",
      monto: "$100",
      imagen: "/imagenes/Liverpool.jpg",
      categoría: "internacional",
    },
    {
      id: 9,
      club: "Manchester United",
      monto: "$100",
      imagen: "/imagenes/MUnited.jpg",
      categoría: "internacional",
    },
    {
      id: 10,
      club: "PSG",
      monto: "$100",
      imagen: "/imagenes/PSG.jpg",
      categoría: "internacional",
    },
  ];

  useEffect(() => {
    if (id === "nacional") {
      setCamisetas(
        productos.filter((camiseta) => camiseta.categoría === "nacional")
      );
    } else if (id === "internacional") {
      setCamisetas(
        productos.filter((camiseta) => camiseta.categoría === "internacional")
      );
    } else {
      setCamisetas(productos);
    }
  }, [id]);

  return (
    <>
      <div>
        <ItemList camisetas={camisetas} />
      </div>
    </>
  );
}
