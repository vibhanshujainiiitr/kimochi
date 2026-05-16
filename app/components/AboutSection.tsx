import type { Copy } from "./home.types";

type AboutSectionProps = {
  about: Copy["about"];
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="section-card about-card">
      <div className="about-layout">
        <div className="about-copy">
          <p className="section-label">{about.sectionLabel}</p>
          <h2>{about.heading}</h2>
          <p>{about.body}</p>

          <ul className="highlight-list">
            {about.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="about-illustration" aria-hidden="true">
          <svg viewBox="0 0 560 360" className="partnership-svg" role="img">
            <rect x="30" y="36" width="500" height="288" rx="24" className="partner-board" />

            <g className="flag-india-wrap">
              <rect x="80" y="76" width="164" height="98" rx="10" fill="#ffffff" stroke="#d1d5db" />
              <rect x="80" y="76" width="164" height="32.66" fill="#ff9933" />
              <rect x="80" y="141.33" width="164" height="32.66" fill="#138808" />
              <circle cx="162" cy="125" r="12" fill="none" stroke="#000080" strokeWidth="2" />
              <text x="162" y="194" textAnchor="middle" className="flag-label">
                INDIA
              </text>
            </g>

            <g className="flag-japan-wrap">
              <rect x="316" y="76" width="164" height="98" rx="10" fill="#ffffff" stroke="#d1d5db" />
              <circle cx="398" cy="125" r="23" fill="#bc002d" />
              <text x="398" y="194" textAnchor="middle" className="flag-label">
                JAPAN
              </text>
            </g>

            <path d="M250 122 C 278 92, 318 92, 346 122" className="partner-arc" />
            <path d="M250 132 C 278 162, 318 162, 346 132" className="partner-arc partner-arc-alt" />

            <circle cx="280" cy="250" r="30" className="collab-node" />
            <text x="280" y="255" textAnchor="middle" className="node-text">
              IB
            </text>

            <line x1="170" y1="218" x2="252" y2="246" className="partner-link" />
            <line x1="390" y1="218" x2="308" y2="246" className="partner-link" />

            <circle cx="250" cy="122" r="4" className="spark spark-a" />
            <circle cx="346" cy="132" r="4" className="spark spark-b" />
          </svg>
        </div>
      </div>
    </section>
  );
}
