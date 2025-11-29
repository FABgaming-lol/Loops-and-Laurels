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
                as creating
