"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/partners", label: "Our Partners" },
  { href: "/alumni", label: "Alumni" },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, [isMenuOpen]);

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`kimochi-nav ${isScrolled ? "scrolled" : ""}`}>
      <Link href="/" className="kimochi-logo">
        Hamamatsu
      </Link>

      <button
        type="button"
        className={`kimochi-menu-toggle ${isMenuOpen ? "open" : ""}`}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="kimochi-mobile-nav"
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <div id="kimochi-mobile-nav" className={`kimochi-links ${isMenuOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href} onClick={handleNavLinkClick}>
            {item.label}
          </Link>
        ))}
        <Link href="/contact" className="kimochi-nav-cta" onClick={handleNavLinkClick}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
