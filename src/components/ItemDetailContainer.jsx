import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  const productos = [
    {
      id: 1,
      club: "River",
      monto: 100,
      imagen: "/imagenes/River.jpg",
      categoría: "nacional",
      stock: 10,
      descripcion:
        "Lleva los colores que más alegrías te dieron en la Camiseta adidas River Plate Home 21/22. Está elaborada en 100% poliéster y con un calce regular para brindarte mayor comodidad y poder utilizarla en cualquier ocasión.",
    },
    {
      id: 2,
      club: "Boca",
      monto: 100,
      imagen: "/imagenes/Boca.jpg",
      categoría: "nacional",
      stock: 10,
      descripcion:
        "Lleva los colores que más alegrías te dieron en la Camiseta adidas Boca Juniors Home 21/22. Está elaborada en 100% poliéster y con un calce regular para brindarte mayor comodidad y poder utilizarla en cualquier ocasión.",
    },
    {
      id: 3,
      club: "Velez",
      monto: 100,
      imagen: "/imagenes/Velez.jpg",
      categoría: "nacional",
      stock: 10,
      descripcion:
        "Lleva los colores que más alegrías te dieron en la Camiseta adidas Velez Sarsfield Home 21/22. Está elaborada en 100% poliéster y con un calce regular para brindarte mayor comodidad y poder utilizarla en cualquier ocasión.",
    },
    {
      id: 4,
      club: "Independiente",
      monto: 100,
      imagen: "/imagenes/Independiente.jpg",
      categoría: "nacional",
      stock: 10,
      descripcion:
        "Lleva los colores que más alegrías te dieron en la Camiseta adidas Independiente Home 21/22. Está elaborada en 100% poliéster y con un calce regular para brindarte mayor comodidad y poder utilizarla en cualquier ocasión.",
    },
    {
      id: 5,
      club: "Racing",
      monto: 100,
      imagen: "/imagenes/Racing.jpg",
      categoría: "nacional",
      stock: 10,
      descripcion:
        "Lleva los colores que más alegrías te dieron en la Camiseta adidas Racing Home 21/22. Está elaborada en 100% poliéster y con un calce regular para brindarte mayor comodidad y poder utilizarla en cualquier ocasión.",
    },
    {
      id: 6,
      club: "Barcelona",
      monto: 100,
      imagen: "/imagenes/Barcelona.jpg",
      categoría: "internacional",
      stock: 10,
      descripcion:
        "Lleva los colores que más alegrías te dieron en la Camiseta adidas Barcelona Home 21/22. Está elaborada en 100% poliéster y con un calce regular para brindarte mayor comodidad y poder utilizarla en cualquier ocasión.",
    },
    {
      id: 7,
      club: "Real Madrid",
      monto: 100,
      imagen: "/imagenes/RealMadrid.jpg",
      categoría: "internacional",
      stock: 10,
      descripcion:
        "Lleva los colores que más alegrías te dieron en la Camiseta adidas Real Madrid Home 21/22. Está elaborada en 100% poliéster y con un calce regular para brindarte mayor comodidad y poder utilizarla en cualquier ocasión.",
    },
    {
      id: 8,
      club: "Liverpool",
      monto: 100,
      imagen: "/imagenes/Liverpool.jpg",
      categoría: "internacional",
      stock: 10,
      descripcion:
        "Lleva los colores que más alegrías te dieron en la Camiseta adidas Liverpool Home 21/22. Está elaborada en 100% poliéster y con un calce regular para brindarte mayor comodidad y poder utilizarla en cualquier ocasión.",
    },
    {
      id: 9,
      club: "Manchester United",
      monto: 100,
      imagen: "/imagenes/MUnited.jpg",
      categoría: "internacional",
      stock: 10,
      descripcion:
        "Lleva los colores que más alegrías te dieron en la Camiseta adidas Manchester United Home 21/22. Está elaborada en 100% poliéster y con un calce regular para brindarte mayor comodidad y poder utilizarla en cualquier ocasión.",
    },
    {
      id: 10,
      club: "PSG",
      monto: 100,
      imagen: "/imagenes/PSG.jpg",
      categoría: "internacional",
      stock: 10,
      descripcion:
        "Lleva los colores que más alegrías te dieron en la Camiseta adidas PSG Home 21/22. Está elaborada en 100% poliéster y con un calce regular para brindarte mayor comodidad y poder utilizarla en cualquier ocasión.",
    },
  ];

  useEffect(() => {
    const producto = productos.find((producto) => producto.id === Number(id));
    setProducto(producto);
  }, [id]);

  return (
    <div className="detalleProducto">
      <ItemDetail producto={producto} />
    </div>
  );
}
