import type { MouseEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./theme-toggle";
import logo from "@/assets/prowexa-logo.png";

import { scrollToSection } from "@/utils/scroll";

export function SiteHeader() {
  const links = [
    { label: "About", href: "#about", target: "about" },
    { label: "Services", href: "#services", target: "services" },
    { label: "Approach", href: "#approach", target: "approach" },
    { label: "Contact", href: "#contact", target: "contact" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-nav-background border-b border-nav-border text-nav-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center" aria-label="Prowexa Technologies home">
          <img
            src={logo}
            alt="Prowexa Technologies"
            className="h-9 md:h-11 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-nav-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(event) => { event.preventDefault(); scrollToSection(l.target); }} className="hover:text-nav-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <Link to="/careers" className="text-purple-400 font-medium hover:text-purple-300 transition-colors">
            Careers
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/careers"
            className="hidden sm:inline-flex items-center rounded-full bg-purple-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-purple-500/20 hover:bg-purple-700 transition"
          >
            Join Us
          </Link>
          <a
            href="#contact"
            onClick={(event) => { event.preventDefault(); scrollToSection("contact"); }}
            className="hidden sm:inline-flex items-center rounded-full bg-gradient-brand px-5 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </header>
  );
}
