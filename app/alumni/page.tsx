const alumniStories = [
  {
    name: "Nina K.",
    school: "IB School, Bengaluru",
    story: "Led a cross-border student team to prototype an eco-friendly lunch packaging concept.",
  },
  {
    name: "Haruto S.",
    school: "IB School, Tokyo",
    story: "Co-created a student wellbeing campaign and presented outcomes to school leadership.",
  },
  {
    name: "Riya P.",
    school: "IB School, Mumbai",
    story: "Developed confidence in international collaboration and public pitching through IBL.",
  },
];

export default function AlumniPage() {
  return (
    <main className="page">
      <section className="section-card" id="top">
        <p className="section-label">Alumni</p>
        <h1>Student journeys after Kimochi</h1>
        <p className="section-intro">
          Alumni continue to apply empathy, inquiry, and innovation in classrooms and communities.
        </p>
      </section>

      <section className="section-card impact-card">
        <ul className="impact-list">
          {alumniStories.map((alumni) => (
            <li key={alumni.name}>
              <strong>{alumni.name}</strong> — {alumni.school}: {alumni.story}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
