import React, { useState } from 'react';
import '../styles/Product.css';
import products from '../data/products';




const Products = () => {
  const [activeFilter, setActiveFilter] = useState('Tümü');
  const [hoveredId, setHoveredId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const filters = ['Tümü', 'Dış Cephe', 'İç Mekan', 'Sistem Çözümleri'];

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  const filteredProducts = products.filter(product => 
    (activeFilter === 'Tümü' || product.category === activeFilter) &&
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
  <>
 
    <section className="products-section">
      {/* Filtre Butonları */}
      <div className="filter-buttons">
        {filters.map(filter => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
            <span className="filter-underline"></span>
          </button>
        ))}
      </div>

      {/* Arama Çubuğu */}
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Ara..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
      </div>

      {/* Ürün Grid */}
      <div className="product-grid">
        {filteredProducts.map(product => (
          <article 
            key={product.id}
            className="product-card"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="card-media">
              <img 
                src={product.image} 
                alt={product.title}
                className={`card-image ${hoveredId === product.id ? 'zoomed' : ''}`}
              />
              <div className="image-overlay"></div>
              <button 
                className="favorite-btn" 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  toggleFavorite(product.id); 
                }}
              >
                {favorites.includes(product.id) ? '❤️' : '🤍'}
              </button>
            </div>

            <div className="card-content">
              <div className="content-wrapper">
                <h3 className="product-title">{product.title}</h3>
                <div className={`hover-content ${hoveredId === product.id ? 'visible' : ''}`}>
                  <p className="product-description">{product.description}</p>
                  <button 
                    className="cta-button" 
                    onClick={() => setSelectedProduct(product)}
                  >
                    <span>Keşfet</span>
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                    </svg>
                  </button>
                </div>
                <div className="specs">
                  {product.specs.map((spec, index) => (
                    <span key={index} className="spec-badge">{spec}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal: Ürün Detayları */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>X</button>
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.title} 
              className="modal-image"
            />
            <h2>{selectedProduct.title}</h2>
            <p>{selectedProduct.description}</p>
            <div className="modal-specs">
              {selectedProduct.specs.map((spec, index) => (
                <span key={index} className="modal-spec-badge">{spec}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
    </> 
  );
  
};

export default Products;
