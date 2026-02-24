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
    id: 'atm-ml-prediction',
    category: 'Machine Learning',
    title: 'ATM Failure Prediction System',
    subtitle: 'Predictive maintenance ML system for banking infrastructure',
    image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBBVE0lMjBiYW5raW5nJTIwcHJlZGljdGlvbnxlbnwxfHx8fDE3NzEyNDU4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Machine Learning', 'Python', 'SQL', 'Data Science'],
    overview: 'Designed and implemented an end-to-end machine learning system for predictive maintenance of ATM networks at Byblos Bank, forecasting equipment failures 24 hours in advance to enable proactive maintenance and reduce downtime.',
    challenge: 'ATM failures are costly, causing lost transactions, frustrated customers, emergency repair costs, and damaged reputation. Traditional reactive maintenance meant waiting for failures before fixing them, leading to unplanned downtime and customer dissatisfaction.',
    solution: 'Built a comprehensive ML pipeline that processes millions of telemetry records from 250+ ATMs, engineering 136 predictive features including 21 component states, 18 error types, 7-day and 30-day rolling patterns, trend analysis, and lag features. Developed advanced SQL queries (400+ lines) using window functions, CTEs, and lag calculations. Trained and compared multiple ML models (Random Forest, XGBoost, LightGBM) with automated best-model selection. Implemented time-based train/test splits to prevent data leakage, handled class imbalance with balanced class weights, and optimized daily prediction processing time by 95%. Integrated SHAP-based model interpretability for maintenance team adoption and trust.',
    impact: [
      'Successfully predicts ATM failures 24 hours in advance',
      'Transformed reactive maintenance into proactive maintenance workflow',
      'Automated daily predictions with risk categorization: Critical (≥80%), High (60-79%), Medium (40-59%), Low (<40%)',
      'Reduced daily prediction processing time by 95% (from minutes to seconds)',
      'Enabled maintenance teams to prioritize high-risk ATMs effectively',
      'Built interpretable models showing why each ATM is flagged as high-risk'
    ],
    technologies: ['Python', 'SQL Server', 'Pandas', 'Scikit-learn', 'XGBoost', 'LightGBM', 'SHAP', 'NumPy'],
    timeline: 'Winter 2025 - Present',
    role: 'AI Lab Intern - Machine Learning Engineer'
  },
  {
    id: 'web-scraping-ml',
    category: 'Machine Learning',
    title: 'Intelligent Web Scraping System',
    subtitle: 'Multi-format data extraction pipeline for ML training',
    image: 'https://images.unsplash.com/photo-1604403428907-673e7f4cd341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBzY3JhcGluZyUyMGRhdGElMjBleHRyYWN0aW9uJTIwY29kZXxlbnwxfHx8fDE3NzEyNDU4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Python', 'Docker', 'Web Scraping', 'Data Engineering'],
    overview: 'Developed a comprehensive web scraping system at Byblos Bank AI Lab to extract external data from multiple sources for machine learning training, with focus on organizing Lebanese events, holidays, and news for business intelligence applications.',
    challenge: 'Needed to collect and organize diverse external data from various website formats (HTML, APIs, dynamic content) to enrich ML models with real-world context. The system had to handle multiple data formats and intelligently crawl websites to extract comprehensive information for events happening in Lebanon, national holidays, road closures, and relevant news.',
    solution: 'Developed a Python-based scraping system capable of handling multiple website formats including static HTML pages, RESTful APIs, and dynamic content loaded through divs with URL calls. Implemented intelligent crawling logic to navigate through website structures and extract all relevant information. Built containerized deployment using Docker (first time working with Docker), ensuring consistent execution across environments. Organized extracted data into structured categories: events in Lebanon, national holidays, news about road closures and incidents, and other relevant business intelligence data. Created robust error handling and data validation to ensure quality of extracted information.',
    impact: [
      'Successfully extracted and organized data from multiple diverse sources',
      'Built flexible scraper handling HTML, API, and dynamic content formats',
      'Implemented intelligent crawling to automatically discover and extract nested data',
      'Containerized application using Docker for first time, mastering deployment workflows',
      'Provided clean, categorized data for ML model training and business intelligence',
      'Enabled automated data collection reducing manual research time significantly'
    ],
    technologies: ['Python', 'Docker', 'BeautifulSoup', 'Requests', 'Selenium', 'APIs', 'Data Processing'],
    timeline: 'Winter 2025 - Present',
    role: 'AI Lab Intern - Data Engineer'
  },
  {
    id: 'erpnext-pos',
    category: 'Development',
    title: 'ERPNext POS System Customization',
    subtitle: 'Restaurant POS interface with table management and reservations',
    image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrZW5kJTIwc2VydmVyJTIwY29kZSUyMG9wdGltaXphdGlvbnxlbnwxfHx8fDE3NzEyNDA0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Backend', 'Frontend', 'UI/UX'],
    overview: 'Customized ERPNext POS system for DigitalCircle startup, transforming a retail-focused system into a comprehensive restaurant management solution with table management and reservation capabilities.',
    challenge: 'The installed version of ERPNext POS was designed exclusively for retail stores and lacked essential restaurant features such as table management, reservations, and dining-specific workflows.',
    solution: 'Redesigned the UI of the POS frontend display and created a custom interface tailored for restaurants. Developed features allowing restaurant owners to view tables, manage reservations, track table status, and handle dine-in operations efficiently. Implemented backend customizations and frontend enhancements to support the restaurant business model.',
    impact: [
      'Successfully transformed retail POS into a restaurant-ready solution',
      'Enabled efficient table and reservation management for restaurant operations',
      'Improved user experience with intuitive restaurant-focused interface',
      'Decreased average transaction processing time by 3 seconds',
      'Enabled 20% more transactions processed per hour'
    ],
    technologies: ['ERPNext', 'Python', 'JavaScript', 'UI/UX Design'],
    timeline: 'Summer 2023 & 2024',
    role: 'Backend Developer Intern'
  },
  {
    id: 'automated-backup',
    category: 'Development',
    title: 'Automated Database Backup System',
    subtitle: 'Cloud-based data security and recovery solution',
    image: 'https://images.unsplash.com/photo-1667372283496-893f0b1e7c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGRhdGFiYXNlJTIwc2VjdXJpdHklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MTI0MDQwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Backend', 'Automation', 'Cloud'],
    overview: 'Engineered an automated system to ensure data integrity and availability for DigitalCircle\'s POS system through scheduled backups and cloud storage integration.',
    challenge: 'Manual database backups were inconsistent and prone to human error, risking data loss and business continuity.',
    solution: 'Developed an automated backup pipeline that schedules daily database exports from the POS system, securely transfers backups to Google Drive using API integration, implements versioning and retention policies, and provides notification system for backup status.',
    impact: [
      'Achieved 100% backup consistency',
      'Ensured high data availability with up-to-date recovery points',
      'Reduced manual intervention time by eliminating daily backup tasks',
      'Enhanced business continuity planning'
    ],
    technologies: ['Python', 'Google Drive API', 'Linux Cron Jobs', 'Shell Scripting'],
    timeline: 'Summer 2024'
  },
  {
    id: 'wordpress-portfolio',
    category: 'Development',
    title: 'Responsive Client Website Portfolio',
    subtitle: 'WordPress-based web solutions with focus on UX',
    image: 'https://images.unsplash.com/photo-1705904506592-d8a0d5392c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwd2ViJTIwZGVzaWduJTIwd29yZHByZXNzfGVufDF8fHx8MTc3MTI0MDQwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Frontend', 'WordPress', 'UI/UX'],
    overview: 'Designed, developed, and maintained multiple client websites using WordPress and Elementor, delivering responsive and user-friendly web experiences optimized for both mobile and desktop viewing.',
    challenge: 'Clients needed professional, responsive websites that could be delivered quickly while maintaining high quality, performance standards, and seamless user experience across all devices.',
    solution: 'Conducted client consultations to understand business requirements, created custom layouts using Elementor page builder, and optimized for mobile responsiveness across all device sizes. Notable projects include junetlb.com (developed entirely independently from start to finish), woodies.design, and several other client websites. Implemented SEO best practices and established rapid bug-fixing workflow to ensure consistent quality.',
    impact: [
      'Successfully delivered junetlb.com as a complete solo project',
      'Created woodies.design and multiple other professional client websites',
      'Resolved over 90% of front-end bugs within 48 hours',
      'Delivered pixel-perfect, responsive designs for both phone and PC views',
      'Improved client satisfaction through quick turnaround times',
      'Enhanced website performance and loading speeds across all devices'
    ],
    technologies: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    timeline: 'Summer 2023 & 2024'
  },
  {
    id: 'sound-tracking',
    category: 'Embedded Systems',
    title: 'Embedded Sound Tracking System',
    subtitle: 'Arduino-based directional audio detection',
    image: 'https://images.unsplash.com/photo-1605143185693-931d6c06ed0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmR1aW5vJTIwbWljcm9waG9uZSUyMGhhcmR3YXJlJTIwZW1iZWRkZWR8ZW58MXx8fHwxNzcxMjQwNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Embedded', 'C++', 'Hardware'],
    overview: 'Academic project developing an intelligent system to identify and track sound sources using microphone array technology and motor-driven positioning.',
    challenge: 'Integrating multiple audio inputs with mechanical movement to accurately determine sound source direction in real-time.',
    solution: 'Developed signal processing algorithms to analyze audio amplitude differences, implemented triangulation logic to calculate sound source direction, created motor control protocols for precise positioning, and optimized for real-time performance with minimal latency.',
    impact: [
      'Successfully detected and tracked sound sources with high accuracy',
      'Achieved real-time performance with minimal latency',
      'Demonstrated practical application of signal processing concepts',
      'Enhanced understanding of hardware-software integration'
    ],
    technologies: ['Arduino', 'C++', 'Signal Processing', 'Motor Control'],
    timeline: 'Spring 2025'
  },
  {
    id: 'ccna-networking',
    category: 'Networking',
    title: 'CCNA Networking Foundations',
    subtitle: 'Enterprise network design and implementation',
    image: 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwcm91dGVyJTIwY2lzY28lMjBzd2l0Y2hlc3xlbnwxfHx8fDE3NzEyNDA0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Networking', 'Cisco', 'Infrastructure'],
    overview: 'Comprehensive networking knowledge gained through Cisco CCNA certification program, covering fundamental to intermediate networking concepts and practical implementations.',
    challenge: 'Mastering complex networking concepts and practical configuration skills required for enterprise network deployment.',
    solution: 'Completed CCNA 1 (Introduction to Networking) covering network fundamentals, OSI and TCP/IP models, IP addressing and subnetting, and basic router and switch configuration. Completed CCNA 2 (Routing & Switching Essentials) covering static and dynamic routing protocols, VLAN configuration, inter-VLAN routing, and network security.',
    impact: [
      'Gained proficiency in network design and implementation',
      'Acquired hands-on experience with router and switch configuration',
      'Developed strong troubleshooting and diagnostic skills',
      'Built foundation for advanced networking certifications'
    ],
    technologies: ['Cisco Routers', 'Cisco Switches', 'Packet Tracer', 'Network Protocols'],
    timeline: 'Completed'
  }
];
