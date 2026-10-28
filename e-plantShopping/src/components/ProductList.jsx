import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingCart, Leaf, House, Sprout } from 'lucide-react';
import { addItem } from '../redux/CartSlice.jsx';
import { plantsArray } from '../data/plants.js';

export function Navbar({ currentPage, onNavigate }) {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const navigate = (page) => (event) => {
    event.preventDefault();
    onNavigate(page);
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <a className="brand" href="#home" onClick={navigate('home')} aria-label="Paradise Nursery home">
        <span className="brand-mark"><Sprout size={23} /></span>
        <span>Paradise <strong>Nursery</strong></span>
      </a>
      <div className="nav-links">
        <a className={currentPage === 'home' ? 'active' : ''} href="#home" onClick={navigate('home')}>Home</a>
        <a className={currentPage === 'plants' ? 'active' : ''} href="#plants" onClick={navigate('plants')}>Plants</a>
        <a className={`cart-nav-link ${currentPage === 'cart' ? 'active' : ''}`} href="#cart" onClick={navigate('cart')}>
          <ShoppingCart size={19} /> Cart <span className="cart-count">{totalItems}</span>
        </a>
      </div>
    </nav>
  );
}

export default function ProductList({ onNavigate, onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  // Keep each Add to Cart button disabled while that plant is in the cart.
  useEffect(() => {
    const inCart = {};
    cartItems.forEach((item) => { inCart[item.name] = true; });
    setAddedToCart(inCart);
  }, [cartItems]);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((previous) => ({ ...previous, [plant.name]: true }));
  };

  const categoryIcons = {
    'Air Purifying Plants': <Leaf size={20} />,
    'Low-Light Plants': <House size={20} />,
    'Succulents & Cacti': <Sprout size={20} />
  };

  return (
    <main className="page-shell product-page">
      <Navbar currentPage="plants" onNavigate={onNavigate || onContinueShopping} />
      <section className="shop-intro">
        <p className="eyebrow">Find your happy place</p>
        <h1>Bring home a little <span>green.</span></h1>
        <p>Thoughtfully chosen houseplants for every room, routine, and growing journey.</p>
      </section>

      {Object.entries(plantsArray).map(([category, plants]) => (
        <section className="category-section" key={category}>
          <div className="category-heading">
            <span className="category-icon">{categoryIcons[category]}</span>
            <div>
              <h2>{category}</h2>
              <p>{plants.length} leafy favorites to explore</p>
            </div>
          </div>
          <div className="product-list">
            {plants.map((plant) => (
              <article className="plant-card" key={plant.id}>
                <div className="plant-image-wrap">
                  <img src={plant.image} alt={plant.name} loading="lazy" />
                  <span className="plant-tag">Houseplant</span>
                </div>
                <div className="plant-card-content">
                  <h3>{plant.name}</h3>
                  <p>{plant.description}</p>
                  <div className="plant-card-footer">
                    <span className="plant-price">${plant.price.toFixed(2)}</span>
                    <button
                      className="add-to-cart-button"
                      type="button"
                      disabled={Boolean(addedToCart[plant.name])}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {addedToCart[plant.name] ? 'Added ✓' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
