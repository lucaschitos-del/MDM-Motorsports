// App — assembles all sections, manages active section tracking
const { useState: useStateApp, useEffect: useEffectApp } = React;

function App() {
  const [activeSection, setActiveSection] = useStateApp('hero');

  useEffectApp(() => {
    const sections = ['hero','products','engineering','about','contact'];
    const onScroll = () => {
      const offset = 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= offset) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('hero');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffectApp(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.06 });

    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => obs.observe(el));
    }, 120);

    return () => { clearTimeout(timer); obs.disconnect(); };
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#0B0B10' }}>
      <Header activeSection={activeSection} />
      <HeroSection />
      <ProductsSection />
      <EngineeringSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
