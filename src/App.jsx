import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-white selection:text-background font-body relative flex flex-col items-center overflow-x-hidden">
      <Navigation />
      
      <main className="w-full flex flex-col items-center justify-center">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Achievements />
        <Certifications />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
