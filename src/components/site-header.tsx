import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground font-bold shadow-glow">
            P
          </span>
          <span className="font-semibold tracking-tight">
            Prowexa <span className="text-muted-foreground font-normal text-sm">Technologies</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-full bg-gradient-brand px-5 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </header>
  );
}
