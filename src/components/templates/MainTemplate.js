import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Spinner from '../atoms/Spinner';
import './MainTemplate.css';

const MainTemplate = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="template-main">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/button">Button</Link></li>
          <li><Link to="/card">Card</Link></li>
          <li><Link to="/card-with-button">Card with Button</Link></li>
          <li><Link to="/form">Form</Link></li>
          <li><Link to="/chart">Chart</Link></li>
          <li><Link to="/user-profile">User Profile</Link></li>
        </ul>
      </nav>
      <main>
        {loading ? <Spinner /> : children}
      </main>
    </div>
  );
};

export default MainTemplate;