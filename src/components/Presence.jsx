import React from 'react';
import { MapPin, Globe } from 'lucide-react';
import './Presence.css';

const Presence = () => {
  return (
    <section className="section presence" id="presence">
      <div className="container presence-container">
        <div className="presence-grid">
          <div className="presence-content">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Global Presence</h2>
            <p className="presence-text">
              Based in the pharmaceutical hub of Mumbai, Steba Pharma PVT LTD reaches patients across the nation and exports breakthrough formulations to global markets.
            </p>
            <div className="location-card">
              <MapPin className="pin-icon" />
              <div>
                <h4>Head Office</h4>
                <p>Mumbai, India</p>
              </div>
            </div>
            <h3 className="slogan-text">"Enhancing the Quality of Life"</h3>
          </div>
          <div className="presence-visual">
            <div className="globe-wrapper">
              <Globe size={300} strokeWidth={1} className="globe-icon" />
              <div className="marker marker-mumbai">
                <div className="dot"></div>
                <span className="label">Mumbai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presence;
