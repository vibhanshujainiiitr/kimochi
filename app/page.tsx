import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
import { ImpactSection } from "./components/ImpactSection";
import { JourneySection } from "./components/JourneySection";
import { NavBar } from "./components/common/NavBar";
import { ProgramSection } from "./components/ProgramSection";
import { SiteFooter } from "./components/common/SiteFooter";
import { homeContent } from "./components/home.content";

export default function Home() {
  return (
    <main className="kimochi-page">
      <NavBar nav={homeContent.nav} />
      <HeroSection hero={homeContent.hero} />
      <AboutSection about={homeContent.about} />
      <ProgramSection program={homeContent.program} />
      <JourneySection program={homeContent.program} />
      <ImpactSection program={homeContent.program} />
      <ContactSection contact={homeContent.contact} />
      <SiteFooter text={homeContent.footer} />
    </main>
  );
}
