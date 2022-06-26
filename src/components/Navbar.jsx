import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { MiContexto } from "../context/CartContext";
import CartWidget from "./CartWidget";

export default function Navbar() {
  const { getItemQty } = useContext(MiContexto);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="..." height="75" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category/nacional">
                  Nacionales
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category/internacional">
                  Internacionales
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {getItemQty() > 0 ? <CartWidget /> : null}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
