import type { Copy } from "./home.types";

type NavBarProps = {
  nav: Copy["nav"];
};

export function NavBar({ nav }: NavBarProps) {
  return (
    <nav className="kimochi-nav">
      <a href="#top" className="kimochi-logo">
        Kimochi
      </a>

      <div className="kimochi-links">
        <a href="#about">{nav.about}</a>
        <a href="#program">{nav.program}</a>
        <a href="#contact" className="kimochi-nav-cta">
          {nav.talk}
        </a>
      </div>
    </nav>
  );
}
