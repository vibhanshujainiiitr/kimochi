import type { Copy } from "./home.types";

type ImpactSectionProps = {
  program: Pick<Copy["program"], "impactHeading" | "impactPoints">;
};

export function ImpactSection({ program }: ImpactSectionProps) {
  return (
    <section className="section-card impact-card">
      <h2>{program.impactHeading}</h2>
      <ul className="impact-list">
        {program.impactPoints.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
