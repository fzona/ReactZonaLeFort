import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { MiContexto } from "../context/CartContext";
import CartWidget from "./CartWidget";
import { Nav, Navbar, NavLink } from "react-bootstrap";

export default function NavigationBar() {
  const { getItemQty } = useContext(MiContexto);

  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="..." height="75" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          data-bs-target="#navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll" className="ms-auto">
          <Nav className="">
            <NavLink eventKey="1" as={Link} to="/">
              Inicio
            </NavLink>
            <NavLink eventKey="2" as={Link} to="/category/nacional">
              Nacionales
            </NavLink>
            <NavLink eventKey="3" as={Link} to="/category/internacional">
              Internacionales
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Navbar>
    </>
  );
}
