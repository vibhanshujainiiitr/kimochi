import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="page">
      <section className="section-card contact-card" id="top">
        <p className="section-label">Contact Us</p>
        <h1>Let’s build this with your school</h1>
        <p>
          We’re connecting with IB schools interested in launching Hamamatsu cohorts. Reach out to discuss
          fit, timeline, and implementation support.
        </p>
        <a className="btn-primary" href="mailto:hello@hamamatsu.school">
          Email hello@hamamatsu.school
        </a>
        <Link className="btn-secondary" href="/">
          Back to Home
        </Link>
      </section>
    </main>
  );
}
