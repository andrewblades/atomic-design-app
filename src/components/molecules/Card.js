import React from 'react';
import './Card.css';

const Card = ({ children }) => (
  <div className="molecule-card">
    {children}
  </div>
);

export default Card;