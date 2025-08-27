import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">{portfolioData.personal.name}</h1>
        <p className="hero-subtitle">{portfolioData.personal.title}</p>
        <p className="hero-description">
          {portfolioData.personal.description}
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary" onClick={() => scrollToSection('projects')}>
            <i className="fas fa-code"></i> View My Work
          </a>
          <a href="#contact" className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
            <i className="fas fa-envelope"></i> Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
