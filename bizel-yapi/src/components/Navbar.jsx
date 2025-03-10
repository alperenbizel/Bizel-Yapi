import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("menu-open");
  };

  // Scroll efekti
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dışarı tıklama efekti
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        !e.target.closest(".nav-links") &&
        !e.target.closest(".menu-icon")
      ) {
        setIsOpen(false);
        document.body.classList.remove("menu-open");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Hakkımızda butonuna tıklandığında yönlendirme ve kaydırma
  const handleAboutClick = (e) => {
    e.preventDefault();
    setIsOpen(false);

    if (window.location.pathname !== "/") {
      navigate("/", { replace: true });

      // Sayfa yönlendirmesinden sonra kaydırma işlemini gecikmeli yap
      setTimeout(() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Yönlendirme tamamlanana kadar bekle
    } else {
      // Eğer zaten Ana Sayfa'daysan, direkt kaydır
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <p> Bizel Yapı</p>
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>Anasayfa</NavLink>
        <a href="/#about" onClick={handleAboutClick}>Hakkımızda</a>
        <NavLink to="/product" onClick={() => setIsOpen(false)}>Ürünler</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>İletişim</NavLink>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
