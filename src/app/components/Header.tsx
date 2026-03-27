import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from './ui/use-mobile';

/* anime.js is loaded via CDN in index.html */
declare const anime: any;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const cursor = document.getElementById('ic-cursor');
    const ring = document.getElementById('ic-cursor-ring');
    if (!cursor || !ring) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
    };

    document.addEventListener('mousemove', onMove);

    let rafId: number;
    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = `translate(${rx - 6}px, ${ry - 6}px)`;
      rafId = requestAnimationFrame(animRing);
    };

    animRing();

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const colors = ['#00ffe0', '#39ff8f', '#ff2d78', '#4d9fff', '#f5e642'];
    const particles = Array.from({ length: 110 }, () => ({
      x: Math.random() * 1440,
      y: Math.random() * 900,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.alpha;
        ctx.fill();
      });

      ctx.globalAlpha = 1;

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            ctx.beginPath();
            ctx.strokeStyle = particles[i].color;
            ctx.globalAlpha = (1 - distance / 80) * 0.07;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [isMobile]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {!isMobile && (
        <>
          <div
            id="ic-cursor"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: 9999,
              width: 12,
              height: 12,
              background: 'var(--neon-cyan)',
              borderRadius: '50%',
              pointerEvents: 'none',
              mixBlendMode: 'difference',
              boxShadow: '0 0 16px var(--neon-cyan)',
            }}
          />
          <div
            id="ic-cursor-ring"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: 9998,
              width: 36,
              height: 36,
              border: '1px solid rgba(0,255,224,0.5)',
              borderRadius: '50%',
              pointerEvents: 'none',
              transition: 'width 0.2s, height 0.2s',
              margin: '-6px 0 0 -6px',
            }}
          />
          <canvas
            ref={canvasRef}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 0,
              pointerEvents: 'none',
              opacity: 0.45,
            }}
          />
        </>
      )}

      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isMobile ? '14px 18px' : scrolled ? '12px 48px' : '20px 48px',
          background: scrolled ? 'rgba(5,8,16,0.98)' : 'linear-gradient(to bottom, rgba(5,8,16,0.9), transparent)',
          backdropFilter: 'blur(8px)',
          transition: 'padding 0.3s, background 0.3s',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1rem',
            color: 'var(--neon-cyan)',
            textDecoration: 'none',
            letterSpacing: '0.05em',
          }}
        >
          IC_
        </Link>

        <ul className="desktop-only" style={{ display: 'flex', gap: 36, listStyle: 'none' }}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: isActive(link.path) ? 'var(--neon-cyan)' : 'var(--muted)',
                  textDecoration: 'none',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  position: 'relative',
                  padding: '4px 0',
                  transition: 'color 0.2s',
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://linkedin.com/in/ilona-chamoun-808295360"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 500,
                color: 'var(--muted)',
                textDecoration: 'none',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
            >
              LinkedIn ↗
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="mobile-only"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
          style={{
            display: isMobile ? 'inline-flex' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
            width: 44,
            height: 44,
            borderRadius: 4,
            border: '1px solid var(--border)',
            background: 'rgba(13,21,37,0.92)',
            color: '#fff',
          }}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {isMobile && menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 73,
            left: 18,
            right: 18,
            zIndex: 99,
            background: 'rgba(8,13,26,0.98)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            boxShadow: '0 24px 80px rgba(0,0,0,0.45)',
            backdropFilter: 'blur(14px)',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: '14px 12px',
                textDecoration: 'none',
                borderRadius: 4,
                color: isActive(link.path) ? 'var(--neon-cyan)' : 'var(--text)',
                background: isActive(link.path) ? 'rgba(0,255,224,0.08)' : 'transparent',
                border: `1px solid ${isActive(link.path) ? 'rgba(0,255,224,0.18)' : 'transparent'}`,
                fontFamily: 'var(--font-body)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontSize: '0.78rem',
              }}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://linkedin.com/in/ilona-chamoun-808295360"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              padding: '14px 12px',
              textDecoration: 'none',
              borderRadius: 4,
              color: 'var(--text)',
              fontFamily: 'var(--font-body)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontSize: '0.78rem',
            }}
          >
            LinkedIn ↗
          </a>
        </div>
      )}
    </>
  );
}
