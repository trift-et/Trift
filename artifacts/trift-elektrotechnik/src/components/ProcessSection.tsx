import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, Ruler, Wrench, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Kostenlose Beratung',
    desc: 'Sie schildern uns Ihr Vorhaben — telefonisch, per E-Mail oder direkt vor Ort. Wir hören zu und stellen die richtigen Fragen.',
  },
  {
    icon: Ruler,
    step: '02',
    title: 'Planung & Angebot',
    desc: 'Wir analysieren Ihre Situation, erstellen eine technische Planung und ein transparentes Festpreisangebot — ohne versteckte Kosten.',
  },
  {
    icon: Wrench,
    step: '03',
    title: 'Professionelle Installation',
    desc: 'Unser erfahrenes Team setzt das Projekt um — pünktlich, sauber und nach allen geltenden Normen und Sicherheitsvorschriften.',
  },
  {
    icon: CheckCircle2,
    step: '04',
    title: 'Abnahme & Betreuung',
    desc: 'Nach der Inbetriebnahme erhalten Sie vollständige Dokumentation und bleiben mit uns in Kontakt für Service und Erweiterungen.',
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="py-28 px-6 lg:px-10"
      data-testid="process-section"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-number mb-3"
          >
            So funktioniert's
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold"
            style={{
              fontFamily: 'Bricolage Grotesque, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              color: 'hsl(218, 25%, 14%)',
              letterSpacing: '-0.02em',
            }}
          >
            Von der Anfrage bis zur Anlage.
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-[2px]"
            style={{
              margin: '0 8%',
              background: 'linear-gradient(to right, hsl(38, 95%, 50%), hsl(38, 95%, 50%, 0.2))',
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ icon: Icon, step, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 36 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center text-center group"
                data-testid={`process-step-${i}`}
              >
                {/* Icon circle */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundColor: 'hsl(44, 18%, 97%)',
                    border: '3px solid hsl(38, 95%, 50%)',
                  }}
                >
                  <Icon size={28} strokeWidth={1.8} style={{ color: 'hsl(33, 90%, 40%)' }} />

                  {/* Step number */}
                  <span
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: 'hsl(218, 25%, 14%)', color: 'hsl(44, 20%, 95%)' }}
                  >
                    {i + 1}
                  </span>
                </div>

                <h4
                  className="font-display font-bold mb-3"
                  style={{
                    fontFamily: 'Bricolage Grotesque, sans-serif',
                    fontSize: '1.05rem',
                    color: 'hsl(218, 25%, 14%)',
                  }}
                >
                  {title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
