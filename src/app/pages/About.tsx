import { useEffect } from 'react';
import { Code, Database, Network, Cpu, Globe, Award } from 'lucide-react';

declare const anime: any;

export function About() {
  useEffect(() => {
    anime.timeline({ easing: 'easeOutExpo' })
      .add({ targets: '.about-title', opacity: [0, 1], translateY: [40, 0], duration: 800 })
      .add({ targets: '.about-sub',   opacity: [0, 1], translateY: [20, 0], duration: 600 }, '-=400')
      .add({ targets: '.about-block', opacity: [0, 1], translateY: [24, 0], delay: anime.stagger(80), duration: 600 }, '-=300');
  }, []);

  const skills = {
    'Programming Languages': [
      { name: 'Python',      level: 'Primary language for backend development, automation, ML, and scripting' },
      { name: 'Java',        level: 'Design Patterns, OOP, Backend Development' },
      { name: 'C++',         level: 'Low-level programming, Pointers, Inheritance, Embedded Systems' },
      { name: 'JavaScript',  level: 'Basic front-end interactivity' },
      { name: 'HTML & CSS',  level: 'Front-end markup and styling (beginner level)' },
      { name: 'SQL',         level: 'Database queries, optimization, window functions, CTEs' },
    ],
    'Backend Development': [
      'ERPNext POS Backend Customization',
      'Database Design and Optimization',
      'API Development and Integration',
      'Performance Optimization',
      'Data Management and Automation',
    ],
    'Machine Learning & Data Science': [
      'Feature Engineering and Data Processing',
      'ML Model Training (Random Forest, XGBoost, LightGBM)',
      'Time-Series Analysis and Prediction',
      'Model Interpretability (SHAP)',
      'Web Scraping and Data Extraction',
    ],
    'Systems & Tools': [
      'Ubuntu/Linux (CLI proficiency)',
      'Docker (Containerization and Deployment)',
      'Google Drive API Integration',
      'WordPress, Elementor',
      'Arduino, Hardware-Software Integration',
    ],
    'Networking': [
      'Cisco CCNA 1 & 2 Certified',
      'Network Design and Configuration',
      'Routing and Switching Fundamentals',
      'Network Security Basics',
    ],
  };

  const languages = [
    { name: 'Arabic',  level: 'Native' },
    { name: 'English', level: 'Fluent' },
    { name: 'French',  level: 'Intermediate' },
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
    { icon: <Code     className="w-5 h-5" style={{ color: 'var(--neon-cyan)', flexShrink: 0 }} />, label: 'Backend system architecture and optimization' },
    { icon: <Database className="w-5 h-5" style={{ color: 'var(--neon-cyan)', flexShrink: 0 }} />, label: 'Data pipeline engineering' },
    { icon: <Network  className="w-5 h-5" style={{ color: 'var(--neon-cyan)', flexShrink: 0 }} />, label: 'Cloud infrastructure and DevOps' },
    { icon: <Cpu      className="w-5 h-5" style={{ color: 'var(--neon-cyan)', flexShrink: 0 }} />, label: 'Embedded systems and IoT solutions' },
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
            4th-year Computer and Communication Engineering student passionate about solving
            complex technical challenges through elegant, efficient code.
          </p>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ padding: '80px 0' }}>
        <div className="section-inner" style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>

          {/* WHO I AM + MY JOURNEY */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
            <div className="about-block" style={{ opacity: 0 }}>
              <div className="section-label" style={{ marginBottom: 20 }}>Who I Am</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.8, fontFamily: 'var(--font-body)' }}>
                I'm Ilona Chamoun, a 4th-year Software Engineering student at Université Saint-Joseph de Beyrouth (USJ)
                in Lebanon, specializing in Computer and Communication Engineering. My journey in technology is driven
                by a passion for solving complex technical challenges through elegant, efficient code.
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

          {/* CURRENT ROLE */}
          <div
            className="about-block"
            style={{ opacity: 0, padding: '32px 36px', border: '1px solid var(--border)', borderLeft: '4px solid var(--neon-cyan)', borderRadius: 4, background: 'var(--surface)', boxShadow: '0 0 40px rgba(0,255,224,0.04)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--neon-cyan)', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Currently</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>AI Lab Intern at Byblos Bank</h3>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '6px 14px', borderRadius: 20, background: 'rgba(0,255,224,0.08)', color: 'var(--neon-cyan)', border: '1px solid rgba(0,255,224,0.2)', whiteSpace: 'nowrap' }}>
                Jan 2026 — Present
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: 12 }}>
              Working in the AI Lab at Byblos Bank, diving deep into machine learning and data engineering.
              This role introduced me to Docker for the first time and challenged me to build production-ready ML systems.
            </p>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.8 }}>
              Projects like ATM failure prediction and intelligent web scraping taught me that successful ML
              is about feature engineering, data quality, system optimization, and building trust through interpretability.
            </p>
          </div>

          {/* WHAT DRIVES ME */}
          <div className="about-block" style={{ opacity: 0 }}>
            <div className="section-label" style={{ marginBottom: 24 }}>What Drives Me</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40 }}>
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
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
        href={cert.file}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, padding: '16px 20px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--surface)', textDecoration: 'none', color: 'inherit', transition: 'border-color 0.2s, transform 0.2s' }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = cert.color; e.currentTarget.style.transform = 'translateX(4px)'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: cert.color, boxShadow: `0 0 8px ${cert.color}`, flexShrink: 0 }} />
          <span style={{ fontSize: '0.85rem', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>{cert.label}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--muted)' }}>{cert.date}</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: cert.color }}>↗</span>
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
          </div>

          {/* LOOKING FORWARD */}
          <div className="about-block" style={{ opacity: 0 }}>
            <div className="section-label" style={{ marginBottom: 24 }}>Looking Forward</div>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: 24, maxWidth: 640, fontFamily: 'var(--font-body)' }}>
              As I approach my graduation in 2027, I'm excited to take on more challenging projects. I'm particularly interested in opportunities that involve:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
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
