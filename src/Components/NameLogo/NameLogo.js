import React from 'react';
import Logo from '../../Assets/Img/Logo/logo.png'
import './NameLogo.css'

const NameLogo = () => {
    return (
        <div className='container'>
            <div className="row">
                <img src={Logo} className='logo_img mt-3 mb-3 col col-md-6 col-xl-6' alt="Logo" />
                <h2 className='name m-auto item col col-md-6 col-xl-6'>Tu Mejor eleccion para aprender a manejar</h2>
            </div>
        </div>
    );
};

export default NameLogo;