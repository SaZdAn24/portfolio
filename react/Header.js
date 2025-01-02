import React from 'react';
import logo from './images/logo.jpeg';
import NavLink from './NavLink';

const Header = ({ toggleMenu, menuOpen }) => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Логотип" />
      </div>
      <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        &#9776;
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <NavLink to="#services" text="Услуги" />
        <NavLink to="#reviews" text="Отзывы" />
        <NavLink to="#cases" text="Кейсы" />
        <NavLink to="#trial" text="Тестовый период" />
        <div className="language-switcher">
          <span>Ru</span> | <span>Pl</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
