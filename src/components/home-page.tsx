import officeTeam from "@/assets/office-team.jpg";
import officeWorkspace from "@/assets/office-workspace.jpg";
import officeReception from "@/assets/office-reception.jpg";
import officeNight from "@/assets/office-night.jpg";
import officeCoding from "@/assets/office-coding.jpg";
import {
  ArrowRight,
  Lightbulb,
  Rocket,
  TrendingUp,
  Code2,
  Smartphone,
  Cloud,
  Cpu,
  Palette,
  Server,
  Zap,
  Target,
  HandshakeIcon,
  Layers,
  Sparkles,
  GraduationCap,
  Mail,
  Phone,
  Globe,
  MapPin,
  Building2,
  Calendar,
  FileText,
  CheckCircle2,
  Megaphone,
} from "lucide-react";

export function HomePage() {
  return (
    <main id="top">
      <Hero />
      <FeatureStrip />
      <About />
      <InsideProwexa />
      <MissionVision />
      <Services />
      <Approach />
      <WhyUs />
      <EdTech />
      <CompanyDetails />
      <Contact />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-soft pointer-events-none" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand-glow" />
            Next-gen product engineering
          </div>
          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Build Fast.<br />
            <span className="text-gradient-brand">Scale Smart.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Prowexa Technologies Pvt. Ltd. is a next-generation product development company helping startups and
            businesses transform ideas into powerful, scalable digital solutions.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
            {[
              { icon: Lightbulb, label: "Idea → MVP" },
              { icon: Rocket, label: "MVP → Scale" },
              { icon: TrendingUp, label: "Business → Success" },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 backdrop-blur">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground">
                    <step.icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-medium">{step.label}</span>
                </div>
                {i < 2 && <ArrowRight className="h-4 w-4 text-muted-foreground" />}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-semibold backdrop-blur hover:bg-surface-elevated transition"
            >
              About Us
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[520px] mx-auto">
      <div className="absolute inset-0 bg-gradient-brand opacity-25 blur-3xl rounded-full animate-pulse-glow" />
      <div className="absolute inset-6 rounded-[3rem] border border-brand/40 animate-float-slow" />
      <div className="absolute inset-14 rounded-[2.5rem] border border-brand-glow/60 shadow-glow animate-float-slow" style={{ animationDelay: "1s" }} />
      <div className="absolute inset-24 rounded-[2rem] border-2 border-brand-glow/80 shadow-glow animate-float-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className="h-2.5 w-2.5 rounded-full bg-gradient-brand shadow-glow animate-pulse-glow"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureStrip() {
  return (
    <section className="bg-gradient-brand text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-6">
        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/15 backdrop-blur">
            <Megaphone className="h-5 w-5" />
          </span>
          <p className="text-sm md:text-base font-medium">
            Prowexa Technologies Pvt. Ltd. — Turning Ideas into Scalable Digital Solutions
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 hover:bg-primary-foreground/25 px-6 py-2.5 text-sm font-semibold backdrop-blur transition"
        >
          Let's Connect <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-glow">{eyebrow}</span>
      <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="About" title="About Prowexa" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Building2,
              title: "Incorporated 2025",
              body: "A technology-driven company incorporated on 24 December 2025 under the Companies Act, 2013.",
            },
            {
              icon: Layers,
              title: "Product Engineering",
              body: "We specialize in building high-performance software solutions, SaaS platforms, and digital products.",
            },
            {
              icon: Target,
              title: "Real Problem Solvers",
              body: "We don't just develop software — we build products that solve real problems at scale.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="group relative rounded-3xl border border-border bg-card p-8 shadow-card hover:-translate-y-1 transition"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InsideProwexa() {
  const images = [
    { src: officeReception, label: "Reception", span: "md:col-span-2 md:row-span-2" },
    { src: officeTeam, label: "Team Collaboration", span: "" },
    { src: officeWorkspace, label: "Workspace", span: "" },
    { src: officeCoding, label: "Engineering", span: "md:col-span-2" },
    { src: officeNight, label: "Always-on Culture", span: "" },
  ];
  return (
    <section className="py-24 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our space"
          title="Inside Prowexa"
          subtitle="A glimpse of where our ideas, code and culture come to life."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 md:auto-rows-[220px] gap-4">
          {images.map((img) => (
            <div
              key={img.label}
              className={`group relative overflow-hidden rounded-3xl border border-border shadow-card ${img.span}`}
            >
              <img
                src={img.src}
                alt={`Prowexa office — ${img.label}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-background/70 backdrop-blur px-3 py-1 text-xs font-medium">
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2">
        {[
          {
            icon: Target,
            tag: "Mission",
            title: "Empower founders to ship",
            body: "To empower businesses and founders by transforming ideas into scalable digital products.",
          },
          {
            icon: Sparkles,
            tag: "Vision",
            title: "A trusted global product partner",
            body: "To become a trusted global product engineering partner.",
          },
        ].map((c) => (
          <div
            key={c.tag}
            className="relative overflow-hidden rounded-3xl border border-border bg-gradient-hero p-10 shadow-card"
          >
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-glow">{c.tag}</span>
              </div>
              <h3 className="mt-5 text-3xl font-bold tracking-tight">{c.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Code2, title: "Software Development", body: "Custom enterprise-grade software built for performance and scale." },
    { icon: Smartphone, title: "Mobile & Web Apps", body: "Native and cross-platform apps with delightful UX." },
    { icon: Cloud, title: "SaaS Product Development", body: "Multi-tenant SaaS architectures, billing & analytics ready." },
    { icon: Cpu, title: "AI & Automation", body: "AI-powered features and workflow automation that move the needle." },
    { icon: Palette, title: "UI / UX Design", body: "Design systems, product flows and interfaces users love." },
    { icon: Server, title: "Backend & APIs", body: "Robust APIs, microservices and infrastructure that won't break." },
  ];
  return (
    <section id="services" className="py-24 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Services"
          title="What we build"
          subtitle="A full-stack product team — design, engineering, AI and infra under one roof."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card hover:border-brand transition"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl group-hover:opacity-30 transition" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const items = [
    { icon: Zap, title: "Fast execution", body: "Weeks, not months." },
    { icon: Target, title: "Product-first thinking", body: "Outcomes over outputs." },
    { icon: HandshakeIcon, title: "Client partnership", body: "Your team, just better." },
    { icon: Layers, title: "Scalable architecture", body: "Built to grow with you." },
    { icon: Sparkles, title: "Innovation-driven", body: "Always shipping the future." },
  ];
  return (
    <section id="approach" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="How we work" title="Our Approach" />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {items.map((i) => (
            <div key={i.title} className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                <i.icon className="h-4 w-4" />
              </span>
              <h3 className="mt-4 font-semibold">{i.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    "Startup speed + enterprise quality",
    "Strategy + Design + Development",
    "Rapid MVP development",
    "High ownership mindset",
    "Future-ready technologies",
  ];
  return (
    <section className="py-24 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-glow">Why choose us</span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            A product partner built for <span className="text-gradient-brand">founders & teams</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We blend the speed of a startup with the rigor of an enterprise team — so you can ship faster without
            compromising quality.
          </p>
        </div>
        <div className="grid gap-3">
          {items.map((t) => (
            <div
              key={t}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
            >
              <CheckCircle2 className="h-5 w-5 text-brand-glow flex-none" />
              <span className="font-medium">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EdTech() {
  const items = [
    "Internship-based programs",
    "Skill development",
    "Workshops",
    "Practical learning",
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-hero p-10 md:p-14 shadow-card">
          <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
                <GraduationCap className="h-3.5 w-3.5 text-brand-glow" />
                EdTech
              </span>
              <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">Education & Training</h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Goal: improve real-world skills & employability through hands-on learning.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {items.map((t) => (
                <div key={t} className="flex items-center gap-3 rounded-2xl border border-border bg-card/80 backdrop-blur p-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <span className="font-medium">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompanyDetails() {
  const details = [
    { icon: Building2, label: "Company Name", value: "Prowexa Technologies Pvt. Ltd." },
    { icon: Calendar, label: "Incorporation Date", value: "24 December 2025" },
    { icon: FileText, label: "CIN", value: "U62090PN2025PTC249889" },
    { icon: Layers, label: "Type", value: "Private Limited" },
    { icon: MapPin, label: "State", value: "Maharashtra" },
  ];
  return (
    <section className="py-24 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Company" title="Company Details" />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {details.map((d) => (
            <div key={d.label} className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <d.icon className="h-4 w-4" />
                </span>
                <span className="text-xs uppercase tracking-wider">{d.label}</span>
              </div>
              <p className="mt-3 text-lg font-semibold">{d.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-hero p-10 md:p-16 shadow-glow text-center">
          <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Let's build something amazing together <span className="inline-block">🚀</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Tell us about your idea — we'll help you turn it into a product.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Mail, label: "Email", value: "info@prowexa.com", href: "mailto:info@prowexa.com" },
                { icon: Phone, label: "Phone", value: "7030247209", href: "tel:7030247209" },
                { icon: Globe, label: "Website", value: "prowexa.com", href: "https://prowexa.com" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group rounded-2xl border border-border bg-card/80 backdrop-blur p-5 hover:border-brand transition"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow mx-auto">
                    <c.icon className="h-4 w-4" />
                  </span>
                  <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="mt-1 font-semibold">{c.value}</div>
                </a>
              ))}
            </div>
            <a
              href="mailto:info@prowexa.com"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground font-bold shadow-glow">
              P
            </span>
            <span className="font-semibold">Prowexa Technologies</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Turning ideas into scalable digital products — from MVP to global scale.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Address</h4>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            4th floor, Silviana,<br />
            Opposite Gera's Regent Park and Towers,<br />
            Baner, Pune
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="mailto:info@prowexa.com" className="hover:text-foreground">info@prowexa.com</a></li>
            <li><a href="tel:7030247209" className="hover:text-foreground">7030247209</a></li>
            <li><a href="https://prowexa.com" className="hover:text-foreground">prowexa.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-muted-foreground">
          © 2025 Prowexa Technologies Pvt. Ltd. All rights reserved
        </div>
      </div>
    </footer>
  );
}
