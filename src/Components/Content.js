import React from 'react';
import './content.css';

function Content({ title, category, tech, description, projectImage }) {
  return (
    <div className="ui-project-card">
      {projectImage && (
        <div className="mobile-view-wrapper">
          <img src={projectImage} alt={title} className="full-mobile-screen" />
        </div>
      )}
      <div className="ui-card-details">
        <div className="ui-badge-row">
          <span className="badge-tech">{tech}</span>
          <span className="badge-cat">{category}</span>
        </div>
        <h3 className="ui-project-title">{title}</h3>
        <p className="ui-project-desc">{description}</p>
      </div>
    </div>
  );
}

export default Content;