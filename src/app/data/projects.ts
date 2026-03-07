export interface Project {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  overview: string;
  challenge: string;
  solution: string;
  impact: string[];
  technologies: string[];
  timeline: string;
  role?: string;
}

export const projects: Project[] = [
  {
    id: 'numu-dashboard',
    category: 'Full-Stack',
    title: 'NUMŪ National Analytics Dashboard',
    subtitle: 'Government monitoring platform for Lebanon\'s national AI upskilling program',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzE5NTAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'TypeScript', 'Data Visualization', 'REST API'],
    overview: 'Built a full-stack national monitoring and analytics platform for Lebanon\'s Ministry of IT & AI (MITAI), commissioned as part of the Code for Lebanon x USJ Hackathon. The platform serves as the operational backbone for the NUMŪ national AI upskilling program, giving ministry officials real-time visibility into registration performance, learner demographics, geographic reach, and training track demand.',
    challenge: 'The Ministry needed a data-driven tool to monitor the national rollout of NUMŪ across 8 Lebanese regions, tracking 4,800+ registered learners spanning universities, syndicates, public sector entities, NGOs, and employers. Policy decisions around outreach strategy, regional inclusion, and partnership prioritization had to be supported by live, filterable analytics — not static reports.',
    solution: 'Engineered a two-tier architecture with a REST API backend for data ingestion, normalization, and aggregation, paired with a Next.js/TypeScript frontend. Consumed the NUMŪ Survey API to process raw learner profiles and compute metrics in real-time. Built four policy-facing dashboard modules: Dissemination Performance (channel breakdown with drill-down to sub-entities), Geographic Insights (regional distribution and gap analysis), Interest & Strategy (track demand heatmaps and learning motivation analysis), and a Unified Learner Profile view with provider status badges from Microsoft and Oracle platforms.',
    impact: [
      'Delivered a working government-grade prototype within a 24-hour hackathon',
      'Visualized registration data for 4,800+ learners across 8 Lebanese regions',
      'Enabled ministry officials to drill down from national to sub-entity level (e.g. specific university)',
      'Identified underrepresented regions for targeted outreach using geographic gap analysis',
      'Recognized among top finalist groups by Ministry of IT & AI (MITAI) jury',
      'Deployed live at: v0-frontend-web-numu.vercel.app'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'REST API', 'pnpm', 'Vercel'],
    timeline: 'February 2026',
    role: 'Frontend Developer — Code for Lebanon x USJ Hackathon'
  },
  {
    id: 'atm-ml-prediction',
    category: 'Machine Learning',
    title: 'ATM Failure Prediction System',
    subtitle: 'Predictive maintenance ML system for banking infrastructure',
    image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBBVE0lMjBiYW5raW5nJTIwcHJlZGljdGlvbnxlbnwxfHx8fDE3NzEyNDU4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Machine Learning', 'Python', 'SQL', 'Data Science'],
    overview: 'Designed and implemented an end-to-end machine learning system for predictive maintenance of ATM networks at Byblos Bank, forecasting equipment failures 24 hours in advance to enable proactive maintenance and reduce downtime.',
    challenge: 'ATM failures are costly, causing lost transactions, frustrated customers, emergency repair costs, and damaged reputation. Traditional reactive maintenance meant waiting for failures before fixing them, leading to unplanned downtime and customer dissatisfaction.',
    solution: 'Built a comprehensive ML pipeline that processes millions of telemetry records from 250+ ATMs, engineering 136 predictive features including 21 component states, 18 error types, 7-day and 30-day rolling patterns, trend analysis, and lag features. Developed advanced SQL queries (400+ lines) using window functions, CTEs, and lag calculations. Trained and compared multiple ML models (Random Forest, XGBoost, LightGBM) with automated best-model selection. Implemented time-based train/test splits to prevent data leakage, handled class imbalance with balanced class weights, and optimized daily prediction processing time by 95%. Integrated SHAP-based model interpretability for maintenance team adoption and trust.',
    impact: [
      'Successfully predicts ATM failures 24 hours in advance',
      'Transformed reactive maintenance into proactive maintenance workflow',
      'Automated daily predictions with risk categorization: Critical (≥80%), High (60-79%), Medium (40-59%), Low (<40%)',
      'Reduced daily prediction processing time by 95%',
      'Enabled maintenance teams to prioritize high-risk ATMs effectively',
      'Built interpretable models showing why each ATM is flagged as high-risk'
    ],
    technologies: ['Python', 'SQL Server', 'Pandas', 'Scikit-learn', 'XGBoost', 'LightGBM', 'SHAP', 'NumPy'],
    timeline: 'Winter 2025 – Present',
    role: 'AI Lab Intern — Bank Byblos'
  },
  {
    id: 'web-scraping-ml',
    category: 'Machine Learning',
    title: 'Intelligent Web Scraping System',
    subtitle: 'Multi-format data extraction pipeline for ML training',
    image: 'https://images.unsplash.com/photo-1604403428907-673e7f4cd341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBzY3JhcGluZyUyMGRhdGElMjBleHRyYWN0aW9uJTIwY29kZXxlbnwxfHx8fDE3NzEyNDU4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Python', 'Docker', 'Web Scraping', 'Data Engineering'],
    overview: 'Developed a comprehensive web scraping system at Byblos Bank AI Lab to extract external data from multiple sources for machine learning training, with focus on organizing Lebanese events, holidays, and news for business intelligence applications.',
    challenge: 'Needed to collect and organize diverse external data from various website formats (HTML, APIs, dynamic content) to enrich ML models with real-world context for events happening in Lebanon, national holidays, road closures, and relevant news.',
    solution: 'Developed a Python-based scraping system capable of handling multiple website formats including static HTML pages, RESTful APIs, and dynamic content. Implemented intelligent crawling logic to navigate through website structures and extract all relevant information. Built containerized deployment using Docker for the first time, ensuring consistent execution across environments.',
    impact: [
      'Successfully extracted and organized data from multiple diverse sources',
      'Built flexible scraper handling HTML, API, and dynamic content formats',
      'Containerized application using Docker — first hands-on containerization experience',
      'Provided clean, categorized data for ML model training and business intelligence',
      'Enabled automated data collection reducing manual research time significantly'
    ],
    technologies: ['Python', 'Docker', 'BeautifulSoup', 'Requests', 'Selenium', 'APIs'],
    timeline: 'Winter 2025 – Present',
    role: 'AI Lab Intern — Bank Byblos'
  },
  {
    id: 'erpnext-pos',
    category: 'Development',
    title: 'ERPNext POS System Customization',
    subtitle: 'Restaurant POS interface with table management and reservations',
    image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrZW5kJTIwc2VydmVyJTIwY29kZSUyMG9wdGltaXphdGlvbnxlbnwxfHx8fDE3NzEyNDA0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Backend', 'Frontend', 'ERPNext', 'Python'],
    overview: 'Customized ERPNext POS system for DigitalCircle startup, transforming a retail-focused system into a comprehensive restaurant management solution with table management and reservation capabilities.',
    challenge: 'The installed version of ERPNext POS was designed exclusively for retail stores and lacked essential restaurant features such as table management, reservations, and dining-specific workflows.',
    solution: 'Redesigned the POS frontend interface and created a custom UI tailored for restaurants. Developed features allowing restaurant owners to view tables, manage reservations, track table status, and handle dine-in operations efficiently. Implemented backend customizations in Python to support the restaurant business model.',
    impact: [
      'Successfully transformed retail POS into a restaurant-ready solution',
      'Decreased average transaction processing time by 3 seconds',
      'Enabled 20% more transactions processed per hour',
      'Enabled efficient table and reservation management for restaurant operations'
    ],
    technologies: ['ERPNext', 'Python', 'JavaScript', 'UI/UX Design'],
    timeline: 'Summer 2023 & 2024',
    role: 'Backend Developer Intern — DigitalCircle'
  },
  {
    id: 'automated-backup',
    category: 'Development',
    title: 'Automated Database Backup System',
    subtitle: 'Cloud-based data security and recovery solution',
    image: 'https://images.unsplash.com/photo-1667372283496-893f0b1e7c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGRhdGFiYXNlJTIwc2VjdXJpdHklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MTI0MDQwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Backend', 'Automation', 'Cloud', 'Python'],
    overview: 'Engineered an automated system to ensure data integrity and availability for DigitalCircle\'s POS system through scheduled backups and cloud storage integration.',
    challenge: 'Manual database backups were inconsistent and prone to human error, risking data loss and business continuity for a growing startup.',
    solution: 'Developed an automated backup pipeline that schedules daily database exports from the POS system, securely transfers backups to Google Drive using API integration, implements versioning and retention policies, and provides a notification system for backup status.',
    impact: [
      'Achieved 100% backup consistency — zero missed daily backups',
      'Ensured high data availability with up-to-date recovery points',
      'Eliminated daily manual backup tasks entirely',
      'Enhanced business continuity planning for the startup'
    ],
    technologies: ['Python', 'Google Drive API', 'Linux Cron Jobs', 'Shell Scripting'],
    timeline: 'Summer 2024',
    role: 'Backend Developer Intern — DigitalCircle'
  },
  {
    id: 'wordpress-portfolio',
    category: 'Development',
    title: 'Responsive Client Website Portfolio',
    subtitle: 'WordPress-based web solutions with focus on UX',
    image: 'https://images.unsplash.com/photo-1705904506592-d8a0d5392c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwd2ViJTIwZGVzaWduJTIwd29yZHByZXNzfGVufDF8fHx8MTc3MTI0MDQwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['WordPress', 'Elementor', 'Frontend', 'UI/UX'],
    overview: 'Designed, developed, and maintained multiple client websites using WordPress and Elementor, delivering responsive and user-friendly web experiences optimized for both mobile and desktop.',
    challenge: 'Clients needed professional, responsive websites delivered quickly while maintaining high quality and seamless user experience across all devices.',
    solution: 'Conducted client consultations to understand requirements, created custom layouts using Elementor, and optimized for mobile responsiveness. Notable projects include junetlb.com (built independently from start to finish) and woodies.design. Established a rapid bug-fixing workflow to ensure consistent quality.',
    impact: [
      'Successfully delivered junetlb.com as a complete solo project',
      'Created woodies.design and multiple other professional client websites',
      'Resolved over 90% of front-end bugs within 48 hours',
      'Delivered pixel-perfect, responsive designs for phone and desktop'
    ],
    technologies: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript'],
    timeline: 'Summer 2023 & 2024',
    role: 'Frontend Developer Intern — DigitalCircle'
  },
  {
    id: 'sound-tracking',
    category: 'Embedded Systems',
    title: 'Embedded Sound Tracking System',
    subtitle: 'Arduino-based directional audio detection with 7-mic array',
    image: 'https://images.unsplash.com/photo-1605143185693-931d6c06ed0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmR1aW5vJTIwbWljcm9waG9uZSUyMGhhcmR3YXJlJTIwZW1iZWRkZWR8ZW58MXx8fHwxNzcxMjQwNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['C++', 'Arduino', 'Embedded', 'Signal Processing'],
    overview: 'Academic project developing an intelligent system to identify and track sound sources using a 7-microphone array and servo motor-driven positioning.',
    challenge: 'Integrating multiple audio inputs with mechanical movement to accurately determine sound source direction in real-time with minimal latency.',
    solution: 'Developed signal processing algorithms to analyze audio amplitude differences across the microphone array, implemented triangulation logic to calculate sound source direction, and created motor control protocols for precise servo positioning using low-level C++.',
    impact: [
      'Successfully detected and tracked sound sources with high accuracy',
      'Achieved real-time performance with minimal latency',
      'Demonstrated practical application of signal processing and embedded concepts',
      'Full hardware-software integration from scratch using low-level C++'
    ],
    technologies: ['Arduino', 'C++', 'Signal Processing', 'Motor Control', 'Sensor Arrays'],
    timeline: 'Spring 2025',
    role: 'Academic Project — USJ'
  },
  {
    id: 'ccna-networking',
    category: 'Networking',
    title: 'CCNA Networking Foundations',
    subtitle: 'Enterprise network design and implementation',
    image: 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwcm91dGVyJTIwY2lzY28lMjBzd2l0Y2hlc3xlbnwxfHx8fDE3NzEyNDA0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Networking', 'Cisco', 'CCNA', 'Infrastructure'],
    overview: 'Comprehensive networking knowledge gained through Cisco CCNA certification program, covering fundamental to intermediate networking concepts and practical configurations.',
    challenge: 'Mastering complex networking concepts and practical configuration skills required for enterprise network deployment.',
    solution: 'Completed CCNA 1 (Introduction to Networking) covering OSI/TCP-IP models, IP addressing, subnetting, and basic router/switch configuration. Completed CCNA 2 (Routing & Switching Essentials) covering static/dynamic routing, VLAN configuration, inter-VLAN routing, and network security.',
    impact: [
      'Cisco CCNA 1 certified — Introduction to Networking',
      'Cisco CCNA 2 certified — Routing & Switching Essentials',
      'Acquired hands-on experience with router and switch configuration',
      'Built foundation for enterprise networking and infrastructure roles'
    ],
    technologies: ['Cisco Routers', 'Cisco Switches', 'Packet Tracer', 'Network Protocols'],
    timeline: 'Completed',
    role: 'Self-Directed Certification'
  }
];