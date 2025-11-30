import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Home.css';

const Home = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = [
      heroRef.current,
      aboutRef.current,
      productsRef.current,
      ...document.querySelectorAll('.product-card, .about-text, .about-image')
    ];

    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content fade-in">
            <h1 className="hero-title">
              Handcrafted Crochet <span>Creations</span>
            </h1>
            <p className="hero-subtitle">
              Discover the beauty of handmade crochet items, each piece crafted with love 
              and attention to detail. From cozy blankets to stylish accessories, find 
              something special for yourself or as a gift.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn">Shop Collection</Link>
              <Link to="/about" className="btn btn-secondary">Our Story</Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products section-padding" ref={productsRef}>
        <div className="container">
          <h2 className="section-title fade-in">
            Featured Products
          </h2>
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product}
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/products" className="btn">View All Products</Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview section-padding" ref={aboutRef}>
        <div className="container">
          <div className="about-content">
            <div className="about-text slide-in-left">
              <h2>Our Story</h2>
              <p>
                Loops and Laurels was born from a passion for the timeless art of crochet. 
                What started as a hobby quickly grew into a small business dedicated to 
                creating beautiful, handmade items that bring joy and comfort to people's lives.
              </p>
              <p>
                Each piece in our collection is carefully crafted using high-quality materials, 
                ensuring that every stitch tells a story of dedication and artistry.
              </p>
              <Link to="/about" className="btn">Learn More</Link>
            </div>
            <div className="about-image slide-in-right">
              <img 
  src="/logo.png" 
  alt="Loops and Laurels Logo" 
/>
            </div>
          </div>
        </div>
      </section>

      {/* UPI Section */}
      <section className="upi-section section-padding">
        <div className="container">
          <h2 className="section-title fade-in">Easy & Secure UPI Payments</h2>
          <p className="upi-description fade-in">
            We support all major UPI platforms for a seamless checkout experience. 
            Fast, secure, and convenient payments.
          </p>
          <div className="upi-icons">
            <div className="upi-icon fade-in">
              <i className="fab fa-google-pay"></i>
              <span>Google Pay</span>
            </div>
            <div className="upi-icon fade-in">
              <i className="fas fa-mobile-alt"></i>
              <span>PhonePe</span>
            </div>
            <div className="upi-icon fade-in">
              <i className="fas fa-wallet"></i>
              <span>Paytm</span>
            </div>
            <div className="upi-icon fade-in">
              <i className="fas fa-qrcode"></i>
              <span>BHIM UPI</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
