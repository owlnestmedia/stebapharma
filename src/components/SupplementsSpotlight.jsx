import React from 'react';
import { Activity, ShieldPlus, Brain, Zap } from 'lucide-react';
import './SupplementsSpotlight.css';

const SupplementsSpotlight = () => {
  const benefits = [
    'High protein efficiency ratio',
    'Reduces risk of low birth weight & preterm delivery',
    'Significant increase in gestation period',
    'Reduces the risk of pre-eclampsia',
    'Helps to reduce oxidative stress',
    'Ideal for Post-menopausal support'
  ];

  return (
    <section className="section spotlight-supp" id="prouneed">
      <div className="container">
        <div className="spotlight-grid reverse">
          <div className="spotlight-image">
            <div className="product-card-3d-supp">
              <div className="product-placeholder-supp">
                <span className="p-logo">Pro</span>
                <h3>Pro-Uneed</h3>
                <p>Balanced Protein Supplement</p>
              </div>
            </div>
          </div>

          <div className="spotlight-content animate-fade-in">
            <span className="brand-tag-supp">Nutritional Supplement</span>
            <h2 className="product-name-supp">Pro-Uneed<span>®</span></h2>
            <p className="product-category">For Healthy Pregnancy and Fetal Development</p>
            
            <ul className="benefits-list-supp">
              {benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>

            <div className="features-row">
              <div className="feature-pill-supp"><Brain size={18} /> Fortified with DHA</div>
              <div className="feature-pill-supp"><Activity size={18} /> Whey Protein</div>
              <div className="feature-pill-supp"><Zap size={18} /> Boosts Immunity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplementsSpotlight;
