import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: portfolioData.personal.github,
      icon: 'fab fa-github'
    },
    {
      name: 'LinkedIn',
      url: portfolioData.personal.linkedin,
      icon: 'fab fa-linkedin'
    },
    {
      name: 'Twitter',
      url: portfolioData.personal.twitter,
      icon: 'fab fa-twitter'
    },
    {
      name: 'Medium',
      url: portfolioData.personal.medium,
      icon: 'fab fa-medium'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
        <p>&copy; {currentYear} {portfolioData.personal.name}. All rights reserved.</p>
        <p>Built with React and ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
