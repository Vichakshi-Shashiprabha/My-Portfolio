import React from 'react';
import './Home.css';

function Home({setActivePage}) {
  return (
    <section className="home-hero-section">
      <div className="hero-background-shapes">
        <div className="shape bubble-one"></div>
        <div className="shape bubble-two"></div>
      </div>

      <div className="hero-text-container">
        <span className="hero-welcome-tag">Hello, Welcome to My Portfolio</span>
        <h1 className="hero-main-title">
          Crafting Digital Interfaces as an <span className="highlight-text">IT Student</span>
        </h1>

        <p className="hero-subtitle">
          I am currently a 2nd-year IT Diploma student at ITUM, University of Moratuwa. 
          While focusing on core technology courses, my true passion lies in bridging software system architectures 
          with clean, human-centered UI/UX layouts.
        </p>

        <div className="hero-action-buttons">
            <button className="primary-cta-btn" onClick={() => setActivePage('projects')}>
              Explore My Designs
              </button>

        </div>
      </div>
    </section>
  );
}

export default Home;