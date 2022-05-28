import React from 'react';
import { BsFillCartFill } from "react-icons/bs";

export default function CartWidget({items}) {
  return (
    <>
    <a href=""><BsFillCartFill size={30}/></a>
    <span>{items}</span>
    </>
  )
}
