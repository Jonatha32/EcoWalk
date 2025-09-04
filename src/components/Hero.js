import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Camina hacia el Cambio</h1>
            <p>Zapatillas sostenibles hechas con materiales 100% reciclados. Estilo y conciencia ambiental en cada paso.</p>
            <a href="#products" className="btn btn-primary">Comprar Ahora</a>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop" alt="EcoWalk Sneakers" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;