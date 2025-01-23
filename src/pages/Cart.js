import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMobileAlt, FaLaptop, FaCamera, FaRegClock, FaGamepad, FaHeadphonesAlt } from 'react-icons/fa';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartItems);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  // Map categories to corresponding icons
  const categoryIcons = {
    Smartphones: <FaMobileAlt size={50} color="#ffffff" />,
    Laptops: <FaLaptop size={50} color="#ffffff" />,
    Cameras: <FaCamera size={50} color="#ffffff" />,
    Smartwatches: <FaRegClock size={50} color="#ffffff" />,
    'Gaming Consoles': <FaGamepad size={50} color="#ffffff" />,
    'Audio Devices': <FaHeadphonesAlt size={50} color="#ffffff" />,
  };

  return (
    <div style={{ padding: '2rem', color: '#ffffff' }}>
      <h1 style={{ color: '#ffffff', textAlign: 'center' }}>Your Cart</h1>
      {cart.length === 0 ? (
        <p style={{ color: '#e0e0e0', textAlign: 'center' }}>
          Your cart is empty. <Link to="/" style={{ color: '#ffffff' }}>Start shopping</Link>
        </p>
      ) : (
        <div>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {cart.map(item => (
              <li key={item.id} style={{ marginBottom: '1rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#1a1a1a',
                    padding: '1rem',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <div style={{ width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {categoryIcons[item.category]}
                  </div>
                  <div style={{ marginLeft: '1rem', flex: 1 }}>
                    <h3 style={{ color: '#ffffff' }}>{item.name}</h3>
                    <p style={{ color: '#e0e0e0' }}>{item.description}</p>
                    <p style={{ color: '#00ffff', fontWeight: 'bold' }}>₹{item.price.toLocaleString()}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        backgroundColor: '#e0e0e0',
                        color: '#121212',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#cccccc')}
                      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#e0e0e0')}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
            <h3 style={{ color: '#ffffff' }}>Total: ₹{totalAmount.toLocaleString()}</h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
            <Link
              to="/checkout"
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#00ffff',
                color: '#121212',
                textDecoration: 'none',
                fontWeight: 'bold',
                borderRadius: '5px',
                textAlign: 'center',
              }}
            >
              Checkout
            </Link>
            <button
              onClick={clearCart}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#e0e0e0',
                color: '#121212',
                border: 'none',
                fontWeight: 'bold',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
