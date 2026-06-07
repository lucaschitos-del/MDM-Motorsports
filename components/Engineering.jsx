// Engineering Section — capabilities list + materials tags
const CAPS = [
  { n:'01', label:'5-Axis CNC Machining',  spec:'±0.001 mm', desc:'Multi-axis precision machining of aluminium, titanium, Inconel and exotic alloys. 48-hour rapid prototype available.' },
  { n:'02', label:'CMM Verification',       spec:'ISO 9001',  desc:'Every critical dimension verified on our coordinate measuring machine before dispatch. Full inspection report with each batch.' },
  { n:'03', label:'FEA & CFD Analysis',     spec:'Validated', desc:'Finite element analysis and computational fluid dynamics run in-house — failures found before the part is ever cut.' },
  { n:'04', label:'Carbon Composite',       spec:'Autoclave', desc:'Pre-preg layup cured in our 2m autoclave. Minimum weight, maximum stiffness, zero compromises on surface finish.' },
  { n:'05', label:'Surface Treatments',     spec:'PVD · Hard', desc:'Hard anodising, PVD coating, shot peening. Treatment chosen for the specific wear environment of each component.' },
  { n:'06', label:'Trackside Race Support', spec:'On-Site',   desc:"Engineering support at selected events. Replacement parts produced track-side when time doesn't allow return to workshop." },
];

const MATERIALS = [
  '7075-T6 Aluminium','Grade 5 Titanium','17-4PH Stainless',
  'Inconel 718','Pre-preg Carbon','EN36 Steel','Hardox 450','Bespoke on request',
];

function EngineeringSection() {
  return (
    <section id="engineering" data-section="engineering" style={{
      background: `linear-gradient(160deg, ${MDM_T.black} 0%, ${MDM_T.surfaceMid} 100%)`,
      padding: '96px 0',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '-10%', left: '55%', width: 1, height: '120%',
        background: 'linear-gradient(to bottom, transparent, rgba(184,205,216,0.06), transparent)',
        transform: 'skewX(-6deg)', pointerEvents: 'none',
      }} />

      <div className="section-padding" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 64px' }}>
        <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginBottom: 72, alignItems: 'end' }}>
          <div className="reveal-left">
            <SectionLabel style={{ marginBottom: 16 }}>Capabilities</SectionLabel>
            <h2 style={{
              fontFamily: "'Orbitron',sans-serif", fontSize: 'clamp(36px,4vw,56px)',
              fontWeight: 900, color: '#fff', letterSpacing: '-0.03em',
              textTransform: 'uppercase', lineHeight: 0.92, marginBottom: 20,
            }}>ENGINEERING</h2>
            <RedDivider width={40} style={{ marginBottom: 20 }} />
            <div style={{
              fontFamily: "'Orbitron',sans-serif", fontSize: 34, fontWeight: 800,
              color: MDM_T.red, letterSpacing: '-0.02em', lineHeight: 1,
            }}>±0.001 mm</div>
            <div style={{
              fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 500,
              color: MDM_T.muted, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 6,
            }}>Machining tolerance — standard</div>
          </div>
          <p className="reveal" style={{
            fontFamily: "'Inter',sans-serif", fontSize: 15, fontWeight: 300,
            color: MDM_T.platinumDark, lineHeight: 1.85, alignSelf: 'flex-end',
          }}>
            Every process in-house. Shorter lead times, tighter tolerances,
            no quality escaping between suppliers.
          </p>
        </div>

        <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 64px', marginBottom: 56 }}>
          {CAPS.map((c, i) => (
            <div key={c.n} className={`reveal d${(i % 3) + 1}`} style={{
              padding: '26px 0',
              borderBottom: `1px solid ${MDM_T.border}`,
              display: 'grid', gridTemplateColumns: '40px 1fr', gap: 16,
            }}>
              <div style={{
                fontFamily: "'Orbitron',sans-serif", fontSize: 10, fontWeight: 600,
                color: MDM_T.subtle, paddingTop: 3,
              }}>{c.n}</div>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                  <div style={{
                    fontFamily: "'Orbitron',sans-serif", fontSize: 14, fontWeight: 700,
                    color: '#fff',
                  }}>{c.label}</div>
                  <div style={{
                    fontFamily: "'JetBrains Mono',monospace", fontSize: 9,
                    color: MDM_T.red, letterSpacing: '0.06em',
                  }}>{c.spec}</div>
                </div>
                <div style={{
                  fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 300,
                  color: 'rgba(216,216,224,0.55)', lineHeight: 1.75,
                }}>{c.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal">
          <div style={{
            fontFamily: "'Inter',sans-serif", fontSize: 9, fontWeight: 600,
            color: MDM_T.muted, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 16,
          }}>Materials Stock</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {MATERIALS.map(m => (
              <div key={m} style={{
                fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 400,
                color: MDM_T.platinumDark,
                background: 'rgba(184,205,216,0.06)',
                border: '1px solid rgba(184,205,216,0.12)',
                borderRadius: 4, padding: '7px 16px',
                letterSpacing: '0.02em',
              }}>{m}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { EngineeringSection });
