import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, TrendingUp, Leaf, Shield } from 'lucide-react';
import heroSolar from '../assets/hero-solar.jpg';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Bis zu 80% Stromkostenersparnis',
    desc: 'Erzeugen Sie Ihren eigenen Strom und machen Sie sich unabhängig von steigenden Energiepreisen.',
  },
  {
    icon: Leaf,
    title: 'CO₂-neutral heizen & laden',
    desc: 'Kombinieren Sie Ihre PV-Anlage mit Wärmepumpe und Wallbox für maximale Effizienz.',
  },
  {
    icon: Shield,
    title: '25 Jahre Garantie auf Module',
    desc: 'Wir setzen ausschließlich auf Module renommierter Hersteller mit langen Produktgarantien.',
  },
  {
    icon: CheckCircle2,
    title: 'Vollständige Projektabwicklung',
    desc: 'Von der Genehmigung bis zur Netzanmeldung — wir erledigen den gesamten Papierkram für Sie.',
  },
];

export default function SolarSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      id="photovoltaik"
      ref={sectionRef}
      className="py-28 px-6 lg:px-10 overflow-hidden"
      style={{ backgroundColor: 'hsl(44, 18%, 94%)' }}
      data-testid="solar-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-lg overflow-hidden order-2 lg:order-1"
            style={{ aspectRatio: '4/3' }}
          >
            <motion.img
              style={{ y: imgY }}
              src={heroSolar}
              alt="Photovoltaikanlage Installation"
              className="w-full h-[115%] object-cover"
            />
            {/* Amber accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5"
              style={{ backgroundColor: 'hsl(38, 95%, 50%)' }} />
            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex gap-4">
                {[
                  { num: '847', unit: 'kWp', label: 'installiert' },
                  { num: '312', unit: '+', label: 'Anlagen' },
                  { num: '15', unit: 'J.', label: 'Erfahrung' },
                ].map(({ num, unit, label }) => (
                  <div
                    key={label}
                    className="flex-1 rounded-sm px-4 py-3 text-center"
                    style={{ backgroundColor: 'hsl(218, 28%, 8%, 0.82)', backdropFilter: 'blur(8px)' }}
                  >
                    <div className="stat-number" style={{ fontSize: '1.6rem' }}>
                      {num}<span style={{ fontSize: '1rem', color: 'hsl(38, 95%, 50%)' }}>{unit}</span>
                    </div>
                    <div className="text-white/60 text-xs mt-0.5 font-medium">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="section-number mb-3"
            >
              Photovoltaik
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold mb-5"
              style={{
                fontFamily: 'Bricolage Grotesque, sans-serif',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                color: 'hsl(218, 25%, 14%)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              Energieunabhängigkeit
              <br />
              für Ihr Zuhause.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="amber-divider mb-6"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-muted-foreground leading-relaxed mb-10 text-[0.97rem]"
            >
              Mit einer maßgeschneiderten Photovoltaikanlage von Trift Elektrotechnik erzeugen
              Sie sauberen Strom direkt auf Ihrem Dach. Wir planen, liefern und installieren —
              und begleiten Sie auch nach der Inbetriebnahme.
            </motion.p>

            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.45 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-4"
                  data-testid={`solar-benefit-${i}`}
                >
                  <div className="w-10 h-10 rounded-sm flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: 'hsl(42, 90%, 92%)' }}>
                    <Icon size={18} strokeWidth={1.8} style={{ color: 'hsl(33, 90%, 40%)' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[0.95rem] mb-0.5" style={{ color: 'hsl(218, 25%, 14%)' }}>
                      {title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              onClick={() => {
                const el = document.querySelector('#kontakt');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-amber mt-10 px-8 py-4 rounded-sm text-sm font-semibold"
              data-testid="solar-cta"
            >
              Solar-Beratung anfragen
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
