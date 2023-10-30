import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';
<assets />

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <h1>OpenLibrary Book Dashboard</h1>
    </header>
  );
};

export default Header;