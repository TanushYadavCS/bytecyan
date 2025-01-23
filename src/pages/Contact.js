import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
  };

  return (
    <div style={{ padding: '2rem', color: '#ffffff' }}>
      <h1 style={{ color: '#ffffff', textAlign: 'center' }}>Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '2rem',
        }}
      >
        <label style={{ color: '#e0e0e0', marginBottom: '0.5rem' }}>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{
            padding: '0.75rem',
            marginBottom: '1rem',
            width: '300px',
            backgroundColor: '#1a1a1a',
            color: '#ffffff',
            border: '1px solid #333',
            borderRadius: '5px',
          }}
        />
        <label style={{ color: '#e0e0e0', marginBottom: '0.5rem' }}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{
            padding: '0.75rem',
            marginBottom: '1rem',
            width: '300px',
            backgroundColor: '#1a1a1a',
            color: '#ffffff',
            border: '1px solid #333',
            borderRadius: '5px',
          }}
        />
        <label style={{ color: '#e0e0e0', marginBottom: '0.5rem' }}>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          style={{
            padding: '0.75rem',
            marginBottom: '1rem',
            width: '300px',
            backgroundColor: '#1a1a1a',
            color: '#ffffff',
            border: '1px solid #333',
            borderRadius: '5px',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#ffffff',
            color: '#121212',
            border: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#e6e6e6';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff';
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
