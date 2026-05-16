const partners = [
  {
    name: "Global IB Academy Network",
    type: "School Network",
    summary: "Collaborates on pilot cohorts and co-designs learning outcomes with Kimochi.",
  },
  {
    name: "Tokyo Student Innovation Lab",
    type: "Innovation Partner",
    summary: "Supports workshops, mentoring, and real-world validation for student prototypes.",
  },
  {
    name: "EduBridge India",
    type: "Implementation Partner",
    summary: "Coordinates local school operations and educator enablement in India.",
  },
];

export default function PartnersPage() {
  return (
    <main className="page">
      <section className="section-card" id="top">
        <p className="section-label">Our Partners</p>
        <h1>Organizations building with us</h1>
        <p className="section-intro">
          We work with schools and ecosystem partners to create impactful, cross-cultural experiences.
        </p>
      </section>

      <section className="section-card">
        <div className="program-grid">
          {partners.map((partner) => (
            <article key={partner.name} className="program-card">
              <h3>{partner.name}</h3>
              <p className="featured-label">{partner.type}</p>
              <p>{partner.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
