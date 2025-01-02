import React from 'react';

const NavLink = ({ to, text, icon }) => {
  return (
    <a href={to} className="nav-link">
      {icon && <span>{icon}</span>} {text}
    </a>
  );
};

export default NavLink;
