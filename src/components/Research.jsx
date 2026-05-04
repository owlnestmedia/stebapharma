import React from 'react';
import './Research.css';

const Research = () => {
  return (
    <section className="section research" id="r&d">
      <div className="container research-container">
        <div className="research-grid">
          <div className="research-image">
            <img src="/images/research-bg.png" alt="Research & Development" />
            <div className="image-overlay">
              <span>Scientific Excellence</span>
            </div>
          </div>
          <div className="research-content">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Study & Development</h2>
            <p className="research-text">
              Our commitment to constant study and development allows us to create breakthrough allopathic formulations that enhance the quality of life for our patients.
            </p>
            <div className="features">
              <div className="feature-item">
                <h4>Continuous Innovation</h4>
                <p>Focused on refining and developing effective healthcare solutions.</p>
              </div>
              <div className="feature-item">
                <h4>Quality Standards</h4>
                <p>Adhering to international quality standards for every formulation.</p>
              </div>
            </div>
            <button className="btn btn-primary">Learn More About Innovation</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
