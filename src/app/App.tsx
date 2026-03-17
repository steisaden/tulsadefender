import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { About } from "./components/About";
import { PracticeAreas } from "./components/PracticeAreas";
import { CaseResults } from "./components/CaseResults";
import { ProcessTimeline } from "./components/ProcessTimeline";
import { ResultsCounter } from "./components/ResultsCounter";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <About />
      <PracticeAreas />
      <CaseResults />
      <ProcessTimeline />
      <ResultsCounter />
      <ContactForm />
      <Footer />
    </div>
  );
}