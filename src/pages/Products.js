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
      
      {/* Header */}
      <div className="products-header fade-in-up">
        <h1>Our Collection</h1>
        <p>
          Explore beautiful handmade crochet pieces crafted with love, patience, 
          and passion — from cozy accessories to adorable plush creations.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="products-filters fade-in-up">
        <button
          className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          All
        </button>
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

      {/* Product Grid */}
      <div className="products-grid fade-in-up">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </div>

      {/* No Products Found */}
      {filteredProducts.length === 0 && (
        <div className="no-products fade-in-up">
          <i className="fas fa-search"></i>
          <h3>No products found</h3>
          <p>
            We are always adding new delightful creations — check back soon! 🧶✨
          </p>
        </div>
      )}

    </div>
  );
};

export default Products;
