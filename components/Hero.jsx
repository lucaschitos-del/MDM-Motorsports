// Hero Section — full viewport with canvas speed lines + glassmorphism stats
const { useEffect: useEffectHero, useRef: useRefHero } = React;

function initSpeedLines(canvas) {
  const ctx = canvas.getContext('2d');
  let W, H, lines = [], raf;
  const PALETTE = [
    { r: 232, g: 0,   b: 28,  aMin: 0.25, aMax: 0.6,  wMin: 0.6, wMax: 1.8 },
    { r: 255, g: 255, b: 255, aMin: 0.03, aMax: 0.12, wMin: 0.4, wMax: 1.0 },
    { r: 184, g: 205, b: 216, aMin: 0.05, aMax: 0.18, wMin: 0.4, wMax: 1.2 },
  ];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function makeLine(startRight = true) {
    const p = PALETTE[Math.floor(Math.random() * PALETTE.length)];
    return {
      x:     startRight ? W + 20 + Math.random() * 300 : Math.random() * W,
      y:     H * (0.04 + Math.random() * 0.92),
      len:   50 + Math.random() * 220,
      spd:   3 + Math.random() * 11,
      alpha: p.aMin + Math.random() * (p.aMax - p.aMin),
      w:     p.wMin + Math.random() * (p.wMax - p.wMin),
      color: `${p.r},${p.g},${p.b}`,
    };
  }

  resize();
  window.addEventListener('resize', resize);
  for (let i = 0; i < 28; i++) lines.push(makeLine(false));

  function draw() {
    ctx.clearRect(0, 0, W, H);
    lines.forEach((l, i) => {
      l.x -= l.spd;
      if (l.x + l.len < 0) { lines[i] = makeLine(true); return; }
      const grad = ctx.createLinearGradient(l.x - l.len, 0, l.x, 0);
      grad.addColorStop(0, `rgba(${l.color},0)`);
      grad.addColorStop(1, `rgba(${l.color},${l.alpha})`);
      ctx.beginPath();
      ctx.strokeStyle = grad;
      ctx.lineWidth   = l.w;
      ctx.moveTo(l.x - l.len, l.y);
      ctx.lineTo(l.x, l.y);
      ctx.stroke();
    });
    raf = requestAnimationFrame(draw);
  }

  draw();
  return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
}

function HeroSection() {
  const canvasRef = useRefHero(null);

  useEffectHero(() => {
    if (!canvasRef.current) return;
    const cleanup = initSpeedLines(canvasRef.current);
    return cleanup;
  }, []);

  const stats = [
    { value: '±0.001 mm', label: 'Machining Tolerance' },
    { value: '48 hr',     label: 'Rapid Prototype' },
    { value: 'ISO 9001',  label: 'Quality Certified' },
    { value: '20+',       label: 'Years Racing' },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
  };

  return (
    <section id="hero" data-section="hero" style={{
      position: 'relative', minHeight: '100vh',
      background: `
        radial-gradient(ellipse 70% 70% at -5% 110%, rgba(232,0,28,0.16) 0%, transparent 60%),
        radial-gradient(ellipse 50% 50% at 105% -10%, rgba(184,205,216,0.07) 0%, transparent 55%),
        #0B0B10
      `,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      {/* Speed lines canvas */}
      <canvas ref={canvasRef} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        zIndex: 1, pointerEvents: 'none',
      }} />

      {/* Diagonal accent */}
      <div style={{
        position: 'absolute', top: 0, right: '22%', width: 1,
        height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(232,0,28,0.12), transparent)',
        transform: 'skewX(-8deg)', zIndex: 1, pointerEvents: 'none',
      }} />

      {/* Main content */}
      <div className="hero-padding" style={{
        position: 'relative', zIndex: 2,
        maxWidth: 1280, margin: '0 auto', width: '100%',
        padding: '120px 64px 40px',
      }}>
        <div style={{ maxWidth: 720 }}>
          <div className="reveal" style={{ marginBottom: 28 }}>
            <SectionLabel>Silverstone, UK · Est. 2003</SectionLabel>
          </div>

          <h1 className="reveal" style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 'clamp(48px, 8vw, 108px)',
            fontWeight: 900, lineHeight: 0.9,
            color: '#fff', letterSpacing: '-0.03em',
            textTransform: 'uppercase', marginBottom: 0,
          }}>
            PRECISION
          </h1>
          <h1 className="reveal d1" style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 'clamp(48px, 8vw, 108px)',
            fontWeight: 900, lineHeight: 0.9,
            background: 'linear-gradient(90deg, #fff 0%, #B8CDD8 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.03em', textTransform: 'uppercase',
            marginBottom: 28,
          }}>
            ENGINEERED.
          </h1>

          <RedDivider width={48} style={{ marginBottom: 24 }} />

          <p className="reveal d2" style={{
            fontFamily: "'Inter', sans-serif", fontSize: 16,
            fontWeight: 300, color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.85, maxWidth: 440, marginBottom: 40,
          }}>
            Custom-engineered components for competitive motorsport.
            From CAD brief to race-ready part — at tolerances measured in microns.
          </p>

          <div className="reveal d3" style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => scrollToSection('products')}
              style={{
                fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                background: MDM_T.red, color: '#fff', border: 'none',
                borderRadius: 3, padding: '13px 30px', cursor: 'pointer',
                transition: 'background 150ms, box-shadow 200ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = MDM_T.redLight; e.currentTarget.style.boxShadow = '0 0 32px rgba(232,0,28,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = MDM_T.red; e.currentTarget.style.boxShadow = 'none'; }}>
              Our Products
            </button>
            <button
              onClick={() => scrollToSection('engineering')}
              style={{
                fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 400,
                color: 'rgba(255,255,255,0.4)', background: 'none', border: 'none',
                cursor: 'pointer', letterSpacing: '0.08em',
                transition: 'color 150ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = MDM_T.platinum; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}>
              Engineering capabilities →
            </button>
          </div>
        </div>
      </div>

      {/* Glassmorphism stats strip */}
      <div className="section-padding" style={{
        position: 'relative', zIndex: 2,
        maxWidth: 1280, margin: '0 auto', width: '100%',
        padding: '0 64px 56px',
      }}>
        <div className="reveal stats-grid" style={{
          background: 'rgba(14,14,24,0.6)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.09)',
          borderRadius: 8,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          overflow: 'hidden',
        }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{
              padding: '24px 28px',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
            }}>
              <div style={{
                fontFamily: "'Orbitron', sans-serif", fontSize: 22, fontWeight: 700,
                color: '#fff', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 6,
              }}>{s.value}</div>
              <div style={{
                fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 500,
                color: MDM_T.muted, letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 64,
        background: 'linear-gradient(to bottom, transparent, #0B0B10)',
        zIndex: 3, pointerEvents: 'none',
      }} />
    </section>
  );
}

Object.assign(window, { HeroSection });
