import React from 'react';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      icon: '🚚',
      title: 'Envío Gratis',
      description: 'En todo el país sin mínimo de compra',
      detail: 'Entrega en 24-48h'
    },
    {
      icon: '🔄',
      title: 'Devolución Fácil',
      description: '30 días para cambios y devoluciones',
      detail: 'Sin preguntas'
    },
    {
      icon: '🌱',
      title: '100% Reciclado',
      description: 'Materiales sostenibles y eco-friendly',
      detail: 'Certificado ISO'
    }
  ];

  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits-header">
          <h2>¿Por qué elegir EcoWalk?</h2>
          <p>Comprometidos con tu satisfacción y el planeta</p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon-wrapper">
                <div className="benefit-icon">{benefit.icon}</div>
              </div>
              <div className="benefit-content">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
                <span className="benefit-detail">{benefit.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;