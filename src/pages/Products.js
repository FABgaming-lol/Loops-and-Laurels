import React, { useState, useEffect, useRef } from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import './Products.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="products-page" ref={sectionRef}>
      <div className="page-header">
        <div className="container">
          <h1>Our Collection</h1>
          <p>Discover our handmade crochet creations, each piece crafted with love and attention to detail.</p>
        </div>
      </div>

      <section className="products-section section-padding">
        <div className="container">
          <div className="products-filters fade-in">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product}
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-products fade-in">
              <i className="fas fa-search"></i>
              <h3>No products found</h3>
              <p>We're constantly adding new items to our collection. Please check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
