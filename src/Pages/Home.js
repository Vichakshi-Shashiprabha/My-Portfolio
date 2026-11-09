import React from 'react';
import './Home.css';

function Home({ setActivePage }) {
  const handleNavigation = (pageName) => {
    if (setActivePage) {
      setActivePage(pageName);
    }
  };

  return (
    <div className="home-container" style={{ padding: '40px 20px', maxWidth: '1100px', margin: '0 auto' }}>
      
      {/* Hero Section */}
      <section className="hero-section" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        gap: '40px', 
        flexWrap: 'wrap',
        padding: '40px 0'
      }}>
        <div className="hero-text-content" style={{ flex: '1', minWidth: '300px' }}>
          <span style={{ 
            background: '#e0e7ff', 
            color: '#4338ca', 
            padding: '6px 14px', 
            borderRadius: '20px', 
            fontSize: '14px', 
            fontWeight: '600' 
          }}>
            Aspiring UI/UX Designer
          </span>
          
          <h1 style={{ fontSize: '38px', color: '#1e293b', margin: '15px 0 10px 0', lineHeight: '1.2' }}>
            Hi, I&apos;m <span style={{ color: '#2563eb' }}>Vichakshi Shashiprabha</span>
          </h1>
          
          <p style={{ fontSize: '18px', color: '#64748b', fontWeight: '500', marginBottom: '20px' }}>
            IT Diploma Student at ITUM | UI/UX Enthusiast
          </p>
          
          <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', marginBottom: '25px' }}>
            I specialize in crafting intuitive mobile interfaces, wireframing, and user-centered digital prototypes. Passionate about applying Human-Computer Interaction (HCI) concepts to solve real-world user interface challenges.
          </p>

          {/* Working Navigation Buttons */}
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <button 
              onClick={() => handleNavigation('projects')} 
              style={{ 
                background: '#2563eb', 
                color: '#ffffff', 
                padding: '12px 24px', 
                borderRadius: '8px', 
                border: 'none',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: '0.3s'
              }}
            >
              View My Work
            </button>

            <button 
              onClick={() => handleNavigation('contact')} 
              style={{ 
                background: 'transparent',
                border: '2px solid #2563eb', 
                color: '#2563eb', 
                padding: '10px 22px', 
                borderRadius: '8px', 
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: '0.3s'
              }}
            >
              Get In Touch
            </button>
          </div>

          {/* View CV Button linked to public folder */}
          <div>
            <a 
              href="/Vichakshi_Shashiprabha.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                display: 'inline-block',
                background: '#047857',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '600',
                transition: '0.3s'
              }}
            >
              View CV
            </a>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="hero-image-container" style={{ flex: '1', display: 'flex', justifyContent: 'center', minWidth: '250px' }}>
          <img 
            src="/images/MyProfile.jpg" 
            alt="Vichakshi Shashiprabha" 
            style={{ 
              width: '280px', 
              height: '280px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)', 
              border: '4px solid #fff' 
            }} 
          />
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="highlights-section" style={{ 
        marginTop: '40px', 
        padding: '30px', 
        background: 'rgba(255, 255, 255, 0.8)', 
        borderRadius: '16px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
      }}>
        <h3 style={{ textAlign: 'center', fontSize: '22px', color: '#1e293b', marginBottom: '25px' }}>
          Core Competencies
        </h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '20px' 
        }}>
          <div style={{ padding: '15px', background: '#f8fafc', borderRadius: '10px', textAlign: 'center' }}>
            <h4 style={{ color: '#2563eb', margin: '0 0 8px 0' }}>🎨 UI/UX Design</h4>
            <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Prototyping, Mobile Layouts & Figma Wireframing</p>
          </div>
          
          <div style={{ padding: '15px', background: '#f8fafc', borderRadius: '10px', textAlign: 'center' }}>
            <h4 style={{ color: '#2563eb', margin: '0 0 8px 0' }}>🎓 IT Education</h4>
            <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>NDT / IT Diploma - University of Moratuwa (ITUM)</p>
          </div>
          
          <div style={{ padding: '15px', background: '#f8fafc', borderRadius: '10px', textAlign: 'center' }}>
            <h4 style={{ color: '#2563eb', margin: '0 0 8px 0' }}>🥋 Soft Skills</h4>
            <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Leadership & Discipline from Karate Coaching</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;