import React from 'react';
import './Input.css';

const Input = ({ type, placeholder }) => (
  <input className="atom-input" type={type} placeholder={placeholder} />
);

export default Input;