import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-display-container">
      <div className="contact-glass-card">
        {/* Status Badge එක */}
        <div style={{ display: 'inline-block', background: 'rgba(37, 99, 235, 0.1)', color: '#2563eb', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '600', marginBottom: '15px' }}>
          🟢 Available for UI/UX Internships
        </div>

        <h2 className="contact-main-heading">Let's Connect</h2>
        <p className="contact-sub-paragraph">
          I am currently seeking UI/UX design internship opportunities to apply the layout concepts 
          and human-computer interaction frameworks learned during my IT Diploma journey.
        </p>
        
        <div className="contact-details-box">
          <div className="contact-detail-row">
            <span className="detail-label">📧 Email:</span>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vichakshi245@gmail.com" 
              target="_blank" 
              rel="noreferrer" 
              className="detail-value contact-link"
            >
              vichakshi245@gmail.com
            </a>
          </div>

          <div className="contact-detail-row">
            <span className="detail-label">💼 LinkedIn:</span>
            <a 
              href="https://www.linkedin.com/in/vichakshi-shashiprabha-59a22329b/" 
              target="_blank" 
              rel="noreferrer" 
              className="detail-value contact-link"
            >
              Vichakshi Shashiprabha
            </a>
          </div>
          
          <div className="contact-detail-row">
            <span className="detail-label">💻 GitHub:</span>
            <a 
              href="https://github.com/Vichakshi-Shashiprabha" 
              target="_blank" 
              rel="noreferrer" 
              className="detail-value contact-link"
            >
              Vichakshi-Shashiprabha
            </a>
          </div>
          
          <div className="contact-detail-row">
            <span className="detail-label">🏛️ Institute:</span>
            <a 
              href="https://itum.mrt.ac.lk" 
              target="_blank" 
              rel="noreferrer" 
              className="detail-value contact-link"
            >
              Institute of Technology, University of Moratuwa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;