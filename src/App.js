import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ButtonPage from './components/pages/ButtonPage';
import CardPage from './components/pages/CardPage';
import CardWithButtonPage from './components/pages/CardWithButtonPage';
import FormPage from './components/pages/FormPage';
import ChartPage from './components/pages/ChartPage';
import UserProfilePage from './components/pages/UserProfilePage';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/button" element={<ButtonPage />} />
      <Route path="/card" element={<CardPage />} />
      <Route path="/card-with-button" element={<CardWithButtonPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/chart" element={<ChartPage />} />
      <Route path="/user-profile" element={<UserProfilePage />} />
    </Routes>
  </Router>
);

export default App;