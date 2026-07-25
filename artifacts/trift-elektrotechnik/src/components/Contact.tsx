import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '+49 (0)89 123 456 78',
    href: 'tel:+498912345678',
  },
  {
    icon: Mail,
    label: 'E-Mail',
    value: 'info@trift-elektrotechnik.de',
    href: 'mailto:info@trift-elektrotechnik.de',
  },
  {
    icon: MapPin,
    label: 'Standort',
    value: 'Bayern & Umgebung',
    href: undefined,
  },
  {
    icon: Clock,
    label: 'Bürozeiten',
    value: 'Mo–Fr: 07:00 – 18:00 Uhr',
    href: undefined,
  },
];

const serviceOptions = [
  'Photovoltaikanlage',
  'Wallbox / E-Mobilität',
  'Elektroarbeiten',
  'Sonstiges',
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [form, setForm] = useState({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    nachricht: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="kontakt"
      ref={ref}
      className="py-28 px-6 lg:px-10"
      style={{ backgroundColor: 'hsl(44, 18%, 94%)' }}
      data-testid="contact-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left column */}
          <div className="lg:col-span-2">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-number mb-3"
            >
              Kontakt
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold mb-5"
              style={{
                fontFamily: 'Bricolage Grotesque, sans-serif',
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                color: 'hsl(218, 25%, 14%)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              Lassen Sie uns
              <br />
              reden.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25 }}
              className="amber-divider mb-6"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground leading-relaxed mb-10 text-[0.97rem]"
            >
              Schildern Sie uns Ihr Projekt — wir melden uns innerhalb von 24 Stunden
              mit einer konkreten Einschätzung. Kostenlos und unverbindlich.
            </motion.p>

            {/* Contact cards */}
            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  data-testid={`contact-info-${label.toLowerCase()}`}
                >
                  {href ? (
                    <a
                      href={href}
                      className="flex items-center gap-4 p-4 rounded-sm border border-card-border bg-card hover:border-amber-brand transition-colors duration-200 group"
                      style={{}}
                    >
                      <div className="w-10 h-10 rounded-sm flex-shrink-0 flex items-center justify-center"
                        style={{ backgroundColor: 'hsl(42, 90%, 92%)' }}>
                        <Icon size={17} strokeWidth={1.8} style={{ color: 'hsl(33, 90%, 40%)' }} />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium mb-0.5">{label}</p>
                        <p className="text-sm font-semibold group-hover:text-amber-600 transition-colors"
                          style={{ color: 'hsl(218, 25%, 14%)' }}>
                          {value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-sm border border-card-border bg-card">
                      <div className="w-10 h-10 rounded-sm flex-shrink-0 flex items-center justify-center"
                        style={{ backgroundColor: 'hsl(42, 90%, 92%)' }}>
                        <Icon size={17} strokeWidth={1.8} style={{ color: 'hsl(33, 90%, 40%)' }} />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium mb-0.5">{label}</p>
                        <p className="text-sm font-semibold" style={{ color: 'hsl(218, 25%, 14%)' }}>{value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 bg-card rounded-lg border border-card-border p-8 md:p-10"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="h-full flex flex-col items-center justify-center text-center py-16"
                data-testid="contact-success"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'hsl(42, 90%, 92%)' }}>
                  <CheckCircle2 size={32} strokeWidth={1.8} style={{ color: 'hsl(33, 90%, 40%)' }} />
                </div>
                <h3
                  className="font-display font-bold mb-3"
                  style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: '1.5rem', color: 'hsl(218, 25%, 14%)' }}
                >
                  Anfrage eingegangen!
                </h3>
                <p className="text-muted-foreground max-w-sm leading-relaxed">
                  Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden
                  bei Ihnen — versprochen.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                <div>
                  <h3
                    className="font-display font-bold mb-1"
                    style={{
                      fontFamily: 'Bricolage Grotesque, sans-serif',
                      fontSize: '1.3rem',
                      color: 'hsl(218, 25%, 14%)',
                    }}
                  >
                    Kostenlose Beratung anfragen
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Alle Felder mit * sind Pflichtfelder.
                  </p>
                </div>

                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                      Vorname *
                    </label>
                    <input
                      className="trift-input"
                      type="text"
                      name="vorname"
                      value={form.vorname}
                      onChange={handleChange}
                      placeholder="Max"
                      required
                      data-testid="input-vorname"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                      Nachname *
                    </label>
                    <input
                      className="trift-input"
                      type="text"
                      name="nachname"
                      value={form.nachname}
                      onChange={handleChange}
                      placeholder="Mustermann"
                      required
                      data-testid="input-nachname"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                      E-Mail *
                    </label>
                    <input
                      className="trift-input"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="max@beispiel.de"
                      required
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                      Telefon
                    </label>
                    <input
                      className="trift-input"
                      type="tel"
                      name="telefon"
                      value={form.telefon}
                      onChange={handleChange}
                      placeholder="+49 89 ..."
                      data-testid="input-telefon"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Interessantes Thema *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelectedService(opt)}
                        className="py-2.5 px-3 rounded-sm border text-sm font-medium text-left transition-all duration-150"
                        style={{
                          borderColor: selectedService === opt ? 'hsl(38, 95%, 50%)' : 'hsl(44, 15%, 82%)',
                          backgroundColor: selectedService === opt ? 'hsl(42, 90%, 92%)' : 'hsl(44, 22%, 99%)',
                          color: selectedService === opt ? 'hsl(33, 90%, 35%)' : 'hsl(218, 20%, 38%)',
                        }}
                        data-testid={`service-option-${opt}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                    Nachricht *
                  </label>
                  <textarea
                    className="trift-input resize-none"
                    name="nachricht"
                    value={form.nachricht}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Beschreiben Sie kurz Ihr Vorhaben — Gebäudetyp, Stromverbrauch, besondere Anforderungen..."
                    required
                    data-testid="input-nachricht"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-amber w-full py-4 rounded-sm text-base font-semibold flex items-center justify-center gap-3 disabled:opacity-70"
                  data-testid="button-submit"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Wird gesendet…
                    </>
                  ) : (
                    <>
                      <Send size={16} strokeWidth={2} />
                      Anfrage absenden
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                  Ihre Daten werden nicht an Dritte weitergegeben.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
