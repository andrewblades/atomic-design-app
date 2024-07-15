import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import Badge from '../atoms/Badge';
import './ButtonPage.css';

const ButtonPage = () => (
  <MainTemplate>
    <h1>Button Page</h1>
    <div className="button-page-content">
      <Icon name="fa-check" />
      <Badge label="Primary Action" />
      <Button label="Click Me" onClick={() => alert('Button clicked!')} />
    </div>
  </MainTemplate>
);

export default ButtonPage;