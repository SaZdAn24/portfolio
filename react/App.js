import React, { useState } from 'react';
import Header from './Header';
import Menu from './Menu';
import './App.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prevState => !prevState);

  return (
    <div className="App">
      <Header toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <div className={`container ${menuOpen ? 'menu-open' : ''}`}>
        <div className="left-column">
          <div className="name">Daniil<br />Sazanovich</div>
          <div className="subtitle">Таргетолог-Маркетолог</div>
        </div>
        <div className="right-column">
          <div className="info-text">
            Я профессионал с более чем 5-летним опытом работы в
            таргетированной рекламе. За это время я успешно реализовал
            более 20 проектов в самых разных нишах.
            Моя специализация — настройка и ведение рекламы в Facebook и Instagram.
            Я помогаю бизнесам привлекать клиентов, повышать продажи и
            достигать своих целей с помощью эффективных рекламных кампаний.
          </div>
        </div>
      </div>

      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default App;
