import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page" ref={sectionRef}>
      <div className="page-header">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </div>

      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info fade-in">
              <h2>Let's Connect</h2>
              <p>
                Have questions about our products? Need a custom order? 
                We're here to help and would love to hear from you.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>Email Us</h4>
                    <p>hello@loopsandlaurels.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h4>Call Us</h4>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>Visit Us</h4>
                    <p>Mumbai, India</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-clock"></i>
                  <div>
                    <h4>Business Hours</h4>
                    <p>Monday - Saturday: 10AM - 7PM</p>
                  </div>
                </div>
              </div>

              <div className="social-contact">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="#" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" aria-label="Pinterest">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                  <a href="#" aria-label="WhatsApp">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form fade-in">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section section-padding">
        <div className="container">
          <h2 className="section-title fade-in">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item fade-in">
              <h3>How long does shipping take?</h3>
              <p>We typically process orders within 1-2 business days. Shipping takes 3-7 business days across India. Custom orders may take longer.</p>
            </div>
            <div className="faq-item fade-in">
              <h3>Do you accept custom orders?</h3>
              <p>Yes! We love creating custom pieces. Please contact us with your requirements and we'll work with you to bring your vision to life.</p>
            </div>
            <div className="faq-item fade-in">
              <h3>What payment methods do you accept?</h3>
              <p>We currently accept UPI payments only through all major UPI apps including Google Pay, PhonePe, Paytm, and BHIM UPI.</p>
            </div>
            <div className="faq-item fade-in">
              <h3>How do I care for my crochet items?</h3>
              <p>We recommend hand washing in cold water with mild detergent and laying flat to dry. Avoid wringing or machine washing to maintain the shape and quality.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
