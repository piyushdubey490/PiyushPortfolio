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
    id: 'indian-law-chatbot',
    title: 'Indian Law Information Chat Bot',
    description: 'AI-powered chatbot for querying CRPC and IPC documents using Llama Indexing and OpenAI API, streamlining legal document access and enhancing user engagement.',
    technologies: ['Python', 'OpenAI API', 'Llama Indexing', 'NLP', 'Generative AI', 'Legal Tech'],
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
    id: 'object-detection-tracking',
    title: 'Object Detection, Tracking & Counting in Polygon Zone',
    description: 'Cutting-edge system for object detection, tracking, and counting within a polygon zone, achieving 50% efficiency boost using YOLOv8, OpenCV, ByteTrack, and Detectron2.',
    technologies: ['YOLOv8', 'OpenCV', 'ByteTrack', 'Detectron2', 'Computer Vision', 'Deep Learning'],
    image: '/api/placeholder/400/200',
    gradient: 'from-cyan-400 to-blue-500'
  },
  {
    id: 'ml-model-deployment',
    title: 'Breast Cancer Prediction Model with ML Algorithms',
    description: 'Advanced healthcare prediction model leveraging Decision Trees, SVM, KNN, and Random Forest algorithms to enhance prediction accuracy through algorithm comparison and optimization.',
    technologies: ['Python', 'Scikit-learn', 'SVM', 'Random Forest', 'KNN', 'Decision Trees', 'Machine Learning'],
    image: '/api/placeholder/400/200',
    gradient: 'from-pink-400 to-red-500'
  },
  {
    id: 'sap-abap-hana',
    title: 'SAP ABAP HANA Business Intelligence System',
    description: 'Enterprise-level business intelligence solution built with SAP ABAP HANA for real-time data processing, analytics, and reporting to support strategic business decisions.',
    technologies: ['SAP ABAP', 'SAP HANA', 'Business Intelligence', 'Data Analytics', 'ERP Systems', 'SQL'],
    image: '/api/placeholder/400/200',
    gradient: 'from-yellow-400 to-orange-500'
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
    skills: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'XGBoost', 'Deep Learning', 'Random Forest', 'SVM'],
    color: 'green'
  },
  {
    category: 'Computer Vision & NLP',
    skills: ['OpenCV', 'YOLOv8', 'Faster R-CNN', 'Mask R-CNN', 'Object Detection', 'Image Segmentation', 'Facial Recognition', 'NLP'],
    color: 'cyan'
  },
  {
    category: 'Web Development',
    skills: ['React JS', 'Node JS', 'Express', 'FastAPI', 'REST APIs', 'MongoDB', 'PostgreSQL', 'SQLAlchemy'],
    color: 'orange'
  },
  {
    category: 'Data Analytics & ERP',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI', 'Tableau', 'SAP ABAP HANA', 'SQL'],
    color: 'yellow'
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
    title: 'Natural Language Processing Specialization',
    issuer: 'Coursera, DeepLearning.ai (Andrew Ng)',
    color: 'green',
    icon: 'certificate'
  },
  {
    title: 'Network and System Configuration Fundamentals',
    issuer: 'LPU Value Added Course – CompTIA A+ equivalent',
    color: 'purple',
    icon: 'certificate'
  },
  {
    title: 'Database Management Systems-1',
    issuer: 'Infosys Springboard',
    color: 'orange',
    icon: 'certificate'
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/piyushdubey490',
    icon: 'linkedin',
    color: 'bg-blue-600'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/piyushdubey490',
    icon: 'github',
    color: 'bg-gray-800'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/pdxxop',
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
    content: `🚀 Building Scalable AI/ML Pipelines with MLOps Best Practices

In today's data-driven world, building machine learning models is just the beginning. The real challenge lies in deploying, monitoring, and maintaining these models in production environments. This is where MLOps (Machine Learning Operations) comes into play.

Imagine a scenario: a company spends months developing a highly accurate predictive model, but when it's deployed, performance drops sharply. The root cause? Data drift went undetected, and there was no systematic monitoring in place. Without MLOps, the handoff between data scientists and operations teams can be clumsy, leading to miscommunication, version mismatches, and ultimately, model failure in production. In one real-world case, a retail company’s recommendation engine failed spectacularly after a silent data schema change upstream—costing revenue and user trust. This highlights why robust MLOps practices are essential for sustained success.

🤖 What is MLOps?

MLOps is a set of practices that combines Machine Learning, DevOps, and Data Engineering to automate and streamline the ML lifecycle. It ensures that ML models are not just built, but are also deployable, scalable, and maintainable.

MLOps is inherently collaborative. Data scientists focus on feature engineering and model experimentation, while ML engineers design robust, reproducible pipelines. Operations teams ensure that infrastructure is reliable, scalable, and secure. By working together, these teams can quickly iterate on models, automate deployment, and respond to issues before they impact users. For example, a typical workflow might involve data scientists pushing new model code to a repository, triggering automated tests and deployments managed by ML engineers, with operations staff monitoring resource usage and system health in production.

🧩 Key Components of MLOps

📂 1. Version Control for Data and Models

• Track changes in datasets and model versions  
• Implement data lineage tracking  
• Use tools like DVC (Data Version Control)

🧪 2. Automated Testing

• Unit tests for data processing functions  
• Integration tests for ML pipelines  
• Model validation and performance testing

🔁 3. Continuous Integration/Continuous Deployment (CI/CD)

• Automated model training pipelines  
• Automated deployment processes  
• Rollback strategies for failed deployments

👀 4. Monitoring and Observability

• Model performance monitoring  
• Data drift detection  
• Alert systems for anomalies

✅ Best Practices

• Start with Simple Pipelines: Begin with basic automation and gradually add complexity  
• Implement Proper Logging: Track every step of your ML pipeline  
• Use Containerization: Docker containers ensure consistency across environments  
• Automate Everything: From data preprocessing to model deployment  
• Monitor Continuously: Set up alerts for performance degradation

🛠️ Tools and Technologies

• Orchestration: Apache Airflow, Kubeflow  
• Model Serving: TensorFlow Serving, MLflow  
• Monitoring: Prometheus, Grafana  
• Infrastructure: Kubernetes, Docker

For instance, a team might use Kubeflow to orchestrate end-to-end pipelines, DVC for dataset versioning, and Grafana dashboards to visualize real-time model metrics. This enables rapid troubleshooting and continuous improvement.

📌 Conclusion

MLOps is essential for any organization looking to scale their ML initiatives. By implementing these practices, you can ensure your models are not just accurate but also reliable and maintainable in production. The synergy between data scientists, ML engineers, and operations professionals is the backbone of successful, scalable AI/ML systems.
`,
    publishedAt: '2024-01-15',
    readTime: 8,
    tags: ['MLOps', 'AI', 'DevOps', 'Machine Learning'],
    featured: true,
    author: 'Piyush Dubey',
    image: '/images/blogs/mlops-pipeline.png'
  },
  {
    id: '2',
    title: 'DevOps Security: Implementing Security in CI/CD Pipelines',
    slug: 'devops-security-cicd-pipelines',
    excerpt: 'Discover how to integrate security practices into your DevOps workflows to build secure, compliant applications without slowing down development.',
    content: `🔐 DevOps Security: Implementing Security in CI/CD Pipelines

Security should never be an afterthought in modern software development. DevSecOps integrates security practices throughout the entire development lifecycle, ensuring that security is built into every stage of your CI/CD pipeline.

Consider the infamous 2017 Equifax breach, where attackers exploited a known vulnerability in a web framework dependency. The lack of automated dependency scanning and patching in their CI/CD pipeline allowed attackers to steal sensitive information of over 140 million people. With proper CI/CD security, such as automated vulnerability checks and immediate patch deployments, this breach could have been prevented or at least greatly mitigated. Real-world incidents like this underscore why embedding security into your pipelines is critical—not just for compliance, but for protecting your users and your reputation.

🧭 The DevSecOps Approach

DevSecOps shifts security left in the development process, making it everyone's responsibility rather than just the security team's. This helps catch security issues early, making them easier and cheaper to fix.

Security is not just about tools—it's also about people. Developer security education is vital for an effective DevSecOps culture. Regular training, security awareness workshops, and hands-on exercises (like capture-the-flag events or simulated phishing attacks) help developers recognize threats and write safer code. When developers understand how their code can be attacked, they're more likely to adopt secure coding practices and spot vulnerabilities before they reach production.

🛡️ Key Security Practices for CI/CD

1. Static Application Security Testing (SAST)  
• Scan source code for security vulnerabilities  
• Use tools like SonarQube, Checkmarx  
• Fail builds when critical issues are found  

2. Dynamic Application Security Testing (DAST)  
• Test running applications for security flaws  
• Use tools like OWASP ZAP, Burp Suite  
• Automate tests in staging  

3. Dependency Scanning  
• Audit third-party libraries  
• Use Snyk, WhiteSource  
• Maintain a dependency inventory  

4. Container Security  
• Scan container images  
• Use minimal base images  
• Manage secrets securely  

🚀 Implementation Strategy

• Start with basic security checks  
• Educate your team on security best practices  
• Integrate tools into the CI/CD pipeline  
• Setup alerts and monitor continuously  
• Review security posture regularly  

Security education should be ongoing. Encourage developers to stay updated on the latest threats and remediation techniques. Make security a shared responsibility—integrate feedback loops, code reviews, and encourage open communication between security and development teams.

🛠️ Tools and Technologies

• SAST: SonarQube, Checkmarx  
• DAST: OWASP ZAP, Burp Suite  
• Containers: Twistlock, Aqua Security  
• Secrets: HashiCorp Vault, AWS Secrets Manager  

📌 Conclusion

Securing your CI/CD pipelines is essential. Early and frequent security integration ensures your apps are protected without slowing down development. By combining automated tools with continuous developer education, you build a culture of security that keeps your software—and your users—safe.
`,
    publishedAt: '2024-01-10',
    readTime: 6,
    tags: ['DevOps', 'Security', 'CI/CD', 'DevSecOps'],
    featured: true,
    author: 'Piyush Dubey',
    image: '/images/blogs/devops-security.png'
  },
  {
    id: '3',
    title: 'The Future of Web Development: Trends to Watch in 2025',
    slug: 'future-web-development-trends-2024',
    excerpt: 'Explore the latest trends and technologies shaping the future of web development, from AI-powered tools to new frameworks and methodologies.',
    content: `🌐 The Future of Web Development: Trends to Watch in 2025

Web development is evolving fast with exciting trends shaping how we build modern apps. The landscape is more dynamic than ever, and developers who adapt quickly will find themselves at the forefront of innovation.

🔍 Major Trends

1. AI-Powered Development  
• GitHub Copilot, AI design tools  
• Automated code and testing  
AI now assists with everything from code suggestions to bug detection. For example, Shopify leverages AI-driven tools to automate frontend testing and optimize user experiences, reducing manual QA cycles and speeding up releases.

2. Edge Computing  
• Faster content delivery  
• Improved mobile performance  
Companies like Netflix use edge computing to deliver video streams closer to users, minimizing latency and improving playback quality worldwide.

3. WebAssembly (WASM)  
• Native performance in the browser  
• Multi-language support  
WASM enables new types of applications—think Figma's browser-based design tool, which relies on WASM for real-time graphics performance.

4. Progressive Web Apps (PWAs)  
• App-like experience  
• Offline support and push notifications  
PWAs are now the backbone for many e-commerce and content platforms, offering fast, installable experiences on any device.

⚙️ Framework Advancements

• React/Next.js: Server components, better SEO  
• Vue/Nuxt: Composition API, TypeScript  
• Svelte/SvelteKit: Compile-time optimization, small bundles  
Tooling is evolving rapidly. For instance, Next.js now includes built-in image optimization and API routes, making it easier for developers to ship full-stack applications with great performance out of the box.

🧱 Development Architectures

• Jamstack: Static sites + APIs = fast, secure apps  
• Micro-frontends: Scalable, modular frontends  
Modern companies are adopting Jamstack for marketing sites and micro-frontends for large, distributed teams. Shopify, for example, employs Jamstack for its documentation platform, ensuring lightning-fast load times and simple scaling.

🔧 Adapting as a Developer

To keep up, developers should explore new tools like Vite, Astro, and automated CI/CD platforms (like GitHub Actions or GitLab CI) that streamline deployment and testing. Learning to integrate AI-powered code review tools or mastering containerization (Docker, Kubernetes) can open up new roles in DevOps and cloud-native development.

Career outlook is bright for those who embrace these trends. Roles such as Frontend Cloud Engineer, DevOps Developer, and AI-augmented Developer are on the rise. Upskilling with certifications in cloud platforms or modern frameworks will make you more marketable and ready for the next wave of web innovation.

📌 What Developers Should Do

• Stay current with trends  
• Master fundamentals  
• Use AI to boost productivity  
• Prioritize performance and security  
• Experiment with new frameworks and deployment tools  
• Build a portfolio with modern architectures (Jamstack, micro-frontends)

🧭 Conclusion

The web is heading toward more intelligent, efficient, and modular development. Stay informed and build better apps! Companies like Shopify and Netflix are already applying these trends at scale—start experimenting now to future-proof your career.
`,
    publishedAt: '2025-01-05',
    readTime: 5,
    tags: ['Web Development', 'Trends', 'AI', 'Performance'],
    featured: false,
    author: 'Piyush Dubey',
    image: '/images/blogs/webdev-future.png'
  },
  {
    id: '4',
    title: 'AI Agents: The Next Leap in Automation',
    slug: 'ai-agents-next-leap-automation',
    excerpt: 'Discover how AI agents are transforming automation, enabling smarter workflows, autonomous decision-making, and new business opportunities.',
    content: `🤖 AI Agents: The Next Leap in Automation

AI agents are transforming automation with intelligent, autonomous decision-making. But what exactly are AI agents?

🔍 What Are AI Agents?

AI agents are autonomous software entities that perceive, reason, and act to achieve specific goals. Unlike simple scripts, they can adapt, learn, and collaborate.

🧠 Key Characteristics

• Autonomy: Make decisions independently  
• Learning: Improve through data  
• Reactivity: Respond to environment changes  
• Proactivity: Take initiative  
• Collaboration: Work with humans or other agents

⚙️ How They Work

1. Perceive – Collect data from environment  
2. Reason – Analyze and plan using AI models  
3. Act – Perform actions like messaging or controlling devices  
4. Learn – Update knowledge based on feedback

🛠️ Frameworks to Explore

• LangChain  
• Microsoft AutoGen  
• OpenAI Assistants API  

📦 Real-World Applications

• Customer Support  
• Automated Trading  
• Smart Home Systems  
• Business Process Automation  

🧪 Example Use Case

Support chatbot:  
• Perceive – Receives question  
• Reason – Uses LLM to understand  
• Act – Responds or escalates  
• Learn – Improves from outcomes

⚠️ Challenges

• Ethics & Bias  
• Transparency  
• Security  
• Evaluation & Monitoring

🚀 Getting Started

• Use open-source frameworks  
• Define clear goals and rules  
• Start small and iterate  
• Monitor agent performance

📌 Conclusion

AI agents bring autonomy, intelligence, and efficiency. Start experimenting now to unlock next-gen automation in your workflows.
`,
    publishedAt: '2025-06-15',
    readTime: 10,
    tags: ['AI', 'Automation', 'Agents', 'Trends'],
    featured: true,
    author: 'Piyush Dubey',
    image: '/images/blogs/ai-agents.png'
  },
  {
    id: '5',
    title: 'Automate Anything with n8n: Open Source Workflow Magic',
    slug: 'automate-anything-n8n-workflow',
    excerpt: 'Learn how n8n empowers you to automate tasks, connect APIs, and build powerful workflows—all with an open-source, no-code approach.',
    content: `🔗 Automate Anything with n8n: Open Source Workflow Magic

Automation is essential for productivity. n8n helps you build workflows without writing much code—and it's open source!

🧩 What is n8n?

n8n is a node-based workflow automation platform. Think Zapier, but self-hosted and customizable.

✨ Features

• No-Code + JavaScript logic  
• 350+ integrations  
• Custom nodes  
• Self-hosting  
• Community templates

🛠️ How It Works

Workflows = Nodes (actions like HTTP request, database query). You drag and connect them visually.

💡 Example: Social Media Automation

1. Trigger: Schedule every morning  
2. Fetch: RSS feed of blog posts  
3. Format: Turn it into tweet  
4. Post: Tweet it automatically

🌍 Use Cases

• Marketing automation  
• Data sync (DB, sheets, APIs)  
• Alerts via Slack, Telegram  
• Business workflows (approvals, onboarding)

💪 Why Use n8n?

• Flexibility: JS logic, conditionals  
• Cost-effective: Free and open source  
• Privacy: Own your data  
• Extensible: Build your own nodes

🚀 Get Started

1. Install with Docker or npm  
2. Visit \`http://localhost:5678\`  
3. Drag, drop, connect nodes  
4. Use templates for inspiration

⚙️ Tips

• Use env variables for secrets  
• Log executions for debugging  
• Join community forum

📌 Conclusion

n8n gives you power to automate everything—your way. Open-source, flexible, and productive for devs and non-devs alike.
`,
    publishedAt: '2025-07-01',
    readTime: 10,
    tags: ['Automation', 'n8n', 'Open Source', 'Workflows'],
    featured: false,
    author: 'Piyush Dubey',
    image: '/images/blogs/n8n-workflow.png'
  }
];
