import React from 'react'
import '../styles/Header.css'
import  Navbar from "../components/Navbar"

function Header() {
  return (
    <div className="header">
<Navbar/>
      <div className='header-content'>
      <h1>Bizel Yapı Kapı Ve Pencere Aksesuarları</h1>
      <p>Kapı ve pencere sektöründe piyasanın öncüsü olan markalarla çalışıyoruz. Birçok farklı sektörde çözümler üretiyoruz.</p>
      </div>
     


    </div>
  )
}

export default Header