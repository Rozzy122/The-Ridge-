/* global React */
const { useState, useMemo } = React;

// ---------- Header / Nav ----------
function Nav({ page, setPage }) {
  const links = ['Rounds', 'Courses', 'Friends', 'Stats'];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 10,
      background: 'linear-gradient(180deg, #1F4A1E 0%, #2d5a1c 100%)',
      color: 'var(--ridge-cream)',
      padding: '14px 32px', display: 'flex', alignItems: 'center', gap: 24,
      borderBottom: '3px solid var(--ridge-apple)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}
           onClick={() => setPage('home')}>
        <img src={window.__resources?.logoApple || "../../assets/logo-apple.png"} alt="" style={{ width: 44, height: 44, objectFit: 'contain', filter: 'drop-shadow(0 1px 0 rgba(0,0,0,0.25))' }} />
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 34, color: 'var(--ridge-cream)', lineHeight: 1, whiteSpace: 'nowrap' }}>The Ridge</span>
      </div>
      <nav style={{ display: 'flex', gap: 22, marginLeft: 20 }}>
        {links.map(l => (
          <a key={l} onClick={() => setPage(l.toLowerCase())}
             style={{
               fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14,
               color: page === l.toLowerCase() ? '#fff' : 'var(--ridge-cream)',
               opacity: page === l.toLowerCase() ? 1 : 0.85,
               borderBottom: page === l.toLowerCase() ? '2px solid var(--ridge-apple)' : '2px solid transparent',
               paddingBottom: 2, cursor: 'pointer', textDecoration: 'none',
             }}>{l}</a>
        ))}
      </nav>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 12, alignItems: 'center' }}>
        <button onClick={() => setPage('log')} style={{
          fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13,
          background: 'var(--ridge-apple)', color: '#fff',
          padding: '9px 18px', borderRadius: 999, border: 'none', cursor: 'pointer',
          boxShadow: '0 3px 0 var(--ridge-apple-ink)',
        }}>+ Log a Round</button>
        <div style={{
          width: 36, height: 36, borderRadius: 999, background: 'var(--ridge-apple)',
          color: '#fff', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 22,
        }}>W</div>
      </div>
    </header>
  );
}

// ---------- Reusable ----------
function Pill({ kind = 'birdie', children }) {
  const map = {
    eagle:  { bg: '#FDEFCC', fg: '#8A6400' },
    birdie: { bg: 'var(--ridge-fairway-soft)', fg: 'var(--ridge-fairway-dk)' },
    par:    { bg: 'var(--ridge-parchment)', fg: 'var(--ridge-pencil)' },
    bogey:  { bg: 'var(--ridge-apple-soft)', fg: 'var(--ridge-apple-ink)' },
    double: { bg: '#E9C4BE', fg: 'var(--ridge-apple-deep)' },
  }[kind];
  return <span style={{
    fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 11,
    letterSpacing: '0.08em', textTransform: 'uppercase',
    padding: '3px 10px', borderRadius: 999,
    background: map.bg, color: map.fg,
  }}>{children}</span>;
}

function Avatar({ name, color = 'var(--ridge-apple)', size = 32 }) {
  return <div style={{
    width: size, height: size, borderRadius: 999, background: color,
    color: color === 'var(--ridge-sun)' ? 'var(--ridge-apple-deep)' : '#fff',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'var(--font-display)', fontSize: size * 0.6, flexShrink: 0,
  }}>{name[0]}</div>;
}

function Card({ children, style }) {
  return <div style={{
    background: 'var(--ridge-bone)', borderRadius: 22,
    border: '1px solid var(--line)', boxShadow: 'var(--shadow-md)',
    padding: 24, ...style,
  }}>{children}</div>;
}

function SectionTitle({ eyebrow, title, action }) {
  return <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 16 }}>
    <div>
      {eyebrow && <div style={{
        fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 11,
        letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ridge-fairway)',
        marginBottom: 4,
      }}>{eyebrow}</div>}
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 44, lineHeight: 1.15,
                   color: 'var(--ridge-apple)', margin: '0 0 6px 0', paddingBottom: 4 }}>{title}</h2>
    </div>
    {action}
  </div>;
}

Object.assign(window, { Nav, Pill, Avatar, Card, SectionTitle });
