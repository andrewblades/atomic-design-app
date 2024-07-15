import React from 'react';
import './Label.css';

const Label = ({ text }) => (
  <label className="atom-label">
    {text}
  </label>
);

export default Label;