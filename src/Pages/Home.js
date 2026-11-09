import React from 'react';
import './Home.css';

function Home({ setActivePage }) {
  const handleNavigation = (pageName) => {
    if (setActivePage) {
      setActivePage(pageName);
    }
  };

  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text-content">
          <span className="hero-badge">
            Aspiring UI/UX Designer
          </span>
          
          <h1 className="hero-title">
            Hi, I&apos;m <span className="hero-name-highlight">Vichakshi Shashiprabha</span>
          </h1>
          
          <p className="hero-subtitle-text">
            IT Diploma Student at ITUM | UI/UX Enthusiast
          </p>
          
          <p className="hero-description">
            I specialize in crafting intuitive mobile interfaces, wireframing, and user-centered digital prototypes. Passionate about applying Human-Computer Interaction (HCI) concepts to solve real-world user interface challenges.
          </p>

          {/* Working Navigation Buttons */}
          <div className="hero-btn-group">
            <button 
              onClick={() => handleNavigation('projects')} 
              className="primary-action-btn"
            >
              View My Work
            </button>

            <button 
              onClick={() => handleNavigation('contact')} 
              className="secondary-action-btn"
            >
              Get In Touch
            </button>
          </div>

          {/* View CV Button linked to public folder */}
          <div className="cv-btn-wrapper">
            <a 
              href="/Vichakshi_Shashiprabha.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cv-download-btn"
            >
              View CV
            </a>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="hero-image-container">
          <img 
            src="/images/MyProfile.jpg" 
            alt="Vichakshi Shashiprabha" 
            className="profile-img"
          />
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="highlights-section">
        <h3 className="highlights-title">
          Core Competencies
        </h3>
        
        <div className="competencies-grid">
          <div className="competency-card">
            <h4 className="competency-heading">🎨 UI/UX Design</h4>
            <p className="competency-text">Prototyping, Mobile Layouts & Figma Wireframing</p>
          </div>
          
          <div className="competency-card">
            <h4 className="competency-heading">🎓 IT Education</h4>
            <p className="competency-text">NDT / IT Diploma - University of Moratuwa (ITUM)</p>
          </div>
          
          <div className="competency-card">
            <h4 className="competency-heading">🥋 Soft Skills</h4>
            <p className="competency-text">Leadership & Discipline from Karate Coaching</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;