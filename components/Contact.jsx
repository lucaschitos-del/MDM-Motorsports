// Contact Section — glassmorphism enquiry form
const { useState: useStateContact } = React;

const CATEGORIES = [
  'Suspension Geometry','Drivetrain Components','Braking Systems',
  'Aerodynamic Parts','Powertrain Accessories','One-Off Engineering',
];

function ContactSection() {
  const [form, setForm] = useStateContact({ name:'', org:'', email:'', category: CATEGORIES[0], series:'', message:'' });
  const [sent, setSent] = useStateContact(false);

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const inputBase = {
    width: '100%', background: 'transparent',
    border: 'none', borderBottom: '1px solid rgba(255,255,255,0.12)',
    color: '#fff', fontFamily: "'Inter',sans-serif", fontSize: 14,
    fontWeight: 300, padding: '10px 0', outline: 'none',
    transition: 'border-color 200ms',
    borderRadius: 0,
  };

  const labelStyle = {
    fontFamily: "'Inter',sans-serif", fontSize: 9, fontWeight: 600,
    color: MDM_T.muted, letterSpacing: '0.16em', textTransform: 'uppercase',
    display: 'block', marginBottom: 6,
  };

  const Field = ({ label, children, style: fieldStyle }) => (
    <div style={fieldStyle}>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );

  const focusInput = e => { e.currentTarget.style.borderBottomColor = MDM_T.red; };
  const blurInput  = e => { e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.12)'; };

  return (
    <section id="contact" data-section="contact" style={{
      background: `
        radial-gradient(ellipse 60% 70% at 100% 100%, rgba(232,0,28,0.08) 0%, transparent 55%),
        radial-gradient(ellipse 50% 50% at 0% 0%, rgba(184,205,216,0.05) 0%, transparent 50%),
        ${MDM_T.black}
      `,
      padding: '96px 0',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '40px 40px', pointerEvents: 'none',
      }} />

      <div className="section-padding" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 64px', position: 'relative', zIndex: 1 }}>
        <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80, alignItems: 'start' }}>

          {/* Left — info */}
          <div className="reveal-left">
            <SectionLabel style={{ marginBottom: 16 }}>Enquiries</SectionLabel>
            <h2 style={{
              fontFamily: "'Orbitron',sans-serif", fontSize: 'clamp(32px,3.5vw,52px)',
              fontWeight: 900, color: '#fff', letterSpacing: '-0.03em',
              textTransform: 'uppercase', lineHeight: 0.92, marginBottom: 20,
            }}>REQUEST<br />A PART.</h2>
            <RedDivider width={40} style={{ marginBottom: 24 }} />
            <p style={{
              fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 300,
              color: MDM_T.platinumDark, lineHeight: 1.85, marginBottom: 44, maxWidth: 380,
            }}>
              Send a brief — drawing, sketch, or written spec. Our engineering team
              responds within one working day with feasibility and indicative lead time.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { l: 'Email',   v: 'engineering@mdmmotorsports.com' },
                { l: 'Address', v: 'Silverstone Technology Park, NN12 8TN, UK' },
                { l: 'Hours',   v: 'Mon – Fri · 08:00 – 18:00 GMT' },
              ].map(({ l, v }) => (
                <div key={l}>
                  <div style={{ fontFamily:"'Inter',sans-serif", fontSize:9, fontWeight:600, color:MDM_T.muted, letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:5 }}>{l}</div>
                  <div style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:MDM_T.offWhite, fontWeight:300, lineHeight:1.5 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal" style={{
            background: 'rgba(14,14,24,0.65)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            border: '1px solid rgba(255,255,255,0.09)',
            borderTop: `2px solid ${MDM_T.red}`,
            borderRadius: 8,
            padding: '40px 36px',
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width:48, height:48, borderRadius:'50%', background:'rgba(232,0,28,0.12)', border:`1px solid ${MDM_T.red}`, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px' }}>
                  <div style={{ color: MDM_T.red, fontSize: 22 }}>✓</div>
                </div>
                <div style={{ fontFamily:"'Orbitron',sans-serif", fontSize:16, fontWeight:700, color:'#fff', marginBottom:10 }}>ENQUIRY SENT</div>
                <div style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:MDM_T.muted }}>We'll respond within one working day.</div>
              </div>
            ) : (
              <div style={{ display:'flex', flexDirection:'column', gap:22 }}>
                <div style={{ display:'flex', gap:20, flexWrap:'wrap' }}>
                  <Field label="Name" style={{ flex:1, minWidth: 120 }}>
                    <input style={inputBase} placeholder="Your name"
                      value={form.name} onChange={e=>update('name',e.target.value)}
                      onFocus={focusInput} onBlur={blurInput} />
                  </Field>
                  <Field label="Organisation" style={{ flex:1, minWidth: 120 }}>
                    <input style={inputBase} placeholder="Team or company"
                      value={form.org} onChange={e=>update('org',e.target.value)}
                      onFocus={focusInput} onBlur={blurInput} />
                  </Field>
                </div>
                <Field label="Email">
                  <input style={inputBase} type="email" placeholder="you@example.com"
                    value={form.email} onChange={e=>update('email',e.target.value)}
                    onFocus={focusInput} onBlur={blurInput} />
                </Field>
                <Field label="Category">
                  <select style={{ ...inputBase, cursor:'pointer', appearance:'none', WebkitAppearance:'none' }}
                    value={form.category} onChange={e=>update('category',e.target.value)}
                    onFocus={focusInput} onBlur={blurInput}>
                    {CATEGORIES.map(c => <option key={c} style={{ background: MDM_T.surfaceDark }}>{c}</option>)}
                  </select>
                </Field>
                <Field label="Racing Series">
                  <input style={inputBase} placeholder="WEC, GT3, IMSA, F4, etc."
                    value={form.series} onChange={e=>update('series',e.target.value)}
                    onFocus={focusInput} onBlur={blurInput} />
                </Field>
                <Field label="Requirements">
                  <textarea style={{ ...inputBase, height:90, resize:'none' }}
                    placeholder="Material, load cases, target weight, deadline…"
                    value={form.message} onChange={e=>update('message',e.target.value)}
                    onFocus={focusInput} onBlur={blurInput} />
                </Field>
                <button onClick={() => setSent(true)} style={{
                  fontFamily:"'Inter',sans-serif", fontSize:11, fontWeight:600,
                  letterSpacing:'0.12em', textTransform:'uppercase',
                  background: MDM_T.red, color:'#fff', border:'none',
                  borderRadius:3, padding:'13px 28px', cursor:'pointer',
                  marginTop:4, transition:'background 150ms, box-shadow 200ms',
                }}
                onMouseEnter={e=>{ e.currentTarget.style.background=MDM_T.redLight; e.currentTarget.style.boxShadow='0 0 28px rgba(232,0,28,0.45)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.background=MDM_T.red; e.currentTarget.style.boxShadow='none'; }}>
                  Send Enquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ContactSection });
