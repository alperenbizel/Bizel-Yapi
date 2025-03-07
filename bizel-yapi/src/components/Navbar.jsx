import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('menu-open');
  };

  // Scroll efekti
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dışarı tıklama efekti
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && 
          !e.target.closest('.nav-links') && 
          !e.target.closest('.menu-icon')) {
        setIsOpen(false);
        document.body.classList.remove('menu-open');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]); // isOpen bağımlılık olarak eklendi

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">Bizel Yapı</div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#" onClick={() => setIsOpen(false)}>Anasayfa</a>
        <a href="#" onClick={() => setIsOpen(false)}>Hakkımızda</a>
        <a href="#" onClick={() => setIsOpen(false)}>Projeler</a>
        <a href="#" onClick={() => setIsOpen(false)}>İletişim</a>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;