import React from 'react';
import '../ServWork/Serv.css'
import img1 from '../../Assets/Img/Serv/1.jpg'
import img2 from '../../Assets/Img/Serv/2.jpg'
import img3 from '../../Assets/Img/Serv/3.jpg'

const Serv = () => {
    return (

        <div className='container-fluid'>

            <div className='row'>
                <div className="accordion col-xs-12 col-sm-12 col-md-6 col-xl-6 col-xxl-6 " id="accordionExample">
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <strong>Clases practicas en transito</strong>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Los cursos dictados por nuestra autoescuela abarcan todos los aspectos necesarios para manejar correctamente, sin dejar de lado la confianza y seguridad, componentes fundamentales para formar buenos conductores.
                                    Nuestra escuela se destaca PRINCIPALMENTE en que nuestros cursos prácticos son directamente en el tránsito desde la primera clase. El alumno debe afrontar su realidad desde el momento inicial. Manejar un auto no tiene demasiada complejidad, el tema está en conducirse en el tránsito. Nuestros paquetes están diseñados para cada necesidad, siempre tomando en cuenta el nivel de experiencia que tenga el alumno al ingresar a la autoescuela. Nuestro curso básico consta de al menos 5 clases de 2 hs cada una en donde se practican todos los aspectos necesarios. La duración y temario se ajusta según la experiencia y confianza del alumno.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <strong>Auto doble comando</strong>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    demás de todo lo mencionado anteriormente, nos destacamos por tener nuestro auto DOBLE COMANDO (sistema que permite al instructor del lado del acompañante, poder tomar el control total del auto) esto garantiza la seguridad 100% del alumno. Requisito fundamental a la hora de aprender a manejar en Tucumán.
                                </div>
                            </div>
                        </div>

                     </div>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide col-12 col-xs-12 col-sm-12 col-md-6 col-xl-6 col-xxl-6 box_style" data-bs-ride="carousel">

                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div data-aos="flip-right" data-aos-duration="3000">

                        <div className="carousel-inner carousel-anchor">
                            <div className="carousel-item active">
                                <img src={img1} class="d-block car_style" alt="img-car" />
                            </div>
                            <div className="carousel-item">
                                <img src={img2} class="d-block car_style " alt="img-car" />
                            </div>
                            <div className="carousel-item">
                                <img src={img3} class="d-block car_style" alt="img-estudiant" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Serv;