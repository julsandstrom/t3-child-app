import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NotFound.css';
import jungleBackground from '../assets/NotFound.png';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className="notfound-container"
      style={{ backgroundImage: `url(${jungleBackground})` }}
    >
      <div className="notfound-text">
        <h1>404</h1>
        <p>Sidan kunde inte hittas</p>
      </div>

      <button className="back-button" onClick={() => navigate('/')}>
        Gå tillbaka
      </button>
    </div>
  );
};

export default NotFound;
