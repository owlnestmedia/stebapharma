import React from 'react';
import { ShieldAlert, Droplets, Leaf, Zap, UserCheck } from 'lucide-react';
import './MenWashSpotlight.css';

const MenWashSpotlight = () => {
  const benefits = [
    'Maintains healthy skin and cleanliness',
    'Removes dead cells and feel fresh',
    'Reduces itching and irritation',
    'Rich in vitamins and antioxidants',
    'Removes unwanted odour',
    'Keeps skin smooth and moist'
  ];

  const features = [
    { icon: <ShieldAlert />, label: 'Antibacterial' },
    { icon: <Leaf />, label: 'Paraben/SLS Free' },
    { icon: <Droplets />, label: 'pH Balanced' },
    { icon: <Zap />, label: 'Soothes Inflammation' }
  ];

  return (
    <section className="section spotlight-men" id="menwash">
      <div className="container">
        <div className="spotlight-grid reverse">
          <div className="spotlight-image">
            <div className="product-card-3d-blue">
              <div className="product-placeholder-blue">
                <span className="m-logo">M</span>
                <h3>Men Wash</h3>
                <p>Expert Hygiene for Men</p>
              </div>
              <div className="floating-badge-blue">Daily</div>
            </div>
          </div>

          <div className="spotlight-content animate-fade-in">
            <span className="brand-tag-blue">For Him</span>
            <h2 className="product-name-blue">Men Wash<span>™</span></h2>
            <p className="product-category">Expert Hygiene Wash for Daily Usage</p>
            
            <ul className="benefits-list-blue">
              {benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>

            <div className="features-row">
              {features.map((f, i) => (
                <div key={i} className="feature-pill-blue">
                  {f.icon}
                  <span>{f.label}</span>
                </div>
              ))}
            </div>

            <div className="cta-box">
              <div className="icon-group">
                <UserCheck size={30} />
                <span>Dermatologically Tested</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenWashSpotlight;
