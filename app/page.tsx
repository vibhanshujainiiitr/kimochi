import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
import { ImpactSection } from "./components/ImpactSection";
import { JourneySection } from "./components/JourneySection";
import { ProgramSection } from "./components/ProgramSection";
import { homeContent } from "./components/home.content";

export default function Home() {
  return (
    <main className="page">
      <HeroSection hero={homeContent.hero} />
    </main>
  );
}
