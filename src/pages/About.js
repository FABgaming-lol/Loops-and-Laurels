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

      {/* Header Section */}
      <div className="about-header fade-in-up">
        <h1>Our Story</h1>
        <p>Discover the love, creativity, and passion behind every handmade piece.</p>
      </div>

      {/* About Content */}
      <div className="about-content">
        <img
          className="about-image fade-in-up"
          src="https://images.unsplash.com/photo-1606621901917-298a6a2fd1e8?auto=format&fit=crop&w=1000&q=80"
          alt="Handmade Crochet"
        />

        <div className="about-text fade-in-up">
          <h2>Artistry in Every Stitch</h2>
          <p>
            Loops & Laurels was born from a heartfelt journey, blending creativity with tradition.
            Every thread tells a story — patience, passion, and the magic of handmade craftsmanship.
          </p>
          <p>
            Our crochet products are made to bring warmth to your homes and joy to your hearts.
            We celebrate the beauty of slow-made art in a fast-paced world.
          </p>
        </div>
      </div>

      {/* Highlight Section */}
      <div className="highlight fade-in-up">
        <h3>Crafted With ❤️ From India</h3>
        <p>Each product is thoughtfully designed and skillfully handmade to perfection.</p>
      </div>

    </div>
  );
};

export default About;
