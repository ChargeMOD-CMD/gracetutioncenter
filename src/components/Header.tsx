import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/faculty", label: "Faculty" },
  { to: "/achievements", label: "Achievements" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between gap-4 rounded-2xl glass px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)]">
            <Sparkles className="h-5 w-5 text-white" />
            <span className="absolute -inset-1 rounded-xl border border-white/10 animate-spin-slow" />
          </span>
          <div className="leading-tight">
            <div className="font-display text-sm font-semibold tracking-wide">GRACE</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Tuition Center</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "rounded-lg px-3 py-2 text-sm text-foreground bg-white/5" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/enroll"
          className="btn-hero rounded-xl px-4 py-2 text-sm font-medium"
        >
          Enroll Now
        </Link>
      </div>
    </header>
  );
}
