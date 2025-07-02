import { Service, Project, Skill, Certification, SocialLink } from './types';

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
    title: 'Web App & SaaS MVP Development',
    description: 'Full-stack web applications and SaaS MVP development using modern technologies for rapid market validation.',
    icon: 'code',
    features: [
      'React/Next.js Development',
      'Backend API Development',
      'Database Design & Optimization'
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
    title: 'Tech Strategy & Architecture Consulting',
    description: 'Strategic technology planning, system architecture design, and technical roadmap development for scalable growth.',
    icon: 'chart-line',
    features: [
      'System Architecture Design',
      'Technology Stack Selection',
      'Scalability Planning'
    ],
    gradient: 'from-indigo-500 to-purple-600'
  }
];

export const projects: Project[] = [
  {
    id: 'object-detection',
    title: 'Object Detection in Polygon Zone',
    description: 'Real-time object detection system using YOLO and OpenCV to monitor specific zones and trigger alerts based on detected objects.',
    technologies: ['Python', 'YOLO', 'OpenCV', 'Computer Vision'],
    image: '/api/placeholder/400/200',
    gradient: 'from-blue-400 to-purple-500'
  },
  {
    id: 'law-chatbot',
    title: 'Indian Law Chatbot',
    description: 'AI-powered legal assistant providing instant answers to Indian law queries using NLP and legal document processing.',
    technologies: ['Python', 'NLP', 'Transformers', 'Flask'],
    image: '/api/placeholder/400/200',
    gradient: 'from-green-400 to-blue-500'
  },
  {
    id: 'ecommerce-pipeline',
    title: 'CI/CD Ecommerce Pipeline',
    description: 'Complete DevOps pipeline for e-commerce platform with automated testing, deployment, and monitoring capabilities.',
    technologies: ['Docker', 'Jenkins', 'Kubernetes', 'AWS'],
    image: '/api/placeholder/400/200',
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure with Terraform',
    description: 'Scalable cloud infrastructure deployment using Infrastructure as Code principles with Terraform and AWS services.',
    technologies: ['Terraform', 'AWS', 'IaC', 'CloudFormation'],
    image: '/api/placeholder/400/200',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    id: 'cancer-prediction',
    title: 'Breast Cancer Prediction',
    description: 'Machine learning model for early breast cancer detection using medical imaging data and advanced classification algorithms.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter'],
    image: '/api/placeholder/400/200',
    gradient: 'from-pink-400 to-red-500'
  }
];

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java'],
    color: 'blue'
  },
  {
    category: 'AI/ML Tools',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'],
    color: 'green'
  },
  {
    category: 'DevOps & Cloud',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Terraform'],
    color: 'purple'
  },
  {
    category: 'Web Technologies',
    skills: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    color: 'orange'
  }
];

export const certifications: Certification[] = [
  {
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    color: 'blue',
    icon: 'certificate'
  },
  {
    title: 'Google Cloud Professional',
    issuer: 'Google Cloud Platform',
    color: 'green',
    icon: 'certificate'
  },
  {
    title: 'TensorFlow Developer',
    issuer: 'Google',
    color: 'purple',
    icon: 'certificate'
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/piyushdubey',
    icon: 'linkedin',
    color: 'blue-600'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/piyushdubey',
    icon: 'github',
    color: 'gray-800'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/piyushdubey',
    icon: 'twitter',
    color: 'blue-500'
  },
  {
    name: 'Email',
    url: 'mailto:piyush@example.com',
    icon: 'envelope',
    color: 'green-600'
  }
];
