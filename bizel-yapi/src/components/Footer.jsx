import React from "react";
import "../styles/Footer.css";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Şirket Bilgileri */}
        <div className="footer-section">
          <h2>Bizel Yapı</h2>
          <p>Güvenli ve estetik yapılar için buradayız.</p>
        </div>

        {/* Sayfa Linkleri */}
        <div className="footer-section">
          <h3>Hızlı Erişim</h3>
          <ul>
            <li><NavLink to="/">Anasayfa</NavLink></li>
            <li><NavLink to="#about">Hakkımızda</NavLink></li>
            <li><NavLink to="/product">Ürünler</NavLink></li>
            <li><NavLink to="/contact">İletişim</NavLink></li>
          </ul>
        </div>

        {/* Sosyal Medya Linkleri */}
        <div className="footer-section">
          <h3>Bizi Takip Edin</h3>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bizel Yapı | Tüm Hakları Saklıdır</p>
      </div>
    </footer>
  );
};

export default Footer;
