import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Products from './components/Products';
import SocialProof from './components/SocialProof';
import Offer from './components/Offer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Benefits />
      <Products />
      <SocialProof />
      <Offer />
      <Footer />
    </div>
  );
}

export default App;