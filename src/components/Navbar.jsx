import React from 'react';
import logo from '../assets/Logo.png';
import CartWidget from './CartWidget';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
            <a className="navbar-brand" href="#">
            <img src={logo} alt="..." height="75"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                     <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Nosotros</a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <CartWidget items={1}/>
                    </li>
                    <li className="nav-item">
                        <a href="">
                            <span>1</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}