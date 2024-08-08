import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">My Website</h1>
        
          <ul className="nav-list">
            <li className="nav-item"><a href="/dashboard" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
          </ul>
     
      </div>
    </header>
  );
}

export default Header;
