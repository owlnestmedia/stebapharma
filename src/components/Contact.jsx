import React from 'react';
import { User, Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section contact-detailed" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid-detailed">
          <div className="contact-info-card">
            <div className="info-header">
              <MapPin size={32} />
              <h3>Corporate Office</h3>
            </div>
            <p>No. 217, Reliable Prestige No. 1, Achole Road,<br />Nallasopara (East), Palghar 401209</p>
          </div>

          <div className="contact-info-card highlighted">
            <div className="info-header">
              <User size={32} />
              <h3>Marketing Enquiries</h3>
            </div>
            <div className="contact-person">
              <h4>Arun V. Shukla</h4>
              <p>Marketing Head</p>
              <div className="contact-row">
                <Phone size={18} />
                <span>+91 91754 66237</span>
              </div>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="info-header">
              <Mail size={32} />
              <h3>Support</h3>
            </div>
            <div className="contact-row">
              <Phone size={18} />
              <span>Care: 84466 60567</span>
            </div>
            <div className="contact-row">
              <Mail size={18} />
              <span>stabapharma@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
