import './App.css';
import Navbar from './Components/Navbar/Navbar';
import NameLogo from './Components/NameLogo/NameLogo';
import Serv from './Components/ServWork/Serv';
import Separator from './Components/Separator/Separator';
import Parallax from './Components/Parallax/Parallax';
import Footer from './Components/Footer/Footer';
// import CardLittle from './Components/Cards/CardLittle/CardLittle';
import WhatsApp from './Components/WhatsApp/WhatsApp';
import { ContactUs } from './Components/ContactUs/ContactUs';
import AboutUs from './Components/AboutUs/AboutUs';
import Testimonials from './Components/Testimonials/Testimonials';
import CopyRigth from './Components/CopyRight/CopyRigth';
import CardMedium from './Components/Cards/CardMedium/CardMedium';
import img1 from './Assets/Img/Serv/3.jpg'

function App() {

  return (
    <div className=''>
      <Navbar />
      <Parallax />
      <Separator seccion='¡Sobre nosotros!' id='us' />
      <AboutUs />
      <Separator seccion='¡En Que Nos Diferenciamos!' id='' />
      <Serv />
      <Separator seccion='Nuestros Packs' id='pack' />
      <div className='container-fluid'>
        <div className='row d-flex'>
          <div className='col'>
            <CardMedium
              img={img1}
              title="Plan Perfeccionamiento"
              hs='6'
              list={["3 Clases de 2 horas cada una", "Vehículo doble comando", "Circulación en tráfico real", "Estacionamiento"]}
            />
          </div>

          <div className='col'>
            <CardMedium
              img={img1}
              title="Plan Control"
              hs='6'
              list={["3 clases de 2 horas cada una", "Vehículo doble comando", "Prácticas exhaustivas en tráfico real", "Circulación por avenidas y rotondas", "Prácticas de estacionamiento", "Empleo de videos teóricos en cada clase"]}
            />
          </div>

          <div className='col'>
            <CardMedium
              img={img1}
              title="Plan Full"
              hs='10'
              list={["5 clases de 2 horas cada una", "Vehículo doble comando", "Reconocimiento de comandos y posturas", "Prácticas exhaustivas en tráfico real", "Horas de manejo para ganar confianza", "Zig-zag, avenidas, rotondas, cruce de puentes, cruce de esquinas, ruta", "Normas de tránsito", "Prácticas de estacionamiento"]}
            />
          </div>
        </div>
      </div>

      <Separator seccion='Algunos de Nuestros Clientes' id='testimonials' />
      <Testimonials />
      <Separator seccion='Enviá Tu Consulta' id='ContactUs' />
      <ContactUs />
      <WhatsApp />
      <Footer />
      <CopyRigth />
    </div>
  );
}

export default App;