import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CardMedium/CardMedium.css'

const CardMedium = (props) => {
    return (
        <div className='card_style_medium' id={props.id}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0">

            <div className="img_card_m">
                <img className='card_img_medium' src={props.img} alt='imagen' id='img.id'></img>
            </div>

            <div className="d-flex flex-column">
                <div>
                    <h3 className='card_title_medium'>{props.title}</h3>
                </div>

                <div className="card_texto_medium">
                    <h3 className='text-center'>Total de Horas {props.hs}</h3>
                    <ul>
                        {props.list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className='mt-auto text-center'>
                <input className='btn btn-success' type="button" value="CONSULTAR" onClick={() => window.location.href = '#ContactUs'} />
            </div>
        </div>
    );
};

export default CardMedium;
