// About Section — Why MDM + animated count-up stats
const { useRef: useRefAbout, useEffect: useEffectAbout } = React;

const DIFFERENTIATORS = [
  {
    title: 'Custom From Brief',
    body: 'We work from your drawing, sketch, or written spec. No catalogue — every component is engineered to your chassis, series rules, and performance target.',
    accent: MDM_T.red,
  },
  {
    title: 'In-House Only',
    body: 'No outsourced machining. No third-party inspection. From CAD to CMM report, the part never leaves our facility until it meets tolerance.',
    accent: MDM_T.platinum,
  },
  {
    title: 'Race Proven',
    body: 'Supplying championship-winning teams across WEC, GT3, IMSA and Formula series. Our parts have been on the podium at Le Mans, Spa, and Daytona.',
    accent: MDM_T.red,
  },
];

const STATS = [
  { value: 7,   suffix: '×', label: 'Championships' },
  { value: 142, suffix: '',  label: 'Race Wins' },
  { value: 20,  suffix: '+', label: 'Years Active' },
  { value: 6,   suffix: '',  label: 'Series in 2026' },
];

function AboutSection() {
  const statsRef = useRefAbout(null);
  const counted = useRefAbout(false);

  useEffectAbout(() => {
    if (!statsRef.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted.current) {
        counted.current = true;
        statsRef.current.querySelectorAll('[data-cu]').forEach(el => {
          countUp(el, parseInt(el.dataset.cu), el.dataset.sfx || '');
        });
      }
    }, { threshold: 0.3 });
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" data-section="about" style={{
      background: MDM_T.surfaceDark,
      padding: '96px 0',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '40%', height: '100%',
        background: 'radial-gradient(ellipse 80% 60% at 100% 50%, rgba(184,205,216,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-padding" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 64px' }}>
        <div style={{ marginBottom: 64, maxWidth: 560 }}>
          <SectionLabel style={{ marginBottom: 16 }}>Why MDM</SectionLabel>
          <h2 className="reveal" style={{
            fontFamily: "'Orbitron',sans-serif", fontSize: 'clamp(36px,4vw,56px)',
            fontWeight: 900, color: '#fff', letterSpacing: '-0.03em',
            textTransform: 'uppercase', lineHeight: 0.92, marginBottom: 20,
          }}>BUILT TO<br />COMPETE.</h2>
          <RedDivider width={40} style={{ marginBottom: 20 }} />
          <p className="reveal d1" style={{
            fontFamily: "'Inter',sans-serif", fontSize: 15, fontWeight: 300,
            color: MDM_T.platinumDark, lineHeight: 1.85,
          }}>
            Founded at Silverstone in 2003. Twenty years supplying the world's most demanding
            racing teams with components that perform when it counts.
          </p>
        </div>

        <div className="three-col" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2, marginBottom: 64,
          background: MDM_T.border,
          border: `1px solid ${MDM_T.border}`,
          borderRadius: 8, overflow: 'hidden',
        }}>
          {DIFFERENTIATORS.map((d, i) => (
            <div key={d.title} className={`reveal d${i + 1}`} style={{
              background: MDM_T.surfaceDark,
              padding: '36px 32px',
              position: 'relative',
              transition: 'background 200ms',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = MDM_T.surfaceMid; }}
            onMouseLeave={e => { e.currentTarget.style.background = MDM_T.surfaceDark; }}>
              <div style={{
                width: 32, height: 2,
                background: d.accent, marginBottom: 20,
              }} />
              <div style={{
                fontFamily: "'Orbitron',sans-serif", fontSize: 15, fontWeight: 700,
                color: '#fff', letterSpacing: '-0.01em', marginBottom: 14, lineHeight: 1.3,
              }}>{d.title}</div>
              <div style={{
                fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 300,
                color: 'rgba(216,216,224,0.6)', lineHeight: 1.75,
              }}>{d.body}</div>
            </div>
          ))}
        </div>

        <div ref={statsRef} className="four-col" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          background: 'rgba(14,14,24,0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${MDM_T.border}`,
          borderRadius: 8, overflow: 'hidden',
        }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{
              padding: '28px 32px',
              borderRight: i < 3 ? `1px solid ${MDM_T.border}` : 'none',
            }}>
              <div
                data-cu={s.value}
                data-sfx={s.suffix}
                style={{
                  fontFamily: "'Orbitron',sans-serif", fontSize: 36, fontWeight: 800,
                  color: i === 0 ? MDM_T.red : '#fff',
                  letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 6,
                }}>
                0{s.suffix}
              </div>
              <div style={{
                fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 500,
                color: MDM_T.muted, letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { AboutSection });
