import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {portfolioData.experience.map((experience, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">{experience.date}</div>
                <h3 className="timeline-title">{experience.title}</h3>
                <div className="timeline-company">{experience.company}</div>
                <div className="timeline-description">{experience.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
