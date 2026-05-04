import React from 'react';
import { Mail, Phone, MapPin, Share2, Globe, MessageSquare } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">STEBA <span>PHARMA PVT LTD</span></h2>
            <p className="footer-desc">
              Committed to providing high-quality healthcare solutions for a healthier world. Innovation and quality are our core pillars.
            </p>
            <div className="social-links">
              <a href="#"><Share2 size={20} /></a>
              <a href="#"><MessageSquare size={20} /></a>
              <a href="#"><Globe size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Product Range</a></li>
              <li><a href="#presence">Our Presence</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Our Products</h4>
            <ul>
              <li><a href="#vsafe">Vsafe™</a></li>
              <li><a href="#menwash">Men Wash™</a></li>
              <li><a href="#goodhair">Good Hair™</a></li>
              <li><a href="#prouneed">Pro-Uneed®</a></li>
              <li><a href="#goodtone">Good-Tone™</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <div className="contact-item">
              <MapPin size={18} />
              <span>No. 217, Reliable Prestige No. 1, Achole Road, Nallasopara (East), Palghar 401209</span>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <span>Customer Care: +91 84466 60567</span>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <span>stabapharma@gmail.com</span>
            </div>
            <div className="contact-item">
              <Globe size={18} />
              <span>www.stebapharma.in</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Steba Pharma Private Limited. All Rights Reserved.</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
