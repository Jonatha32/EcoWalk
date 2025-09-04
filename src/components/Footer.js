import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por suscribirte a nuestra eco-community!');
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="brand-logo">
              <img src="/EcoWalk.png" alt="EcoWalk" className="footer-logo" />
              <span className="brand-name">EcoWalk</span>
            </div>
            <p className="brand-tagline">Caminando hacia un futuro más sostenible</p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>
          
          <div className="footer-sections">
            <div className="footer-section">
              <h4>Productos</h4>
              <a href="#">Urban Green</a>
              <a href="#">Ocean Blue</a>
              <a href="#">Desert Beige</a>
              <a href="#">Nuevos Lanzamientos</a>
            </div>
            
            <div className="footer-section">
              <h4>Compañía</h4>
              <a href="#">Sobre Nosotros</a>
              <a href="#">Sostenibilidad</a>
              <a href="#">Careers</a>
              <a href="#">Prensa</a>
            </div>
            
            <div className="footer-section">
              <h4>Soporte</h4>
              <a href="#">FAQ</a>
              <a href="#">Contacto</a>
              <a href="#">Envíos</a>
              <a href="#">Devoluciones</a>
            </div>
          </div>
          
          <div className="newsletter">
            <h3>Join our eco-community</h3>
            <p>Recibe las últimas noticias sobre sostenibilidad y nuevos productos</p>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-subscribe">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 EcoWalk. Todos los derechos reservados.</p>
            <div className="legal-links">
              <a href="#">Privacidad</a>
              <a href="#">Términos</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;