import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import Card from '../molecules/Card';

const CardPage = () => (
  <MainTemplate>
    <h1>A card to remind you of your trainings</h1>
    <Card>
      <p>Your trainings aren't finished yet, please make sure to do them</p>
    </Card>
  </MainTemplate>
);

export default CardPage;