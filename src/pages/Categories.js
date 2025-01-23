import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  const categories = [
    { name: 'Smartphones', icon: '📱' },
    { name: 'Laptops', icon: '💻' },
    { name: 'Cameras', icon: '📷' },
    { name: 'Smartwatches', icon: '⌚' },
    { name: 'Gaming Consoles', icon: '🎮' },
    { name: 'Audio Devices', icon: '🔊' },
  ];

  return (
    <div style={{ padding: '2rem', color: '#ffffff' }}>
      <h1 style={{ color: '#ffffff', textAlign: 'center' }}>Categories</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem',
        }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ffffff',
              borderRadius: '10px',
              padding: '1rem',
              backgroundColor: '#121212',
              textAlign: 'center',
              boxShadow: '0 2px 10px rgba(255, 255, 255, 0.2)',
              transition: 'transform 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <div
              style={{
                fontSize: '3rem',
                marginBottom: '1rem',
              }}
            >
              {category.icon}
            </div>
            <h3 style={{ marginTop: '1rem', color: '#ffffff' }}>{category.name}</h3>
            <Link
              to={`/categories/${category.name.toLowerCase()}`}
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#ffffff',
                color: '#121212',
                textDecoration: 'none',
                borderRadius: '5px',
                fontWeight: 'bold',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#e6e6e6';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
              }}
            >
              Explore
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
