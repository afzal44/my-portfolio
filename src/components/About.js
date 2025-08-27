import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img 
              src={portfolioData.personal.profileImage} 
              alt={portfolioData.personal.name} 
              className="profile-img"
            />
          </div>
          <div className="about-text">
            {portfolioData.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="stats">
          {portfolioData.about.stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
