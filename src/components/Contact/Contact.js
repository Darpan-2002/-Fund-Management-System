// src/Contact.js

import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    reason: '' // New state field for the reason
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., sending data to a server
    console.log('Form Submitted:', formData);
    alert('Thank you for contacting us!');
    setFormData({ name: '', email: '', message: '', reason: '' });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="reason">Reason for Needing Funds</label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
