import React, { useState, useEffect } from 'react';
import './Offer.css';

const Offer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="offer">
      <div className="container">
        <div className="offer-content">
          <div className="offer-badge">
            <span>🎉 OFERTA LIMITADA</span>
          </div>
          <h2>20 % de descuento para los que compran por primera vez</h2>
          <p>Usa el código <strong className="promo-code">ECO20</strong> en tu primera compra</p>
          
          <div className="countdown">
            <div className="countdown-item">
              <span className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="countdown-label">Horas</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="countdown-label">Min</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="countdown-label">Seg</span>
            </div>
          </div>
          
          <div className="offer-buttons">
            <button className="btn-claim">Reclamar Descuento</button>
            <button className="btn-copy" onClick={() => navigator.clipboard.writeText('ECO20')}>
              Copiar Código
            </button>
          </div>
          
          <div className="offer-features">
            <span>✓ Válido en toda la tienda</span>
            <span>✓ Sin compra mínima</span>
            <span>✓ Solo nuevos clientes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;