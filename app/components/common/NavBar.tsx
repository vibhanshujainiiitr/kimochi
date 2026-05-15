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

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`kimochi-nav ${isScrolled ? "scrolled" : ""}`}>
      <Link href="/" className="kimochi-logo">
        Hamamatsu
      </Link>

      <div className="kimochi-links">
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link href="/contact" className="kimochi-nav-cta">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
