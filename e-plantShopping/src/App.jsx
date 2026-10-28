import React, { useState } from 'react';
import { ArrowRight, Leaf, Sprout } from 'lucide-react';
import ProductList, { Navbar } from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';
import AboutUs from './components/AboutUs.jsx';

export default function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setCurrentPage('plants');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page) => {
    if (page === 'plants') {
      setShowProductList(true);
      setCurrentPage('plants');
    } else if (page === 'cart') {
      setShowProductList(true);
      setCurrentPage('cart');
    } else {
      setShowProductList(false);
      setCurrentPage('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'plants' && showProductList) {
    return <ProductList onNavigate={handleNavigate} onContinueShopping={() => handleNavigate('plants')} />;
  }

  if (currentPage === 'cart' && showProductList) {
    return <CartItem onNavigate={handleNavigate} onContinueShopping={() => handleNavigate('plants')} />;
  }

  return (
    <div className="landing-page">
      <Navbar currentPage="home" onNavigate={handleNavigate} />
      <section className="background-image">
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-symbol"><Sprout size={32} /></div>
            <p className="eyebrow hero-eyebrow">Make room for nature</p>
            <h1>Welcome to <span>Paradise Nursery</span></h1>
            <p className="hero-description">
              Beautiful houseplants, happier spaces. Find the perfect green
              companion for your home and let your space flourish.
            </p>
            <button className="primary-button hero-button" type="button" onClick={handleGetStartedClick}>
              Get Started <ArrowRight size={18} />
            </button>
            <div className="hero-trust-row">
              <span><Leaf size={16} /> Thoughtfully selected</span>
              <span><Sprout size={16} /> Easy-care favorites</span>
            </div>
          </div>
        </div>
      </section>
      <AboutUs />
      <footer className="site-footer">
        <span className="footer-brand"><Sprout size={18} /> Paradise Nursery</span>
        <span>Grow a little joy every day.</span>
      </footer>
    </div>
  );
}
