import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Kimochi",
  description:
    "Learn about Kimochi, a project under Suzuki Motor Corporation focused on student career exploration through inquiry-based learning.",
};

const teamMembers = [
  {
    name: "Shunsuke Aoki",
    org: "Suzuki Motors Japan",
    role: "Project leader",
    image: "/images/team/aoki.png",
    alt: "Shunsuke Aoki",
  },
  {
    name: "Vibhanshu Jain",
    org: "Suzuki Motors Japan",
    role: "Application Developer",
    image: "/images/team/vibhanshu.png",
    alt: "Vibhanshu Jain",
  },
  {
    name: "Virendra Soni",
    org: "Application Developer",
    role: "Team Member",
    image: "/images/team/viren.png",
    alt: "Virendra Soni",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="page page-folds about-page">
      <section className="fold about-fold about-fold-hero">
        <div className="about-hero">
          <p className="about-kicker">About Kimochi</p>
          <h1>
            A project under <span>Suzuki Motor Corporation</span>
          </h1>
          <p className="about-lead">
            Kimochi expands student career possibilities through career consultation and
            inquiry-based learning, built through India–Japan collaboration.
          </p>
        </div>
      </section>

      <section className="fold about-fold about-fold-team" aria-labelledby="about-team-heading">
        <div className="about-team">
          <div className="about-team-head">
            <h2 id="about-team-heading">Our Project Team</h2>
            <p>
              A cross-functional team spanning leadership, research, finance, marketing, and
              product development.
            </p>
          </div>

          <figure className="team-image-wrap">
            <Image
              src="/images/team.png"
              alt="Kimochi project team members"
              width={2206}
              height={1004}
              className="team-image"
              priority
            />
          </figure>

          <div className="about-team-grid" role="list" aria-label="Project team members">
            {teamMembers.map((member) => (
              <article key={member.name} className="team-card" role="listitem">
                <div className="team-card-top">
                  <div className="team-avatar">
                    <Image
                      src={member.image}
                      alt={member.alt}
                      width={96}
                      height={96}
                      className="team-avatar-image"
                    />
                  </div>
                  <div className="team-title-wrap">
                    <h3 className="team-name">{member.name}</h3>
                  </div>
                </div>
                <p className="team-meta">
                  {member.org}, {member.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
