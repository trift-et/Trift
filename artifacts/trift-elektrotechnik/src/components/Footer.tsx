import { motion } from 'framer-motion';
import { Zap, Sun, BatteryCharging, Plug, Mail, Phone } from 'lucide-react';

const footerLinks = [
  {
    heading: 'Leistungen',
    links: [
      { label: 'Photovoltaik', href: '#photovoltaik' },
      { label: 'Wallbox & E-Mobilität', href: '#wallbox' },
      { label: 'Elektroarbeiten', href: '#elektroarbeiten' },
      { label: 'Smart Home', href: '#kontakt' },
    ],
  },
  {
    heading: 'Unternehmen',
    links: [
      { label: 'Über uns', href: '#ueber-uns' },
      { label: 'Referenzen', href: '#testimonials' },
      { label: 'Kundenstimmen', href: '#testimonials' },
      { label: 'Kontakt', href: '#kontakt' },
    ],
  },
  {
    heading: 'Rechtliches',
    links: [
      { label: 'Impressum', href: '#' },
      { label: 'Datenschutz', href: '#' },
      { label: 'AGB', href: '#' },
      { label: 'Cookierichtlinie', href: '#' },
    ],
  },
];

const serviceIcons = [
  { Icon: Sun, label: 'Photovoltaik' },
  { Icon: BatteryCharging, label: 'Wallbox' },
  { Icon: Plug, label: 'Elektro' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href === '#') return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: 'hsl(218, 28%, 10%)' }}
      data-testid="footer"
    >
      {/* Decorative amber line */}
      <div className="h-1 w-full" style={{ backgroundColor: 'hsl(38, 95%, 50%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'hsl(38, 95%, 50%)' }}
              >
                <Zap size={20} strokeWidth={2.5} style={{ color: 'hsl(218, 30%, 10%)' }} />
              </div>
              <div>
                <div
                  className="font-display font-bold"
                  style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: '1.1rem', color: 'hsl(44, 20%, 95%)' }}
                >
                  Trift Elektrotechnik
                </div>
                <div
                  className="italic"
                  style={{ fontSize: '0.72rem', color: 'hsl(38, 95%, 50%)', fontStyle: 'italic' }}
                >
                  Trift immer die richtige Entscheidung
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-7" style={{ color: 'hsl(44, 10%, 58%)' }}>
              Ihr zertifizierter Fachbetrieb für Photovoltaik, Wallbox-Installation
              und Elektroarbeiten. Qualität aus Überzeugung — seit 2008.
            </p>

            {/* Service icons */}
            <div className="flex gap-3 mb-8">
              {serviceIcons.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1.5"
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center"
                    style={{ backgroundColor: 'hsl(218, 22%, 18%)' }}
                  >
                    <Icon size={17} strokeWidth={1.8} style={{ color: 'hsl(38, 95%, 50%)' }} />
                  </div>
                  <span style={{ fontSize: '0.65rem', color: 'hsl(44, 8%, 50%)' }}>{label}</span>
                </div>
              ))}
            </div>

            {/* Contact quick links */}
            <div className="space-y-2.5">
              <a
                href="tel:+498912345678"
                className="flex items-center gap-3 text-sm transition-colors duration-150"
                style={{ color: 'hsl(44, 10%, 60%)' }}
              >
                <Phone size={14} style={{ color: 'hsl(38, 95%, 50%)' }} />
                +49 (0)89 123 456 78
              </a>
              <a
                href="mailto:info@trift-elektrotechnik.de"
                className="flex items-center gap-3 text-sm transition-colors duration-150"
                style={{ color: 'hsl(44, 10%, 60%)' }}
              >
                <Mail size={14} style={{ color: 'hsl(38, 95%, 50%)' }} />
                info@trift-elektrotechnik.de
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4
                className="font-semibold mb-5 text-xs tracking-wider uppercase"
                style={{ color: 'hsl(44, 15%, 65%)' }}
              >
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map(({ label, href }) => (
                  <li key={label}>
                    <button
                      onClick={() => handleNavClick(href)}
                      className="text-sm transition-colors duration-150 hover:text-white text-left"
                      style={{ color: 'hsl(44, 8%, 48%)' }}
                      data-testid={`footer-link-${label}`}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'hsl(218, 20%, 18%)' }}
        >
          <p className="text-xs" style={{ color: 'hsl(44, 8%, 40%)' }}>
            &copy; {new Date().getFullYear()} Trift Elektrotechnik. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs" style={{ color: 'hsl(44, 8%, 35%)' }}>
            Meisterbetrieb · Zertifiziert nach VDE · Bayern
          </p>
        </div>
      </div>

      {/* Decorative background glow */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(38, 95%, 50%, 0.04) 0%, transparent 70%)',
          transform: 'translate(30%, 30%)',
        }}
      />
    </footer>
  );
}
