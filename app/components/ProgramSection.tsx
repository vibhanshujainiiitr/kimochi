import type { Copy } from "./home.types";

type ProgramSectionProps = {
  program: Copy["program"];
};

export function ProgramSection({ program }: ProgramSectionProps) {
  return (
    <section id="program" className="section-card">
      <h2>{program.heading}</h2>
      <p className="section-intro">{program.body}</p>

      <div className="featured-program">
        <div>
          <p className="featured-label">{program.featuredLabel}</p>
          <h3>{program.featuredName}</h3>
        </div>
        <p className="featured-duration">{program.featuredDuration}</p>
      </div>

      <div className="program-grid">
        {program.cards.map((card) => (
          <article key={card.title} className="program-card">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
