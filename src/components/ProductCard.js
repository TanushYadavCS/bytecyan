import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productExists = cart.some(item => item.id === product.id);

    if (!productExists) {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} onClick={handleAddToCart}>
        <div className="product-icon">{product.icon}</div>  {/* Render the icon here */}
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="price">₹{product.price.toLocaleString()}</p>
      </Link>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
