import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, MapPin, HeartHandshake, Wrench, Phone } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Zertifizierter Fachbetrieb',
    desc: 'Meisterbetrieb mit allen relevanten Zertifizierungen: VDE, BDEW, ZVEH. Unsere Qualifikationen sichern Ihre Investition.',
  },
  {
    icon: Wrench,
    title: 'Über 15 Jahre Erfahrung',
    desc: 'Seit 2008 installieren wir Solaranlagen, Wallboxen und übernehmen Elektroprojekte jeder Größe — mit Herz und Sachverstand.',
  },
  {
    icon: Phone,
    title: 'Kostenlose Erstberatung',
    desc: 'Kein Berater-Verkaufsgespräch, sondern ehrliche Fachberatung. Wir prüfen Ihr Projekt und beraten Sie transparent — ohne versteckte Kosten.',
  },
  {
    icon: MapPin,
    title: 'Regionale Kompetenz',
    desc: 'Als lokaler Betrieb kennen wir die regionalen Netzanforderungen, Behörden und Gegebenheiten. Kurze Wege, schnelle Reaktion.',
  },
  {
    icon: Users,
    title: 'Festes Fachkräfte-Team',
    desc: 'Keine Subunternehmer — unsere eigenen, fest angestellten Elektrotechniker führen Ihre Installation durch. Immer die gleichen Gesichter.',
  },
  {
    icon: HeartHandshake,
    title: 'Langfristige Partnerschaft',
    desc: 'Nach der Installation sind wir weiterhin für Sie da — für Wartung, Erweiterung und technischen Support. Ein Anruf genügt.',
  },
];

export default function WhyTrift() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section
      id="ueber-uns"
      className="py-28 px-6 lg:px-10"
      style={{ backgroundColor: 'hsl(44, 18%, 94%)' }}
      data-testid="why-trift-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-number mb-3"
          >
            Warum Trift?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold mb-5"
            style={{
              fontFamily: 'Bricolage Grotesque, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'hsl(218, 25%, 14%)',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          >
            Vertrauen braucht
            <br />
            mehr als ein Versprechen.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-muted-foreground text-lg"
          >
            Sechs Gründe, warum Kunden in der Region auf Trift Elektrotechnik setzen.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <ReasonCard key={title} Icon={Icon} title={title} desc={desc} index={i} />
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 rounded-lg p-10 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ backgroundColor: 'hsl(218, 25%, 14%)' }}
        >
          <div>
            <h3
              className="font-display font-bold mb-2"
              style={{
                fontFamily: 'Bricolage Grotesque, sans-serif',
                fontSize: '1.6rem',
                color: 'hsl(44, 20%, 95%)',
                letterSpacing: '-0.01em',
              }}
            >
              Bereit für die Energiezukunft?
            </h3>
            <p style={{ color: 'hsl(44, 12%, 65%)' }} className="text-[0.95rem]">
              Lassen Sie uns gemeinsam Ihr Projekt planen. Kostenlos und unverbindlich.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.querySelector('#kontakt');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-amber px-8 py-4 rounded-sm text-base font-semibold whitespace-nowrap flex-shrink-0"
            data-testid="why-trift-cta"
          >
            Jetzt Beratung anfragen
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function ReasonCard({
  Icon,
  title,
  desc,
  index,
}: {
  Icon: React.ElementType;
  title: string;
  desc: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="group p-7 rounded-lg border border-card-border bg-card hover:shadow-md transition-shadow duration-300"
      data-testid={`reason-card-${index}`}
    >
      <div
        className="w-12 h-12 rounded-sm flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200"
        style={{ backgroundColor: 'hsl(42, 90%, 92%)' }}
      >
        <Icon size={22} strokeWidth={1.8} style={{ color: 'hsl(33, 90%, 40%)' }} />
      </div>
      <h4
        className="font-display font-bold mb-3"
        style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: '1.1rem', color: 'hsl(218, 25%, 14%)' }}
      >
        {title}
      </h4>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}
