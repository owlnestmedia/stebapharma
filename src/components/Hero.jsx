import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero-title">
            Breakthrough <span className="text-secondary">Allopathic Formulations</span>
          </h1>
          <p className="hero-subtitle">
            Steba Pharma PVT LTD is dedicated to providing breakthrough formulations and exports across various therapeutic segments, enhancing the quality of life globally.
          </p>
          <div className="hero-btns">
            <button className="btn btn-primary">Discover Our Products</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </motion.div>
      </div>

      <div className="hero-stats animate-fade-in">
        <div className="container stats-grid">
          <div className="stat-item">
            <span className="stat-number">25+</span>
            <span className="stat-label">Years of Excellence</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-label">Global Markets</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Formulations</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">R&D Centers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
