import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/partners", label: "Our Partners" },
  { href: "/alumni", label: "Alumni" },
];

export function NavBar() {
  return (
    <nav className="kimochi-nav">
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
