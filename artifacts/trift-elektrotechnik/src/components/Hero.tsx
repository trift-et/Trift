import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ShieldCheck, Star, Award } from 'lucide-react';
import heroSolar from '../assets/hero-solar.jpg';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const handleScrollDown = () => {
    const el = document.querySelector('#leistungen');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={heroSolar}
          alt="Solaranlage auf deutschem Hausdach"
          className="w-full h-[115%] object-cover object-center"
        />
        {/* Multi-layer overlay for text legibility */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(105deg, hsl(218, 28%, 8%, 0.92) 0%, hsl(218, 25%, 12%, 0.75) 55%, hsl(218, 25%, 12%, 0.35) 100%)'
        }} />
        {/* Subtle amber glow at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64" style={{
          background: 'linear-gradient(to top, hsl(38, 95%, 50%, 0.08) 0%, transparent 100%)'
        }} />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28 pb-20"
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-sm border border-white/20"
            style={{ backgroundColor: 'hsl(38, 95%, 50%, 0.15)', backdropFilter: 'blur(8px)' }}
          >
            <Star size={13} style={{ color: 'hsl(38, 95%, 50%)' }} />
            <span className="section-number">Zertifizierter Fachbetrieb · Seit 2008</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-white leading-[1.08] mb-6"
            style={{
              fontFamily: 'Bricolage Grotesque, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2.8rem, 7vw, 5.2rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Trift immer die{' '}
            <span style={{ color: 'hsl(38, 95%, 50%)' }}>richtige</span>
            <br />
            Entscheidung.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52 }}
            className="text-white/75 mb-10 max-w-xl"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: 1.65, fontWeight: 400 }}
          >
            Ihr Spezialist für Photovoltaik, Wallbox-Installation und Elektroarbeiten.
            Handwerksqualität trifft Energiezukunft — aus einer Hand, in Ihrer Region.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => {
                const el = document.querySelector('#kontakt');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-amber px-8 py-4 rounded-sm text-base font-semibold"
              data-testid="hero-cta-primary"
            >
              Jetzt Beratung anfragen
            </button>
            <button
              onClick={() => {
                const el = document.querySelector('#leistungen');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-sm text-white/85 hover:text-white border border-white/25 hover:border-white/50 transition-all duration-200 text-base font-medium"
              data-testid="hero-cta-secondary"
            >
              Unsere Leistungen
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-14 flex flex-wrap gap-6"
          >
            {[
              { icon: ShieldCheck, label: 'Zertifizierter Fachbetrieb' },
              { icon: Award, label: '15+ Jahre Erfahrung' },
              { icon: Star, label: 'Kostenlose Beratung' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={15} style={{ color: 'hsl(38, 95%, 50%)' }} strokeWidth={2} />
                <span className="text-white/65 text-sm font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group"
        data-testid="hero-scroll-down"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase font-medium">Entdecken</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} className="text-white/40 group-hover:text-white/70 transition-colors" />
        </motion.div>
      </motion.button>

      {/* Bottom Edge Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to top, hsl(44, 18%, 97%) 0%, transparent 100%)' }} />
    </section>
  );
}
