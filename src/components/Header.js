import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={`${process.env.PUBLIC_URL}/EcoWalk.png`} alt="EcoWalk" className="logo-img" />
            <span className="logo-text">EcoWalk</span>
          </div>
          <nav className="nav">
            <a href="#products" className="nav-link">Productos</a>
            <a href="#about" className="nav-link">Nosotros</a>
            <a href="#contact" className="nav-link">Contacto</a>
            <button className="btn btn-header">¡Comprar Ahora!</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;