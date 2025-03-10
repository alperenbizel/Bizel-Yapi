import React, { useRef, useEffect } from 'react'
import brandsData from '../data/brandsData'
import { motion, useInView, useAnimation } from 'framer-motion'
import '../styles/Brands.css'

function Brands() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  }

  return (
    <section ref={ref} className="brands-section">
      <motion.h2 
        className="section-title"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
        }}
      >
        Güvenilir Partnerlerimiz
      </motion.h2>

      <div className="brands-grid">
        {brandsData.map((brand, i) => (
          <motion.div 
            key={brand.id}
            className="brand-card"
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            custom={i}
          >
            <div className="card-inner">
              <div className="card-front">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="brand-logo"
                />
                <div className="gradient-overlay"></div>
              </div>
              
              <div className="card-back">
           
                <h3>{brand.name}</h3>
                <p>{brand.description}</p>
                <a 
                  href={brand.website}
                  className="brand-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Keşfet</span>
                  <svg viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Brands
