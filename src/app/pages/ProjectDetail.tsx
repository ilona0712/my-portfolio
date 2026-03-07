import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { projects } from '../data/projects';

declare const anime: any;

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === projectId);
  const currentIndex = projects.findIndex(p => p.id === projectId);
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  useEffect(() => {
    window.scrollTo(0, 0);
    anime.timeline({ easing: 'easeOutExpo' })
      .add({ targets: '.detail-hero-title', opacity: [0,1], translateY: [40,0], duration: 800 })
      .add({ targets: '.detail-meta',       opacity: [0,1], translateY: [20,0], duration: 600 }, '-=400')
      .add({ targets: '.detail-body > *',   opacity: [0,1], translateY: [16,0], delay: anime.stagger(80), duration: 500 }, '-=300');
  }, [projectId]);

  if (!project) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, position: 'relative' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', color: '#fff', marginBottom: 16 }}>Project not found</h2>
          <Link to="/projects" style={{ color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)' }}>← Back to Projects</Link>
        </div>
      </div>
    );
  }

  const CAT_COLORS: Record<string, string> = {
    'Full-Stack':       'var(--neon-cyan)',
    'Machine Learning': 'var(--neon-green)',
    'Development':      'var(--neon-blue)',
    'Embedded Systems': 'var(--neon-pink)',
    'Networking':       'var(--neon-yellow)',
  };
  const neon = CAT_COLORS[project.category] || 'var(--neon-cyan)';

  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>

      {/* Hero image */}
      <div style={{ height: 380, overflow: 'hidden', background: 'var(--bg2)', position: 'relative' }}>
        <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.5) brightness(0.5)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,8,16,0.9), transparent)' }} />
        {/* Title over image */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px', maxWidth: 1100, margin: '0 auto' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: neon, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'inline-block', marginBottom: 12, textShadow: `0 0 12px ${neon}` }}>{project.category}</span>
          <h1 className="detail-hero-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: '#fff', opacity: 0 }}>
            {project.title}
          </h1>
        </div>
      </div>

      <div className="section-inner" style={{ padding: '48px 40px' }}>

        {/* Back */}
        <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: neon, textDecoration: 'none', letterSpacing: '0.1em', marginBottom: 40, transition: 'gap 0.2s' }}>
          ← Back to Projects
        </Link>

        {/* Meta row */}
        <div className="detail-meta" style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginBottom: 48, paddingBottom: 32, borderBottom: '1px solid var(--border)', opacity: 0 }}>
          {[
            { label: 'Timeline', value: project.timeline },
            { label: 'Role',     value: project.role || '—' },
          ].map(m => (
            <div key={m.label}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: neon, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>{m.label}</span>
              <span style={{ fontSize: '0.875rem', color: 'var(--text)' }}>{m.value}</span>
            </div>
          ))}
        </div>

        {/* Body */}
        <div className="detail-body" style={{ maxWidth: 720 }}>
          {[
            { label: 'Overview',       content: project.overview },
            { label: 'The Challenge',  content: project.challenge },
            { label: 'The Solution',   content: project.solution },
          ].map(s => (
            <div key={s.label} style={{ marginBottom: 40, opacity: 0 }}>
              <div className="section-label">{s.label}</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.8 }}>{s.content}</p>
            </div>
          ))}

          {/* Impact */}
          <div style={{ marginBottom: 40, opacity: 0 }}>
            <div className="section-label">Impact & Results</div>
            <ul style={{ listStyle: 'none' }}>
              {project.impact.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, marginBottom: 12, fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                  <span style={{ color: neon, flexShrink: 0, marginTop: 2 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div style={{ marginBottom: 56, opacity: 0 }}>
            <div className="section-label">Technologies</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {project.technologies.map((tech, i) => (
                <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', padding: '8px 16px', border: `1px solid ${neon}22`, borderRadius: 2, color: neon, background: `${neon}08`, letterSpacing: '0.05em' }}>{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Next project */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 4, padding: 36, opacity: 0 }}
          className="detail-body"
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.15em', display: 'block', marginBottom: 8 }}>NEXT PROJECT</span>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: 24 }}>{nextProject.title}</h3>
          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={() => navigate(`/projects/${nextProject.id}`)} className="btn-primary">View Project →</button>
            <Link to="/projects" className="btn-ghost">All Projects</Link>
          </div>
        </div>

      </div>
    </div>
  );
}