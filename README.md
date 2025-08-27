# Afjal Ahamad - Portfolio Website

A modern, responsive portfolio website built with React for Afjal Ahamad, a Senior Data & AI Engineer. This portfolio showcases professional experience, projects, skills, and blog posts in a clean, modular design.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Modular Architecture**: Easy to extend and maintain
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized performance with React
- **Contact Form**: Functional contact form (ready for backend integration)
- **Smooth Scrolling**: Smooth navigation between sections

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: CSS3 with CSS Variables
- **Icons**: Font Awesome 6
- **Animations**: CSS Animations
- **Build Tool**: Create React App

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation component
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── Skills.js       # Skills section
│   ├── Experience.js   # Experience timeline
│   ├── Projects.js     # Projects showcase
│   ├── Blog.js         # Blog posts
│   ├── Contact.js      # Contact form
│   └── Footer.js       # Footer component
├── data/
│   └── portfolioData.js # Centralized data management
├── App.js              # Main app component
├── index.js            # App entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd afjal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

## 📝 How to Extend the Portfolio

### Adding New Projects

To add a new project, simply add it to the `projects` array in `src/data/portfolioData.js`:

```javascript
// In src/data/portfolioData.js
projects: [
  // ... existing projects
  {
    id: 7, // Auto-increment this
    title: 'Your New Project',
    description: 'Description of your project',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project',
    live: 'https://your-project.com',
    icon: 'fas fa-rocket' // Font Awesome icon class
  }
]
```

### Adding New Blog Posts

Add new blog posts to the `blogPosts` array:

```javascript
// In src/data/portfolioData.js
blogPosts: [
  // ... existing posts
  {
    id: 7, // Auto-increment this
    date: 'April 1, 2024',
    title: 'Your New Blog Post',
    excerpt: 'Brief description of your blog post',
    link: 'https://your-blog.com/post',
    readTime: '5 min read'
  }
]
```

### Adding New Skills

Add new skills to existing categories or create new categories:

```javascript
// In src/data/portfolioData.js
skills: [
  // ... existing skill categories
  {
    title: 'New Category',
    icon: 'fas fa-star',
    skills: ['Skill 1', 'Skill 2', 'Skill 3']
  }
]
```

### Adding New Experience

Add new work experience to the `experience` array:

```javascript
// In src/data/portfolioData.js
experience: [
  // ... existing experience
  {
    date: 'Jan 2024 - Present',
    title: 'New Job Title',
    company: 'Company Name, Location',
    description: 'Description of your role and achievements'
  }
]
```

### Using Helper Functions

The portfolio includes helper functions for easy content management:

```javascript
import { addProject, addBlogPost, addSkill, addExperience } from './src/data/portfolioData';

// Add a new project
addProject({
  title: 'New Project',
  description: 'Project description',
  technologies: ['React', 'Node.js'],
  github: 'https://github.com/project',
  live: 'https://project.com',
  icon: 'fas fa-code'
});

// Add a new blog post
addBlogPost({
  date: 'April 1, 2024',
  title: 'New Blog Post',
  excerpt: 'Post excerpt',
  link: 'https://blog.com/post',
  readTime: '5 min read'
});

// Add a new skill to existing category
addSkill('Programming', 'New Language');

// Add new experience
addExperience({
  date: 'Jan 2024 - Present',
  title: 'New Role',
  company: 'Company',
  description: 'Role description'
});
```

### Updating Personal Information

Update your personal information in the `personal` object:

```javascript
// In src/data/portfolioData.js
personal: {
  name: 'Your Name',
  title: 'Your Title',
  description: 'Your description',
  email: 'your.email@example.com',
  phone: '+1 234 567 8900',
  location: 'Your Location',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  twitter: 'https://twitter.com/yourusername',
  medium: 'https://medium.com/@yourusername',
  profileImage: 'path/to/your/image.jpg'
}
```

### Customizing Styles

The portfolio uses CSS variables for easy theming. Update the variables in `src/index.css`:

```css
:root {
  --primary-color: #2c3e50;    /* Main brand color */
  --secondary-color: #3498db;  /* Accent color */
  --accent-color: #e74c3c;     /* Call-to-action color */
  --text-color: #333;          /* Text color */
  --light-bg: #f8f9fa;         /* Light background */
  --white: #ffffff;            /* White color */
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Box shadow */
  --border-radius: 8px;        /* Border radius */
}
```

## 🎨 Customization Options

### Changing Colors
Update the CSS variables in `src/index.css` to match your brand colors.

### Adding New Sections
Create new components in the `src/components/` directory and import them in `App.js`.

### Modifying Layout
The layout is responsive and uses CSS Grid and Flexbox. Modify the CSS classes in `src/index.css`.

### Adding Animations
The portfolio includes CSS animations. Add new animations in the `src/index.css` file.

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first design approach
- Breakpoints for tablet and desktop
- Touch-friendly navigation
- Optimized images and content

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for any environment-specific configurations:

```env
REACT_APP_GA_TRACKING_ID=your-google-analytics-id
REACT_APP_CONTACT_FORM_ENDPOINT=your-contact-form-endpoint
```

### Contact Form Integration
The contact form is ready for backend integration. Update the `handleSubmit` function in `src/components/Contact.js` to send data to your backend.

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

### GitHub Pages
1. Add `"homepage": "https://yourusername.github.io/repository-name"` to `package.json`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Run: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue on GitHub or contact me directly.

## 🙏 Acknowledgments

- Font Awesome for icons
- Create React App for the development environment
- The React community for inspiration and best practices

---

**Built with ❤️ by Afjal Ahamad**
