/* global React, Pill, Avatar, Card, SectionTitle */
const { useState } = React;

function Scorecard() {
  const holes = [
    { par: 4, p1: 3, p2: 4, p3: 5, p4: 4 },
    { par: 5, p1: 5, p2: 4, p3: 6, p4: 5 },
    { par: 3, p1: 3, p2: 2, p3: 4, p4: 3 },
    { par: 4, p1: 5, p2: 4, p3: 4, p4: 5 },
    { par: 4, p1: 4, p2: 4, p3: 5, p4: 4 },
    { par: 3, p1: 3, p2: 3, p3: 3, p4: 4 },
    { par: 5, p1: 3, p2: 5, p3: 6, p4: 5 },
    { par: 4, p1: 4, p2: 4, p3: 5, p4: 6 },
    { par: 4, p1: 6, p2: 4, p3: 5, p4: 4 },
  ];
  const scoreStyle = (s, par) => {
    const diff = s - par;
    let c = {};
    if (diff <= -2) c = { color: '#8A6400', fontWeight: 700, textDecoration: 'underline double' };
    else if (diff === -1) c = { color: 'var(--ridge-fairway)', fontWeight: 700, borderRadius: 999, background: 'var(--ridge-fairway-soft)' };
    else if (diff === 0) c = { color: 'var(--fg)' };
    else if (diff === 1) c = { color: 'var(--ridge-apple)', fontWeight: 700 };
    else c = { color: '#7A1F15', fontWeight: 700 };
    return { ...c, padding: '6px 0', fontFamily: 'var(--font-mono)', fontVariantNumeric: 'tabular-nums' };
  };
  const sum = (key) => holes.reduce((a, h) => a + h[key], 0);
  return (
    <div style={{
      background: 'var(--ridge-bone)', borderRadius: 22, padding: 0, overflow: 'hidden',
      border: '1px solid var(--line)', boxShadow: 'var(--shadow-md)',
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '120px repeat(9, 1fr) 70px',
        background: 'var(--ridge-fairway)', color: 'var(--ridge-cream)',
      }}>
        {['Hole', 1,2,3,4,5,6,7,8,9, 'OUT'].map(h => (
          <div key={h} style={{ padding: '10px 0', textAlign: 'center',
            fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12,
            letterSpacing: '0.1em', textTransform: 'uppercase' }}>{h}</div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '120px repeat(9, 1fr) 70px',
                    background: 'var(--ridge-fairway-soft)', borderBottom: '2px solid var(--line)' }}>
        <div style={{ padding: '8px 14px', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13,
                      color: 'var(--ridge-fairway-dk)' }}>Par</div>
        {holes.map((h, i) => <div key={i} style={{ textAlign: 'center', padding: '8px 0',
           fontFamily: 'var(--font-mono)', fontWeight: 500, color: 'var(--ridge-fairway-dk)' }}>{h.par}</div>)}
        <div style={{ textAlign: 'center', padding: '8px 0',
           fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--ridge-fairway-dk)' }}>{sum('par')}</div>
      </div>
      {[
        { name: 'Will',   key: 'p1', c: 'var(--ridge-fairway)' },
        { name: 'Connor', key: 'p2', c: 'var(--ridge-apple)' },
        { name: 'Sam',    key: 'p3', c: 'var(--ridge-sun)' },
        { name: 'Jake',   key: 'p4', c: 'var(--ridge-moss)' },
      ].map((row, rIdx) => (
        <div key={row.name} style={{ display: 'grid', gridTemplateColumns: '120px repeat(9, 1fr) 70px',
             borderBottom: rIdx === 3 ? 'none' : '1px solid var(--line)' }}>
          <div style={{ padding: '10px 14px', display: 'flex', gap: 8, alignItems: 'center' }}>
            <Avatar name={row.name} color={row.c} size={26} />
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14 }}>{row.name}</span>
          </div>
          {holes.map((h, i) => (
            <div key={i} style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ ...scoreStyle(h[row.key], h.par), width: 28, display: 'inline-block' }}>{h[row.key]}</span>
            </div>
          ))}
          <div style={{ textAlign: 'center', padding: '10px 0', background: 'var(--ridge-parchment)',
               fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--ridge-fairway-dk)' }}>
            {holes.reduce((a, h) => a + h[row.key], 0)}
          </div>
        </div>
      ))}
    </div>
  );
}

function RoundDetailPage() {
  return (
    <div style={{ padding: '32px 40px', display: 'flex', flexDirection: 'column', gap: 28 }}>
      <div>
        <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 11,
                      letterSpacing: '0.22em', textTransform: 'uppercase',
                      color: 'var(--ridge-fairway)', marginBottom: 4 }}>
          Round No. 07 · Saturday, July 12
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 68,
                     color: 'var(--ridge-apple)', margin: '0 0 10px 0', lineHeight: 1.0 }}>
          Pebble Creek GC
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 20,
                    color: 'var(--fg-muted)', margin: 0, maxWidth: '60ch' }}>
          “Wind picked up on 14. Connor made his second birdie of the year on the same hole he shanked one into the water last month.”
        </p>
      </div>
      <Scorecard />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
        <Card><div style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'var(--fg-muted)' }}>Low round</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 44, color: 'var(--ridge-fairway)', lineHeight: 1 }}>Connor · 78</div></Card>
        <Card><div style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'var(--fg-muted)' }}>Birdies</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 44, color: 'var(--ridge-fairway)', lineHeight: 1 }}>5 total</div></Card>
        <Card><div style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'var(--fg-muted)' }}>Beers on 19</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 44, color: 'var(--ridge-apple)', lineHeight: 1 }}>11</div></Card>
      </div>
    </div>
  );
}

