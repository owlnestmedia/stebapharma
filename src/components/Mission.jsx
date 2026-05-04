import React from 'react';
import { Target, Users, ShieldCheck, Heart } from 'lucide-react';
import './Mission.css';

const Mission = () => {
  const pillars = [
    { title: 'Reaching Patients', desc: 'Across India', icon: <Users /> },
    { title: 'Quality Medicine', desc: 'For Better Health', icon: <ShieldCheck /> },
    { title: 'Healthcare Needs', desc: 'Focused Approach', icon: <Target /> },
    { title: 'Diverse Range', desc: 'Extensive Portfolio', icon: <Heart /> },
  ];

  return (
    <section className="section mission" id="about">
      <div className="container">
        <div className="mission-box animate-fade-in">
          <span className="badge">MISSION</span>
          <h2 className="mission-title">
            "We aim to enhance the quality life of an individual with our product line along with constant study and development process."
          </h2>
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <div key={index} className="pillar-item">
              <div className="pillar-icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
