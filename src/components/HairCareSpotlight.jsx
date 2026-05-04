import React from 'react';
import { Wind, Waves, Heart, Shield } from 'lucide-react';
import './HairCareSpotlight.css';

const HairCareSpotlight = () => {
  const benefits = [
    'Matches international quality standards',
    '6 Unique combination oils for hair & skin',
    'Improves scalp health and prevents dryness',
    'Boosts blood circulation in the scalp',
    'Removes harmful toxins from hair'
  ];

  return (
    <section className="section spotlight-hair" id="goodhair">
      <div className="container">
        <div className="spotlight-grid">
          <div className="spotlight-content animate-fade-in">
            <span className="brand-tag-hair">Hair Care</span>
            <h2 className="product-name-hair">GOOD HAIR<span>™</span></h2>
            <p className="product-category">Red Onion Oil for Healthy Hair Growth</p>
            
            <ul className="benefits-list-hair">
              {benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>

            <div className="features-row">
              <div className="feature-pill-hair"><Wind size={18} /> Alcohol Free</div>
              <div className="feature-pill-hair"><Waves size={18} /> Non Sticky</div>
              <div className="feature-pill-hair"><Heart size={18} /> Stronger & Glossier</div>
            </div>
          </div>

          <div className="spotlight-image">
            <div className="product-card-3d-hair">
              <div className="product-placeholder-hair">
                <span className="h-logo">GH</span>
                <h3>GOOD HAIR</h3>
                <p>Red Onion Oil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HairCareSpotlight;
