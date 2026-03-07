import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { projects } from '../data/projects';

declare const anime: any;

const CATEGORIES = ['All', 'Full-Stack', 'Machine Learning', 'Development', 'Embedded Systems', 'Networking'];
const CAT_COLORS: Record<string, string> = {
  'Full-Stack':        'var(--neon-cyan)',
  'Machine Learning':  'var(--neon-green)',
  'Development':       'var(--neon-blue)',
  'Embedded Systems':  'var(--neon-pink)',
  'Networking':        'var(--neon-yellow)',
};

export function Projects() {
  const [selected, setSelected] = useState('All');

  const filtered = selected === 'All' ? projects : projects.filter(p => p.category === selected);

  /* Animate cards whenever filter changes */
  useEffect(() => {
    anime({
      targets: '.project-card',
      opacity: [0, 1],
      translateY: [32, 0],
      delay: anime.stagger(80),
      duration: 600,
      easing: 'easeOutExpo',
    });
  }, [selected]);

  /* Initial entrance */
  useEffect(() => {
    anime.timeline({ easing: 'easeOutExpo' })
      .add({ targets: '.projects-title', opacity: [0,1], translateY: [30,0], duration: 700 })
      .add({ targets: '.filter-btn',     opacity: [0,1], scale: [0.85,1], delay: anime.stagger(50), duration: 400 }, '-=400');
  }, []);

  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', paddingTop: 100, paddingBottom: 80, background: 'var(--bg)' }}>
      <div className="section-inner">

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div className="section-label">Portfolio</div>
          <h1 className="projects-title section-heading" style={{ opacity: 0 }}>
            My <span>Projects</span>
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, fontSize: '0.9rem', lineHeight: 1.7 }}>
            Spanning machine learning, backend systems, full-stack development, and embedded engineering.
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 52 }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className="filter-btn"
              onClick={() => setSelected(cat)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                padding: '8px 18px',
                border: `1px solid ${selected === cat ? (CAT_COLORS[cat] || 'var(--neon-cyan)') : 'var(--border)'}`,
                borderRadius: 2,
                background: selected === cat ? `rgba(0,255,224,0.06)` : 'transparent',
                color: selected === cat ? (CAT_COLORS[cat] || 'var(--neon-cyan)') : 'var(--muted)',
                cursor: 'none',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                transition: 'all 0.2s',
                boxShadow: selected === cat ? `0 0 16px rgba(0,255,224,0.2)` : 'none',
                opacity: 0,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {filtered.map(project => {
            const neon = CAT_COLORS[project.category] || 'var(--neon-cyan)';
            return (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="project-card"
                style={{
                  display: 'block', textDecoration: 'none', color: 'inherit',
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 4, overflow: 'hidden', opacity: 0,
                  transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = neon;
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.5), 0 0 24px rgba(0,255,224,0.06)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: 'var(--bg2)' }}>
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.6) brightness(0.75)', transition: 'filter 0.3s' }}
                    onMouseEnter={e => (e.currentTarget.style.filter = 'saturate(1) brightness(0.9)')}
                    onMouseLeave={e => (e.currentTarget.style.filter = 'saturate(0.6) brightness(0.75)')}
                  />
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: neon, letterSpacing: '0.12em', textTransform: 'uppercase', textShadow: `0 0 10px ${neon}` }}>
                      {project.category}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--muted)' }}>{project.timeline}</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>
                    {project.title}
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: 16 }}>
                    {project.subtitle}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                    {project.tags.map((tag, i) => (
                      <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', padding: '3px 8px', border: '1px solid var(--border)', color: 'var(--muted)', borderRadius: 2, letterSpacing: '0.04em' }}>{tag}</span>
                    ))}
                  </div>
                  {project.role && (
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: neon, letterSpacing: '0.04em' }}>{project.role}</p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>
            No projects in this category.
          </div>
        )}
      </div>
    </div>
  );
}