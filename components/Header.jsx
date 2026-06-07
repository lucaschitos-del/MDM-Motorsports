// Header — sticky glassmorphism nav
const { useState: useStateH, useEffect: useEffectH } = React;

function Header({ activeSection }) {
  const [scrolled, setScrolled] = useStateH(false);
  const [mobileOpen, setMobileOpen] = useStateH(false);

  const navItems = [
    { label: 'Home',        id: 'hero' },
    { label: 'Products',    id: 'products' },
    { label: 'Engineering', id: 'engineering' },
    { label: 'About',       id: 'about' },
    { label: 'Contact',     id: 'contact' },
  ];

  useEffectH(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      height: 64,
      background: scrolled ? 'rgba(11,11,16,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
      transition: 'background 350ms ease, border-color 350ms ease',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', height: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 48px',
      }}>
        {/* Logo */}
        <button onClick={() => scrollTo('hero')} style={{
          background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <LogoMark size={30} />
          <div>
            <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 15, fontWeight: 800, color: '#fff', letterSpacing: '0.02em', lineHeight: 1 }}>MDM</div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 7, fontWeight: 600, color: MDM_T.muted, letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: 2 }}>MOTORSPORTS</div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="nav-links" style={{ display: 'flex', gap: 2 }}>
          {navItems.map(item => {
            const isActive = activeSection === item.id;
            return (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: "'Inter',sans-serif", fontSize: 12.5,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#fff' : MDM_T.muted,
                  padding: '8px 16px',
                  letterSpacing: '0.03em',
                  position: 'relative',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = MDM_T.offWhite; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = MDM_T.muted; }}>
                {item.label}
                {isActive && (
                  <div style={{
                    position: 'absolute', bottom: 4, left: 16, right: 16,
                    height: 1.5, background: MDM_T.red, borderRadius: 1,
                  }} />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <button className="nav-links" onClick={() => scrollTo('contact')}
          style={{
            fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            background: MDM_T.red, color: '#fff', border: 'none',
            borderRadius: 3, padding: '9px 22px', cursor: 'pointer',
            transition: 'background 150ms ease, box-shadow 200ms ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = MDM_T.redLight;
            e.currentTarget.style.boxShadow = '0 0 28px rgba(232,0,28,0.45)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = MDM_T.red;
            e.currentTarget.style.boxShadow = 'none';
          }}>
          Get a Quote
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          style={{
            display: 'none',
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#fff', padding: 8,
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu">
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0" width="22" height="2" rx="1" fill="white"/>
            <rect y="7" width="22" height="2" rx="1" fill="white"/>
            <rect y="14" width="22" height="2" rx="1" fill="white"/>
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div style={{
          background: 'rgba(11,11,16,0.98)',
          backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          padding: '16px 24px 24px',
        }}>
          {navItems.map(item => (
            <button key={item.id} onClick={() => scrollTo(item.id)}
              style={{
                display: 'block', width: '100%', background: 'none', border: 'none',
                cursor: 'pointer', fontFamily: "'Inter',sans-serif", fontSize: 15,
                color: activeSection === item.id ? '#fff' : MDM_T.muted,
                fontWeight: activeSection === item.id ? 600 : 400,
                padding: '12px 0', textAlign: 'left', letterSpacing: '0.03em',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}>
              {item.label}
            </button>
          ))}
          <button onClick={() => scrollTo('contact')}
            style={{
              marginTop: 16, fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 600,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              background: MDM_T.red, color: '#fff', border: 'none',
              borderRadius: 3, padding: '12px 22px', cursor: 'pointer', width: '100%',
            }}>
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
}

// Show hamburger on mobile via inline style injection
const mobileStyle = document.createElement('style');
mobileStyle.textContent = '@media (max-width: 900px) { .mobile-menu-btn { display: block !important; } }';
document.head.appendChild(mobileStyle);

Object.assign(window, { Header });
