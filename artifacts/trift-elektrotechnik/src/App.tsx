import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SolarSection from './components/SolarSection';
import WallboxSection from './components/WallboxSection';
import ElektroSection from './components/ElektroSection';
import WhyTrift from './components/WhyTrift';
import ProcessSection from './components/ProcessSection';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const queryClient = new QueryClient();

function HomePage() {
  return (
    <div className="noise-overlay">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SolarSection />
        <WallboxSection />
        <ElektroSection />
        <ProcessSection />
        <WhyTrift />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div
      className="min-h-[100dvh] flex items-center justify-center"
      style={{ backgroundColor: 'hsl(44, 18%, 97%)' }}
    >
      <div className="text-center">
        <p className="section-number mb-3">Fehler 404</p>
        <h1
          className="font-display font-bold mb-4"
          style={{
            fontFamily: 'Bricolage Grotesque, sans-serif',
            fontSize: '3rem',
            color: 'hsl(218, 25%, 14%)',
          }}
        >
          Seite nicht gefunden
        </h1>
        <p className="text-muted-foreground mb-8">
          Diese Seite existiert nicht. Kehren Sie zur Startseite zurück.
        </p>
        <a
          href="/"
          className="btn-amber px-8 py-4 rounded-sm text-sm font-semibold inline-block"
        >
          Zur Startseite
        </a>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
