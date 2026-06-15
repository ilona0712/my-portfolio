import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { projects } from '../data/projects';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

declare const anime: any;

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === projectId);
  const currentIndex = projects.findIndex(p => p.id === projectId);
  const nextProject = currentIndex >= 0 && currentIndex < projects.length - 1
    ? projects[currentIndex + 1]
    : projects[0];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof anime === 'undefined') return;
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
    'Data Engineering': 'var(--neon-blue)',
    'Automation':       'var(--neon-pink)',
    'Development':      'var(--neon-yellow)',
    'Embedded Systems': 'var(--neon-pink)',
    'Networking':       'var(--neon-yellow)',
  };
  const neon = CAT_COLORS[project.category] || 'var(--neon-cyan)';

  const toParagraphs = (content: string | string[]): string[] => {
    if (Array.isArray(content)) return content.filter(Boolean);
    if (typeof content === 'string') return content.split('\n\n').filter(Boolean);
    return [];
  };

  const sections: { label: string; content: string | string[] }[] = [
    { label: 'Overview',      content: project.overview },
    { label: 'The Challenge', content: project.challenge },
    { label: 'The Solution',  content: project.solution },
  ];

  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>

      <div style={{ height: 'clamp(260px, 42vw, 380px)', overflow: 'hidden', background: 'var(--bg2)', position: 'relative' }}>
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          loading="eager"
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.5) brightness(0.5)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,8,16,0.9), transparent)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(20px, 4vw, 40px)', maxWidth: 1100, margin: '0 auto' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: neon, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'inline-block', marginBottom: 12, textShadow: `0 0 12px ${neon}` }}>{project.category}</span>
          <h1 className="detail-hero-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: '#fff', opacity: 0 }}>
            {project.title}
          </h1>
        </div>
      </div>

      <div className="section-inner" style={{ padding: '48px 18px' }}>

        <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: neon, textDecoration: 'none', letterSpacing: '0.1em', marginBottom: 40, transition: 'gap 0.2s' }}>
          ← Back to Projects
        </Link>

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

        <div className="detail-body" style={{ maxWidth: 720 }}>
          {sections.map(s => (
            <div key={s.label} style={{ marginBottom: 40, opacity: 0 }}>
              <div className="section-label">{s.label}</div>
              {toParagraphs(s.content).map((para, i) => (
                <p key={i} style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: 12 }}>{para}</p>
              ))}
            </div>
          ))}

          {project.liveUrl && (
            <div style={{ marginBottom: 40, opacity: 0 }} className="detail-body">
              <div className="section-label">Live Demo</div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: neon,
                  textDecoration: 'none',
                  border: `1px solid ${neon}44`,
                  borderRadius: 2,
                  padding: '10px 20px',
                  background: `${neon}08`,
                  letterSpacing: '0.05em',
                  transition: 'background 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = `${neon}18`;
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 20px ${neon}33`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = `${neon}08`;
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                }}
              >
                ↗ {project.liveUrl.replace(/^https?:\/\//, '')}
              </a>
            </div>
          )}

          {project.websiteLinks && project.websiteLinks.length > 0 && (
            <div style={{ marginBottom: 40, opacity: 0 }} className="detail-body">
              <div className="section-label">Live Websites</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {project.websiteLinks.map((site, i) => (
                  <a
                    key={i}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: neon,
                      textDecoration: 'none',
                      border: `1px solid ${neon}44`,
                      borderRadius: 2,
                      padding: '8px 16px',
                      background: `${neon}08`,
                      letterSpacing: '0.05em',
                      transition: 'background 0.2s, box-shadow 0.2s',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = `${neon}18`;
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 16px ${neon}33`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = `${neon}08`;
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                    }}
                  >
                    ↗ {site.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* GitHub Link */}
          {project.github && (
            <div style={{ marginBottom: 40, opacity: 0 }} className="detail-body">
              <div className="section-label">GitHub Repository</div>
    
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: neon,
                  textDecoration: 'none',
                  border: `1px solid ${neon}44`,
                  borderRadius: 2,
                  padding: '10px 20px',
                  background: `${neon}08`,
                  letterSpacing: '0.05em',
                  transition: 'background 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = `${neon}18`;
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 20px ${neon}33`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = `${neon}08`;
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                }}
              >
                ↗ View on GitHub
              </a>
            </div>
          )}

          {/* Certificate PDF */}
          {project.certificateUrl && (
            <div style={{ marginBottom: 40, opacity: 0 }} className="detail-body">
              <div className="section-label">Certificate</div>
              
                href={project.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: neon,
                  textDecoration: 'none',
                  border: `1px solid ${neon}44`,
                  borderRadius: 2,
                  padding: '10px 20px',
                  background: `${neon}08`,
                  letterSpacing: '0.05em',
                  transition: 'background 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = `${neon}18`;
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 20px ${neon}33`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = `${neon}08`;
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                }}
              >
                📄 View Certificate
              </a>
            </div>
          )}

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

          <div style={{ marginBottom: 56, opacity: 0 }}>
            <div className="section-label">Technologies</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {project.technologies.map((tech, i) => (
                <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', padding: '8px 16px', border: `1px solid ${neon}22`, borderRadius: 2, color: neon, background: `${neon}08`, letterSpacing: '0.05em' }}>{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 4, padding: 36, opacity: 0 }}
          className="detail-body"
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.15em', display: 'block', marginBottom: 8 }}>NEXT PROJECT</span>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: 24 }}>{nextProject.title}</h3>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button onClick={() => navigate(`/projects/${nextProject.id}`)} className="btn-primary">View Project →</button>
            <Link to="/projects" className="btn-ghost">All Projects</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
