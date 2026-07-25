import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Matthias Bergmann',
    location: 'Eigenheimbesitzer, München',
    rating: 5,
    text:
      'Trift hat unsere 12 kWp Anlage innerhalb einer Woche komplett installiert — inkl. Speicher und Wallbox. Absolut professionell, pünktlich und sauber. Ich würde jederzeit wieder buchen.',
    service: 'Photovoltaik + Wallbox',
  },
  {
    name: 'Sandra Hofmann',
    location: 'Unternehmerin, Augsburg',
    rating: 5,
    text:
      'Wir hatten einen alten Verteilerkasten der dringend erneuert werden musste. Das Trift-Team hat das Wochenende gearbeitet, damit unser Betrieb Montag wieder läuft. Sehr beeindruckend.',
    service: 'Elektroarbeiten',
  },
  {
    name: 'Klaus Renner',
    location: 'Hausbesitzer, Ingolstadt',
    rating: 5,
    text:
      'Die Beratung war offen und ehrlich — kein Verkaufsdruck, nur echte Fachkompetenz. Die Wallbox läuft einwandfrei und die App-Integration mit meiner PV-Anlage funktioniert perfekt.',
    service: 'Wallbox',
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      className="py-28 px-6 lg:px-10"
      data-testid="testimonials-section"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-number mb-3"
          >
            Kundenstimmen
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
            Was unsere Kunden sagen.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={review.name} review={review} index={i} />
          ))}
        </div>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 py-8 border-t border-border"
        >
          <div className="flex gap-1">
            {[1,2,3,4,5].map((s) => (
              <Star key={s} size={22} fill="hsl(38, 95%, 50%)" color="hsl(38, 95%, 50%)" />
            ))}
          </div>
          <div className="text-center sm:text-left">
            <span className="font-display font-bold text-2xl" style={{ fontFamily: 'Bricolage Grotesque, sans-serif', color: 'hsl(218, 25%, 14%)' }}>
              4,9 / 5,0
            </span>
            <span className="text-muted-foreground text-sm ml-2">· Basierend auf 87 Bewertungen</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative p-7 rounded-lg border border-card-border bg-card flex flex-col"
      data-testid={`review-card-${index}`}
    >
      {/* Quote icon */}
      <Quote size={32} strokeWidth={1} className="absolute top-5 right-6 opacity-10" style={{ color: 'hsl(38, 95%, 50%)' }} />

      {/* Stars */}
      <div className="flex gap-0.5 mb-5">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={14} fill="hsl(38, 95%, 50%)" color="hsl(38, 95%, 50%)" />
        ))}
      </div>

      {/* Text */}
      <p className="text-sm leading-relaxed text-muted-foreground flex-1 mb-6 italic">
        "{review.text}"
      </p>

      {/* Footer */}
      <div className="pt-5 border-t border-border flex items-end justify-between">
        <div>
          <p className="font-semibold text-sm" style={{ color: 'hsl(218, 25%, 14%)' }}>
            {review.name}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">{review.location}</p>
        </div>
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-sm"
          style={{ backgroundColor: 'hsl(42, 90%, 92%)', color: 'hsl(33, 90%, 35%)' }}
        >
          {review.service}
        </span>
      </div>
    </motion.div>
  );
}
