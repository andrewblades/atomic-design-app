import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import CardWithButton from '../organisms/CardWithButton';

const CardWithButtonPage = () => (
  <MainTemplate>
    <h1>A card with a button to make sure you remember your trainings</h1>
    <CardWithButton />
  </MainTemplate>
);

export default CardWithButtonPage;