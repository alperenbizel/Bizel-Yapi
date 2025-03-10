import React, { useEffect, useRef } from "react";
import "../styles/About.css";

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutRef.current.classList.add("show");
          } else {
            aboutRef.current.classList.remove("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div ref={aboutRef} className="about-container" id="about">
      
      <div className="about-content">
      <h1 className="about-title">Hakkımızda</h1>
        <p className="about-text">
          Bizel Yapı, 2019 yılında kurulmuş olup, kapı ve pencere sektöründe faaliyet göstermektedir. 
          <span className="special"> Pencere ve cam aksesuarları, kapı kilitleri, çivi modelleri ve sürme sistemleri</span> gibi geniş bir ürün yelpazesiyle müşterilerine hizmet vermektedir.
          <br /><br />
          Firmamız, müşteri memnuniyetini ön planda tutarak, kaliteli ve güvenilir markalarla çalışmaktadır. 
          İnşaat sektöründe de aktif olarak yer alarak konut, işyeri, altyapı ve üst yapı projeleri gerçekleştirmektedir. 
          Güvenilirliği ve kaliteyi esas alan hizmet anlayışımızla sektörde fark yaratmaya devam ediyoruz.
        </p>
      </div>
    </div>
  );
}

export default About;
