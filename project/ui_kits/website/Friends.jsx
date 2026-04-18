/* global React, Pill, Avatar, Card, SectionTitle, DATA */
const { useState: useStateF } = React;

function FriendsPage() {
  const friends = [
    { n: 'Connor', c: 'var(--ridge-apple)', rounds: 5, best: 78, avg: 82.4, hcp: 8.7, hl: 'Eagle on 7, Jul 12' },
    { n: 'Sam',    c: 'var(--ridge-sun)',  rounds: 4, best: 95, avg: 99.2, hcp: 22.0, hl: 'First sub-100 — Jun 28' },
    { n: 'Jake',   c: 'var(--ridge-moss)', rounds: 3, best: 88, avg: 91.0, hcp: 18.5, hl: '4 birdies in one round' },
    { n: 'Andrew', c: 'var(--ridge-fairway)', rounds: 2, best: 82, avg: 85.5, hcp: 12.1, hl: 'Showed up late, still won' },
  ];
  return (
    <div style={{ padding: '32px 40px', display: 'flex', flexDirection: 'column', gap: 28 }}>
      <SectionTitle eyebrow="The Crew" title="Friends" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
        {friends.map(f => (
          <Card key={f.n}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <Avatar name={f.n} color={f.c} size={64} />
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-sign)', fontSize: 24, color: 'var(--fg)', margin: 0 }}>{f.n}</h3>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-muted)', marginTop: 2 }}>
                  Handicap {f.hcp} · {f.rounds} rounds this summer
                </div>
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14,
                            color: 'var(--fg-muted)', margin: '10px 0 0 0' }}>“{f.hl}”</p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 14,
                          paddingTop: 14, borderTop: '1px dashed var(--line)' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 28,
                              color: 'var(--ridge-fairway)' }}>{f.best}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.14em',
                              textTransform: 'uppercase', color: 'var(--fg-muted)' }}>Low round</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 28,
                              color: 'var(--ridge-apple)' }}>{f.avg}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.14em',
                              textTransform: 'uppercase', color: 'var(--fg-muted)' }}>Average</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function StatsPage() {
  const leaderboard = [
    { n: 'Connor', best: 78, avg: 82.4, rounds: 5 },
    { n: 'Andrew', best: 82, avg: 85.5, rounds: 2 },
    { n: 'Will',   best: 81, avg: 86.4, rounds: 7 },
    { n: 'Jake',   best: 88, avg: 91.0, rounds: 3 },
    { n: 'Sam',    best: 95, avg: 99.2, rounds: 4 },
  ];
  const trend = [92, 89, 87, 88, 84, 86, 84];
  const max = Math.max(...trend), min = Math.min(...trend);
  return (
    <div style={{ padding: '32px 40px', display: 'flex', flexDirection: 'column', gap: 28 }}>
      <SectionTitle eyebrow="The Numbers" title="Stats" />
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
        <Card>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.14em',
                        textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: 6 }}>
            Will · score trend · last 7 rounds
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 160, marginTop: 14 }}>
            {trend.map((v, i) => {
              const pct = (v - min) / (max - min || 1);
              const h = 30 + pct * 110;
              return (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column',
                                       alignItems: 'center', gap: 6 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-muted)' }}>{v}</div>
                  <div style={{ width: '100%', height: h, borderRadius: 8,
                                background: i === trend.length - 1 ? 'var(--ridge-apple)' : 'var(--ridge-fairway)' }} />
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: 'var(--fg-muted)',
                                letterSpacing: '0.1em', textTransform: 'uppercase' }}>R{i + 1}</div>
                </div>
              );
            })}
          </div>
        </Card>
        <Card>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.14em',
                        textTransform: 'uppercase', color: 'var(--fg-muted)' }}>Season totals</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 14 }}>
            {[
              { l: 'Birdies', v: 12, c: 'var(--ridge-fairway)' },
              { l: 'Eagles', v: 1, c: 'var(--ridge-sun)' },
              { l: 'Bogeys', v: 48, c: 'var(--ridge-apple)' },
              { l: 'Pars', v: 62, c: 'var(--ridge-pencil)' },
            ].map(s => (
              <div key={s.l} style={{ display: 'flex', alignItems: 'baseline',
                                       justifyContent: 'space-between', borderBottom: '1px dashed var(--line)',
                                       paddingBottom: 8 }}>
                <span style={{ fontFamily: 'var(--font-sign)', fontSize: 18 }}>{s.l}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 24, color: s.c }}>{s.v}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Card>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.14em',
                      textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: 14 }}>
          Leaderboard · lowest average
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {leaderboard.sort((a, b) => a.avg - b.avg).map((p, i) => (
            <div key={p.n} style={{ display: 'grid',
                                     gridTemplateColumns: '36px 1fr auto auto auto',
                                     gap: 16, alignItems: 'center',
                                     padding: '12px 4px',
                                     borderBottom: i === leaderboard.length - 1 ? 'none' : '1px solid var(--line)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 28,
                            color: i === 0 ? 'var(--ridge-sun)' : 'var(--ridge-apple)', lineHeight: 1 }}>
                {i + 1}
              </div>
              <div style={{ fontFamily: 'var(--font-sign)', fontSize: 20 }}>{p.n}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--fg-muted)' }}>
                {p.rounds} rnds
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--fg-muted)' }}>
                best {p.best}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 22,
                            color: 'var(--ridge-fairway)', minWidth: 60, textAlign: 'right' }}>
                {p.avg}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

Object.assign(window, { FriendsPage, StatsPage });
