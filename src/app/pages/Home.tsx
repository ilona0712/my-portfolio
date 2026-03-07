import { useEffect } from 'react';
import { Link } from 'react-router';
import { projects } from '../data/projects';

declare const anime: any;

const FEATURED_IDS = ['numu-dashboard', 'atm-ml-prediction', 'sound-tracking'];

export function Home() {
  /* ── HERO ENTRANCE TIMELINE ── */
  useEffect(() => {
    const tl = anime.timeline({ easing: 'easeOutExpo' });
    tl
      .add({ targets: '.hero-greeting', opacity: [0, 1], translateY: [20, 0], duration: 700 })
      .add({ targets: '.hero-name',     opacity: [0, 1], translateY: [40, 0], duration: 900 }, '-=400')
      .add({ targets: '.hero-sub',      opacity: [0, 1], translateY: [20, 0], duration: 700 }, '-=500')
      .add({ targets: '.hero-tags .tag', opacity: [0, 1], translateY: [16, 0], scale: [0.85, 1], delay: anime.stagger(60), duration: 500 }, '-=400')
      .add({ targets: '.hero-ctas',     opacity: [0, 1], translateY: [20, 0], duration: 600 }, '-=300')
      .add({ targets: '.hero-stats',    opacity: [0, 1], translateY: [30, 0], duration: 700 }, '-=200')
      .add({ targets: '.hero-scroll',   opacity: [0, 0.7], duration: 600 }, '-=200');

    /* Animated stat counters */
    document.querySelectorAll<HTMLElement>('.stat-value[data-count]').forEach(el => {
      const target = parseInt(el.dataset.count!);
      anime({
        targets: { val: 0 }, val: target, round: 1,
        duration: 1800, delay: 1100, easing: 'easeOutExpo',
        update(a: any) { el.textContent = Math.round(a.animations[0].currentValue); },
      });
    });
  }, []);

  /* ── SCROLL OBSERVER (expertise + featured projects) ── */
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const anim = (entry.target as HTMLElement).dataset.anim;
        if (anim === 'expertise') {
          anime({ targets: '.expertise-card', opacity: [0, 1], translateY: [30, 0], delay: anime.stagger(100), duration: 700, easing: 'easeOutExpo' });
        }
        if (anim === 'featured') {
          anime({ targets: '.featured-card', opacity: [0, 1], translateY: [40, 0], delay: anime.stagger(120), duration: 800, easing: 'easeOutExpo' });
        }
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('[data-anim]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const featuredProjects = FEATURED_IDS
    .map(id => projects.find(p => p.id === id))
    .filter(Boolean) as typeof projects;

  const expertise = [
    { icon: '⬡', color: 'var(--neon-cyan)',   num: '01', title: 'Machine Learning',        desc: 'End-to-end ML pipelines, feature engineering, RandomForest / XGBoost / LightGBM, SHAP interpretability.' },
    { icon: '◈', color: 'var(--neon-green)',  num: '02', title: 'Backend Development',     desc: 'System optimization, API design and integration, ERPNext backend customization, data pipelines.' },
    { icon: '◎', color: 'var(--neon-pink)',   num: '03', title: 'Full-Stack & Dashboards', desc: 'Next.js, React, TypeScript, Tailwind CSS. Delivered a national analytics dashboard for Lebanon\'s Ministry of IT & AI.' },
    { icon: '◇', color: 'var(--neon-yellow)', num: '04', title: 'Embedded Systems',        desc: 'Low-level C++ on Arduino, hardware-software integration, sensor arrays, real-time signal processing.' },
  ];

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>

      {/* ═══ HERO ═══ */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '100px 0 60px', position: 'relative' }}>
        <div className="section-inner" style={{ width: '100%' }}>

          {/* greeting */}
          <p className="hero-greeting font-mono" style={{
            fontSize: '0.85rem', color: 'var(--neon-green)',
            letterSpacing: '0.15em', marginBottom: 20, opacity: 0,
          }}>
            // Hello, I'm
          </p>

          {/* name */}
          <h1 className="hero-name" style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(4rem, 10vw, 9rem)', lineHeight: 0.9,
            color: '#fff', marginBottom: 28, opacity: 0,
          }}>
            <span className="glitch" data-text="Ilona">Ilona</span>
            <span style={{ color: 'var(--neon-cyan)', display: 'block' }}>
              Chamoun<span style={{ color: 'var(--neon-pink)' }}>.</span>
            </span>
          </h1>

          {/* sub */}
          <p className="hero-sub" style={{
            fontSize: '1.1rem', color: 'var(--muted)', maxWidth: 540,
            lineHeight: 1.7, marginBottom: 40, opacity: 0,
          }}>
            <strong style={{ color: 'var(--text)' }}>Software Engineer & AI Researcher</strong> — building ML pipelines
            at Byblos Bank, delivering government dashboards, mastering low-level logic at 42 Beirut.
          </p>

          {/* tags */}
          <div className="hero-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 48, opacity: 0 }}>
            {['Python', 'Machine Learning', 'Next.js', 'TypeScript', 'C++', 'SQL', 'Docker'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero-ctas" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', opacity: 0 }}>
            <Link to="/projects" className="btn-primary">View Projects →</Link>
            <Link to="/contact" className="btn-ghost">Get in Touch</Link>
            <a href="https://github.com/ilona0712" target="_blank" rel="noopener noreferrer" className="btn-ghost">GitHub ↗</a>
          </div>

          {/* Stats */}
          <div className="hero-stats" style={{
            display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1,
            marginTop: 80, background: 'var(--border)',
            border: '1px solid var(--border)', opacity: 0,
          }}>
            {[
              { value: '4', label: 'Year of Study', count: true },
              { value: '8', label: 'Projects Built', count: true },
              { value: '2', label: 'Internships',    count: true },
              { value: '2027', label: 'Graduation',  count: false },
            ].map((s, i) => (
              <div key={i} style={{ background: 'var(--bg)', padding: '28px 24px', textAlign: 'center' }}>
                <span
                  className="stat-value"
                  data-count={s.count ? s.value : undefined}
                  style={{
                    fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800,
                    color: 'var(--neon-cyan)', display: 'block',
                    textShadow: '0 0 20px rgba(0,255,224,0.5)',
                  }}
                >
                  {s.count ? '0' : s.value}
                </span>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                  color: 'var(--muted)', letterSpacing: '0.15em', textTransform: 'uppercase',
                  display: 'block', marginTop: 4,
                }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll" style={{
          position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: 0,
        }}>
          <div className="scroll-line" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>scroll</span>
        </div>
      </section>

      {/* ═══ EXPERTISE ═══ */}
      <section data-anim="expertise" style={{ padding: '120px 0', background: 'var(--bg2)' }}>
        <div className="section-inner">
          <div className="section-label">What I Do</div>
          <h2 className="section-heading">Areas of <span>Expertise</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 1, background: 'var(--border)', border: '1px solid var(--border)' }}>
            {expertise.map((e, i) => (
              <div
                key={i}
                className="expertise-card"
                style={{
                  background: 'var(--bg2)', padding: 40, position: 'relative', overflow: 'hidden',
                  opacity: 0, transform: 'translateY(30px)',
                  transition: 'background 0.3s',
                  /* top neon line on hover via pseudo handled in theme.css */
                }}
                onMouseEnter={el => (el.currentTarget.style.background = 'var(--surface)')}
                onMouseLeave={el => (el.currentTarget.style.background = 'var(--bg2)')}
              >
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: 16, color: e.color, filter: 'drop-shadow(0 0 8px currentColor)' }}>{e.icon}</span>
                <span style={{ position: 'absolute', top: 20, right: 24, fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>{e.num}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: 10 }}>{e.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURED PROJECTS ═══ */}
      <section data-anim="featured" style={{ padding: '120px 0' }}>
        <div className="section-inner">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56 }}>
            <div>
              <div className="section-label">Selected Work</div>
              <h2 className="section-heading" style={{ marginBottom: 0 }}>Featured <span>Projects</span></h2>
            </div>
            <Link to="/projects" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--neon-cyan)', textDecoration: 'none', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 6 }}>
              All Projects →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {featuredProjects.map((project, i) => {
              const neons = ['var(--neon-cyan)', 'var(--neon-green)', 'var(--neon-pink)'];
              const catColors = ['var(--neon-cyan)', 'var(--neon-green)', 'var(--neon-pink)'];
              return (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="featured-card"
                  style={{
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    borderRadius: 4, overflow: 'hidden', textDecoration: 'none', color: 'inherit',
                    display: 'block', opacity: 0, transform: 'translateY(40px)',
                    transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = neons[i % 3];
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#0d1525' }}>
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.7) brightness(0.8)', transition: 'filter 0.3s' }} />
                  </div>
                  <div style={{ padding: 24 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: catColors[i % 3], letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: 8, textShadow: '0 0 12px currentColor' }}>{project.category}</span>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>{project.title}</div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: 16 }}>{project.subtitle}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {project.tags.slice(0, 3).map((tag, j) => (
                        <span key={j} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', padding: '3px 8px', border: '1px solid var(--border)', color: 'var(--muted)', borderRadius: 2, letterSpacing: '0.05em' }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA BAND ═══ */}
      <section style={{ padding: '80px 0', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>
            Let's Work <span style={{ color: 'var(--neon-cyan)' }}>Together</span>
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: 36, fontSize: '1rem' }}>Available for Summer 2026 internship opportunities</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Contact Me →</Link>
            <Link to="/about" className="btn-ghost">Learn More</Link>
          </div>
        </div>
      </section>

    </div>
  );
}