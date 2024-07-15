import React from 'react';
import Card from '../molecules/Card';
import Button from '../atoms/Button';
import Badge from '../atoms/Badge';
import Icon from '../atoms/Icon';
import './CardWithButton.css';

const CardWithButton = () => (
  <Card>
    <div className="organism-card-with-button">
      <Icon name="star-icon" className=".star-icon"/>
      <p>This is a card with a button and a badge.</p>
      <Badge label="New" />
      <Button label="Click Me" onClick={() => alert('Button clicked!')} />
    </div>
  </Card>
);

export default CardWithButton;