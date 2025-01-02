import React from 'react';
import NavLink from './NavLink';

const Menu = ({ menuOpen, toggleMenu }) => {
  return (
    <div className={`menu ${menuOpen ? 'open' : ''}`}>
      <div className="close-menu" onClick={toggleMenu}>
        &#10005;
      </div>
      <div className="logo">
        <img src="/images/logo.jpeg" alt="Логотип" />
      </div>
      <ul className="menu-list">
        <li><NavLink to="#services" text="Услуги" icon="🛠️" /></li>
        <li><NavLink to="#reviews" text="Отзывы" icon="📝" /></li>
        <li><NavLink to="#cases" text="Кейсы" icon="📁" /></li>
        <li><NavLink to="#trial" text="Тестовый период" icon="🔄" /></li>
      </ul>
      <div className="divider"></div>
      <ul className="menu-list">
        <li><NavLink to="#" text="Ru" icon="🇷🇺" /></li>
        <li><NavLink to="#" text="Pl" icon="🇵🇱" /></li>
      </ul>
    </div>
  );
};

export default Menu;
