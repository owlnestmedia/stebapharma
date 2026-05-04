import React from 'react';
import { Shield, Sparkles, Droplets, PackageCheck } from 'lucide-react';
import './ProductSpotlight.css';

const ProductSpotlight = () => {
  const benefits = [
    'Promotes healthy vaginal microflora',
    'Effective in bacterial and fungal infection',
    'Protects against itching, irritation, and soreness',
    'Unique pH balance formula for expert hygiene',
    'Removes unpleasant smell and lightens darkness'
  ];

  const features = [
    { icon: <Sparkles />, label: 'Pleasant Fragrance' },
    { icon: <PackageCheck />, label: 'Easy-to-Carry' },
    { icon: <Droplets />, label: 'pH Balanced' },
    { icon: <Shield />, label: 'Metered Dose' }
  ];

  return (
    <section className="section spotlight" id="vsafe">
      <div className="container">
        <div className="spotlight-grid">
          <div className="spotlight-content animate-fade-in">
            <span className="brand-tag">Featured Product</span>
            <h2 className="product-name">Vsafe<span>™</span></h2>
            <p className="product-category">Expert Intimate Wash for Female Daily Hygiene</p>
            
            <ul className="benefits-list">
              {benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>

            <div className="features-row">
              {features.map((f, i) => (
                <div key={i} className="feature-pill">
                  {f.icon}
                  <span>{f.label}</span>
                </div>
              ))}
            </div>

            <div className="indications">
              <h4>Effective For:</h4>
              <div className="indication-tags">
                <span>Vaginal Pruritus</span>
                <span>Vaginal Infection</span>
                <span>Burning Sensation</span>
                <span>Bad Odor</span>
                <span>Abnormal Discharge</span>
              </div>
            </div>
          </div>

          <div className="spotlight-image">
            <div className="product-card-3d">
              <div className="product-placeholder">
                <span className="v-logo">V</span>
                <h3>Vsafe</h3>
                <p>Expert Intimate Wash</p>
              </div>
              <div className="floating-badge">pH 3.5</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpotlight;
