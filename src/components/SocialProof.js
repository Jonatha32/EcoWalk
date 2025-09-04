import React from 'react';
import './SocialProof.css';

const SocialProof = () => {
  const testimonials = [
    {
      image: 'https://previews.123rf.com/images/corporatesounds/corporatesounds2309/corporatesounds230904366/212372440-portrait-of-senior-woman-wearing-sunglasses-in-the-middle-of-the-desert.jpg',
      name: 'María G.',
      text: 'Increíbles! Cómodas y sostenibles',
      rating: 5
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      name: 'Carlos R.',
      text: 'Perfectas para el día a día',
      rating: 5
    },
    {
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      name: 'Ana L.',
      text: 'Calidad premium, precio justo',
      rating: 5
    },
    {
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      name: 'Diego M.',
      text: 'Me encantan, ya compré 3 pares',
      rating: 5
    },
    {
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
      name: 'Sofía P.',
      text: 'Estilo y conciencia ambiental',
      rating: 5
    },
    {
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face',
      name: 'Javier T.',
      text: 'Recomendadas 100%',
      rating: 5
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Clientes Felices' },
    { number: '4.9/5', label: 'Rating Promedio' },
    { number: '98%', label: 'Recomiendan' },
    { number: '50+', label: 'Países' }
  ];

  return (
    <section className="social-proof">
      <div className="container">
        <div className="social-proof-header">
          <h2>Más de 10 000 eco-caminantes ya han dado el paso</h2>
          <p>Nuestros clientes hablan por nosotros</p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p>"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;