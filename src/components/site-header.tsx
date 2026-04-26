import type { MouseEvent } from "react";
import { ThemeToggle } from "./theme-toggle";
import logo from "@/assets/prowexa-logo.png";

function scrollToSection(event: MouseEvent<HTMLAnchorElement>, id: string) {
  event.preventDefault();
  const target = document.getElementById(id);
  if (!target) return;
  window.history.replaceState(null, "", window.location.pathname + window.location.search);
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

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
        <a href="/" className="flex items-center" aria-label="Prowexa Technologies home">
          <img
            src={logo}
            alt="Prowexa Technologies"
            className="h-9 md:h-11 w-auto"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-nav-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(event) => scrollToSection(event, l.target)} className="hover:text-nav-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(event) => scrollToSection(event, "contact")}
            className="hidden sm:inline-flex items-center rounded-full bg-gradient-brand px-5 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </header>
  );
}
