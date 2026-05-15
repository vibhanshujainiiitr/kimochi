import type { Copy } from "./home.types";

type HeroSectionProps = {
  hero: Copy["hero"];
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section id="top" className="hero">
      <p className="hero-badge">{hero.badge}</p>
      <h1>{hero.title}</h1>
      <p className="hero-subtitle">{hero.subtitle}</p>

      <div className="hero-actions">
        <a href="#contact" className="btn-primary">
          {hero.primaryCta}
        </a>
        <a href="#program" className="btn-secondary">
          {hero.secondaryCta}
        </a>
      </div>
    </section>
  );
}
