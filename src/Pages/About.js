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
      image: "/images/My Groups.jpg"
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
      description: "Polished intuitive profile preference nodes focusing on simple interactive system state discovery.",
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
    </section>
  );
}

export default About;