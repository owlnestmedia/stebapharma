import React from 'react';
import { ShieldCheck, Activity, Heart, Zap, Stethoscope } from 'lucide-react';
import './DiabeticCareSpotlight.css';

const DiabeticCareSpotlight = () => {
  const benefits = [
    'Increases muscle strength and mass',
    'Potent antioxidant activity',
    'Improves lean tissue mass',
    'Supports cardiovascular & metabolic health',
    'Reduces oxidative stress & improves insulin sensitivity',
    'Ideal for recovery and general weakness'
  ];

  return (
    <section className="section spotlight-diabetic" id="prouneedsf">
      <div className="container">
        <div className="spotlight-grid reverse">
          <div className="spotlight-image">
            <div className="product-card-3d-diabetic">
              <div className="product-placeholder-diabetic">
                <span className="sf-logo">SF</span>
                <h3>Pro-Uneed SF</h3>
                <p>Sugar-Free Protein Source</p>
              </div>
            </div>
          </div>

          <div className="spotlight-content animate-fade-in">
            <span className="brand-tag-diabetic">Specialized Care</span>
            <h2 className="product-name-diabetic">Pro-Uneed SF<span>®</span></h2>
            <p className="product-category">Nutritional Management for Diabetes & Chronic Illness</p>
            
            <ul className="benefits-list-diabetic">
              {benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>

            <div className="features-row">
              <div className="feature-pill-diabetic"><ShieldCheck size={18} /> Antioxidant Rich</div>
              <div className="feature-pill-diabetic"><Activity size={18} /> Muscle Support</div>
              <div className="feature-pill-diabetic"><Heart size={18} /> Heart Healthy</div>
            </div>

            <div className="cta-box-diabetic">
              <div className="icon-group-diabetic">
                <Stethoscope size={30} />
                <span>Recommended for Convalescence & Recovery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiabeticCareSpotlight;
