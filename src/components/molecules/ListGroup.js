import React from 'react';
import './ListGroup.css';

const ListGroup = ({ items }) => (
  <ul className="molecule-list-group">
    {items.map((item, index) => (
      <li key={index} className="molecule-list-group-item">
        {item}
      </li>
    ))}
  </ul>
);

export default ListGroup;