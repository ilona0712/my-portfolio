import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { projects } from '../data/projects';

declare const anime: any;

const CATEGORY_COLORS: Record<string, string> = {
  'Full-Stack': 'var(--neon-cyan)',
  'Machine Learning': 'var(--neon-green)',
  'Automation': 'var(--neon-pink)',
  'Data Engineering': 'var(--neon-blue)',
  Development: 'var(--neon-yellow)',
  'Embedded Systems': 'var(--neon-pink)',
  Networking: 'var(--neon-yellow)',
};

const categories = ['All', ...Array.from(new Set(projects.map((project) => project.category)))];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    if (typeof anime === 'undefined') return;

    anime({
      targets: '.project-card',
      opacity: [0, 1],
      translateY: [32, 0],
      delay: anime.stagger(70),
      duration: 600,
      easing: 'easeOutExpo',
    });
  }, [selectedCategory]);

  useEffect(() => {
    if (typeof anime === 'undefined') return;

    anime.timeline({ easing: 'easeOutExpo' })
      .add({ targets: '.projects-title', opacity: [0, 1], translateY: [30, 0], duration: 700 })
      .add({ targets: '.projects-subcopy', opacity: [0, 1], translateY: [20, 0], duration: 500 }, '-=350')
      .add({ targets: '.filter-btn', opacity: [0, 1], scale: [0.92, 1], delay: anime.stagger(45), duration: 360 }, '-=280');
  }, []);

  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', paddingTop: 120, paddingBottom: 88 }}>
      <div className="section-inner">
        <div style={{ marginBottom: 48 }}>
          <div className="section-label">Portfolio</div>
          <h1 className="projects-title section-heading" style={{ opacity: 0, marginBottom: 20 }}>
            My <span>Projects</span>
          </h1>
          <p
            className="projects-subcopy"
            style={{
              color: 'var(--muted)',
              maxWidth: 620,
              fontSize: '0.95rem',
              lineHeight: 1.8,
              opacity: 0,
            }}
          >
            A collection of machine learning systems, data tools, full-stack builds, and automation work
            designed with the same neon dark visual language as the rest of the site.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 52 }}>
          {categories.map((category) => {
            const accent = CATEGORY_COLORS[category] || 'var(--neon-cyan)';
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                className="filter-btn"
                onClick={() => setSelectedCategory(category)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  padding: '9px 16px',
                  border: `1px solid ${isActive ? accent : 'var(--border)'}`,
                  borderRadius: 2,
                  background: isActive ? `${accent}12` : 'transparent',
                  color: isActive ? accent : 'var(--muted)',
                  boxShadow: isActive ? `0 0 18px ${accent}22` : 'none',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  transition: 'border-color 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s',
                  opacity: 0,
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.borderColor = accent;
                  event.currentTarget.style.color = accent;
                  event.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.borderColor = isActive ? accent : 'var(--border)';
                  event.currentTarget.style.color = isActive ? accent : 'var(--muted)';
                  event.currentTarget.style.transform = 'none';
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 22,
          }}
        >
          {filteredProjects.map((project) => {
            const accent = CATEGORY_COLORS[project.category] || 'var(--neon-cyan)';

            return (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="project-card"
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  color: 'inherit',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 4,
                  overflow: 'hidden',
                  opacity: 0,
                  transform: 'translateY(32px)',
                  transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.borderColor = accent;
                  event.currentTarget.style.transform = 'translateY(-6px)';
                  event.currentTarget.style.boxShadow = `0 20px 60px rgba(0, 0, 0, 0.45), 0 0 22px ${accent}1a`;
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.borderColor = 'var(--border)';
                  event.currentTarget.style.transform = 'translateY(0)';
                  event.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ aspectRatio: '16 / 9', overflow: 'hidden', background: 'var(--bg2)' }}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'saturate(0.68) brightness(0.78)',
                      transition: 'transform 0.35s ease, filter 0.35s ease',
                    }}
                  />
                </div>

                <div style={{ padding: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginBottom: 10 }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.62rem',
                        color: accent,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        textShadow: `0 0 10px ${accent}`,
                      }}
                    >
                      {project.category}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.62rem',
                        color: 'var(--muted)',
                        flexShrink: 0,
                      }}
                    >
                      {project.timeline}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.08rem',
                      fontWeight: 700,
                      color: '#fff',
                      marginBottom: 8,
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </h2>

                  <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: 18 }}>
                    {project.subtitle}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6rem',
                          padding: '4px 8px',
                          border: '1px solid var(--border)',
                          borderRadius: 2,
                          color: 'var(--muted)',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 12,
                      flexWrap: 'wrap',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        color: accent,
                        letterSpacing: '0.08em',
                      }}
                    >
                      {project.role || 'Case Study'}
                    </span>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: '#fff',
                        letterSpacing: '0.08em',
                      }}
                    >
                      View Project →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '80px 0',
              color: 'var(--muted)',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.1em',
            }}
          >
            No projects in this category.
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
