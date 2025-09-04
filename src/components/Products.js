import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Urban Green',
      price: '$89',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
      color: 'Verde urbano con detalles en blanco'
    },
    {
      id: 2,
      name: 'Ocean Blue',
      price: '$89',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
      color: 'Azul océano inspirado en la naturaleza'
    },
    {
      id: 3,
      name: 'Desert Beige',
      price: '$89',
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop',
      color: 'Beige desierto con suela de corcho'
    }
  ];

  return (
    <section id="products" className="products">
      <div className="container">
        <h2>Nuestros Modelos</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.color}</p>
                <div className="product-footer">
                  <span className="price">{product.price}</span>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;