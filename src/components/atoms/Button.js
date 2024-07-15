import React from 'react';
import './Button.css';

const Button = ({ onClick, label }) => (
  <button className="atom-button" onClick={onClick}>
    {label}
  </button>
);

export default Button;