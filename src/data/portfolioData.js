// Portfolio Data - Easy to update and extend
export const portfolioData = {
  // Personal Information
  personal: {
    name: 'Afjal Ahamad',
    title: 'Senior Data & AI Engineer',
    description: 'Transforming data into intelligent solutions with 6+ years of expertise in cloud engineering, machine learning, and enterprise-scale data systems. Specialized in AWS, Python, and AI/ML technologies.',
    email: 'afjal.ahamad44@gmail.com',
    phone: '+91 9897564110',
    location: 'Saharanpur, UP, India',
    linkedin: 'https://linkedin.com/in/afjal-ahamad44',
    github: 'https://github.com/afzal44',
    twitter: 'https://twitter.com/afjal_ahamad',
    wcblog: 'https://wcblog.in/author/afjal-ahamad1994gmail-com/',
    profileImage: 'images/profile.png' // Ensure this path is correct
  },

  // About Section
  about: {
    paragraphs: [
      "I'm a passionate Senior Data & AI Engineer with over 6 years of experience in designing and implementing scalable data solutions that drive business value. My expertise spans across cloud platforms, big data technologies, and artificial intelligence.",
      "Currently working at Systems Plus Technologies, I lead the development of automated ETL workflows processing terabytes of data, optimize real-time data pipelines, and integrate AI/ML capabilities to solve complex business challenges.",
      "I hold multiple AWS certifications and have a Master's degree in Computer Applications. I'm passionate about staying at the forefront of technology and continuously learning new skills to deliver innovative solutions."
    ],
    stats: [
      { number: '6+', label: 'Years Experience' },
      { number: '5+', label: 'Projects Completed' },
      { number: '3', label: 'AWS Certifications' },
      { number: '1TB+', label: 'Data Processed Monthly' }
    ]
  },

  // Skills Section
  skills: [
    {
      title: 'Cloud Platforms',
      icon: 'fas fa-cloud',
      skills: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Lambda', 'S3', 'SageMaker', 'Redshift', 'DynamoDB']
    },
    {
      title: 'Programming',
      icon: 'fas fa-code',
      skills: ['Python', 'SQL', 'JavaScript', 'Node.js', 'Pandas', 'NumPy', 'Boto3']
    },
    {
      title: 'Big Data & Analytics',
      icon: 'fas fa-database',
      skills: ['Apache Spark', 'Kafka', 'Hadoop', 'Databricks', 'Snowflake', 'Apache Airflow']
    },
    {
      title: 'AI/ML Technologies',
      icon: 'fas fa-robot',
      skills: ['AWS SageMaker', 'TensorFlow', 'scikit-learn', 'Textract', 'Rekognition', 'Bedrock']
    },
    {
      title: 'Databases',
      icon: 'fas fa-database',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Amazon RDS']
    },
    {
      title: 'DevOps & Tools',
      icon: 'fas fa-tools',
      skills: ['Docker', 'Jenkins', 'Terraform', 'CloudFormation', 'Git', 'GitHub']
    }
  ],

  // Experience Section
  experience: [
    {
      date: 'Feb 2021 - Present',
      title: 'Senior AWS Data & AI Engineer',
      company: 'Systems Plus Technologies, Pune',
      description: 'Leading development of automated ETL workflows processing 1TB+ data monthly. Optimized data pipelines achieving 30% performance improvement and 25% cost reduction. Integrated AI/ML capabilities using AWS SageMaker and Textract.'
    },
    {
      date: 'Dec 2020 - Feb 2021',
      title: 'AWS Cloud Engineer',
      company: 'Wen Energy Systems, Gurugram',
      description: 'Maintained AWS infrastructure and implemented CI/CD pipelines, reducing deployment time by 50%. Automated infrastructure provisioning using CloudFormation and optimized cloud resource utilization.'
    },
    {
      date: 'Nov 2019 - Dec 2020',
      title: 'AWS Associate Engineer',
      company: 'Dataflow Service India, Noida',
      description: 'Architected cloud-native applications ensuring AWS best practices. Built large-scale document processing solution using AWS Textract, improving automation and text extraction accuracy.'
    }
  ],

  // Projects Section - Easy to add new projects
  projects: [
    {
      id: 1,
      title: 'Automated ETL Pipeline',
      description: 'Built a scalable ETL pipeline processing 1TB+ of data monthly using AWS Glue, Lambda, and Redshift. Implemented data quality checks and automated monitoring.',
      technologies: ['AWS Glue', 'Lambda', 'Redshift', 'Python', 'Apache Airflow'],
      github: 'https://github.com/afjal/etl-pipeline',
      live: 'https://demo.etl-pipeline.com',
      icon: 'fas fa-database'
    },
    {
      id: 2,
      title: 'AI-Powered Document Processing',
      description: 'Developed an intelligent document processing system using AWS Textract and SageMaker, achieving 95% accuracy in text extraction and classification.',
      technologies: ['AWS Textract', 'SageMaker', 'Python', 'React', 'DynamoDB'],
      github: 'https://github.com/afjal/doc-processor',
      live: 'https://doc-processor.demo.com',
      icon: 'fas fa-file-alt'
    },
    {
      id: 3,
      title: 'Real-time Analytics Dashboard',
      description: 'Created a real-time analytics dashboard using Apache Kafka, Spark Streaming, and React, providing insights on streaming data with sub-second latency.',
      technologies: ['Apache Kafka', 'Spark Streaming', 'React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/afjal/analytics-dashboard',
      live: 'https://analytics.demo.com',
      icon: 'fas fa-chart-line'
    },
    {
      id: 4,
      title: 'ML Model Deployment Platform',
      description: 'Built a platform for deploying and managing ML models using AWS SageMaker, Docker, and Kubernetes, supporting multiple model versions and A/B testing.',
      technologies: ['AWS SageMaker', 'Docker', 'Kubernetes', 'Python', 'Terraform'],
      github: 'https://github.com/afjal/ml-platform',
      live: 'https://ml-platform.demo.com',
      icon: 'fas fa-brain'
    },
    {
      id: 5,
      title: 'Cloud Cost Optimization Tool',
      description: 'Developed a tool to analyze and optimize AWS costs using AWS Cost Explorer API, providing recommendations for resource optimization.',
      technologies: ['AWS Cost Explorer', 'Python', 'React', 'Lambda', 'CloudWatch'],
      github: 'https://github.com/afjal/cost-optimizer',
      live: 'https://cost-optimizer.demo.com',
      icon: 'fas fa-dollar-sign'
    },
    {
      id: 6,
      title: 'Data Lake Architecture',
      description: 'Designed and implemented a data lake architecture using AWS S3, Glue, and Athena, enabling self-service analytics for business users.',
      technologies: ['AWS S3', 'Glue', 'Athena', 'Lake Formation', 'QuickSight'],
      github: 'https://github.com/afjal/data-lake',
      live: 'https://data-lake.demo.com',
      icon: 'fas fa-water'
    }
  ],

  // Blog Section - Easy to add new blog posts
  blogPosts: [
    {
      id: 1,
      date: 'March 15, 2024',
      title: 'Building Scalable Data Pipelines with AWS Serverless Services',
      excerpt: 'Learn how to design and implement scalable ETL pipelines using AWS Glue, Lambda, and Redshift for processing large volumes of data efficiently.',
      link: 'https://www.qloudx.com/building-scalable-data-pipelines-with-aws-serverless-services-part-1/',
      readTime: '8 min read'
    },
    {
      id: 2,
      date: 'February 28, 2024',
      title: 'Empowering Document Analysis Unveiling AWS Textract, Comprehend, and S3 Integration',
      excerpt: 'We’ll start by putting your data on S3, then use Textract to pull out all the text, and finally, use Comprehend to find the main bits.',
      link: 'https://www.qloudx.com/empowering-document-analysis-unveiling-aws-textract-comprehend-and-s3-integration/',
      readTime: '12 min read'
    },
    {
      id: 3,
      date: 'January 20, 2024',
      title: 'Optimizing AWS Costs for Data Engineering',
      excerpt: 'Discover strategies to optimize AWS costs for data engineering workloads, including resource right-sizing, reserved instances, and cost monitoring.',
      link: 'https://blog.example.com/aws-cost-optimization',
      readTime: '10 min read'
    },
    {
      id: 4,
      date: 'December 10, 2023',
      title: 'Building a Modern Analytics Platform with Data Vault 2.0 on Azure',
      excerpt: 'Data Vault 2.0 is not just a concept; it’s a game-changer in data warehousing and information delivery. It combines three key pillars – methodology, architecture, and modeling – providing the essential components needed to create a modern analytics solution.',
      link: 'https://www.qloudx.com/unlocking-the-power-of-data-building-a-modern-analytics-platform-with-data-vault-2-0-on-azure/',
      readTime: '15 min read'
    },
    {
      id: 5,
      date: 'February 7, 2025',
      title: 'Structured vs. Unstructured Data: Key Differences and Use Cases',
      excerpt: 'In this blog, we’ll explore the differences between structured and unstructured data, their advantages, challenges, use cases, and how businesses can effectively manage both.',
      link: 'https://wcblog.in/structured-vs-unstructured-data-guide/',
      readTime: '7 min read'
    },
    {
      id: 6,
      date: 'October 15, 2023',
      title: 'Unlocking Document Processing at Scale with Amazon Textract: A High-Level Machine Learning Service',
      excerpt: 'We’ll then explore how Amazon Textract can help address these challenges, followed by a high-level overview of its architecture and key features.',
      link: 'https://www.qloudx.com/unlocking-document-processing-at-scale-with-amazon-textract-a-high-level-machine-learning-service-part-1/',
      readTime: '11 min read'
    }
  ]
};

// Helper function to add new projects
export const addProject = (newProject) => {
  const project = {
    id: portfolioData.projects.length + 1,
    ...newProject
  };
  portfolioData.projects.push(project);
  return project;
};

// Helper function to add new blog posts
export const addBlogPost = (newPost) => {
  const post = {
    id: portfolioData.blogPosts.length + 1,
    ...newPost
  };
  portfolioData.blogPosts.push(post);
  return post;
};

// Helper function to add new skills
export const addSkill = (categoryTitle, newSkill) => {
  const category = portfolioData.skills.find(skill => skill.title === categoryTitle);
  if (category) {
    category.skills.push(newSkill);
  }
  return category;
};

// Helper function to add new experience
export const addExperience = (newExperience) => {
  portfolioData.experience.push(newExperience);
  return newExperience;
};
