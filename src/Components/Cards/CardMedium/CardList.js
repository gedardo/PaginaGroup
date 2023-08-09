import React from "react";
import "../css/CardList.css"

const Card = ({ title, image, description, id }) => {
  return (
    <div className='card_style_medium' id={id}
    data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="300"
    data-aos-offset="0">

    <div className="img_card_m">
        <img className='card_img_medium' src={image} alt='imagen' id='img.id'></img>
    </div>

    <div className="d-flex flex-column">
        <div>
            <h3 className='card_title_medium'>{title}</h3>
        </div>

        <div className="card_texto_medium">
            <h3 className='text-center'>{title}</h3>
            <p>{description}</p>
        </div>

    </div>

    <div className='mt-auto text-center'>
        <input className='btn btn-success' type="button" value="CONSULTAR" onClick={() => window.location.href = '#ContactUs'} />
    </div>
</div>
  );
};

const CardList = ({ data }) => {
  return (
    <div className="card-list">
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default CardList;
