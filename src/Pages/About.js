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

  const certificates = [
    {
      id: 1,
      title: "Introduction to Figma",
      issuer: "Simplilearn SkillUp",
      date: "Oct 2026",
      pdf: "/Introduction_to_Figma.pdf"
    },
    {
      id: 2,
      title: "Design Thinking for Beginners",
      issuer: "Simplilearn SkillUp",
      date: "Oct 2026",
      pdf: "/Design_Thinking_for_Beginners.pdf"
    },
    {
      id: 3,
      title: "Introduction to Adobe XD",
      issuer: "Simplilearn SkillUp",
      date: "Nov 2026",
      pdf: "/Introduction_to_Adobe_XD.pdf"
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

      {/* Certifications Section */}
      <div className="certificates-section" style={{
        marginTop: '70px',
        padding: '35px',
        background: 'rgba(255, 255, 255, 0.85)',
        borderRadius: '16px',
        boxShadow: '0 8px 25px rgba(0,0,0,0.06)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <span style={{ color: '#2563eb', fontWeight: '700', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Professional Credentials
          </span>
          <h3 style={{ fontSize: '24px', margin: '8px 0', color: '#1e293b' }}>
            Certifications & Training
          </h3>
          <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
            Completed via Simplilearn SkillUp
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px'
        }}>
          {certificates.map((cert) => (
            <div key={cert.id} style={{
              background: '#f8fafc',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <h4 style={{ color: '#1e293b', fontSize: '16px', margin: '0 0 8px 0' }}>{cert.title}</h4>
                <p style={{ color: '#64748b', fontSize: '13px', margin: '0 0 15px 0' }}>{cert.issuer} • {cert.date}</p>
              </div>
              <a 
                href={cert.pdf} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: '#2563eb',
                  color: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: '600',
                  textAlign: 'center',
                  transition: '0.3s'
                }}
              >
                View Certificate (PDF)
              </a>
            </div>
          ))}
        </div>
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
            Karate Coach 
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