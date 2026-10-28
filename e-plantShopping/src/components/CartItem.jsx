import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeft, Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import { removeItem, updateQuantity } from '../redux/CartSlice.jsx';
import { Navbar } from './ProductList.jsx';

export default function CartItem({ onContinueShopping, onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity <= 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  const handleContinueShopping = (event) => {
    event.preventDefault();
    if (onContinueShopping) onContinueShopping();
    else if (onNavigate) onNavigate('plants');
  };

  const handleCheckout = () => {
    window.alert('Coming Soon! Thank you for shopping with Paradise Nursery.');
  };

  return (
    <main className="page-shell cart-page">
      <Navbar currentPage="cart" onNavigate={onNavigate || (() => {})} />
      <section className="cart-heading">
        <div>
          <p className="eyebrow">Your green picks</p>
          <h1>Shopping Cart</h1>
          <p>Every plant is a little step toward a greener home.</p>
        </div>
        <div className="cart-heading-icon"><ShoppingCart size={28} /></div>
      </section>

      {cartItems.length === 0 ? (
        <section className="empty-cart">
          <div className="empty-cart-icon"><ShoppingCart size={34} /></div>
          <h2>Your cart is waiting to grow</h2>
          <p>Explore our plant collection and find your next leafy companion.</p>
          <button className="primary-button get-started-button" onClick={handleContinueShopping} type="button">
            <ArrowLeft size={17} /> Continue Shopping
          </button>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items-panel" aria-label="Cart items">
            <div className="cart-table-heading">
              <h2>Your plants <span>({cartItems.length})</span></h2>
              <span>Price</span>
            </div>
            {cartItems.map((item) => (
              <article className="cart-item" key={item.id}>
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="unit-price">${item.price.toFixed(2)} <span>each</span></p>
                  <button className="delete-button" type="button" onClick={() => handleRemove(item)}>
                    <Trash2 size={15} /> Delete
                  </button>
                </div>
                <div className="cart-item-controls">
                  <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                    <button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => handleDecrement(item)}><Minus size={15} /></button>
                    <span aria-live="polite">{item.quantity}</span>
                    <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => handleIncrement(item)}><Plus size={15} /></button>
                  </div>
                  <strong className="line-total">${(item.price * item.quantity).toFixed(2)}</strong>
                </div>
              </article>
            ))}
            <button className="text-button continue-link" type="button" onClick={handleContinueShopping}>
              <ArrowLeft size={16} /> Continue Shopping
            </button>
          </section>

          <aside className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-line"><span>Plants ({cartItems.reduce((n, item) => n + item.quantity, 0)} items)</span><span>${totalAmount.toFixed(2)}</span></div>
            <div className="summary-line"><span>Delivery</span><span className="free-label">Free</span></div>
            <div className="summary-total"><span>Total</span><strong>${totalAmount.toFixed(2)}</strong></div>
            <button className="checkout-button" type="button" onClick={handleCheckout}>Checkout</button>
            <p className="secure-note">A little more green is on its way.</p>
          </aside>
        </div>
      )}
    </main>
  );
}
