import { Service, Project, Skill, Certification, SocialLink, BlogPost } from './types';

export const services: Service[] = [
  {
    id: 'ai-ml',
    title: 'Machine Learning & AI Consultation',
    description: 'Custom AI/ML solutions, model development, data analysis, and intelligent automation to solve complex business challenges.',
    icon: 'brain',
    features: [
      'Custom ML Model Development',
      'Data Analysis & Insights',
      'AI Strategy Consulting'
    ],
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    id: 'devops',
    title: 'DevOps CI/CD Pipeline Setup',
    description: 'Streamline your development workflow with automated CI/CD pipelines, containerization, and cloud infrastructure.',
    icon: 'cogs',
    features: [
      'CI/CD Pipeline Implementation',
      'Docker & Kubernetes Setup',
      'Cloud Infrastructure Management'
    ],
    gradient: 'from-green-500 to-teal-600'
  },
  {
    id: 'web-dev',
    title: 'Web Development & Website Creation',
    description: 'Professional websites and web applications using modern technologies, including WordPress and Wix solutions.',
    icon: 'code',
    features: [
      'React/Next.js Development',
      'WordPress Website Development',
      'Wix Website Design & Setup'
    ],
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    id: 'api-integration',
    title: 'API Integrations & Automation',
    description: 'Seamless third-party integrations, workflow automation, and custom API development to enhance productivity.',
    icon: 'plug',
    features: [
      'Third-party API Integration',
      'Workflow Automation',
      'Custom API Development'
    ],
    gradient: 'from-orange-500 to-red-600'
  },
  {
    id: 'consulting',
    title: 'Business Ideas & Feature Consulting',
    description: 'Help entrepreneurs and co-founders develop app ideas, define web features, and create practical tech solutions for their business.',
    icon: 'chart-line',
    features: [
      'App Ideas for Co-founders',
      'Web Features Planning',
      'Business Tech Solutions'
    ],
    gradient: 'from-indigo-500 to-purple-600'
  },
  {
    id: 'startup-ideas',
    title: 'Startup Ideas & MVP Planning',
    description: 'Brainstorm innovative startup concepts, validate business ideas, and create roadmaps for minimum viable products.',
    icon: 'lightbulb',
    features: [
      'Startup Concept Development',
      'Market Research & Validation',
      'MVP Feature Planning'
    ],
    gradient: 'from-yellow-500 to-orange-600'
  }
];

export const projects: Project[] = [
  {
    id: 'cloud-infrastructure-automation',
    title: 'Cloud Infrastructure Automation with Terraform & AWS',
    description: 'Automated AWS cloud infrastructure deployment using Terraform, managing EC2 instances, VPCs, Load Balancers, S3 buckets and IAM policies, reducing deployment time significantly.',
    technologies: ['Terraform', 'AWS', 'EC2', 'VPC', 'S3', 'IAM'],
    image: '/api/placeholder/400/200',
    gradient: 'from-blue-400 to-purple-500'
  },
  {
    id: 'organic-fruit-app',
    title: 'Organic Fruit Full Stack Development',
    description: 'Full-stack web application with React JS frontend and Node JS backend, implementing RESTful APIs, user authentication, and MongoDB database management.',
    technologies: ['React JS', 'Node JS', 'Express', 'MongoDB', 'REST API'],
    image: '/api/placeholder/400/200',
    gradient: 'from-green-400 to-blue-500'
  },
  {
    id: 'task-management-api',
    title: 'Backend for Task Management System API',
    description: 'FastAPI-based backend system for managing tasks, projects, and deadlines with OAuth2 authentication and JWT tokens, deployed on AWS EC2 using Docker.',
    technologies: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'OAuth2', 'Docker', 'AWS EC2'],
    image: '/api/placeholder/400/200',
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    id: 'powerbi-dashboard',
    title: 'Data Visualization Dashboard with Power BI',
    description: 'Interactive Power BI dashboard for real-time analytics on cloud and DevOps operations, providing insights into resource utilization and enabling informed decision-making.',
    technologies: ['Power BI', 'Data Analytics', 'Cloud Operations', 'DevOps Monitoring'],
    image: '/api/placeholder/400/200',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    id: 'ml-model-deployment',
    title: 'Machine Learning Model Deployment with Flask & AWS',
    description: 'Breast cancer prediction model deployed using Flask backend on AWS EC2, with automated deployment pipeline for scalable ML applications.',
    technologies: ['Python', 'Flask', 'Machine Learning', 'AWS EC2', 'Docker', 'Scikit-learn'],
    image: '/api/placeholder/400/200',
    gradient: 'from-pink-400 to-red-500'
  }
];

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'Java', 'C/C++', 'JavaScript', 'Bash/Shell'],
    color: 'blue'
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS (EC2, S3, IAM, VPC)', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'GitLab', 'CI/CD'],
    color: 'purple'
  },
  {
    category: 'AI/ML & Data Science',
    skills: ['Scikit-learn', 'PyTorch', 'Keras', 'Pandas', 'NumPy', 'Matplotlib', 'Power BI', 'Tableau'],
    color: 'green'
  },
  {
    category: 'Web Development',
    skills: ['React JS', 'Node JS', 'Express', 'FastAPI', 'REST APIs', 'MongoDB', 'PostgreSQL'],
    color: 'orange'
  },
  {
    category: 'Infrastructure & Monitoring',
    skills: ['Ansible', 'Nagios', 'Prometheus', 'Grafana', 'VMware', 'Linux Administration'],
    color: 'red'
  },
  {
    category: 'Development Tools',
    skills: ['Git', 'VS Code', 'Jupyter', 'PyCharm', 'Postman', 'Jira', 'Agile Methodology'],
    color: 'indigo'
  }
];

