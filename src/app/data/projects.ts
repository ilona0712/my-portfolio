export interface Project {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  overview: string;
  challenge: string;
  solution: string | string[];
  impact: string[];
  technologies: string[];
  timeline: string;
  role?: string;
  liveUrl?: string;
  github?: string;
  websiteLinks?: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    id: 'numu-dashboard',
    category: 'Full-Stack',
    title: 'NUMU National Analytics Dashboard',
    subtitle: "Government monitoring platform for Lebanon's national AI upskilling program",
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=75',
    tags: ['Next.js', 'TypeScript', 'Data Visualization', 'REST API'],
    overview: "Built a full-stack national monitoring and analytics platform for Lebanon's Ministry of IT & AI (MITAI), commissioned as part of the Code for Lebanon x USJ Hackathon. The platform serves as the operational backbone for the NUMU national AI upskilling program, giving ministry officials real-time visibility into registration performance, learner demographics, geographic reach, and training track demand.",
    challenge: 'The Ministry needed a data-driven tool to monitor the national rollout of NUMU across 8 Lebanese regions, tracking 4,800+ registered learners spanning universities, syndicates, public sector entities, NGOs, and employers. Policy decisions around outreach strategy, regional inclusion, and partnership prioritization had to be supported by live, filterable analytics, not static reports.',
    solution: 'Engineered a two-tier architecture with a REST API backend for data ingestion, normalization, and aggregation, paired with a Next.js/TypeScript frontend. Consumed the NUMU Survey API to process raw learner profiles and compute metrics in real-time. Built four policy-facing dashboard modules: Dissemination Performance, Geographic Insights, Interest & Strategy, and a Unified Learner Profile view with provider status badges from Microsoft and Oracle platforms.',
    impact: [
      'Delivered a working government-grade prototype within a 24-hour hackathon',
      'Visualized registration data for 4,800+ learners across 8 Lebanese regions',
      'Enabled ministry officials to drill down from national to sub-entity level',
      'Identified underrepresented regions for targeted outreach using geographic gap analysis',
      'Recognized among top finalist groups by the MITAI jury',
      'Deployed live on Vercel'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'REST API', 'pnpm', 'Vercel'],
    timeline: 'February 2026',
    role: 'Frontend Developer - Code for Lebanon x USJ Hackathon'
  },
  {
    id: 'atm-ml-prediction',
    category: 'Machine Learning',
    title: 'ATM Failure Prediction System',
    subtitle: 'Production ML pipeline for predictive maintenance of 130+ Lebanese ATMs',
    image: '/dist/project-images/atm-prediction-failure.jpg',
    tags: ['Machine Learning', 'Python', 'XGBoost', 'SQL', 'Docker'],
    overview: 'End-to-end ML system that predicts ATM failures 24 hours in advance, enabling proactive maintenance and preventing customer-facing downtime.',
    challenge: 'ATM maintenance was reactive, only discovering failures through customer complaints. The goal was to predict failures before they happen.',
    solution: 'Engineered 249 features from operational data. Trained an XGBoost ensemble model with isotonic calibration and wired it into daily prediction and monitoring workflows.',
    impact: [
      '85 PR-AUC on validation set',
      'Transformed maintenance from reactive to proactive',
      'Automated daily 24-hour-ahead predictions for 130 ATMs',
      'Infrastructure event detection prevents fleet-wide false alarms'
    ],
    technologies: ['Python', 'SQL Server', 'Pandas', 'XGBoost', 'Scikit-learn', 'LightGBM', 'SHAP', 'Docker', 'NumPy', 'joblib'],
    timeline: 'Winter 2026 - May 2026',
    role: 'AI Lab Engineer - Bank Byblos (Handoff Report v1.0)',
    github: 'https://github.com/ilona0712/ATM-Failure-Prediction'
  },
  {
    id: 'xray-computer-vision',
    category: 'Machine Learning',
    title: 'X-Ray Image Analysis - Computer Vision System',
    subtitle: 'Deep learning pipeline for automated medical X-ray classification and anomaly detection',
    image: '/dist/project-images/X-Ray.jpg',
    tags: ['Computer Vision', 'Deep Learning', 'Python', 'Medical Imaging'],
    overview: 'Built a computer vision system for automated X-ray image classification using convolutional neural networks to detect and classify anomalies in medical imaging.',
    challenge: 'Medical X-ray analysis traditionally relies on manual radiologist review, which is time-consuming and expensive. The goal was to build an automated system that could accurately classify X-rays and flag anomalies to assist clinicians.',
    solution: 'Developed a deep learning pipeline using CNN architectures for image classification. Built preprocessing pipelines, data augmentation, hyperparameter tuning, and evaluation workflows including ROC curves and interpretability visualizations.',
    impact: [
      'Automated X-ray image classification reducing manual review time',
      'Implemented CNN-based anomaly detection with strong accuracy metrics',
      'Built preprocessing pipelines handling diverse medical image formats',
      'Created interpretable visualizations of model decisions for clinical validation',
      'Developed an evaluation framework specific to medical imaging use cases',
      'Completed an end-to-end deep learning project from data collection to deployment'
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Pandas'],
    timeline: 'April 2026',
    role: 'Computer Vision Developer',
    github: 'https://github.com/ilona0712/X-Ray'
  },
  {
    id: 'gmail-automation',
    category: 'Automation',
    title: 'Intelligent Gmail Cleanup System',
    subtitle: 'Automated email management and organization with intelligent filtering and archival',
    image: '/dist/project-images/gmail-cleanup.jpg',
    tags: ['Python', 'Gmail API', 'Automation', 'Email Management'],
    overview: 'Developed an automated Gmail cleanup and management system that intelligently organizes, filters, and archives emails based on sophisticated rules.',
    challenge: 'Email inboxes quickly become overwhelming with thousands of messages. The system needed to automatically categorize, filter, and archive emails while preserving important messages and respecting user preferences.',
    solution: 'Built a Python automation tool that integrates with the Gmail API to process emails at scale. Implemented intelligent filtering rules, automated archival workflows, a configurable rules system, and transparent logging.',
    impact: [
      'Reduced inbox clutter by automatically archiving non-essential emails',
      'Delivered intelligent categorization without manual sorting',
      'Added customizable filtering rules for different email types',
      'Preserved important messages while removing noise',
      'Automated recurring cleanup tasks saving hours per month',
      'Built a scalable system handling thousands of emails'
    ],
    technologies: ['Python', 'Gmail API', 'OAuth 2.0', 'Email Processing', 'Configuration Management'],
    timeline: 'May 2026',
    role: 'Automation Engineer'
  },
  {
    id: 'metabase-dashboard',
    category: 'Data Engineering',
    title: 'Interactive Metabase Analytics Dashboard',
    subtitle: 'Real-time business intelligence and data visualization for operational analytics',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=75',
    tags: ['Metabase', 'Data Visualization', 'Business Intelligence', 'Analytics'],
    overview: 'Designed and deployed an interactive Metabase analytics dashboard that aggregates operational data and presents it through intuitive, drill-down visualizations.',
    challenge: 'Stakeholders needed real-time visibility into operational metrics but lacked technical expertise to query databases. Static weekly reports were too slow for decision-making.',
    solution: 'Built a comprehensive Metabase instance with interconnected dashboards, time-series charts, geographic heatmaps, drill-down tables, KPI cards, automated refresh, and role-based access.',
    impact: [
      'Delivered an interactive self-service analytics platform to 50+ stakeholders',
      'Reduced report generation time from one week to real-time queries',
      'Enabled drill-down exploration from high-level KPIs to transaction details',
      'Built geographic visualizations revealing regional performance patterns',
      'Implemented row-level security for role-based access',
      'Increased data literacy across the organization through an intuitive interface'
    ],
    technologies: ['Metabase', 'SQL', 'Data Visualization', 'BI Tools', 'Database Integration'],
    timeline: 'Spring 2026',
    role: 'Analytics Engineer'
  },
  {
    id: 'web-scraping-ml',
    category: 'Machine Learning',
    title: 'Intelligent Web Scraping System',
    subtitle: 'Multi-format data extraction pipeline for ML training',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=75',
    tags: ['Python', 'Docker', 'Web Scraping', 'Data Engineering'],
    overview: "Developed a comprehensive web scraping system at Byblos Bank AI Lab to extract external data from multiple sources for machine learning training, with a focus on Lebanese events, holidays, and news.",
    challenge: 'Needed to collect and organize diverse external data from multiple website formats to enrich ML models with real-world context.',
    solution: 'Developed a Python-based scraping system capable of handling static HTML pages, REST APIs, and dynamic content. Built intelligent crawling logic and containerized the workflow with Docker.',
    impact: [
      'Successfully extracted and organized data from multiple diverse sources',
      'Built a flexible scraper handling HTML, API, and dynamic content formats',
      'Containerized the application using Docker',
      'Created reusable extraction pipelines for ongoing data collection needs',
      'Enriched ML training data with contextual external information',
      'Established a foundation for production-grade data engineering practices'
    ],
    technologies: ['Python', 'BeautifulSoup', 'Selenium', 'Requests', 'Docker', 'JSON', 'APIs'],
    timeline: 'Winter 2026',
    role: 'AI Lab Intern - Byblos Bank'
  },
  {
    id: 'database-backup',
    category: 'Development',
    title: 'Automated Database Backup System',
    subtitle: 'Cloud-based data security and recovery solution',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=75',
    tags: ['Backend', 'Automation', 'Cloud', 'Python'],
    overview: "Engineered an automated system to ensure data integrity and availability for DigitalCircle's POS system through scheduled backups and cloud storage integration.",
    challenge: 'Manual database backups were inconsistent and prone to human error, risking data loss and business continuity.',
    solution: 'Developed an automated backup pipeline that schedules daily database exports, securely transfers backups to Google Drive, implements versioning and retention policies, and reports backup status.',
    impact: [
      'Achieved 100% backup consistency with zero missed daily backups',
      'Ensured high data availability with up-to-date recovery points',
      'Eliminated daily manual backup tasks entirely',
      'Enhanced business continuity planning for the startup'
    ],
    technologies: ['Python', 'Google Drive API', 'Linux Cron Jobs', 'Shell Scripting'],
    timeline: 'Summer 2024',
    role: 'Backend Developer Intern - DigitalCircle'
  },
  {
    id: 'sound-tracking',
    category: 'Embedded Systems',
    title: 'Embedded Sound Tracking System',
    subtitle: 'Arduino-based directional audio detection with 7-mic array',
    image: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=800&q=75',
    tags: ['C++', 'Arduino', 'Embedded', 'Signal Processing'],
    overview: 'Academic project developing an intelligent system to identify and track sound sources using a 7-microphone array and servo motor-driven positioning.',
    challenge: 'Integrating multiple audio inputs with mechanical movement to accurately determine sound source direction in real time with minimal latency.',
    solution: 'Developed signal processing algorithms to analyze audio amplitude differences across the microphone array, implemented triangulation logic to calculate direction, and created motor control protocols for precise servo positioning.',
    impact: [
      'Successfully detected and tracked sound sources with high accuracy',
      'Achieved real-time performance with minimal latency',
      'Demonstrated practical application of signal processing and embedded concepts',
      'Completed full hardware-software integration from scratch using low-level C++'
    ],
    technologies: ['Arduino', 'C++', 'Signal Processing', 'Motor Control', 'Sensor Arrays'],
    timeline: 'Spring 2025',
    role: 'Academic Project - USJ'
  },
  {
    id: 'atm-live-dashboard',
    category: 'Data Engineering',
    title: 'ATM Live Status Dashboard',
    subtitle: "Real-time data integration dashboard tracking inactive and error-state ATMs across a bank's full network",
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=75',
    tags: ['SQL', 'Data Integration', 'Dashboard', 'Banking'],
    overview: "Built a live data integration layer and operational dashboard that gives the bank's operations team real-time visibility into the status of every ATM in the network.",
    challenge: 'The bank had no centralized live view of ATM health across its network. Status checks were manual and reactive, resulting in extended downtime and slower incident response.',
    solution: 'Designed and wrote SQL queries to extract, filter, and aggregate real-time ATM status data, classify machine states, and surface incidents through a live auto-refreshing dashboard.',
    impact: [
      'Delivered a live dashboard providing real-time status across the full ATM network',
      'Eliminated manual status checks with a single always-current source of truth',
      'Enabled immediate incident response by surfacing inactive and error-state machines as they occur',
      'Distinguished between error types, helping operations teams prioritize and triage effectively',
      'Directly complemented the ATM Failure Prediction ML system by validating real failure patterns'
    ],
    technologies: ['SQL', 'SQL Server', 'Data Integration', 'Dashboard Tools', 'Python'],
    timeline: 'Winter 2026 - Present',
    role: 'AI Lab Intern - Byblos Bank'
  },
  {
    id: 'email-agent',
    category: 'Automation',
    title: 'Personalized Internship Email Agent',
    subtitle: 'Python automation agent that sent 30 personalized applications in one run',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=75',
    tags: ['Python', 'SMTP', 'Automation', 'Email'],
    overview: 'Built a Python email automation agent from scratch to handle the entire internship outreach pipeline, from reading company data to generating personalized messages and attaching a CV.',
    challenge: 'The university sent a structured list of 33+ companies across diverse industries. Manually writing personalized applications for each one would have been slow and inconsistent.',
    solution: 'Built a pipeline with a data layer for targets and contact info, a personalized email generator, and an SMTP dispatcher using Gmail App Passwords. Added preview tooling and JSON audit logging.',
    impact: [
      '30 emails sent successfully in a single automated run on February 3, 2026',
      'Each email addressed the correct supervisor by name and referenced the company specifically',
      'Attached the CV automatically to every email',
      'Captured a full audit trail with timestamps, company, email, and status',
      'Reached a 91% delivery success rate'
    ],
    technologies: ['Python', 'smtplib', 'SMTP / Gmail API', 'pandas', 'openpyxl', 'JSON', 'MIMEMultipart'],
    timeline: 'February 2026',
    role: 'Personal Project'
  },
  {
    id: 'digitalcircle-web-portfolio',
    category: 'Development',
    title: 'Client Website Portfolio - DigitalCircle',
    subtitle: '6 production websites built with WordPress & Elementor across diverse industries',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=75',
    tags: ['WordPress', 'Elementor', 'UI/UX', 'Frontend'],
    overview: 'During my internship at DigitalCircle, I independently designed and developed 6 production client websites using WordPress and Elementor across a range of industries.',
    challenge: 'Each client had different audiences, branding needs, and functional requirements. The challenge was delivering polished results efficiently while adapting the UX to each context.',
    solution: 'Handled each project end-to-end: gathering requirements, designing custom layouts in Elementor, structuring content, and ensuring full mobile and desktop responsiveness.',
    impact: [
      'Delivered 6 live, production-ready websites across 6 different industries',
      'Built junetlb.com entirely solo from requirements to launch',
      'Resolved over 90% of front-end bugs within 48 hours across all client sites',
      'Handled projects for clients in Lebanon and the United States',
      'Delivered pixel-perfect, fully responsive designs for both phone and desktop'
    ],
    technologies: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript', 'WooCommerce'],
    timeline: 'Summer 2023 & 2024',
    role: 'Frontend Developer Intern - DigitalCircle',
    websiteLinks: [
      { label: 'junetlb.com', url: 'https://junetlb.com' },
      { label: 'woodies.design', url: 'https://woodies.design' },
      { label: 'boisdesign.me', url: 'https://boisdesign.me' },
      { label: 'camealeon.org', url: 'https://camealeon.org' },
      { label: 'bzahle.com', url: 'https://bzahle.com' },
      { label: 'dvinemedspa.com', url: 'https://dvinemedspa.com' }
    ]
  },
  {
    id: 'maria-badari',
    category: 'Full-Stack',
    title: 'Maria Badari - Bridal Haute Couture Web App',
    subtitle: 'Multidisciplinary full-stack web platform for a bridal atelier with AI dress customization, live chat, and rental management',
    image: 'https://images.unsplash.com/photo-1594552072238-5c4a26f10bce?auto=format&fit=crop&w=800&q=75',
    tags: ['Full-Stack', 'AI', 'Web App', 'Team Project'],
    overview: 'A multidisciplinary academic project developed with classmates at USJ, building a complete web application for Maria Badari, a bridal haute couture atelier.',
    challenge: 'The challenge was digitizing the full client journey for a luxury fashion context while preserving personalization and giving the atelier owner control without technical overhead.',
    solution: 'Built a feature-complete web application with a dress browsing gallery, rental requests, AI-guided customization, live chat, and a dynamic admin panel for the atelier owner.',
    impact: [
      'Delivered a production-ready full-stack web app covering the complete bridal client journey',
      'Integrated AI-guided customization for dress exploration and personalization',
      'Built a live chat system enabling real-time owner-client communication',
      'Replaced manual rental booking with a structured digital flow',
      'Empowered the atelier owner to manage everything independently',
      'Launched at mariabadari.com'
    ],
    technologies: ['Full-Stack Web', 'AI / Recommendation System', 'Live Chat', 'Admin Dashboard', 'Database'],
    timeline: 'Spring 2026',
    role: 'Full-Stack Developer - Academic Team Project, USJ',
    liveUrl: 'https://www.mariabadari.com'
  },
  {
    id: 'ccna-networking',
    category: 'Networking',
    title: 'CCNA Networking Foundations',
    subtitle: 'Enterprise network design and implementation',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=75',
    tags: ['Networking', 'Cisco', 'CCNA', 'Infrastructure'],
    overview: 'Comprehensive networking knowledge gained through the Cisco CCNA certification program, covering fundamental to intermediate networking concepts and practical configurations.',
    challenge: 'Mastering complex networking concepts and practical configuration skills required for enterprise network deployment.',
    solution: 'Completed CCNA 1 covering OSI/TCP-IP models, IP addressing, subnetting, and basic router/switch configuration, then CCNA 2 covering routing, VLANs, inter-VLAN routing, and network security.',
    impact: [
      'Cisco CCNA 1 certified - Introduction to Networking',
      'Cisco CCNA 2 certified - Routing & Switching Essentials',
      'Acquired hands-on experience with router and switch configuration',
      'Built a foundation for enterprise networking and infrastructure roles'
    ],
    technologies: ['Cisco Routers', 'Cisco Switches', 'Packet Tracer', 'Network Protocols'],
    timeline: 'Completed',
    role: 'Self-Directed Certification'
  }
];
