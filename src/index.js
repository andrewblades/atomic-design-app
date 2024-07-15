import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProfileProvider } from './contexts/UserProfileContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <UserProfileProvider>
      <App />
    </UserProfileProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
