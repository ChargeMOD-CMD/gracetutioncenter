import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/faculty", label: "Faculty" },
  { to: "/achievements", label: "Wins" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 pt-4">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 rounded-full border-ink bg-cream px-3 py-2.5 shadow-block">
        <Link to="/" className="flex items-center gap-2 pl-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-clay text-cream">
            <span className="font-display text-lg leading-none">G</span>
          </span>
          <span className="font-display text-xl leading-none">Grace</span>
          <span className="label hidden text-muted-foreground sm:inline">Tuition · Chennai</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-3.5 py-1.5 text-sm transition-colors hover:bg-sun"
              activeProps={{ className: "rounded-full px-3.5 py-1.5 text-sm bg-ink text-cream" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/enroll"
          className="btn-ink rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em]"
        >
          Enroll →
        </Link>
      </div>
    </header>
  );
}
