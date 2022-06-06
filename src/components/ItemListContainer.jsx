import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';

export default function ItemListContainer({greeting}) {

  const [camisetas,setCamisetas] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);

  useEffect(()=>{
    const productos = new Promise((res,rej) => {
      setTimeout(() => {
        res([
          {id: 1, club:"River", monto :"$100", imagen:"/imagenes/River.jpg"},
          {id: 2, club:"Boca", monto :"$100", imagen:"/imagenes/Boca.jpg"},
          {id: 3, club:"Velez", monto :"$100", imagen:"/imagenes/Velez.jpg"},
          {id: 4, club:"Independiente", monto :"$100", imagen:"/imagenes/Independiente.jpg"},
          {id: 5, club:"Racing", monto :"$100", imagen:"/imagenes/Racing.jpg"},
        ])
    },2000)
  });

  productos
  .then((res)=>{
    setCamisetas(res);
  })
  .catch((error)=>{
    setError(true);
  })
  .finally(()=>{
    setLoading(false);
  });
},[]);


  return (
    <>
    <h1 className="saludo">{greeting}</h1>
    <h1>{loading && "Cargando..."}</h1>
    <h1>{error && "Hubo un Error"}</h1>
    <h1>{camisetas && <ItemList camisetas = {camisetas}/>}</h1>
    </>
  )
}
