import React from 'react';
import teamImage from '../assets/como-iniciar-una-papeleria-pequena.jpg'; 
//esta vendria siendo la zona de la pagina que habla 
const About: React.FC = () => {
  return (
    <div className="fondo">
    <div id="about" className="container mt-5">
      <h2 className="text-center white">Quienes Somos</h2>
      <p className="lead text-center white">Weird Zone es un espacio para los artistas que desean explorar nuevas técnicas y mejorar sus habilidades.</p>
      <img src={teamImage} className="img-fluid rounded mx-auto d-block" alt="Nuestro equipo" style={{ width: '680px' }} />
      <div className="row">
        <div className="col-12 col-md-6 mb-4">
          <div className="text p-4 rounded">
            <h2 className="sedan-regular-italic">Aprende Técnicas</h2>
            <p>Aprende diferentes técnicas de dibujos y los mejores diseños con nuestros cursos. Encuentra tu propio Artstyle.</p>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-4">
          <div className="texttwo p-4 rounded">
            <h2 className="sedan-regular-italic">Productos de Calidad</h2>
            <p>Adquiere los mejores productos de nuestras marcas asociadas. Haz que cada trazo, boceto y pintura esté hecho con la mejor calidad.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
