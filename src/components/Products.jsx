import React from 'react';
import { Pill, Activity, FlaskConical, Stethoscope, HeartPulse, Microscope } from 'lucide-react';
import './Products.css';

const Products = () => {
  const categories = [
    { title: 'Antibiotics', icon: <Pill size={40} />, count: 'Comprehensive Range', color: '#004a99' },
    { title: 'Orthopedic', icon: <Activity size={40} />, count: 'Bone & Joint Care', color: '#00a0e3' },
    { title: 'Pain Management', icon: <HeartPulse size={40} />, count: 'Effective Relief', color: '#f39200' },
    { title: 'Cardiology', icon: <Activity size={40} />, count: 'Heart Wellness', color: '#e31e24' },
  ];

  return (
    <section className="section products" id="products">
      <div className="container">
        <h2 className="section-title">Our Therapeutic Areas</h2>
        <p className="section-subtitle">Diverse healthcare solutions across multiple therapeutic segments.</p>
        
        <div className="products-grid">
          {categories.map((cat, index) => (
            <div key={index} className="product-card">
              <div className="card-icon" style={{ color: cat.color }}>
                {cat.icon}
              </div>
              <h3 className="card-title">{cat.title}</h3>
              <p className="card-count">{cat.count}</p>
              <button className="card-link">View Portfolio →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
