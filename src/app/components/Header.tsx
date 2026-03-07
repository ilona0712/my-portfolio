import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';

/* ── anime.js is loaded via CDN in index.html — declare type ── */
declare const anime: any;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  /* ── CURSOR ── */
  useEffect(() => {
    const cursor = document.getElementById('ic-cursor');
    const ring   = document.getElementById('ic-cursor-ring');
    if (!cursor || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
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
  }, []);

  /* ── PARTICLE CANVAS ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let W: number, H: number;

    const COLORS = ['#00ffe0','#39ff8f','#ff2d78','#4d9fff','#f5e642'];
    const particles = Array.from({ length: 110 }, () => ({
      x: Math.random() * 1440, y: Math.random() * 900,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 80) {
            ctx.beginPath();
            ctx.strokeStyle = particles[i].color;
            ctx.globalAlpha = (1 - d / 80) * 0.07;
            ctx.lineWidth   = 0.5;
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
  }, []);

  /* ── SCROLL SHRINK ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── ACTIVE NAV ── */
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { name: 'Home',       path: '/' },
    { name: 'Projects',   path: '/projects' },
    { name: 'About',      path: '/about' },
    { name: 'Contact',    path: '/contact' },
  ];

  return (
    <>
      {/* ── Custom cursor ── */}
      <div id="ic-cursor" style={{
        position: 'fixed', top: 0, left: 0, zIndex: 9999,
        width: 12, height: 12,
        background: 'var(--neon-cyan)',
        borderRadius: '50%',
        pointerEvents: 'none',
        mixBlendMode: 'difference',
        boxShadow: '0 0 16px var(--neon-cyan)',
      }} />
      <div id="ic-cursor-ring" style={{
        position: 'fixed', top: 0, left: 0, zIndex: 9998,
        width: 36, height: 36,
        border: '1px solid rgba(0,255,224,0.5)',
        borderRadius: '50%',
        pointerEvents: 'none',
        transition: 'width 0.2s, height 0.2s',
        margin: '-6px 0 0 -6px',
      }} />

      {/* ── Particle canvas ── */}
      <canvas ref={canvasRef} style={{
        position: 'fixed', inset: 0, zIndex: 0,
        pointerEvents: 'none', opacity: 0.45,
      }} />

      {/* ── Nav ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: scrolled ? '12px 48px' : '20px 48px',
        background: scrolled ? 'rgba(5,8,16,0.98)' : 'linear-gradient(to bottom, rgba(5,8,16,0.9), transparent)',
        backdropFilter: 'blur(8px)',
        transition: 'padding 0.3s, background 0.3s',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      }}>
        {/* Logo */}
        <Link to="/" style={{
          fontFamily: 'var(--font-mono)', fontSize: '1rem',
          color: 'var(--neon-cyan)', textDecoration: 'none', letterSpacing: '0.05em',
        }}>
          IC_
        </Link>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: 36, listStyle: 'none' }}>
          {navLinks.map(link => (
            <li key={link.path}>
              <Link to={link.path} style={{
                fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 500,
                color: isActive(link.path) ? 'var(--neon-cyan)' : 'var(--muted)',
                textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase',
                position: 'relative', padding: '4px 0',
                transition: 'color 0.2s',
              }}>
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://linkedin.com/in/ilona-chamoun-808295360"
              target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 500,
                color: 'var(--muted)', textDecoration: 'none',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
            >LinkedIn ↗</a>
          </li>
        </ul>
      </nav>
    </>
  );
}