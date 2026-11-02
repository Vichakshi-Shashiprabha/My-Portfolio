import React from 'react';
import Content from '../Components/Content';
import './About.css';

function About() {
  const figmaInterfaces = [
    {
      id: 1,
      title: "1. Authentication Gateway",
      category: "Group Project",
      tech: "Figma UI / UX",
      description: "Designed a clean, secure login interface featuring validated input feedback constraints for our ITUM group assessment.",
      image: "/images/Login.jpg"
    },
    {
      id: 2,
      title: "2. Management Dashboard",
      category: "Group Project",
      tech: "Information Architecture",
      description: "Visualized complex relational metrics cleanly onto a central responsive tracking panel layout.",
      image: "/images/Dashboard.jpg"
    },
    {
      id: 3,
      title: "3. My Groups Portal",
      category: "Group Project",
      tech: "Visual Hierarchy",
      description: "Constructed user interaction spaces optimized for rapid collaborative workspace updates and dynamic filtering.",
      image: "/images/MyGroups.jpg"
    },
    {
      id: 4,
      title: "4. Transaction Ledger",
      category: "Group Project",
      tech: "HCI Design Rules",
      description: "Devised explicit financial status layouts allowing clear accessibility mapping and feedback verification flows.",
      image: "/images/Payments.jpg"
    },
    {
      id: 5,
      title: "5. User Account Control",
      category: "Group Project",
      tech: "Mobile Ergonomics",
      description: "Polished intuitive profile preference nodes focusing on simple interactive system state discovery",
      image: "/images/Profile.jpg"
    }
  ];

  return (
    <section className="projects-display-wrapper">
      <div className="section-header-box">
        <h2>Mobile App Interfaces</h2>
        <p>High-fidelity system prototype layouts designed for our ITUM Group Project.</p>
      </div>
      
      <div className="interfaces-grid-layout">
        {figmaInterfaces.map((item) => (
          <Content
            key={item.id}
            title={item.title}
            category={item.category}
            tech={item.tech}
            description={item.description}
            projectImage={item.image}
          />
        ))}
      </div>

      {/* Karate Coaching Section */}
      <div className="extracurricular-section" style={{ 
        marginTop: '70px', 
        padding: '35px', 
        background: 'rgba(255, 255, 255, 0.85)', 
        borderRadius: '16px', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '30px', 
        flexWrap: 'wrap',
        boxShadow: '0 8px 25px rgba(0,0,0,0.06)'
      }}>
        <div style={{ flex: '0 0 280px', margin: '0 auto', textAlign: 'center' }}>
          <img 
            src="/images/karate.png" 
            alt="Karate Coaching" 
            style={{ 
              width: '100%', 
              maxWidth: '260px', 
              height: 'auto',
              borderRadius: '12px', 
              objectFit: 'cover', 
              boxShadow: '0 6px 15px rgba(0,0,0,0.1)'
            }} 
          />
        </div>
        <div style={{ flex: '1', minWidth: '280px' }}>
          <span style={{ color: '#2563eb', fontWeight: '700', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Leadership & Discipline
          </span>
          <h3 style={{ fontSize: '22px', margin: '8px 0', color: '#1e293b' }}>
            Karate Coach & Assistant Instructor
          </h3>
          <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '14px', margin: 0 }}>
            Alongside my IT studies at ITUM, I serve as a licensed Karate Coach at Ilma International Girls&apos; School and as an Assistant Coach at the Sri Lanka Genseiryu Karate Do Federation (certified by NISS). This role has honed my leadership, time-management, and high-level discipline, translating into structured focus for UI/UX engineering.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;