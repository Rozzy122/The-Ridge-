/* global React, Pill, Avatar, Card, SectionTitle */

const DATA = {
  rounds: [
    { id: 7, course: 'Pebble Creek GC', date: 'Jul 12', score: 84, par: 72, players: ['Will','Connor','Sam','Jake'], weather: '☀️ 78°' },
    { id: 6, course: 'Cherry Hills Muni', date: 'Jul 05', score: 89, par: 71, players: ['Will','Connor'], weather: '⛅ 72°' },
    { id: 5, course: 'The Ridge Course', date: 'Jun 28', score: 81, par: 72, players: ['Will','Jake','Sam'], weather: '☀️ 82°' },
    { id: 4, course: 'Willow Bend', date: 'Jun 21', score: 92, par: 70, players: ['Will','Connor','Sam'], weather: '🌧 68°' },
  ],
};

function HeroStats() {
  const stats = [
    { n: '07', l: 'Rounds this summer' },
    { n: '86.4', l: 'Average score' },
    { n: '+14.4', l: 'Over par' },
    { n: '04', l: 'Courses played' },
  ];
  return (
    <div style={{
      background: 'var(--ridge-fairway-dk)',
      borderRadius: 24, padding: '36px 40px', color: 'var(--ridge-cream)',
      backgroundImage: `radial-gradient(circle at 85% 40%, rgba(212,90,74,0.22), transparent 55%),
                        radial-gradient(circle at 10% 90%, rgba(242,193,78,0.10), transparent 40%)`,
      border: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div style={{
        fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 11,
        letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ridge-rust)',
        marginBottom: 6,
      }}>Summer 2026 · through July 12</div>
      <h1 style={{
        fontFamily: 'var(--font-display)', fontSize: 76, lineHeight: 1.0,
        color: 'var(--ridge-cream)', margin: '0 0 24px 0', maxWidth: '14ch',
      }}>Welcome back, Will.</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {stats.map(s => (
          <div key={s.l} style={{ borderLeft: '2px solid var(--ridge-apple)', paddingLeft: 14 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 42,
                          color: 'var(--ridge-cream)', lineHeight: 1 }}>{s.n}</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, opacity: 0.75,
                          letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 6 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RoundRow({ r, onClick }) {
  const over = r.score - r.par;
  return (
    <div onClick={onClick} style={{
      display: 'grid', gridTemplateColumns: '64px 1fr auto auto',
      gap: 20, alignItems: 'center',
      padding: '18px 20px', background: 'var(--ridge-bone)',
      border: '1px solid var(--line)', borderRadius: 18,
      boxShadow: 'var(--shadow-sm)', cursor: 'pointer',
      transition: 'transform 120ms ease, box-shadow 120ms ease',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)';}}
    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--shadow-sm)';}}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, lineHeight: 1.0,
                    color: 'var(--ridge-apple)', textAlign: 'center' }}>
        {String(r.id).padStart(2,'0')}
      </div>
      <div>
        <div style={{ fontFamily: 'var(--font-sign)', fontSize: 20, color: 'var(--fg)' }}>
          {r.course}
          <span style={{ marginLeft: 10, fontFamily: 'var(--font-body)', fontSize: 12,
                        fontWeight: 700, color: over > 0 ? 'var(--ridge-apple-ink)' : 'var(--ridge-fairway-dk)',
                        background: over > 0 ? 'var(--ridge-apple-soft)' : 'var(--ridge-fairway-soft)',
                        padding: '3px 8px', borderRadius: 999,
                        verticalAlign: 'middle' }}>
            {over > 0 ? '+' : ''}{over}
          </span>
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', marginTop: 4 }}>
          {r.date} · with {r.players.slice(1).join(', ')} · {r.weather}
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        {r.players.map((p, i) => (
          <div key={p} style={{ marginLeft: i === 0 ? 0 : -8, border: '2px solid var(--ridge-bone)', borderRadius: 999 }}>
            <Avatar name={p} size={30} color={['var(--ridge-apple)','var(--ridge-fairway)','var(--ridge-sun)','var(--ridge-moss)'][i]} />
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'right', minWidth: 70 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 32, color: 'var(--ridge-fairway)' }}>{r.score}</div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.14em',
                      textTransform: 'uppercase', color: 'var(--fg-muted)' }}>Final</div>
      </div>
    </div>
  );
}

function HomePage({ setPage }) {
  return (
    <div style={{ padding: '32px 40px', display: 'flex', flexDirection: 'column', gap: 32 }}>
      <HeroStats />
      <section>
        <SectionTitle eyebrow="The Logbook" title="Recent rounds"
          action={<button onClick={() => setPage('log')} style={{
            fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13,
            background: 'transparent', color: 'var(--ridge-apple)',
            border: '2px solid var(--ridge-apple)', borderRadius: 999,
            padding: '8px 16px', cursor: 'pointer',
          }}>+ New round</button>} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {DATA.rounds.map(r => <RoundRow key={r.id} r={r} onClick={() => setPage('round')} />)}
        </div>
      </section>
      <section>
        <SectionTitle eyebrow="The Crew" title="Who you played with" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {[
            { n: 'Connor', c: 'var(--ridge-apple)', rounds: 5, best: 78 },
            { n: 'Sam',    c: 'var(--ridge-sun)',  rounds: 4, best: 95 },
            { n: 'Jake',   c: 'var(--ridge-moss)', rounds: 3, best: 88 },
            { n: 'Andrew', c: 'var(--ridge-fairway)', rounds: 2, best: 82 },
          ].map(p => (
            <Card key={p.n} style={{ textAlign: 'center' }}>
              <Avatar name={p.n} color={p.c} size={64} />
              <div style={{ fontFamily: 'var(--font-sign)', fontSize: 22, marginTop: 10, color: 'var(--fg)' }}>{p.n}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-muted)', marginTop: 4 }}>
                {p.rounds} rounds · best {p.best}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomePage, RoundRow, HeroStats, DATA });
