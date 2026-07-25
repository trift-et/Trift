import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Photovoltaik', href: '#photovoltaik' },
  { label: 'Wallbox', href: '#wallbox' },
  { label: 'Über uns', href: '#ueber-uns' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled ? 'navbar-scrolled' : 'bg-transparent'
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-18" style={{ height: '72px' }}>
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group"
              data-testid="nav-logo"
            >
              <div className="w-9 h-9 rounded-sm bg-amber-brand flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
                style={{ backgroundColor: 'hsl(38, 95%, 50%)' }}>
                <Zap size={18} strokeWidth={2.5} style={{ color: 'hsl(218, 30%, 10%)' }} />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-white font-display font-bold tracking-tight"
                  style={{ fontSize: '1.05rem', fontFamily: 'Bricolage Grotesque, sans-serif' }}
                >
                  Trift
                </span>
                <span
                  className="text-white/70 font-sans"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}
                >
                  Elektrotechnik
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
                  data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: 'hsl(38, 95%, 50%)' }} />
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#kontakt')}
                className="btn-amber px-5 py-2.5 rounded-sm text-sm font-semibold"
                data-testid="nav-cta"
              >
                Anfrage stellen
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-2"
              data-testid="nav-mobile-toggle"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mobile-menu fixed top-[72px] left-0 right-0 z-40 py-6 px-6 flex flex-col gap-4"
            data-testid="nav-mobile-menu"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleNavClick(link.href)}
                className="text-white/85 hover:text-white text-lg font-medium text-left py-2 border-b border-white/10"
                data-testid={`nav-mobile-link-${link.label}`}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              onClick={() => handleNavClick('#kontakt')}
              className="btn-amber px-6 py-3 rounded-sm text-base font-semibold mt-2"
              data-testid="nav-mobile-cta"
            >
              Kostenlos anfragen
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
