import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="logo">
        <h1>ByteCyan</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/cart">Cart</Link></li> {/* Add this link */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
