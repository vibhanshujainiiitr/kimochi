import type { Copy } from "./home.types";

type ContactSectionProps = {
  contact: Copy["contact"];
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact" className="section-card contact-card">
      <h2>{contact.heading}</h2>
      <p>{contact.body}</p>
      <a className="btn-primary" href="mailto:hello@hamamatsu.school">
        {contact.cta}
      </a>
    </section>
  );
}
