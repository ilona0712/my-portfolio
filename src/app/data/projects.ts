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
  liveUrl?: string;
  websiteLinks?: { label: string; url: string }[];
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
    id: 'atm-live-dashboard',
    category: 'Data Engineering',
    title: 'ATM Live Status Dashboard',
    subtitle: 'Real-time data integration dashboard tracking inactive and error-state ATMs across a bank\'s full network',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzE5NTAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['SQL', 'Data Integration', 'Dashboard', 'Banking'],
    overview: 'As part of my internship at Byblos Bank\'s AI Lab, I built a live data integration layer and operational dashboard that gives the bank\'s operations team real-time visibility into the status of every ATM in the network. The dashboard flags machines that are currently inactive or in an error state, enabling the team to respond immediately rather than discovering problems after customer complaints.',
    challenge: 'The bank had no centralized, live view of ATM health across its network. Status checks were manual and reactive — teams only learned of failures after the fact, resulting in extended customer-facing downtime, lost transactions, and unnecessary emergency response costs. There was no system to distinguish between machines with recoverable errors versus those fully offline.',
    solution: 'Gained direct access to the bank\'s database and designed and wrote SQL queries to extract, filter, and aggregate real-time ATM status data. The queries classified each machine by operational state — active, inactive, or error — and surfaced the relevant details for each incident. These results were integrated into a live dashboard that auto-refreshes, giving the operations team an always-current network view without any manual intervention. This work was closely tied to the broader ATM ML prediction pipeline I also developed at the bank, where similar data was used to train predictive maintenance models.',
    impact: [
      'Delivered a live dashboard providing real-time status across the full ATM network',
      'Eliminated manual status checks — the team now has a single always-current source of truth',
      'Enabled immediate incident response by surfacing inactive and error-state machines as they occur',
      'Distinguished between error types, helping operations teams prioritize and triage effectively',
      'Directly complemented the ATM Failure Prediction ML system by validating real failure patterns'
    ],
    technologies: ['SQL', 'SQL Server', 'Data Integration', 'Dashboard Tools', 'Python'],
    timeline: 'Winter 2025 – Present',
    role: 'AI Lab Intern — Byblos Bank'
  },
  {
    id: 'email-agent',
    category: 'Automation',
    title: 'Personalized Internship Email Agent',
    subtitle: 'Python automation agent that sent 30 personalized applications — each with a tailored email body and CV attached — in one run',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMGF1dG9tYXRpb24lMjBhZ2VudHxlbnwxfHx8fDE3NzEyNDA0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Python', 'SMTP', 'Automation', 'Email'],
    overview: 'When my university provided a directory of companies for summer 2026 internship applications, I immediately saw a problem: sending a meaningful, personalized application to each one manually was not feasible at scale. So I built a Python email automation agent from scratch that handled the entire outreach pipeline — reading company data, generating personalized email bodies, attaching my CV, and dispatching everything via Gmail SMTP — with zero manual effort per email.',
    challenge: 'The university sent a structured list of 33+ companies across diverse industries (banking, AI, consulting, engineering, logistics, media). A generic mass email would be immediately dismissible. But manually writing a personalized email for each company — referencing the right supervisor, their industry, and my relevant experience — would take hours and introduce inconsistency. I needed a system that could do both: be fast and be personal.',
    solution: 'Built a full Python automation pipeline with three core components: (1) a data layer that reads company targets from an Excel sheet and cross-references a JSON file containing each company\'s supervisor name, position, and email address; (2) a dynamic email generator that personalizes each message with the correct greeting (e.g. "Dear Ms. Nahla Najjar,"), references the specific company by name, and highlights my current role at Byblos Bank AI Lab as a credibility signal; and (3) an SMTP dispatcher using Gmail App Passwords that sends each email with my CV attached as a PDF, with a 5-second delay between sends to avoid spam detection. A companion preview script let me verify any email before the batch ran. All results were logged to JSON files (sent and failed separately) with timestamps for full traceability.',
    impact: [
      '30 emails sent successfully in a single automated run on February 3, 2026',
      'Companies targeted included Dar Al-Handasah, BLOM Bank, KPMG, InMind.ai, CMA CGM, BishopByte, and 24 others',
      'Each email addressed the correct supervisor by name and referenced the company specifically',
      'CV attached automatically to every email — zero manual steps after setup',
      'Full audit trail: JSON logs captured timestamp, company, email, and status for every send',
      'Only 3 emails failed due to server-side connection issues — 91% delivery success rate'
    ],
    technologies: ['Python', 'smtplib', 'SMTP / Gmail API', 'pandas', 'openpyxl', 'JSON', 'MIMEMultipart'],
    timeline: 'February 2026',
    role: 'Personal Project'
  },
  {
    id: 'digitalcircle-web-portfolio',
    category: 'Development',
    title: 'Client Website Portfolio — DigitalCircle',
    subtitle: '6 production websites built with WordPress & Elementor across diverse industries',
    image: 'https://images.unsplash.com/photo-1705904506592-d8a0d5392c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwd2ViJTIwZGVzaWduJTIwd29yZHByZXNzfGVufDF8fHx8MTc3MTI0MDQwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['WordPress', 'Elementor', 'UI/UX', 'Frontend'],
    overview: 'During my internship at DigitalCircle, I independently designed and developed 6 production client websites using WordPress and Elementor across a range of industries — from FMCG manufacturing and wood furniture e-commerce to NGOs, medical spas, interior design, and local business marketing. Each site was built from client consultation through to launch, with a focus on responsive design, brand accuracy, and fast turnaround.',
    challenge: 'Each client came from a completely different industry with distinct audiences, branding needs, and functional requirements. The challenge was delivering polished, professional results efficiently — adapting layouts, content hierarchy, and UX patterns to fit each context — while maintaining quality across all projects simultaneously.',
    solution: 'Handled each project end-to-end: gathering requirements, designing custom layouts in Elementor, structuring content, and ensuring full mobile/desktop responsiveness. Developed a reusable workflow that let me move fast without sacrificing quality. The six sites span juice manufacturing (junetlb.com), wood furniture e-commerce (woodies.design), bespoke interior woodworking (boisdesign.me), an NGO research network under the Norwegian Refugee Council (camealeon.org), a regional business marketing platform for the Zahle area (bzahle.com), and a luxury medical spa in Connecticut, USA (dvinemedspa.com) — each built from brief to launch with full mobile and desktop responsiveness.',
    impact: [
      'Delivered 6 live, production-ready websites across 6 different industries',
      'Built junetlb.com entirely solo — from requirements to launch',
      'Resolved over 90% of front-end bugs within 48 hours across all client sites',
      'Handled projects for clients in Lebanon and the United States',
      'Delivered pixel-perfect, fully responsive designs for both phone and desktop'
    ],
    technologies: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript', 'WooCommerce'],
    timeline: 'Summer 2023 & 2024',
    role: 'Frontend Developer Intern — DigitalCircle',
    websiteLinks: [
      { label: 'junetlb.com',      url: 'https://junetlb.com' },
      { label: 'woodies.design',   url: 'https://woodies.design' },
      { label: 'boisdesign.me',    url: 'https://boisdesign.me' },
      { label: 'camealeon.org',    url: 'https://camealeon.org' },
      { label: 'bzahle.com',       url: 'https://bzahle.com' },
      { label: 'dvinemedspa.com',  url: 'https://dvinemedspa.com' },
    ]
  },
  {
    id: 'maria-badari',
    category: 'Full-Stack',
    title: 'Maria Badari — Bridal Haute Couture Web App',
    subtitle: 'Multidisciplinary full-stack web platform for a bridal atelier with AI dress customization, live chat, and rental management',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBkcmVzcyUyMGhhdXRlJTIwY291dHVyZXxlbnwxfHx8fDE3NzEyNDA0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Full-Stack', 'AI', 'Web App', 'Team Project'],
    overview: 'A multidisciplinary academic project developed with a team of classmates at USJ, building a complete web application for Maria Badari — a bridal haute couture atelier. The platform goes far beyond a showcase website: it lets brides browse the dress collection, request rentals, get AI-guided customization recommendations, chat live with the owner, and gives the atelier full dynamic administrative control over every aspect of the platform.',
    challenge: 'A traditional bridal atelier website is static and passive — it shows dresses but forces all client interaction offline. The real challenge was digitizing the full client journey for a luxury fashion context: making it easy for brides to explore gowns and request rentals, giving them a personalized experience through AI guidance, enabling direct real-time communication with the owner, and empowering the atelier to manage its catalog and incoming requests without any technical knowledge.',
    solution: 'Built a feature-complete web application covering the full client and admin experience. Key modules included: a dress browsing gallery with filtering and detail views; a rental request system where clients submit rental inquiries directly through the platform; an AI-guided customization feature that helps brides explore style options and get personalized dress suggestions based on their preferences; a live chat system connecting clients directly with the atelier owner in real time; and a dynamic admin panel giving the owner full control over the dress catalog, rental requests, user messages, and site content — all without touching code.',
    impact: [
      'Delivered a production-ready full-stack web app covering the complete bridal client journey',
      'Integrated AI-guided customization — brides can explore and personalize dress options interactively',
      'Built a live chat system enabling real-time owner-client communication directly on the platform',
      'Rental request management system replaced all manual/offline booking with a structured digital flow',
      'Dynamic admin panel empowers the atelier owner to manage everything independently',
      'Live at: mariabadari.com'
    ],
    technologies: ['Full-Stack Web', 'AI / Recommendation System', 'Live Chat', 'Admin Dashboard', 'Database'],
    timeline: 'Spring 2026',
    role: 'Full-Stack Developer — Academic Team Project, USJ',
    liveUrl: 'https://www.mariabadari.com'
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