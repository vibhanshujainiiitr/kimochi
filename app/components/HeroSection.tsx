import type { Copy } from "./home.types";

type HeroSectionProps = {
  hero: Copy["hero"];
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section id="top" className="hero">
      <div className="hero-layout">
        <div className="hero-copy">
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
        </div>

        <div className="hero-visual" aria-hidden="true">
          <svg viewBox="0 0 520 360" role="img" className="collab-svg">
            <rect x="20" y="24" width="480" height="312" rx="20" className="collab-board" />

            <circle cx="145" cy="130" r="48" className="avatar avatar-india" />
            <circle cx="375" cy="130" r="48" className="avatar avatar-japan" />

            <rect x="98" y="185" width="94" height="110" rx="18" className="student-body india-body" />
            <rect x="328" y="185" width="94" height="110" rx="18" className="student-body japan-body" />

            <rect x="225" y="165" width="70" height="70" rx="10" className="project-card" />
            <line x1="192" y1="214" x2="225" y2="200" className="collab-line" />
            <line x1="328" y1="214" x2="295" y2="200" className="collab-line" />

            <circle cx="260" cy="200" r="4" className="pulse-dot pulse-one" />
            <circle cx="260" cy="200" r="4" className="pulse-dot pulse-two" />
          </svg>
        </div>
      </div>
    </section>
  );
}
