import React from 'react';
import './Icon.css';

const Icon = ({ name }) => (
  <i className={`fa ${name}`}></i>
);

export default Icon;