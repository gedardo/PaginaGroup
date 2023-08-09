import React from 'react';
import './Navbar.css'
import logo from '../../Assets/Img/Logo/logo.png'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar_style">
            <div className="container-fluid">
                <a className="navbar-brand" href="#/">
                    <img src={logo} className='logo_style' alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#us">Nosotros</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#testimonials">Opiniones</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#pack">Paquetes</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#ContactUs">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;