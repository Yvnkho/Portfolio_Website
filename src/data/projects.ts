export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'security' | 'web';
  role: string;
  duration: string;
  client?: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    tools?: string[];
    security?: string[];
  };
  features: string[];
  gallery: string[];
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Inclusive Education Transcription App",
    description: "Developed a real-time transcription application to support hearing-impaired students in educational settings, promoting inclusive learning environments.",
    image: "/images/photo2.png",
    tags: ["React", "Web Speech API", "Accessibility", "Real-time Processing"],
    category: "web",
    role: "Full-Stack Developer & UX Designer",
    duration: "4 months",
    client: "University of Technology",
    challenge: "Creating an accessible, real-time transcription system that could accurately capture classroom discussions and lectures while providing an intuitive interface for hearing-impaired students.",
    solution: "Developed a React-based web application utilizing the Web Speech API for real-time speech recognition, with custom algorithms for noise reduction and speaker identification. Implemented accessibility features following WCAG 2.1 guidelines.",
    results: [
      "95% accuracy in speech recognition in classroom environments",
      "Improved learning outcomes for 200+ hearing-impaired students",
      "Reduced note-taking burden by 80% for affected students",
      "Adopted by 15 educational institutions"
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Tailwind CSS", "Web Speech API", "Machine Learning"],
      backend: ["Node.js", "Express", "Socket.io"],
      database: ["MongoDB", "Redis"],
      tools: ["Docker", "AWS", "GitHub Actions"],
      security: ["JWT Authentication", "HTTPS", "Data Encryption"]
    },
    features: [
      "Real-time speech-to-text transcription",
      "Speaker identification and labeling",
      "Customizable text size and contrast",
      "Offline mode with sync capabilities",
      "Multi-language support",
      "Integration with learning management systems"
    ],
    gallery: [
      "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
      "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg",
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg"
    ],
    links: {
      //View: "https://transcription-app-demo.com",
      //github: "https://github.com/yankho/transcription-app"
    }
  },
  {
    id: 2,
    title: "Portfolio Dashboard",
    description: "Designed and developed an interactive dashboard for showcasing projects and skills with real-time data visualization and dynamic content management.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
    tags: ["React", "D3.js", "Tailwind CSS", "TypeScript" , "Vite"],
    category: "web",
    role: "Frontend Developer & UI/UX Designer",
    duration: "3 months",
    challenge: "Creating a dynamic, visually appealing portfolio that could showcase technical skills while providing an admin interface for easy content management and real-time analytics.",
    solution: "Built a modern React dashboard with D3.js for data visualization, featuring a headless CMS integration for content management and real-time analytics tracking visitor engagement and project interactions.",
    results: [
      "300% increase in portfolio engagement",
      "Reduced content update time by 90%",
      "Improved user experience with 4.8/5 rating",
      "Featured in 5 design showcases"
    ],
    techStack: {
      frontend: ["React", "TypeScript", "D3.js", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Express", "GraphQL"],
      database: ["PostgreSQL", "Redis"],
      tools: ["Vite", "Docker", "Vercel", "Figma"],
      security: ["OAuth 2.0", "Rate Limiting", "CSRF Protection"]
    },
    features: [
      "Interactive data visualizations",
      "Real-time analytics dashboard",
      "Content management system",
      "Responsive design across all devices",
      "Dark/light theme toggle",
      "Performance optimization with lazy loading"
    ],
    gallery: [
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
      "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
    ],
    links: {
      View: "https://portfolio-dashboard-demo.com",
      github: "https://github.com/Yvnkho/Portfolio-Website",
     // demo: "https://demo.portfolio-dashboard.com"
    }
  },
  {
    id: 3,
    title: "Learning Management System",
    description: "Created a comprehensive learning management system using WordPress CMS, featuring course management, student progress tracking, and interactive learning materials.",
    image: "/images/Photo3.png",
    tags: ["WordPress", "PHP", "LMS", "Custom Plugins"],
    category: "web",
    role: "WordPress Developer & System Architect",
    duration: "6 months",
    client: "EduTech Solutions",
    challenge: "Developing a scalable learning management system that could handle thousands of concurrent users while providing rich interactive features for both instructors and students.",
    solution: "Built a custom WordPress-based LMS with tailored plugins for course management, progress tracking, and interactive assessments. Implemented advanced caching and optimization techniques for scalability.",
    results: [
      "Successfully onboarded 5,000+ students",
      "99.9% uptime with optimized performance",
      "40% improvement in course completion rates",
      "Reduced administrative workload by 60%"
    ],
    techStack: {
      frontend: ["WordPress", "PHP", "JavaScript", "CSS3", "Bootstrap"],
      backend: ["PHP", "MySQL", "WordPress REST API"],
      database: ["MySQL", "WordPress Database"],
      tools: ["Docker", "cPanel", "Git", "Composer"],
      security: ["WordPress Security", "SSL", "User Role Management"]
    },
    features: [
      "Course creation and management",
      "Student progress tracking",
      "Interactive quizzes and assessments",
      "Discussion forums",
      "Certificate generation",
      "Payment gateway integration",
      "Mobile-responsive design",
      "Multi-instructor support"
    ],
    gallery: [
      "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg",
      "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg"
    ],
    links: {
      View: "https://digitalskillsforafrica.com/",
      demo: "https://digitalskillsforafrica.com/"
    }
  },
  {
    id: 4,
    title: "Enterprise Security Monitoring",
    description: "Designed and deployed a comprehensive Wazuh SIEM solution for enterprise-level security monitoring, threat detection, and incident response across multiple environments.",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
    tags: ["Wazuh", "SIEM", "Security Monitoring", "Threat Detection", "ELK Stack"],
    category: "security",
    role: "Lead Security Engineer & SIEM Architect",
    duration: "10 weeks",
    client: "TechCorp Enterprise",
    challenge: "Implementing a centralized security monitoring solution that could handle high-volume log ingestion from diverse infrastructure while providing real-time threat detection and automated incident response capabilities.",
    solution: "Deployed a distributed Wazuh SIEM architecture with clustered managers, integrated with Elasticsearch and Kibana for advanced analytics. Configured custom rules for threat detection, compliance monitoring, and automated response workflows.",
    results: [
      "Monitored 500+ endpoints across multiple environments",
      "Reduced threat detection time from hours to minutes",
      "Achieved 99.5% log collection reliability",
      "Automated 80% of routine security incident responses",
      "Improved compliance reporting efficiency by 90%"
    ],
    techStack: {
      security: ["Wazuh Manager", "Wazuh Agents", "Elasticsearch", "Kibana", "Logstash"],
      tools: ["Docker", "Ansible", "Terraform", "Nginx", "Redis"],
      database: ["Elasticsearch", "PostgreSQL"],
      backend: ["Python", "Bash Scripting", "REST APIs"]
    },
    features: [
      "Real-time log analysis and correlation",
      "Custom rule development for threat detection",
      "Automated incident response workflows",
      "Compliance monitoring (PCI DSS, GDPR, HIPAA)",
      "File integrity monitoring (FIM)",
      "Vulnerability detection and assessment",
      "Active response and remediation",
      "Multi-tenant dashboard configuration",
      "API integration for SOAR platforms"
    ],
    gallery: [
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
      "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg",
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg"
    ],
    links: {
     // github: "https://github.com/yankho/wazuh-enterprise-deployment"
    }
  },
  {
    id: 5,
    title: "Threat Intelligence automation",
    description: "Developed a Python-based parser to process Shadowserver threat feeds, enabling real-time threat awareness and faster response capabilities.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    tags: ["Python", "Threat Intelligence", "Network Security", "Shadowserver"],
    category: "security",
    role: "Security Engineer & Full-Stack Developer",
    duration: "5 months",
    challenge: "Creating a password manager that provides maximum security through zero-knowledge encryption while maintaining user-friendly interface and cross-platform compatibility.",
    solution: "Implemented client-side encryption using AES-256 with PBKDF2 key derivation, ensuring that even the service provider cannot access user data. Built with React frontend and Node.js backend with comprehensive security measures.",
    results: [
      "Zero security breaches since launch",
      "10,000+ active users within first year",
      "99.99% uptime reliability",
      "Featured in top security publications"
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Electron", "Tailwind CSS"],
      backend: ["Node.js", "Express", "PostgreSQL"],
      security: ["AES-256 Encryption", "PBKDF2", "Zero-Knowledge Architecture", "2FA"],
      tools: ["Docker", "AWS", "GitHub Actions", "Jest"]
    },
    features: [
      "End-to-end encryption",
      "Zero-knowledge architecture",
      "Cross-platform compatibility",
      "Secure password generation",
      "Two-factor authentication",
      "Biometric authentication",
      "Secure sharing capabilities",
      "Offline access"
    ],
    gallery: [
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg",
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
    ],
    links: {
      //live: "https://cryptovault-demo.com",
      //github: "https://github.com/yankho/cryptovault"
    }
  },
  {
    id: 6,
    title: "Zero Trust Network and Infrastructure Hardening for Education Sector (MAREN)",
    description: "Implemented a Zero Trust architecture and carried out infrastructure hardening for MAREN to reduce the attack surface and improve overall security posture.",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
    tags: ["Zero Trust","Infrastructure Restructuring", "Firewall", "Network Security", "System Hardening"],
    category: "security",
    role: "Security Engineer & Python Developer",
    duration: "4 months",
    client: "SecureNet Solutions",
    challenge: "Building a comprehensive network monitoring solution that could detect and respond to security threats in real-time while minimizing false positives and providing actionable intelligence.",
    solution: "Developed a Python-based monitoring system with machine learning algorithms for anomaly detection, integrated with SIEM tools and automated response capabilities for immediate threat mitigation.",
    results: [
      "Reduced threat detection time by 75%",
      "Decreased false positives by 60%",
      "Prevented 15+ security incidents",
      "Improved network visibility by 90%"
    ],
    techStack: {
      backend: ["Python", "Django", "Celery", "Redis"],
      security: ["Suricata", "ELK Stack", "Snort", "YARA"],
      database: ["PostgreSQL", "InfluxDB", "Elasticsearch"],
      tools: ["Docker", "Kubernetes", "Grafana", "Prometheus"]
    },
    features: [
      "Real-time traffic analysis",
      "Machine learning threat detection",
      "Automated incident response",
      "Custom rule engine",
      "Integration with SIEM platforms",
      "Comprehensive reporting dashboard"
    ],
    gallery: [
      "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg",
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg"
    ],
    links: {
      //github: "https://github.com/yankho/network-security-monitor"
    }
  }
];