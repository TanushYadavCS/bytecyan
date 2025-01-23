import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaMobileAlt, FaLaptop, FaCamera, FaRegClock, FaGamepad, FaHeadphonesAlt } from 'react-icons/fa';
import { products } from '../data';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(product => product.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p>Product not found</p>;
  }

  // Map categories to corresponding icons
  const categoryIcons = {
    Smartphones: <FaMobileAlt size={100} color="#000" />,
    Laptops: <FaLaptop size={100} color="#000" />,
    Cameras: <FaCamera size={100} color="#000" />,
    Smartwatches: <FaRegClock size={100} color="#000" />,
    'Gaming Consoles': <FaGamepad size={100} color="#000" />,
    'Audio Devices': <FaHeadphonesAlt size={100} color="#000" />,
  };

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productExists = cart.some(item => item.id === product.id);

    if (!productExists) {
      cart.push({ ...product, quantity });
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="product-details-container">
      <div className="product-details">
        <div className="product-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* Use icon based on product category */}
          {categoryIcons[product.category]}
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="description">{product.description}</p>
          <p className="price">₹{product.price.toLocaleString()}</p>
          <div className="quantity">
            <label htmlFor="quantity">Quantity: </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
            />
          </div>
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <Link to="/cart" className="view-cart-link">
            View Cart
          </Link>
        </div>
      </div>
      <div className="product-specifications">
        <h3>Product Specifications</h3>
        <ul>
          <li><strong>Brand:</strong> {product.brand}</li>
          <li><strong>Color:</strong> {product.color}</li>
          <li><strong>Weight:</strong> {product.weight} kg</li>
          <li><strong>Dimensions:</strong> {product.dimensions}</li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDetails;
