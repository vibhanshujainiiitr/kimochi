import type { Copy } from "./home.types";

type AboutSectionProps = {
  about: Copy["about"];
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="section-card about-card">
      <p className="section-label">{about.sectionLabel}</p>
      <h2>{about.heading}</h2>
      <p>{about.body}</p>

      <ul className="highlight-list">
        {about.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
