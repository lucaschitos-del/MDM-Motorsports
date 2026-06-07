// Footer
function FooterSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
  };

  const cols = [
    {
      heading: 'Products',
      links: ['Suspension Geometry','Drivetrain Components','Braking Systems','Aerodynamic Parts','Powertrain Accessories','One-Off Engineering'],
    },
    {
      heading: 'Company',
      links: ['Engineering','About','Quality Policy','Careers'],
    },
    {
      heading: 'Contact',
      links: ['engineering@mdmmotorsports.com','+44 20 7946 0321','Mon – Fri · 08:00 – 18:00 GMT'],
    },
  ];

  return (
    <footer style={{
      background: MDM_T.surfaceDark,
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '64px 0 28px',
    }}>
      <div className="section-padding" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 64px' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 52 }}>
          {/* Brand col */}
          <div>
            <div style={{ marginBottom: 20, cursor: 'pointer' }} onClick={() => scrollTo('hero')}>
              <Logo height={38} />
            </div>
            <RedDivider width={36} style={{ marginBottom: 16 }} />
            <p style={{
              fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 300,
              color: 'rgba(255,255,255,0.28)', lineHeight: 1.75, maxWidth: 220,
            }}>
              Precision motorsport engineering.<br />Silverstone, UK. Est. 2003.
            </p>

            <div style={{ display: 'flex', gap: 8, marginTop: 20, flexWrap: 'wrap' }}>
              {['ISO 9001','FIA Supplier','IATF 16949'].map(cert => (
                <div key={cert} style={{
                  fontFamily: "'JetBrains Mono',monospace", fontSize: 8, fontWeight: 500,
                  color: MDM_T.platinumDark, letterSpacing: '0.06em',
                  background: 'rgba(184,205,216,0.06)',
                  border: '1px solid rgba(184,205,216,0.1)',
                  borderRadius: 3, padding: '4px 10px',
                }}>{cert}</div>
              ))}
            </div>
          </div>

          {cols.map(col => (
            <div key={col.heading}>
              <div style={{
                fontFamily: "'Inter',sans-serif", fontSize: 9, fontWeight: 600,
                color: MDM_T.muted, letterSpacing: '0.16em', textTransform: 'uppercase',
                marginBottom: 16,
              }}>{col.heading}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map(l => (
                  <div key={l} style={{
                    fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 300,
                    color: 'rgba(255,255,255,0.28)', lineHeight: 1.5,
                    cursor: 'pointer', transition: 'color 150ms',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = MDM_T.platinum; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.28)'; }}>
                    {l}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: 20,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12,
        }}>
          <div style={{
            fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 300,
            color: 'rgba(255,255,255,0.18)',
          }}>© 2026 MDM Motorsports Ltd. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {['Privacy Policy','Terms of Service','Quality Policy'].map(l => (
              <div key={l} style={{
                fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 300,
                color: 'rgba(255,255,255,0.18)', cursor: 'pointer', transition: 'color 150ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = MDM_T.muted; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.18)'; }}>
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { FooterSection });
