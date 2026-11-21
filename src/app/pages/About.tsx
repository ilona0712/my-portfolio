import { useEffect } from 'react';
import { Code, Database, Network, Cpu, Globe, Award } from 'lucide-react';

declare const anime: any;

export function About() {
  useEffect(() => {
    if (typeof anime === 'undefined') return;
    anime.timeline({ easing: 'easeOutExpo' })
      .add({ targets: '.about-title', opacity: [0, 1], translateY: [40, 0], duration: 800 })
      .add({ targets: '.about-sub',   opacity: [0, 1], translateY: [20, 0], duration: 600 }, '-=400')
      .add({ targets: '.about-block', opacity: [0, 1], translateY: [24, 0], delay: anime.stagger(80), duration: 600 }, '-=300');
  }, []);
  
  const skills = {
    'Programming Languages': [
      { name: 'Python',       level: 'Primary language — ML, automation, backend scripting, SMTP, web scraping' },
      { name: 'SQL',          level: 'Advanced queries, window functions, CTEs, lag calculations, data integration' },
      { name: 'Java',         level: 'Design Patterns, OOP, Backend Development' },
      { name: 'C#',           level: '.NET Framework to modern .NET migration, enterprise backend development' },
      { name: 'C++',          level: 'Low-level programming, Pointers, Inheritance, Embedded Systems' },
      { name: 'TypeScript',   level: 'Full-stack development with Next.js and React' },
      { name: 'JavaScript',   level: 'Frontend interactivity, React components, DOM manipulation' },
      { name: 'HTML & CSS',   level: 'Frontend markup, styling, responsive layout' },
    ],
    'Machine Learning & AI': [
      'End-to-end ML pipeline design and deployment',
      'Feature Engineering (249 features, rolling patterns, lag calculations)',
      'Model Training & Selection — Random Forest, XGBoost, LightGBM',
      'Time-Series Analysis and Predictive Maintenance',
      'Model Interpretability with SHAP',
      'AI-guided recommendation systems',
      'Class Imbalance Handling (balanced class weights)',
    ],
    'Data Engineering': [
      'Real-time data integration and live dashboard design',
      'Metabase — live operational analytics dashboards',
      'Database access and SQL-based status monitoring',
      'Web scraping — static HTML, REST APIs, dynamic content (Selenium)',
      'Data extraction pipelines for ML training',
      'Automated backup systems (Google Drive API)',
      'Pandas, NumPy — data processing and transformation',
    ],
    'Backend & Automation': [
      'ERPNext POS Backend Customization (Python)',
      'Email automation — SMTP, MIMEMultipart, Gmail App Passwords',
      'Process automation with pandas + openpyxl pipelines',
      'REST API design and integration',
      'SOAP and REST integration — IBM Integration Bus, Temenos T24 / GLOBUS, OAuth2',
      'Legacy application modernization — .NET Framework to modern .NET, SQL Server query optimization',
      'Linux Cron Jobs and Shell Scripting',
      'Google Drive API integration',
    ],
    'Full-Stack & Web': [
      'Next.js, React, TypeScript — national-scale dashboards',
      'React, TypeScript and Supabase — Maria Badari bridal platform',
      'Tailwind CSS, Recharts — data visualization',
      'WordPress & Elementor — 6 production client websites',
      'WooCommerce — e-commerce implementation',
      'Live chat system integration',
      'Admin dashboard design and dynamic content management',
      'Mobile-first responsive design',
    ],
    'Systems & Tools': [
      'Docker — containerization and deployment',
      'Ubuntu/Linux CLI — directory management, file operations, encryption',
      'Arduino, Hardware-Software Integration',
      'Signal Processing — 7-microphone array, servo motor control',
      'Git & GitHub — version control and collaboration',
      'Vercel — deployment and CI/CD',
    ],
    'Networking': [
      'Cisco CCNA 1 & 2 Certified',
      'Network Design and Configuration',
      'Routing, Switching and VLAN Configuration',
      'Network Security Fundamentals',
    ],
  };

  const impact = [
    { org: 'Byblos Bank', text: 'Built an ML model that moved 130+ ATMs from reactive to predictive maintenance, reducing unplanned downtime.' },
    { org: 'Byblos Bank', text: 'Drove the modernization of a legacy application, migrating it from .NET Framework to the latest .NET across C#, SQL Server and backend infrastructure.' },
    { org: 'DigitalCircle', text: 'Accelerated transaction processing by 20% and automated critical database infrastructure, alongside web development.' },
  ];

  const experiences = [
    {
      role: '.NET Developer Intern at Byblos Bank',
      period: 'Summer 2026',
      paragraphs: [
        'Took ownership of a legacy enterprise application and led its migration from .NET Framework to modern .NET while keeping production stable, working across C#, SQL Server and backend services.',
        'Reviewed database schemas, optimized queries, worked with infrastructure teams on server environments and deployment pipelines, and documented migration steps and architectural decisions.',
      ],
    },
    {
      role: 'AI Lab Intern at Byblos Bank',
      period: 'Jan 2026 — Summer 2026',
      paragraphs: [
        'Worked in the AI Lab at Byblos Bank on machine learning and data engineering. This role introduced me to Docker for the first time and challenged me to build production-ready ML systems.',
        'Projects like ATM failure prediction and intelligent web scraping taught me that successful ML is about feature engineering, data quality, system optimization, and building trust through interpretability.',
      ],
    },
  ];

  const languages = [
    { name: 'Arabic',  level: 'Native' },
    { name: 'English', level: 'Professional' },
    { name: 'French',  level: 'DELF B2' },
  ];

  const certifications = [
  {
    label: 'Cisco CCNA 1 - Introduction to Networking',
    file: '/certificates/ccna1.pdf',
    date: 'Jan 27, 2025',
    color: 'var(--neon-cyan)',
  },
  {
    label: 'Cisco CCNA 2 - Routing & Switching Essentials',
    file: '/certificates/ccna2.pdf',
    date: 'Oct 16, 2025',
    color: 'var(--neon-cyan)',
  },
  {
    label: 'Java Backend Development',
    file: '/certificates/java_backend.pdf',
    date: 'Dec 8, 2025',
    color: 'var(--neon-green)',
  },
  {
    label: 'AI Fluency for Small Businesses - Anthropic',
    file: undefined as string | undefined,
    date: 'Jun 2026',
    color: 'var(--neon-green)',
  },
  {
    label: 'Kanz AI Training Hackathon - Certificate of Participation',
    file: 'https://try.ka.nz/certificate/KANZ-ATT-48E9C9B436?certificate_type=participation&recipient_name=ilona&issue_date=July+15%2C+2026&certificate_id=KANZ-ATT-48E9C9B436' as string | undefined,
    date: 'Jul 2026',
    color: 'var(--neon-green)',
  },
  {
    label: '42 Beirut Piscine - Selected for the Core Curriculum',
    file: undefined as string | undefined,
    date: '2026',
    color: 'var(--neon-cyan)',
  },
];

  const principles = [
    { title: 'Understand the problem deeply',    description: 'Before writing a single line of code' },
    { title: 'Optimize for maintainability',     description: "Because code is read more often than it's written" },
    { title: 'Measure everything',               description: "Because you can't improve what you don't measure" },
  ];

  const drives = [
    { label: 'Efficiency',          desc: 'Every line of code should serve a purpose',            color: 'var(--neon-cyan)' },
    { label: 'Reliability',         desc: 'Systems should work consistently, even under pressure', color: 'var(--neon-blue)' },
    { label: 'Continuous Learning', desc: 'Technology evolves rapidly, and so should we',          color: 'var(--neon-green)' },
    { label: 'Practical Solutions', desc: 'The best code is code that solves real problems',       color: 'var(--neon-yellow)' },
  ];

  const lookingForward = [
    { icon: <Code     className="w-5 h-5" style={{ color: 'var(--neon-cyan)', flexShrink: 0 }} />, label: 'Backend system architecture and API design' },
    { icon: <Database className="w-5 h-5" style={{ color: 'var(--neon-cyan)', flexShrink: 0 }} />, label: 'Data engineering and ML pipeline development' },
    { icon: <Network  className="w-5 h-5" style={{ color: 'var(--neon-cyan)', flexShrink: 0 }} />, label: 'Cloud infrastructure, DevOps, and deployment' },
    { icon: <Cpu      className="w-5 h-5" style={{ color: 'var(--neon-cyan)', flexShrink: 0 }} />, label: 'AI-powered full-stack product development' },
  ];

  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>

      {/* ── HEADER BAND ── */}
      <div style={{ background: 'var(--bg2)', paddingTop: 120, paddingBottom: 80, borderBottom: '1px solid var(--border)' }}>
        <div className="section-inner">
          <div className="section-label">Portfolio</div>
          <h1
            className="about-title"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.5rem,8vw,7rem)', fontWeight: 800, color: '#fff', lineHeight: 0.95, marginBottom: 24, opacity: 0 }}
          >
            About<br /><span style={{ color: 'var(--neon-cyan)' }}>Me</span><span style={{ color: 'var(--neon-pink)' }}>.</span>
          </h1>
          <p
            className="about-sub"
            style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: 500, lineHeight: 1.7, opacity: 0 }}
          >
            5th-year Computer and Communication Engineering student and 42 Beirut student, passionate about solving
            complex technical challenges through elegant, efficient code.
          </p>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ padding: '80px 0' }}>
        <div className="section-inner" style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>

          {/* WHO I AM + MY JOURNEY */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48 }}>
            <div className="about-block" style={{ opacity: 0 }}>
              <div className="section-label" style={{ marginBottom: 20 }}>Who I Am</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.8, fontFamily: 'var(--font-body)' }}>
                I'm Ilona Chamoun, a 5th-year Software Engineering student at Université Saint-Joseph de Beyrouth (USJ)
                in Lebanon, specializing in Computer and Communication Engineering. My journey in technology is driven
                by a passion for solving complex technical challenges through elegant, efficient code.
                I am also a student at 42 Beirut (Core Curriculum, since November 2026) and a LIFE Lebanon Scholar.
              </p>
            </div>
            <div className="about-block" style={{ opacity: 0 }}>
              <div className="section-label" style={{ marginBottom: 20 }}>My Journey</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.8, fontFamily: 'var(--font-body)', marginBottom: 14 }}>
                My path into software engineering began with a fascination for how systems work beneath the surface.
                This curiosity led me to explore everything from low-level embedded systems to high-level backend architecture.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.8, fontFamily: 'var(--font-body)' }}>
                During my internships at DigitalCircle in 2023 and 2024, I gained invaluable real-world experience
                learning to optimize for performance, ensure data integrity, and deliver solutions that impact business operations.
              </p>
            </div>
          </div>

          {/* IMPACT + LIFE SCHOLAR */}
          <div className="about-block" style={{ opacity: 0 }}>
            <div className="section-label" style={{ marginBottom: 20 }}>Impact So Far</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
              {impact.map(({ org, text }) => (
                <div key={text} style={{ padding: '20px 24px', border: '1px solid var(--border)', borderTop: '2px solid var(--neon-cyan)', borderRadius: 4, background: 'var(--surface)' }}>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--neon-cyan)', marginBottom: 8, fontSize: '0.85rem' }}>{org}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text)', lineHeight: 1.7 }}>{text}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.8, marginTop: 20, maxWidth: 720 }}>
              I care about code quality, system reliability and outcomes I can measure. I'm equally comfortable shipping
              frontend features, building data pipelines, automating QA workflows or modernizing large-scale enterprise systems.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
              {['C# / .NET', 'Python (ETL, ML pipelines)', 'SQL Server', 'React & Next.js', 'QA automation', 'REST APIs'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          <div
            className="about-block"
            style={{ opacity: 0, padding: '28px 32px', border: '1px solid var(--border)', borderLeft: '4px solid var(--neon-green)', borderRadius: 4, background: 'var(--surface)' }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--neon-green)', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Scholarship</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: 12 }}>LIFE Lebanon Scholar</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.8 }}>
              Selected as a LIFE Lebanon Scholar in 2026, with mentorship and a community that supports my path in tech and AI.
              Part of the LIFE Academy Fall 2026 program at USJ: orientation, community building, workshops and personal growth.
            </p>
          </div>

          {/* EXPERIENCE */}
          {experiences.map((exp, i) => (
            <div
              key={exp.role}
              className="about-block"
              style={{ opacity: 0, padding: '32px 36px', border: '1px solid var(--border)', borderLeft: '4px solid var(--neon-cyan)', borderRadius: 4, background: 'var(--surface)', boxShadow: '0 0 40px rgba(0,255,224,0.04)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--neon-cyan)', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>{i === 0 ? 'Latest' : 'Experience'}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>{exp.role}</h3>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '6px 14px', borderRadius: 20, background: 'rgba(0,255,224,0.08)', color: 'var(--neon-cyan)', border: '1px solid rgba(0,255,224,0.2)', whiteSpace: 'nowrap' }}>
                  {exp.period}
                </span>
              </div>
              {exp.paragraphs.map((text, j) => (
                <p key={j} style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: j === exp.paragraphs.length - 1 ? 0 : 12 }}>
                  {text}
                </p>
              ))}
            </div>
          ))}

          {/* WHAT DRIVES ME */}
          <div className="about-block" style={{ opacity: 0 }}>
            <div className="section-label" style={{ marginBottom: 24 }}>What Drives Me</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
              {drives.map(({ label, desc, color }) => (
                <div
                  key={label}
                  style={{ padding: '20px 24px', border: '1px solid var(--border)', borderTop: `2px solid ${color}`, borderRadius: 4, background: 'var(--surface)', transition: 'box-shadow 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 24px rgba(0,255,224,0.06)`)}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                >
                  <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color, marginBottom: 6, fontSize: '0.95rem' }}>{label}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TECHNICAL PHILOSOPHY */}
          <div className="about-block" style={{ opacity: 0 }}>
            <div className="section-label" style={{ marginBottom: 24 }}>Technical Philosophy</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {principles.map((p, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '20px 24px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--surface)', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--neon-cyan)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: '50%', border: '1px solid var(--neon-cyan)', color: 'var(--neon-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', boxShadow: '0 0 12px rgba(0,255,224,0.15)' }}>
                    {i + 1}
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff', marginBottom: 4, fontSize: '0.9rem' }}>{p.title}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SKILLS */}
          <div className="about-block" style={{ opacity: 0 }}>
            <div className="section-label" style={{ marginBottom: 24 }}>Skills & Expertise</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 40 }}>
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--neon-cyan)', fontSize: '0.8rem', letterSpacing: '0.08em', marginBottom: 14, textTransform: 'uppercase' }}>
                    {category}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {items.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--neon-cyan)', boxShadow: '0 0 6px var(--neon-cyan)', flexShrink: 0, marginTop: 7 }} />
                        <span style={{ fontSize: '0.85rem', color: 'var(--text)', fontFamily: 'var(--font-body)', lineHeight: 1.6 }}>
                          {typeof item === 'string' ? item : (
                            <><span style={{ color: '#fff', fontWeight: 600 }}>{item.name}</span><span style={{ color: 'var(--muted)' }}> — {item.level}</span></>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LANGUAGES */}
          <div className="about-block" style={{ opacity: 0 }}>
            <div className="section-label" style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Globe className="w-4 h-4" />
              Languages
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12 }}>
              {languages.map((lang, i) => (
                <div
                  key={i}
                  style={{ padding: '20px 24px', textAlign: 'center', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--surface)', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--neon-cyan)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff', marginBottom: 4 }}>{lang.name}</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--neon-cyan)', letterSpacing: '0.1em' }}>{lang.level}</p>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION + CERTIFICATIONS */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48 }}>
            <div className="about-block" style={{ opacity: 0 }}>
              <div className="section-label" style={{ marginBottom: 20 }}>Education</div>
              <div style={{ padding: '24px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--surface)' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff', marginBottom: 10, fontSize: '0.95rem', lineHeight: 1.4 }}>
                  Diploma in Computer and Communication Engineering
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text)', marginBottom: 4 }}>Université Saint-Joseph de Beyrouth (USJ)</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: 12 }}>Beirut, Lebanon</p>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '4px 12px', borderRadius: 20, background: 'rgba(0,255,224,0.08)', color: 'var(--neon-cyan)', border: '1px solid rgba(0,255,224,0.2)' }}>
                  Expected Graduation: 2027
                </span>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: 12 }}>Specialization: Software Engineering</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: 4 }}>GPA: 14.91/20 (≈ 3.7/4.0)</p>
              </div>
              <div style={{ padding: '24px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--surface)', marginTop: 12 }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff', marginBottom: 10, fontSize: '0.95rem', lineHeight: 1.4 }}>
                  42 Beirut - Core Curriculum
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text)', marginBottom: 12 }}>Architecture of Digital Technologies Program</p>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '4px 12px', borderRadius: 20, background: 'rgba(0,255,224,0.08)', color: 'var(--neon-cyan)', border: '1px solid rgba(0,255,224,0.2)' }}>
                  November 2026 — Present
                </span>
              </div>
            </div>

            <div className="about-block" style={{ opacity: 0 }}>
  <div className="section-label" style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
    <Award className="w-4 h-4" />
    Certifications
  </div>
  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
    {certifications.map((cert, i) => (
      <a
        key={i}
        {...(cert.file ? { href: cert.file, target: '_blank', rel: 'noopener noreferrer' } : {})}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14, padding: '16px 20px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--surface)', textDecoration: 'none', color: 'inherit', transition: 'border-color 0.2s, transform 0.2s' }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = cert.color; e.currentTarget.style.transform = 'translateX(4px)'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: cert.color, boxShadow: `0 0 8px ${cert.color}`, flexShrink: 0 }} />
          <span style={{ fontSize: '0.85rem', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>{cert.label}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--muted)' }}>{cert.date}</span>
          {cert.file && <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: cert.color }}>↗</span>}
        </div>
      </a>
    ))}
  </div>