function LogRoundPage() {
  const [step, setStep] = useState(1);
  return (
    <div style={{ padding: '32px 40px', maxWidth: 780, margin: '0 auto' }}>
      <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 11,
                    letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ridge-fairway)' }}>
        Step {step} of 3
      </div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 68,
                   color: 'var(--ridge-apple)', margin: '4px 0 24px 0', lineHeight: 1.05 }}>
        Log a new round.
      </h1>
      <Card style={{ padding: 28 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          <Field label="Course"><input defaultValue="Pebble Creek GC" /></Field>
          <Field label="Date"><input defaultValue="Jul 19, 2026" /></Field>
          <Field label="Your score"><input defaultValue="" placeholder="e.g. 84" /></Field>
          <Field label="Weather"><select><option>Sunny &amp; breezy</option><option>Cloudy</option><option>Rainy</option></select></Field>
          <Field label="Playing with" full>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Connor','Sam','Jake','Andrew'].map(n => (
                <label key={n} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '6px 12px', borderRadius: 999,
                  background: 'var(--ridge-fairway-soft)', color: 'var(--ridge-fairway-dk)',
                  fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, cursor: 'pointer'
                }}>
                  <input type="checkbox" defaultChecked={['Connor','Sam','Jake'].includes(n)} /> {n}
                </label>
              ))}
            </div>
          </Field>
          <Field label="Notes" full>
            <textarea rows="3" placeholder="What happened out there?" defaultValue="" />
          </Field>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 22 }}>
          <button style={btn('ghost')}>Save draft</button>
          <button style={btn('primary')}>Next: Scorecard →</button>
        </div>
      </Card>
    </div>
  );
}

function Field({ label, children, full }) {
  return <div style={{ gridColumn: full ? '1 / -1' : 'auto' }}>
    <label style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: 'var(--fg-muted)', display: 'block', marginBottom: 6 }}>{label}</label>
    <div style={{
      // inline input styling
    }}>
      {React.Children.map(children, child => React.cloneElement(child, {
        style: {
          fontFamily: 'var(--font-body)', fontSize: 15, width: '100%', boxSizing: 'border-box',
          padding: '10px 12px', borderRadius: 8, border: '1.5px solid var(--line-strong)',
          background: 'var(--ridge-bone)', color: 'var(--fg)', outline: 'none', resize: 'vertical',
        },
      }))}
    </div>
  </div>;
}

function btn(kind) {
  const base = { fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14,
                 border: 'none', cursor: 'pointer', padding: '11px 20px', borderRadius: 999 };
  if (kind === 'primary') return { ...base, background: 'var(--ridge-apple)',
    color: 'var(--ridge-fairway-dk)', boxShadow: '0 3px 0 var(--ridge-fairway)' };
  if (kind === 'ghost') return { ...base, background: 'transparent', color: 'var(--ridge-fairway)',
    boxShadow: 'inset 0 0 0 2px var(--ridge-fairway)' };
  return base;
}

function CoursesPage() {
  const courses = [
    { n: 'Pebble Creek GC', r: 3, best: 81, par: 72, loc: 'Northside', vibe: 'Water on 14 & 17' },
    { n: 'The Ridge Course', r: 2, best: 79, par: 72, loc: 'Home course', vibe: 'Named the site. Obviously.' },
    { n: 'Cherry Hills Muni', r: 1, best: 89, par: 71, loc: 'Downtown', vibe: 'Cheap, fast, fun' },
    { n: 'Willow Bend', r: 1, best: 92, par: 70, loc: 'County', vibe: 'Narrow fairways' },
  ];
  return (
    <div style={{ padding: '32px 40px' }}>
      <SectionTitle eyebrow="The Book" title="Courses we've played" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        {courses.map(c => (
          <Card key={c.n}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ width: 56, height: 56, flexShrink: 0, borderRadius: 14,
                            background: 'var(--ridge-fairway)', color: 'var(--ridge-cream)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path d="M6 20V4L16 7L12 10L16 13L6 16" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <circle cx="6" cy="21" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-sign)', fontSize: 22, color: 'var(--fg)', margin: 0 }}>{c.n}</h3>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)' }}>
                  {c.loc} · Par {c.par}
                </div>
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14,
                            color: 'var(--fg-muted)', margin: '10px 0 0 0' }}>“{c.vibe}”</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 40,
                              color: 'var(--ridge-apple)', lineHeight: 0.9 }}>{c.r}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.14em',
                              textTransform: 'uppercase', color: 'var(--fg-muted)' }}>rounds</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Scorecard, RoundDetailPage, LogRoundPage, CoursesPage });
