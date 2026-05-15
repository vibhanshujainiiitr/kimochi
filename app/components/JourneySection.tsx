import type { Copy } from "./home.types";

type JourneySectionProps = {
  program: Pick<Copy["program"], "journeyHeading" | "journeySubtitle" | "journey">;
};

export function JourneySection({ program }: JourneySectionProps) {
  return (
    <section className="section-card timeline-card">
      <h2>{program.journeyHeading}</h2>
      <p className="section-intro">{program.journeySubtitle}</p>

      <div className="timeline">
        {program.journey.map((phase) => (
          <article key={phase.title} className="timeline-item">
            <p className="phase-icon" aria-hidden="true">
              {phase.icon}
            </p>
            <h3>{phase.title}</h3>
            <p>{phase.description}</p>
            <p className="phase-output">{phase.output}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
