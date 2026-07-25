import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Cpu, Lightbulb, Settings, FileCheck } from 'lucide-react';
import elektroImg from '../assets/elektro-work.jpg';

const workTypes = [
  { icon: Settings, label: 'Unterverteilungen & Zähleranlagen' },
  { icon: Cpu, label: 'Smart-Home-Systeme (KNX, Loxone)' },
  { icon: Lightbulb, label: 'Beleuchtungsplanung & LED-Umbau' },
  { icon: FileCheck, label: 'VDE-Prüfung & Dokumentation' },
];

const stats = [
  { num: '1.200+', label: 'Projekte abgeschlossen' },
  { num: '100%', label: 'VDE-zertifizierte Arbeiten' },
  { num: '48h', label: 'Reaktionszeit vor Ort' },
];

export default function ElektroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      id="elektroarbeiten"
      ref={sectionRef}
      className="py-28 px-6 lg:px-10 overflow-hidden"
      style={{ backgroundColor: 'hsl(218, 25%, 14%)' }}
      data-testid="elektro-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-lg overflow-hidden"
            style={{ aspectRatio: '4/3' }}
          >
            <motion.img
              style={{ y: imgY }}
              src={elektroImg}
              alt="Elektrotechnik Facharbeiter"
              className="w-full h-[115%] object-cover"
            />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, hsl(218, 28%, 8%, 0.55) 0%, transparent 60%)'
            }} />
            {/* Bottom amber strip */}
            <div className="absolute bottom-0 left-0 right-0 h-1"
              style={{ backgroundColor: 'hsl(38, 95%, 50%)' }} />
          </motion.div>

          {/* Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-number mb-3"
            >
              Elektroarbeiten
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold mb-5"
              style={{
                fontFamily: 'Bricolage Grotesque, sans-serif',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                color: 'hsl(44, 20%, 95%)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              Handwerk,
              <br />
              das hält.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="amber-divider mb-6"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="leading-relaxed mb-10 text-[0.97rem]"
              style={{ color: 'hsl(44, 15%, 70%)' }}
            >
              Von der Unterverteilung bis zur Smart-Home-Integration — alles aus einer Hand.
              Ob Neubau, Sanierung oder Erweiterung: Unsere Fachkräfte arbeiten präzise,
              sauber und immer nach aktuellen VDE-Normen.
            </motion.p>

            {/* Work Types */}
            <div className="space-y-3 mb-12">
              {workTypes.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-sm border"
                  style={{
                    borderColor: 'hsl(218, 20%, 24%)',
                    backgroundColor: 'hsl(218, 22%, 17%)',
                  }}
                  data-testid={`elektro-work-${i}`}
                >
                  <div className="w-9 h-9 rounded-sm flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: 'hsl(38, 95%, 50%, 0.15)' }}>
                    <Icon size={16} strokeWidth={2} style={{ color: 'hsl(38, 95%, 50%)' }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: 'hsl(44, 15%, 82%)' }}>
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 mb-10 pt-8 border-t"
              style={{ borderColor: 'hsl(218, 20%, 22%)' }}
            >
              {stats.map(({ num, label }) => (
                <div key={label} className="text-center" data-testid={`elektro-stat-${label}`}>
                  <div className="stat-number" style={{ fontSize: '1.6rem' }}>{num}</div>
                  <div className="text-xs mt-1 font-medium" style={{ color: 'hsl(44, 10%, 55%)' }}>{label}</div>
                </div>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.0 }}
              onClick={() => {
                const el = document.querySelector('#kontakt');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-amber px-8 py-4 rounded-sm text-sm font-semibold"
              data-testid="elektro-cta"
            >
              Jetzt anfragen
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
