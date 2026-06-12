import React from 'react';
import './titleBox.css';

function TitleBox({ mainTitle, subTitle }) {
  return (
    <div className="section-title-box">
      <h2>{mainTitle}</h2>
      {subTitle && <p className="section-subtitle-text">{subTitle}</p>}
    </div>
  );
}

export default TitleBox;