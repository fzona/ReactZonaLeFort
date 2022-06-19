import React, { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";

export default function CartWidget({ items }) {
  return (
    <>
      <a href="">
        <BsFillCartFill size={30} />
        {items}
      </a>
    </>
  );
}
