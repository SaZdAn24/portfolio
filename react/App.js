import React, { useState } from 'react';
import './App.css'; // Подключите ваш CSS

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <nav className={`menu ${menuOpen ? 'open' : ''}`}>
          <div className="close-menu" onClick={toggleMenu}>
            ✕
          </div>
          <ul className="menu-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="container">
          <div className="left-column">
            <h1 className="name">Your Name</h1>
            <h2 className="subtitle">Your Subtitle</h2>
          </div>
          <div className="right-column">
            <p className="info-text">Some descriptive text here...</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
