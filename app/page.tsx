import { AboutSection } from "./components/AboutSection";
import { AutoPlayVideoSection } from "./components/AutoPlayVideoSection";
import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
import { ImpactSection } from "./components/ImpactSection";
import { JourneySection } from "./components/JourneySection";
import { ProgramSection } from "./components/ProgramSection";
import { homeContent } from "./components/home.content";

export default function Home() {
  return (
    <main className="page page-folds">
      <section className="fold">
        <HeroSection hero={homeContent.hero} />
      </section>

      <section className="fold fold-video">
        <AutoPlayVideoSection />
      </section>

      <section className="fold">
        <AboutSection about={homeContent.about} />
      </section>

      <section className="fold">
        <ProgramSection program={homeContent.program} />
      </section>

      <section className="fold">
        <JourneySection
          program={{
            journeyHeading: homeContent.program.journeyHeading,
            journeySubtitle: homeContent.program.journeySubtitle,
            journey: homeContent.program.journey,
          }}
        />
      </section>

      <section className="fold">
        <ImpactSection
          program={{
            impactHeading: homeContent.program.impactHeading,
            impactPoints: homeContent.program.impactPoints,
          }}
        />
      </section>

      <section className="fold">
        <ContactSection contact={homeContent.contact} />
      </section>
    </main>
  );
}
