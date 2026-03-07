import { Link } from 'react-router';

export function Footer() {
  return (
    <footer style={{
      position: 'relative', zIndex: 1,
      borderTop: '1px solid var(--border)',
      padding: '32px 48px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: 12,
      background: 'var(--bg)',
    }}>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
        color: 'var(--neon-cyan)',
      }}>
        IC_ — Ilona Chamoun
      </span>

      <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        <a
          href="https://github.com/ilona0712"
          target="_blank" rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
            color: 'var(--muted)', letterSpacing: '0.1em',
            textDecoration: 'none', transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--neon-cyan)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
        >GITHUB ↗</a>
        <a
          href="https://linkedin.com/in/ilona-chamoun-808295360"
          target="_blank" rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
            color: 'var(--muted)', letterSpacing: '0.1em',
            textDecoration: 'none', transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--neon-cyan)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
        >LINKEDIN ↗</a>
        <a
          href="mailto:chamounilona@gmail.com"
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
            color: 'var(--muted)', letterSpacing: '0.1em',
            textDecoration: 'none', transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--neon-cyan)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
        >EMAIL ↗</a>
      </div>

      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
        color: 'var(--muted)', letterSpacing: '0.1em',
      }}>
        © 2026 · Beirut, Lebanon ·{' '}
        <Link
          to="/contact"
          style={{ color: 'var(--neon-cyan)', textDecoration: 'none' }}
        >
          Available Summer 2026
        </Link>
      </span>
    </footer>
  );
}