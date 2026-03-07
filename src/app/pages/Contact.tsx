import { useEffect } from 'react';
import { Link } from 'react-router';

declare const anime: any;

export function Contact() {
  useEffect(() => {
    anime.timeline({ easing: 'easeOutExpo' })
      .add({ targets: '.contact-title', opacity: [0,1], translateY: [40,0], duration: 800 })
      .add({ targets: '.contact-sub',   opacity: [0,1], translateY: [20,0], duration: 600 }, '-=400')
      .add({ targets: '.contact-link',  opacity: [0,1], translateX: [-20,0], delay: anime.stagger(100), duration: 600 }, '-=300')
      .add({ targets: '.avail-card',    opacity: [0,1], translateX: [20,0],  delay: anime.stagger(80),  duration: 500 }, '-=400');
  }, []);

  const contactLinks = [
    { label: 'Email',    value: 'chamounilona@gmail.com',                        href: 'mailto:chamounilona@gmail.com',                            icon: '✉', color: 'var(--neon-cyan)' },
    { label: 'LinkedIn', value: 'ilona-chamoun-808295360',                        href: 'https://linkedin.com/in/ilona-chamoun-808295360',          icon: 'in', color: 'var(--neon-blue)' },
    { label: 'GitHub',   value: 'github.com/ilona0712',                          href: 'https://github.com/ilona0712',                            icon: 'gh', color: 'var(--neon-green)' },
    { label: 'Phone',    value: '+961 70 735 745',                               href: 'tel:+96170735745',                                         icon: '☎', color: 'var(--neon-pink)' },
  ];

  const availability = [
    { title: 'Software Engineering Internship', detail: 'Summer 2026',  color: 'var(--neon-cyan)' },
    { title: 'ML / Data Engineering Roles',     detail: 'Summer 2026',  color: 'var(--neon-green)' },
    { title: 'Backend Development Projects',    detail: 'Open',         color: 'var(--neon-blue)' },
    { title: 'Collaboration & Networking',      detail: 'Always',       color: 'var(--neon-pink)' },
  ];

  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>

      {/* Header band */}
      <div style={{ background: 'var(--bg2)', paddingTop: 120, paddingBottom: 80, borderBottom: '1px solid var(--border)' }}>
        <div className="section-inner">
          <div className="section-label">Contact</div>
          <h1 className="contact-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.5rem,8vw,7rem)', fontWeight: 800, color: '#fff', lineHeight: 0.95, marginBottom: 24, opacity: 0 }}>
            Get in<br /><span style={{ color: 'var(--neon-cyan)' }}>Touch</span><span style={{ color: 'var(--neon-pink)' }}>.</span>
          </h1>
          <p className="contact-sub" style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: 500, lineHeight: 1.7, opacity: 0 }}>
            Available for Summer 2026 internship opportunities. I respond to emails within 24 hours.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div style={{ padding: '80px 0' }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72 }}>

            {/* Left — contact methods */}
            <div>
              <div className="section-label" style={{ marginBottom: 24 }}>Reach Out</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {contactLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact-link"
                    style={{
                      display: 'flex', alignItems: 'center', gap: 16, padding: '20px 24px',
                      border: '1px solid var(--border)', borderRadius: 4,
                      textDecoration: 'none', color: 'inherit',
                      background: 'var(--surface)', opacity: 0,
                      transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = link.color;
                      e.currentTarget.style.transform = 'translateX(6px)';
                      e.currentTarget.style.boxShadow = `0 0 24px rgba(0,255,224,0.08)`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: 4, background: `${link.color}12`, border: `1px solid ${link.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', color: link.color, flexShrink: 0 }}>
                      {link.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: link.color, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: 3 }}>{link.label}</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 500 }}>{link.value}</span>
                    </div>
                    <span style={{ color: 'var(--muted)' }}>→</span>
                  </a>
                ))}
              </div>

              {/* Location */}
              <div style={{ marginTop: 20, padding: '20px 24px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--surface)', display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: 4, background: 'rgba(0,255,224,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', color: 'var(--neon-cyan)', flexShrink: 0 }}>📍</div>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--neon-cyan)', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: 3 }}>Location</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 500 }}>Beirut, Lebanon</span>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--muted)', marginTop: 2 }}>Open to remote & on-site</span>
                </div>
              </div>
            </div>

            {/* Right — availability */}
            <div>
              <div className="section-label" style={{ marginBottom: 24 }}>Availability</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                {availability.map((item, i) => (
                  <div key={i} className="avail-card" style={{
                    padding: '18px 24px', border: '1px solid var(--border)', borderRadius: 4,
                    background: 'var(--surface)', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    opacity: 0,
                    transition: 'border-color 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = item.color)}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: item.color, boxShadow: `0 0 8px ${item.color}` }} />
                      <span style={{ fontSize: '0.875rem', color: 'var(--text)', fontWeight: 500 }}>{item.title}</span>
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '4px 12px', borderRadius: 20, background: `${item.color}10`, color: item.color, border: `1px solid ${item.color}22`, letterSpacing: '0.05em', flexShrink: 0 }}>
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>

              {/* Response time box */}
              <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 4, padding: 28, borderLeft: '3px solid var(--neon-cyan)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--neon-cyan)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 10 }}>Response Time</div>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16 }}>
                  Email within 24 hours. LinkedIn messages within 48 hours.
                </p>
                <a href="mailto:chamounilona@gmail.com" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--neon-cyan)', textDecoration: 'none', letterSpacing: '0.05em', transition: 'opacity 0.2s' }}>
                  Send an Email →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}