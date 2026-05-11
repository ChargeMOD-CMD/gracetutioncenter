import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Index", n: "01" },
  { to: "/about", label: "Manifesto", n: "02" },
  { to: "/programs", label: "Programs", n: "03" },
  { to: "/faculty", label: "Faculty", n: "04" },
  { to: "/achievements", label: "Records", n: "05" },
  { to: "/contact", label: "Contact", n: "06" },
] as const;

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-paper/80 backdrop-blur-md">
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-4">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="font-display text-2xl leading-none">Grace</span>
            <span className="label hidden sm:inline">Tuition Center · Est. 2013</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group flex items-baseline gap-1.5 text-sm text-foreground/70 transition-colors hover:text-foreground"
                activeProps={{ className: "flex items-baseline gap-1.5 text-sm text-foreground" }}
              >
                <span className="number-marker">{l.n}</span>
                <span className="ink-link">{l.label}</span>
              </Link>
            ))}
          </nav>
          <Link
            to="/enroll"
            className="btn-ink inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.16em]"
          >
            Enroll <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
