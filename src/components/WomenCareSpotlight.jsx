import React from 'react';
import { HeartPulse, ShieldCheck, Activity, ThermometerSun } from 'lucide-react';
import './WomenCareSpotlight.css';

const WomenCareSpotlight = () => {
  const benefits = [
    'Stimulates normal ovarian functions',
    'Supports management of menstrual symptoms',
    'Helps with irregular menses & cramps',
    'Balances menstrual flow & hormones',
    'Regulates growth & reproductive function'
  ];

  return (
    <section className="section spotlight-women" id="goodtone">
      <div className="container">
        <div className="spotlight-grid">
          <div className="spotlight-content animate-fade-in">
            <span className="brand-tag-women">Women's Health</span>
            <h2 className="product-name-women">Good-Tone<span>™</span></h2>
            <p className="product-category">Syrup for Uterine & Menstrual Dysfunction</p>
            
            <ul className="benefits-list-women">
              {benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>

            <div className="features-row">
              <div className="feature-pill-women"><Activity size={18} /> High Bioavailability</div>
              <div className="feature-pill-women"><ShieldCheck size={18} /> Superior Tonic</div>
              <div className="feature-pill-women"><ThermometerSun size={18} /> Safe & Effective</div>
            </div>
          </div>

          <div className="spotlight-image">
            <div className="product-card-3d-women">
              <div className="product-placeholder-women">
                <span className="gt-logo">GT</span>
                <h3>Good-Tone</h3>
                <p>Uterine Tonic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomenCareSpotlight;
