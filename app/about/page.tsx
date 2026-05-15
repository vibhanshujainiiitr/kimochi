const teamMembers = [
  {
    name: "Aiko Tanaka",
    role: "Program Director",
    bio: "Leads cross-cultural curriculum design and school partnerships across India and Japan.",
  },
  {
    name: "Rohan Mehta",
    role: "Learning Experience Lead",
    bio: "Designs inquiry-based student journeys focused on collaboration, empathy, and innovation.",
  },
  {
    name: "Maya Sato",
    role: "School Success Manager",
    bio: "Supports teachers and school leaders with onboarding, implementation, and outcomes tracking.",
  },
];

export default function AboutPage() {
  return (
    <main className="page">
      <section className="section-card" id="top">
        <p className="section-label">About Us</p>
        <h1>Our mission and team</h1>
        <p className="section-intro">
          Hamamatsu helps students develop global perspective through meaningful, project-based collaboration.
        </p>
      </section>

      <section className="section-card about-card">
        <h2>Our Team</h2>
        <div className="program-grid">
          {teamMembers.map((member) => (
            <article key={member.name} className="program-card">
              <h3>{member.name}</h3>
              <p className="featured-label">{member.role}</p>
              <p>{member.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
