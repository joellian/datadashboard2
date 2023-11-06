import React from 'react';
import './Header.css';
import logo from '../assets/mybookslogo.png';
import SearchBar from './SearchBar';

const Header = ({ handleSearch }) => {
  return (
    <header className="header">
      <div className="logo-and-title">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">My Book Dashboard</h1>
      </div>
      <div className="search-bar-container">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label style={{ marginRight: '10px' }}>Search Title</label> 
          <div className="search-bar" style={{ marginRight: '10px' }}> 
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </div>
    </header>
  );
};



export default Header;





