import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sun, BatteryCharging, Plug, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'photovoltaik',
    icon: Sun,
    number: '01',
    title: 'Photovoltaik',
    subtitle: 'Solaranlagen vom Profi',
    description:
      'Solaranlagen planen, liefern und installieren. Wir analysieren Ihr Dach, dimensionieren die optimale Anlage und kümmern uns um Anmeldung und Inbetriebnahme — alles aus einer Hand.',
    bullets: [
      'Individuelle Dachanalyse & Ertragsberechnung',
      'Komplettinstallation inkl. Wechselrichter',
      'Anmeldung beim Netzbetreiber',
      'Batteriespeicher-Integration',
    ],
    accent: 'hsl(38, 95%, 50%)',
    href: '#kontakt',
  },
  {
    id: 'wallbox',
    icon: BatteryCharging,
    number: '02',
    title: 'Wallbox & E-Mobilität',
    subtitle: 'Laden mit System',
    description:
      'Zertifizierte Wallbox-Installation für alle Fahrzeugmodelle. Schnell, sicher, zukunftssicher. Vom Einfamilienhaus bis zum Firmengebäude — wir finden die richtige Ladelösung.',
    bullets: [
      'Alle gängigen Hersteller & Modelle',
      'OCPP-kompatibel & smart-home-fähig',
      'Lastmanagement & Förderantrag',
      'Wartung & Service inklusive',
    ],
    accent: 'hsl(38, 95%, 50%)',
    href: '#kontakt',
  },
  {
    id: 'elektroarbeiten',
    icon: Plug,
    number: '03',
    title: 'Elektroarbeiten',
    subtitle: 'Alles aus einer Hand',
    description:
      'Von der Unterverteilung bis zur Smart-Home-Integration. Ob Neubau, Sanierung oder Erweiterung — unsere Fachkräfte arbeiten präzise, ordentlich und termingerecht.',
    bullets: [
      'Unterverteilungen & Zähleranlagen',
      'Smart-Home-Systeme',
      'Beleuchtungsplanung & LED-Umbau',
      'Prüfung & Dokumentation nach VDE',
    ],
    accent: 'hsl(38, 95%, 50%)',
    href: '#kontakt',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="service-card group relative bg-card rounded-lg border border-card-border p-8 flex flex-col overflow-hidden"
      data-testid={`service-card-${service.id}`}
    >
      {/* Top number watermark */}
      <span
        className="absolute top-4 right-5 font-display font-black opacity-[0.06]"
        style={{ fontSize: '5rem', fontFamily: 'Bricolage Grotesque, sans-serif', color: 'hsl(218, 25%, 14%)' }}
      >
        {service.number}
      </span>

      {/* Icon */}
      <div className="w-14 h-14 rounded-md flex items-center justify-center mb-6 flex-shrink-0"
        style={{ backgroundColor: 'hsl(42, 90%, 92%)' }}>
        <Icon size={26} strokeWidth={1.8} style={{ color: 'hsl(33, 90%, 40%)' }} />
      </div>

      {/* Label */}
      <p className="section-number mb-2">{service.subtitle}</p>

      {/* Title */}
      <h3
        className="font-display font-bold mb-3"
        style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: '1.5rem', color: 'hsl(218, 25%, 14%)' }}
      >
        {service.title}
      </h3>

      {/* Divider */}
      <div className="amber-divider mb-5" />

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed mb-6 text-[0.94rem]">
        {service.description}
      </p>

      {/* Bullet list */}
      <ul className="space-y-2.5 mb-8 flex-1">
        {service.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3 text-sm" style={{ color: 'hsl(218, 20%, 30%)' }}>
            <span
              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: 'hsl(38, 95%, 50%)' }}
            />
            {bullet}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={() => {
          const el = document.querySelector('#kontakt');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-200"
        style={{ color: 'hsl(33, 90%, 40%)' }}
        data-testid={`service-cta-${service.id}`}
      >
        Jetzt anfragen
        <ArrowRight size={15} strokeWidth={2.5} />
      </button>
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section id="leistungen" className="py-28 px-6 lg:px-10" data-testid="services-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={titleRef} className="mb-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-number mb-3"
          >
            Unsere Leistungen
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold mb-5"
            style={{
              fontFamily: 'Bricolage Grotesque, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'hsl(218, 25%, 14%)',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          >
            Drei Fachgebiete.
            <br />
            Ein Ansprechpartner.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Von der ersten Beratung bis zur Inbetriebnahme begleiten wir Sie — mit dem Fachwissen eines
            spezialisierten Elektrotechnikers und dem Engagement eines regionalen Handwerksbetriebs.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
