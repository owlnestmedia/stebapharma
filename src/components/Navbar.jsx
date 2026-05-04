import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, Globe } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'About', dropdown: null },
    { title: 'Products', dropdown: ['Vsafe', 'Men Wash', 'Good Hair', 'Pro-Uneed', 'Good-Tone'] },
    { title: 'R&D', dropdown: null },
    { title: 'Presence', dropdown: null },
    { title: 'Contact', dropdown: null },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <span className="logo-text">STEBA <span className="highlight">PHARMA PVT LTD</span></span>
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          {navLinks.map((link, index) => (
            <div 
              key={index} 
              className="nav-item"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href={`#${link.title.toLowerCase()}`} className="nav-link">
                {link.title} {link.dropdown && <ChevronDown size={14} />}
              </a>
              {link.dropdown && activeDropdown === index && (
                <div className="mega-menu animate-fade-in">
                  <div className="mega-menu-content">
                    {link.dropdown.map((item, idx) => (
                      <a key={idx} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="mega-item">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="nav-actions">
          <Search className="action-icon" size={20} />
          <Globe className="action-icon" size={20} />
          <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
