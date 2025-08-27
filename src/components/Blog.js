import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Blog = () => {
  return (
    <section className="blog section" id="blog">
      <div className="container">
        <h2 className="section-title">Latest Blog Posts</h2>
        <div className="blog-grid">
          {portfolioData.blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-content">
                <div className="blog-date">{post.date} • {post.readTime}</div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href={post.link} className="blog-link" target="_blank" rel="noopener noreferrer">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