</div>
          </div>

          {/* ACTIVITIES */}
          <div className="about-block" style={{ opacity: 0 }}>
            <div className="section-label" style={{ marginBottom: 24 }}>Activities & Involvement</div>
            <div style={{ padding: '28px 32px', border: '1px solid var(--border)', borderLeft: '4px solid var(--neon-blue)', borderRadius: 4, background: 'var(--surface)' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--neon-blue)', marginBottom: 16, fontSize: '0.95rem' }}>
                IEEE Member — Organizer in DYL (Digital Youth Leaders)
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Supporting technical skill development in young engineers', 'Organizing workshops and technical events', 'Fostering leadership and collaboration in the tech community'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--neon-blue)', boxShadow: '0 0 6px var(--neon-blue)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.875rem', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '28px 32px', border: '1px solid var(--border)', borderLeft: '4px solid var(--neon-green)', borderRadius: 4, background: 'var(--surface)', marginTop: 12 }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--neon-green)', marginBottom: 16, fontSize: '0.95rem' }}>
                Scholarships & Hackathons
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['LIFE Lebanon Scholar (2026)', 'Code4Lebanon x USJ Hackathon: team ranked Top 3 (NUMU Dashboard)', 'Kanz AI Training Hackathon participant (2026)'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--neon-green)', boxShadow: '0 0 6px var(--neon-green)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.875rem', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* LOOKING FORWARD */}
          <div className="about-block" style={{ opacity: 0 }}>
            <div className="section-label" style={{ marginBottom: 24 }}>Looking Forward</div>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: 24, maxWidth: 640, fontFamily: 'var(--font-body)' }}>
              As I approach my graduation in 2027, I'm open to junior software engineer, full-stack developer and .NET developer roles (remote, hybrid or on-site), and to a final year project from January to May 2027. I'm particularly interested in opportunities that involve:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 10 }}>
              {lookingForward.map(({ icon, label }, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '18px 22px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--surface)', transition: 'border-color 0.2s, transform 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--neon-cyan)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
                >
                  {icon}
                  <span style={{ fontSize: '0.875rem', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
