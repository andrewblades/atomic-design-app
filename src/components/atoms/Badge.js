import React from 'react';
import './Badge.css';

const Badge = ({ label }) => (
  <span className="atom-badge">
    {label}
  </span>
);

export default Badge;