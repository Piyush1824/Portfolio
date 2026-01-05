import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;