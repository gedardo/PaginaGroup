import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from '../../Assets/Img/Logo/logo.png'

const Footer = () => {
    return (
        <footer className="site-footer container-fluid pt-3 pb-3">
            <div className="row">
                <div className="col-12 col-md-6" id="aboutUs">
                    <h6>Clases de Manejo Tuc</h6>
                    <p className="text-justify">
                        "En Clases de Manejo Tuc te ofrecemos una experiencia de aprendizaje única y personalizada para que puedas convertirte en un conductor seguro y confiado. Con nuestro enfoque práctico y adaptado a tus necesidades, podrás adquirir las habilidades necesarias para manejar en cualquier situación de tráfico. Además, te ayudamos a obtener tu licencia de conducir de manera rápida y efectiva. ¡Únete a nosotros y comienza tu camino hacia convertirte en un conductor experto".
                    </p>
                </div>
                <div className='col-12 col-md-6 mt-2 mb-2 footer-style'>
                    <img className='logo_footer' src={logo} alt="logo" />
                </div>

            </div>
            <div className='row'>
                <div className="col-12 col-md-12 text-center mt-3">
                    <a href="https://www.facebook.com/profile.php?id=100063819091106" className="social-link mx-2"><FaFacebook /></a>
                    <a href="https://www.instagram.com/clasesdemanejotuc/" className="social-link mx-2"><FaInstagram /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