export const certifications: Certification[] = [
  {
    title: 'IBM Cloud Essentials',
    issuer: 'IBM, Coursera',
    color: 'blue',
    icon: 'certificate'
  },
  {
    title: 'Network and System Configuration Fundamentals',
    issuer: 'LPU Value Added Course – CompTIA A+ equivalent',
    color: 'green',
    icon: 'certificate'
  },
  {
    title: 'Database Management Systems-1',
    issuer: 'Infosys Springboard',
    color: 'purple',
    icon: 'certificate'
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/piyushdubey',
    icon: 'linkedin',
    color: 'bg-blue-600'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/piyushdubey',
    icon: 'github',
    color: 'bg-gray-800'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/piyushdubey',
    icon: 'twitter',
    color: 'bg-blue-500'
  },
  {
    name: 'Email',
    url: 'mailto:piyushdubey490@icloud.com',
    icon: 'envelope',
    color: 'bg-green-600'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable AI/ML Pipelines with MLOps Best Practices',
    slug: 'scalable-ai-ml-pipelines-mlops',
    excerpt: 'Learn how to build production-ready machine learning pipelines that scale efficiently and maintain high performance in enterprise environments.',
    content: `# Building Scalable AI/ML Pipelines with MLOps Best Practices

In today's data-driven world, building machine learning models is just the beginning. The real challenge lies in deploying, monitoring, and maintaining these models in production environments. This is where MLOps (Machine Learning Operations) comes into play.

## What is MLOps?

MLOps is a set of practices that combines Machine Learning, DevOps, and Data Engineering to automate and streamline the ML lifecycle. It ensures that ML models are not just built, but are also deployable, scalable, and maintainable.

## Key Components of MLOps

### 1. Version Control for Data and Models
- Track changes in datasets and model versions
- Implement data lineage tracking
- Use tools like DVC (Data Version Control)

### 2. Automated Testing
- Unit tests for data processing functions
- Integration tests for ML pipelines
- Model validation and performance testing

### 3. Continuous Integration/Continuous Deployment (CI/CD)
- Automated model training pipelines
- Automated deployment processes
- Rollback strategies for failed deployments

### 4. Monitoring and Observability
- Model performance monitoring
- Data drift detection
- Alert systems for anomalies

## Best Practices

1. **Start with Simple Pipelines**: Begin with basic automation and gradually add complexity
2. **Implement Proper Logging**: Track every step of your ML pipeline
3. **Use Containerization**: Docker containers ensure consistency across environments
4. **Automate Everything**: From data preprocessing to model deployment
5. **Monitor Continuously**: Set up alerts for performance degradation

## Tools and Technologies

- **Orchestration**: Apache Airflow, Kubeflow
- **Model Serving**: TensorFlow Serving, MLflow
- **Monitoring**: Prometheus, Grafana
- **Infrastructure**: Kubernetes, Docker

## Conclusion

MLOps is essential for any organization looking to scale their ML initiatives. By implementing these practices, you can ensure your models are not just accurate but also reliable and maintainable in production.`,
    publishedAt: '2024-01-15',
    readTime: 8,
    tags: ['MLOps', 'AI', 'DevOps', 'Machine Learning'],
    featured: true,
    author: 'Piyush Dubey',
    image: '/api/placeholder/600/300'
  },
  {
    id: '2',
    title: 'DevOps Security: Implementing Security in CI/CD Pipelines',
    slug: 'devops-security-cicd-pipelines',
    excerpt: 'Discover how to integrate security practices into your DevOps workflows to build secure, compliant applications without slowing down development.',
    content: `# DevOps Security: Implementing Security in CI/CD Pipelines

Security should never be an afterthought in modern software development. DevSecOps integrates security practices throughout the entire development lifecycle, ensuring that security is built into every stage of your CI/CD pipeline.

## The DevSecOps Approach

DevSecOps shifts security left in the development process, making it everyone's responsibility rather than just the security team's. This approach helps identify and fix security issues early when they're less expensive to resolve.

## Key Security Practices for CI/CD

### 1. Static Application Security Testing (SAST)
- Scan source code for security vulnerabilities
- Integrate tools like SonarQube, Checkmarx
- Fail builds when critical vulnerabilities are found

### 2. Dynamic Application Security Testing (DAST)
- Test running applications for security flaws
- Use tools like OWASP ZAP, Burp Suite
- Automate security testing in staging environments

### 3. Dependency Scanning
- Check third-party dependencies for known vulnerabilities
- Use tools like Snyk, WhiteSource
- Maintain an inventory of all dependencies

### 4. Container Security
- Scan container images for vulnerabilities
- Use minimal base images
- Implement proper secrets management

## Implementation Strategy

1. **Start with Low-Hanging Fruit**: Begin with basic security scans
2. **Educate Your Team**: Ensure developers understand security principles
3. **Automate Security Testing**: Integrate security tools into your CI/CD pipeline
4. **Monitor and Respond**: Set up alerts for security issues
5. **Regular Reviews**: Conduct regular security assessments

## Tools and Technologies

- **SAST Tools**: SonarQube, Veracode, Checkmarx
- **DAST Tools**: OWASP ZAP, Burp Suite
- **Container Security**: Twistlock, Aqua Security
- **Secrets Management**: HashiCorp Vault, AWS Secrets Manager

## Conclusion

Implementing security in CI/CD pipelines is crucial for building secure applications. By integrating security practices early and often, you can reduce risk while maintaining development velocity.`,
    publishedAt: '2024-01-10',
    readTime: 6,
    tags: ['DevOps', 'Security', 'CI/CD', 'DevSecOps'],
    featured: true,
    author: 'Piyush Dubey',
    image: '/api/placeholder/600/300'
  },
  {
    id: '3',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    slug: 'future-web-development-trends-2024',
    excerpt: 'Explore the latest trends and technologies shaping the future of web development, from AI-powered tools to new frameworks and methodologies.',
    content: `# The Future of Web Development: Trends to Watch in 2024

Web development continues to evolve rapidly, with new technologies and methodologies emerging constantly. As we progress through 2024, several trends are shaping the future of how we build web applications.

## Major Trends in Web Development

### 1. AI-Powered Development Tools
- GitHub Copilot and similar AI assistants
- Automated code generation and testing
- AI-driven design tools and prototyping

### 2. Edge Computing and CDN Evolution
- Faster content delivery with edge functions
- Reduced latency for global applications
- Better performance for mobile users

### 3. WebAssembly (WASM) Adoption
- Near-native performance in browsers
- Support for multiple programming languages
- Complex applications running in the browser

### 4. Progressive Web Apps (PWAs)
- App-like experiences on the web
- Offline functionality and push notifications
- Better mobile performance and engagement

## Framework Evolution

### React and Next.js
- Server Components for better performance
- Improved developer experience
- Better SEO and loading times

### Vue.js and Nuxt.js
- Composition API adoption
- Better TypeScript support
- Improved performance optimizations

### Svelte and SvelteKit
- Compile-time optimizations
- Smaller bundle sizes
- Growing ecosystem

## Development Methodologies

### Jamstack Architecture
- Static site generators
- API-first approach
- Better security and performance

### Micro-frontends
- Modular frontend architecture
- Team autonomy and scalability
- Technology diversity

## What This Means for Developers

1. **Stay Updated**: Keep learning new technologies and methodologies
2. **Focus on Fundamentals**: Core web technologies remain important
3. **Embrace AI Tools**: Use AI to enhance productivity
4. **Performance Matters**: Optimize for Core Web Vitals
5. **Security First**: Implement security best practices

## Conclusion

The future of web development is exciting, with numerous opportunities for innovation and growth. By staying informed about these trends and continuously learning, developers can build better, faster, and more secure web applications.`,
    publishedAt: '2024-01-05',
    readTime: 5,
    tags: ['Web Development', 'Trends', 'AI', 'Performance'],
    featured: false,
    author: 'Piyush Dubey',
    image: '/api/placeholder/600/300'
  }
];
