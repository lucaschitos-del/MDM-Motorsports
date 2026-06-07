// Products Section — 3×2 glassmorphism card grid
const { useRef: useRefProd } = React;

const PRODUCTS = [
  {
    n: '01', name: 'Suspension Geometry',
    spec: '7075-T6 Aluminium · 5-Axis CNC',
    desc: 'Wishbones, uprights, pushrods and tie-rods. Every geometry point verified against your chassis data sheet.',
    tag: 'SUSPENSION',
  },
  {
    n: '02', name: 'Drivetrain Components',
    spec: 'Forged · CNC Finished · Ti Hardware',
    desc: 'Output flanges, driveshafts and differential carriers — designed for peak torque without excess mass.',
    tag: 'DRIVETRAIN',
  },
  {
    n: '03', name: 'Braking Systems',
    spec: 'Grade 5 Titanium · EN36 Steel',
    desc: 'Caliper carriers, disc bells and bias bar assemblies. Optimised for thermal stability across a full race distance.',
    tag: 'BRAKING',
  },
  {
    n: '04', name: 'Aerodynamic Parts',
    spec: 'Pre-preg Carbon · Aluminium Hybrid',
    desc: 'Splitters, diffusers, wing end-plates and dive planes. Autoclave-cured carbon where every gram counts.',
    tag: 'AERO',
  },
  {
    n: '05', name: 'Powertrain Accessories',
    spec: 'Billet Aluminium · Inconel 718',
    desc: 'Engine mounts, plenum chambers, dry-sump tanks. Built for continuous high-vibration race environments.',
    tag: 'POWERTRAIN',
  },
  {
    n: '06', name: 'One-Off Engineering',
    spec: 'Full Design & Manufacture Service',
    desc: "Have a problem standard parts can't solve? We take briefs from sketch through FEA to finished component.",
    tag: 'BESPOKE',
  },
];

function ProductCard({ product, delay }) {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.borderColor = 'rgba(232,0,28,0.45)';
    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.5), 0 0 28px rgba(232,0,28,0.12)';
    e.currentTarget.style.transform = 'translateY(-5px)';
    const tag = e.currentTarget.querySelector('.card-tag');
    const arrow = e.currentTarget.querySelector('.card-arrow');
    const bar = e.currentTarget.querySelector('.card-bottom-bar');
    if (tag) tag.style.color = MDM_T.red;
    if (arrow) { arrow.style.opacity = '1'; arrow.style.transform = 'translateX(0)'; }
    if (bar) bar.style.opacity = '1';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.transform = 'translateY(0)';
    const tag = e.currentTarget.querySelector('.card-tag');
    const arrow = e.currentTarget.querySelector('.card-arrow');
    const bar = e.currentTarget.querySelector('.card-bottom-bar');
    if (tag) tag.style.color = MDM_T.muted;
    if (arrow) { arrow.style.opacity = '0'; arrow.style.transform = 'translateX(-8px)'; }
    if (bar) bar.style.opacity = '0';
  };

  return (
    <div
      className={`reveal d${delay}`}
      style={{
        background: 'rgba(20,20,30,0.55)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 8,
        padding: '28px 28px 24px',
        cursor: 'pointer',
        transition: 'border-color 250ms ease, box-shadow 250ms ease, transform 280ms ease',
        display: 'flex', flexDirection: 'column', gap: 0,
        position: 'relative', overflow: 'hidden',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <div className="card-tag" style={{
          fontFamily: "'Inter',sans-serif", fontSize: 9, fontWeight: 600,
          color: MDM_T.muted, letterSpacing: '0.18em', textTransform: 'uppercase',
          transition: 'color 200ms',
        }}>{product.tag}</div>
        <div style={{
          fontFamily: "'Orbitron',sans-serif", fontSize: 11, fontWeight: 600,
          color: MDM_T.subtle, letterSpacing: '0.04em',
        }}>{product.n}</div>
      </div>

      <div style={{
        fontFamily: "'Orbitron',sans-serif", fontSize: 17, fontWeight: 700,
        color: '#fff', letterSpacing: '-0.01em', lineHeight: 1.2, marginBottom: 10,
      }}>{product.name}</div>

      <div style={{
        fontFamily: "'JetBrains Mono',monospace", fontSize: 9, fontWeight: 500,
        color: MDM_T.platinumDark, letterSpacing: '0.04em', marginBottom: 14,
      }}>{product.spec}</div>

      <div style={{
        fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 300,
        color: 'rgba(216,216,224,0.6)', lineHeight: 1.7, flex: 1,
      }}>{product.desc}</div>

      <div style={{ marginTop: 20, display: 'flex', justifyContent: 'flex-end' }}>
        <div className="card-arrow" style={{
          fontFamily: "'Inter',sans-serif", fontSize: 13, color: MDM_T.red,
          opacity: 0, transform: 'translateX(-8px)',
          transition: 'opacity 200ms, transform 200ms',
        }}>Learn more →</div>
      </div>

      <div className="card-bottom-bar" style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, ${MDM_T.red}, transparent)`,
        opacity: 0, transition: 'opacity 250ms',
      }} />
    </div>
  );
}

function ProductsSection() {
  return (
    <section id="products" data-section="products" style={{
      background: MDM_T.surfaceDark,
      padding: '96px 0',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 60,
        background: `linear-gradient(to bottom, ${MDM_T.black}, ${MDM_T.surfaceDark})`,
        pointerEvents: 'none',
      }} />

      <div className="section-padding" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 64px' }}>
        <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginBottom: 56, alignItems: 'end' }}>
          <div>
            <SectionLabel style={{ marginBottom: 16 }}>What We Build</SectionLabel>
            <h2 style={{
              fontFamily: "'Orbitron',sans-serif", fontSize: 'clamp(36px,4vw,56px)',
              fontWeight: 900, color: '#fff', letterSpacing: '-0.03em',
              textTransform: 'uppercase', lineHeight: 0.92,
            }}>PRODUCTS</h2>
          </div>
          <p className="reveal" style={{
            fontFamily: "'Inter',sans-serif", fontSize: 15, fontWeight: 300,
            color: MDM_T.platinumDark, lineHeight: 1.85, alignSelf: 'flex-end',
          }}>
            Every part leaves with a full CMM inspection report.
            We don't ship components we wouldn't put on our own car.
          </p>
        </div>

        <div className="products-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
        }}>
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.n} product={p} delay={Math.min(i + 1, 4)} />
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ProductsSection });
