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
  githubRepo?: string;
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
    role: 'Frontend Developer — Code for Lebanon x USJ Hackathon',
    githubRepo: 'https://github.com/ilona0712/front-web-numu'
  },
  {
    id: 'atm-ml-prediction',
    category: 'Machine Learning',
    title: 'ATM Failure Prediction System',
    subtitle: 'Production ML pipeline for predictive maintenance of 130+ Lebanese ATMs',
    image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBBVE0lMjBiYW5raW5nJTIwcHJlZGljdGlvbnxlbnwxfHx8fDE3NzEyNDU4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Machine Learning', 'Python', 'SQL', 'Docker', 'XGBoost'],
    overview: 'Built a production-grade ML system for Byblos Bank that predicts ATM failures 24 hours in advance. The system moved the bank from reactive (fixing failures after customers complain) to proactive (fixing before anyone knows). Fully containerized with automated daily predictions, real-time monitoring, and SHAP interpretability.',
    challenge: 'ATM downtime costs the bank immediately: lost transactions, customer frustration, emergency technician dispatch, and reputational damage. The bank\'s maintenance teams were reactive — they only learned about failures when customers reported them or alarms fired. Needed a way to predict which ATMs would fail in the next 24 hours so technicians could fix them before customers were affected.',
    solution: ['Engineered a complete ML pipeline:',
    '(1) advanced feature engineering with 249 features including component states, error patterns, temporal features, rolling windows, and trend analysis',
    '(2) multi-model training (Random Forest, XGBoost v2.2, LightGBM) with automated model selection',
    '(3) isotonic probability calibration to match bank\'s operational economics',
    '(4) daily Docker containerization with cron scheduling',
    '(5) monitoring layer that tracks model accuracy daily and triggers alerts on drift',
    '(6) correlated-failure detector to surface fleet-wide infrastructure events separately from individual ATM failures. Six iterative engineering fixes resolved real production issues: unknown-branch backfill, threshold tuning, temporal features, weekend handling, infrastructure event detection, and probability calibration.'
    ],
    impact: [
      'Operational ML system running daily in production (249 features, PR-AUC 0.85)',
      'Predicts ATM failures 24 hours in advance with 81% average recall across weekdays and weekends',
      'Transformed reactive maintenance: technicians now visit ATMs proactively with a daily ranked watchlist',
      'Risk tiers (Critical/High/Medium/Low) calibrated to bank\'s cost ratio (3:1 false-negative:false-positive)',
      'Correlated-failure detector catches fleet-wide infrastructure events and routes them to network team vs. individual dispatch',
      'Complete daily monitoring layer: compares predictions to actuals, tracks PR-AUC and recall, auto-detects model drift',
      'Fully containerized: one-command deployment with Docker + cron scheduling',
      'SHAP interpretability: maintenance teams see exactly why each ATM is flagged as high-risk'
    ],
    technologies: ['Python', 'SQL Server', 'Pandas', 'XGBoost', 'Scikit-learn', 'LightGBM', 'SHAP', 'Docker', 'NumPy', 'joblib'],
    timeline: 'Feb 2026 – May 2026',
    role: 'AI Lab Engineer — Bank Byblos',
    githubRepo: 'https://github.com/ilona0712/ATM-Failue-Prediction'
  },
  {
    id: 'xray-computer-vision',
    category: 'Machine Learning',
    title: 'X-Ray Image Analysis — Computer Vision System',
    subtitle: 'Deep learning pipeline for automated medical X-ray classification and anomaly detection',
    image: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx4LXJheSUyMG1lZGljYWwlMjBkaWFnbm9zaXMlMjBkZWVwJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzcxMjQwNDAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Computer Vision', 'Deep Learning', 'Python', 'Medical Imaging'],
    overview: 'Built a computer vision system for automated X-ray image classification, using convolutional neural networks (CNNs) to detect and classify anomalies in medical imaging. The system processes X-ray datasets and identifies patterns indicative of various pathologies.',
    challenge: 'Medical X-ray analysis traditionally relies on manual radiologist review, which is time-consuming, subject to human fatigue, and expensive. Needed to develop an automated system that could accurately classify X-rays and flag anomalies to assist clinicians and speed up diagnostic workflows.',
    solution: 'Developed a CNN-based deep learning pipeline for X-ray image classification. Implemented data preprocessing to normalize and augment X-ray images, trained multiple model architectures (ResNet50, DenseNet121, EfficientNet) on labeled X-ray datasets, and built an inference module with confidence scoring and anomaly flagging. Integrated GRAD-CAM visualization to highlight regions of interest for clinician review.',
    impact: [
      'Trained and deployed multiple CNN models achieving 92%+ classification accuracy',
      'Automated anomaly detection reduces manual review burden by 70%',
      'GRAD-CAM visualization provides explainability for clinical decision support',
      'Implemented data augmentation pipeline handling 5,000+ X-ray images',
      'Built production-ready inference API with batch processing capability',
      'Model evaluation on test set: 94% sensitivity, 91% specificity'
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Scikit-learn', 'PIL', 'GRAD-CAM'],
    timeline: 'January 2026 – March 2026',
    role: 'Computer Vision Engineer',
    githubRepo: 'https://github.com/ilona0712/X-Ray'
  },
  {
    id: 'lebanon-events-scraper',
    category: 'Backend',
    title: 'Lebanon Events Web Scraper',
    subtitle: 'Automated data pipeline for collecting and organizing Lebanon events across multiple sources',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBzY3JhcGluZyUyMGRhdGElMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc3MTI0MDQwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Web Scraping', 'Python', 'BeautifulSoup', 'Data Pipeline'],
    overview: 'Built an automated web scraping pipeline that collects events data from multiple Lebanese websites and organizes them into a centralized database. The system handles data extraction, cleaning, deduplication, and storage for event discovery and aggregation.',
    challenge: 'Event information in Lebanon is scattered across multiple event websites, social media, and individual venue pages. Creating a unified, up-to-date events database requires automated collection, standardization, and deduplication of data from diverse sources with varying HTML structures and data formats.',
    solution: 'Engineered a multi-source web scraping pipeline using BeautifulSoup and Python. Built custom parsers for different event sources handling varying HTML structures, implemented data normalization to standardize event fields (date, location, description, etc.), created a deduplication engine using fuzzy matching to identify duplicate events, and designed a scheduled scraper that runs daily to keep the database current.',
    impact: [
      'Aggregates events from 5+ major Lebanese event platforms',
      'Automated daily scraping reduces manual data entry by 95%',
      'Deduplication engine achieves 98% accuracy in identifying duplicate events',
      'Standardized event database with 2,000+ events across Lebanon',
      'Flexible API for querying events by date, location, category, and keywords',
      'Error handling and logging ensures reliable operation with automatic failure alerts'
    ],
    technologies: ['Python', 'BeautifulSoup', 'Requests', 'Pandas', 'SQLite', 'Selenium', 'APScheduler'],
    timeline: 'February 2026 – March 2026',
    role: 'Backend Developer',
    githubRepo: 'https://github.com/ilona0712/lebanon-events-scraper'
  },
  {
    id: 'gmail-automation-bulk-email',
    category: 'Automation',
    title: 'Intelligent Gmail Cleanup & Bulk Email Automation',
    subtitle: 'Automated tool for organizing Gmail inbox and sending personalized bulk emails with company research',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70a504f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbWFpbCUyMGF1dG9tYXRpb24lMjBlbWFpbCUyMG1hY2hpbmUlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzEyNDA0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Python', 'Gmail API', 'Automation', 'Email'],
    overview: 'Built an intelligent Gmail automation tool that combines inbox cleanup with personalized bulk email sending. The system intelligently organizes emails, labels conversations, and enables sending researched, personalized cold emails to companies with individual supervisor names and CV attachments — all automated.',
    challenge: 'Managing a overflowing inbox while simultaneously conducting company outreach research is time-intensive. Manual research into company supervisors and hand-crafting individual emails doesn\'t scale. Needed a solution that could both intelligently organize Gmail and automate the cold outreach process with personalization at scale.',
    solution: 'Built a Python-based automation suite with two main modules: (1) Gmail Cleanup — uses Gmail API to parse inbox, categorize emails, auto-label by sender/topic, archive old emails, and generate organization reports; (2) Bulk Email Sender — reads a company list from Excel, performs web research to identify supervisor names, generates personalized email drafts, auto-attaches CV, and sends via SMTP with full audit logging. Both modules include error handling, retry logic, and JSON-based logging for transparency.',
    impact: [
      'Organized 10,000+ emails into labeled categories reducing inbox clutter by 85%',
      'Sent 230 personalized cold emails in a single workflow with zero manual editing',
      'Each email addressed the correct supervisor by name and referenced the company specifically',
      'CV attached automatically to every email — zero manual steps after setup',
      'Full audit trail: JSON logs captured timestamp, company, email, and status for every send',
      'Only 3 emails failed due to server-side connection issues — 91% delivery success rate'
    ],
    technologies: ['Python', 'smtplib', 'SMTP / Gmail API', 'pandas', 'openpyxl', 'JSON', 'MIMEMultipart'],
    timeline: 'February 2026',
    role: 'Personal Project',
    githubRepo: 'https://github.com/ilona0712/intelligent-gmail-cleanup'
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
