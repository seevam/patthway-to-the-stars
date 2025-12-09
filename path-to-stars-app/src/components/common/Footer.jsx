import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">🌟 Path to the Stars</h3>
            <p>Inspiring the next generation of astronomers through interactive learning and hands-on exploration.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/learn">Learn</Link></li>
              <li><Link to="/build">Build</Link></li>
              <li><Link to="/explore">Explore</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Community</h4>
            <ul className="footer-links">
              <li><Link to="/community">Student Showcase</Link></li>
              <li><Link to="/pricing">Get Started</Link></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a href="#parents">For Parents</a></li>
              <li><a href="#teachers">For Teachers</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Path to the Stars. All rights reserved.</p>
          <p>Made with ❤️ for young astronomers everywhere</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
