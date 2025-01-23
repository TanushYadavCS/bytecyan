import React, { useState, useCallback, useMemo } from 'react';
import { products } from '../data';
import ProductCard from './ProductCard';

function ProductList() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = useCallback((product) => {
    setCart((prevCart) => [...prevCart, product]);
  }, []);

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  }, [cart]);

  return (
    <div>
      <h1 style={{ color: '#00ffff', textAlign: 'center', margin: '2rem 0' }}>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <p>Total Items: {cart.length}</p>
        <p>Total Price: ₹{cartTotal}</p>
      </div>
    </div>
  );
}

export default ProductList;