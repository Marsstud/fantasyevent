import { BackgroundElements } from './components/BackgroundElements';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Characters } from './components/Characters';
import { Pricing } from './components/Pricing';
import { Benefits } from './components/Benefits';
import { Shows } from './components/Shows';
import { LeadForm } from './components/LeadForm';

function App() {
  return (
    <div className="selection:bg-primary/30 selection:text-slate-900 overflow-x-hidden min-h-screen">
      <BackgroundElements />
      <Header />
      <main>
        <Hero />
        <Characters />
        <Pricing />
        <Benefits />
        <Shows />
      </main>
      <LeadForm />
    </div>
  );
}

export default App;
