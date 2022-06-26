import { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MiContexto } from "../context/CartContext";

export default function CartWidget({}) {
  const { getItemQty } = useContext(MiContexto);
  return (
    <>
      <Link to="/cart">
        <BsFillCartFill size={30} />
        {getItemQty()}
      </Link>
    </>
  );
}
