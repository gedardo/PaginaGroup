import './CardLittle.css'
import React from 'react';

const CardLittle = (props) => {
    return (
        <div className='card_style_little' id=''
        
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="1000"
        data-aos-duration="1000"
    
               >
            <img className='card_img_little text_redux' src='' alt='imagen' id='img.id'></img>
            <div>
                <div>
                    <h3 className='card_titulo_little' id='titulo-id'>{props.titulo}</h3>
                </div>

                <div className="text_redux">
                    <p className='card_texto_little text_min' id='parrafo-id' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, alias minus libero veritatis dolorem vitae quis fuga quod! Necessitatibus error accusamus culpa reiciendis reprehenderit unde incidunt eum consequuntur impedit atque.</p>
                </div>
            </div>
            <div className='data-bs-spy="scroll'></div>
        </div>
    );
};

export default CardLittle;
