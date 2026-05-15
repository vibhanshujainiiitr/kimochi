import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-intro">
          <p>
            <span className="site-footer-logo" aria-hidden="true">
              H
            </span>{" "}
            Hamamatsu supports cross-cultural student learning with inquiry-led collaboration between schools in
            India and Japan.
            </p>
        </div>

        <div className="site-footer-columns">
          <div className="site-footer-column">
            <h4>Information</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/partners">Our Partners</Link>
          </div>

          <div className="site-footer-column">
            <h4>Community</h4>
            <Link href="/alumni">Alumni</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="site-footer-column">
            <h4>Legal</h4>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href="mailto:hello@hamamatsu.school">hello@hamamatsu.school</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
