import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
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

  return (
    <div className="about-page" ref={sectionRef}>
      <div className="page-header">
        <div className="container">
          <h1>Our Story</h1>
          <p>Learn about our passion for crochet and the journey behind Loops and Laurels</p>
        </div>
      </div>

      <section className="about-story section-padding">
        <div className="container">
          <div className="story-content">
            <div className="story-text fade-in">
              <h2>Artistry in Every Stitch</h2>
              <p>
                Loops and Laurels began as a simple passion project in 2020, when our founder 
                discovered the therapeutic joy of crochet during quiet evenings. What started 
                as creating gifts for friends and family soon blossomed into a full-fledged 
                business dedicated to sharing the beauty of handmade crafts.
              </p>
              <p>
                Our name reflects our philosophy: "Loops" represent the fundamental stitches 
                of crochet, while "Laurels" symbolize the achievement and recognition we strive 
                for in every piece we create. Each product tells a story of dedication, patience, 
                and love for the craft.
              </p>
              <div className="story-stats">
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Happy Customers</span>
                </div>
                <div className="stat">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years of Crafting</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Handmade</span>
                </div>
              </div>
            </div>
            <div className="story-image fade-in">
              <img 
                src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Crochet Crafting" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="values-section section-padding">
        <div className="container">
          <h2 className="section-title fade-in">Our Values</h2>
          <div className="values-grid">
            <div className="value-card fade-in">
              <i className="fas fa-hand-holding-heart"></i>
              <h3>Quality Craftsmanship</h3>
              <p>Every piece is meticulously crafted with attention to detail, using only the finest materials to ensure longevity and beauty.</p>
            </div>
            <div className="value-card fade-in">
              <i className="fas fa-leaf"></i>
              <h3>Sustainability</h3>
              <p>We prioritize eco-friendly materials and sustainable practices, creating products that are kind to our planet.</p>
            </div>
            <div className="value-card fade-in">
              <i className="fas fa-users"></i>
              <h3>Community Focus</h3>
              <p>We believe in supporting local artisans and building a community around the love for handmade crafts.</p>
            </div>
            <div className="value-card fade-in">
              <i className="fas fa-star"></i>
              <h3>Customer Delight</h3>
              <p>Your satisfaction is our priority. We work tirelessly to ensure every customer has a wonderful experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section section-padding">
        <div className="container">
          <h2 className="section-title fade-in">Our Process</h2>
          <div className="process-steps">
            <div className="process-step fade-in">
              <div className="step-number">1</div>
              <h3>Design & Planning</h3>
              <p>Each design begins with inspiration and careful planning, considering both aesthetics and functionality.</p>
            </div>
            <div className="process-step fade-in">
              <div className="step-number">2</div>
              <h3>Material Selection</h3>
              <p>We source high-quality, sustainable yarns and materials that meet our strict standards for quality and comfort.</p>
            </div>
            <div className="process-step fade-in">
              <div className="step-number">3</div>
              <h3>Hand Crafting</h3>
              <p>Every stitch is made by hand with care and precision, ensuring each piece is unique and perfectly crafted.</p>
            </div>
            <div className="process-step fade-in">
              <div className="step-number">4</div>
              <h3>Quality Check</h3>
              <p>Before shipping, each item undergoes thorough inspection to ensure it meets our quality standards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
