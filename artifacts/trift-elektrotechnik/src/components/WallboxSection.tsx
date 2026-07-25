import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Zap, Clock, Lock, Wifi, ArrowRight } from 'lucide-react';
import wallboxImg from '../assets/wallbox-detail.jpg';

const features = [
  {
    icon: Zap,
    title: 'Bis zu 22 kW Ladeleistung',
    desc: 'Schnellladen für alle gängigen Elektrofahrzeuge — von Renault Zoe bis Tesla Model S.',
  },
  {
    icon: Clock,
    title: 'Installation in einem Tag',
    desc: 'Unsere Fachkräfte installieren Ihre Wallbox schnell und sauber — ohne tagelange Baustelle.',
  },
  {
    icon: Wifi,
    title: 'Smart & vernetzt',
    desc: 'WLAN, App-Steuerung und PV-Überschussladen: Laden Sie nur dann, wenn die Sonne scheint.',
  },
  {
    icon: Lock,
    title: 'Sicher & zertifiziert',
    desc: 'Alle Installationen erfolgen nach DGUV-Vorschrift und VDE-Normen durch Fachbetriebe.',
  },
];

const brands = ['ABL', 'Heidelberg', 'Mennekes', 'Keba', 'Wallbe', 'go-e'];

export default function WallboxSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      id="wallbox"
      ref={sectionRef}
      className="py-28 px-6 lg:px-10 overflow-hidden"
      data-testid="wallbox-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-number mb-3"
            >
              Wallbox & E-Mobilität
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold mb-5"
              style={{
                fontFamily: 'Bricolage Grotesque, sans-serif',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                color: 'hsl(218, 25%, 14%)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              Immer geladen.
              <br />
              Immer bereit.
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
              className="text-muted-foreground leading-relaxed mb-10 text-[0.97rem]"
            >
              Zertifizierte Wallbox-Installation für alle Fahrzeugmodelle.
              Als Fachbetrieb kennen wir alle Förderungen und helfen Ihnen,
              den Antrag korrekt zu stellen — für maximale Einsparungen.
            </motion.p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.4 + i * 0.1 }}
                  className="p-4 rounded-md border border-card-border"
                  style={{ backgroundColor: 'hsl(44, 22%, 99%)' }}
                  data-testid={`wallbox-feature-${i}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon size={16} strokeWidth={2} style={{ color: 'hsl(38, 95%, 50%)' }} />
                    <h4 className="font-semibold text-sm" style={{ color: 'hsl(218, 25%, 14%)' }}>
                      {title}
                    </h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Brands */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.85 }}
            >
              <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider font-medium">
                Zertifizierter Partner von
              </p>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="px-3 py-1.5 rounded-sm text-xs font-semibold border"
                    style={{
                      color: 'hsl(218, 25%, 28%)',
                      borderColor: 'hsl(44, 15%, 82%)',
                      backgroundColor: 'hsl(44, 18%, 96%)',
                    }}
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.0 }}
              onClick={() => {
                const el = document.querySelector('#kontakt');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-amber mt-10 px-8 py-4 rounded-sm text-sm font-semibold inline-flex items-center gap-2"
              data-testid="wallbox-cta"
            >
              Wallbox anfragen
              <ArrowRight size={15} strokeWidth={2.5} />
            </motion.button>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-lg overflow-hidden"
            style={{ aspectRatio: '4/5' }}
          >
            <motion.img
              style={{ y: imgY }}
              src={wallboxImg}
              alt="Wallbox EV Ladestation"
              className="w-full h-[115%] object-cover"
            />
            {/* Amber strip */}
            <div className="absolute top-0 left-0 bottom-0 w-1"
              style={{ backgroundColor: 'hsl(38, 95%, 50%)' }} />

            {/* Feature callout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute bottom-6 right-6 rounded-sm px-5 py-4 max-w-[200px]"
              style={{
                backgroundColor: 'hsl(44, 22%, 99%, 0.95)',
                backdropFilter: 'blur(10px)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <div className="stat-number mb-1" style={{ fontSize: '2rem' }}>
                22<span style={{ fontSize: '1rem', marginLeft: '2px' }}>kW</span>
              </div>
              <p className="text-xs font-medium" style={{ color: 'hsl(218, 20%, 38%)' }}>
                Max. Ladeleistung<br />bei 3-phasiger Installation
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
