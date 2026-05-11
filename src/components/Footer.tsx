import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-5xl leading-none">Grace.</div>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">
              An institution of careful teaching. <span className="italic-serif">Slow when it must be, sharp when it counts.</span>
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="label mb-4">Navigate</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="ink-link">Manifesto</Link></li>
              <li><Link to="/programs" className="ink-link">Programs</Link></li>
              <li><Link to="/faculty" className="ink-link">Faculty</Link></li>
              <li><Link to="/achievements" className="ink-link">Records</Link></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="label mb-4">Reach</div>
            <ul className="space-y-1.5 text-sm">
              <li>+91 63749 93259</li>
              <li>info@gracetuitioncenter.com</li>
              <li>Chennai, Tamil Nadu</li>
              <li className="pt-3 text-muted-foreground">Mon–Fri · 16:00–21:00</li>
              <li className="text-muted-foreground">Sat–Sun · 09:00–18:00</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-border pt-6 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Grace Tuition Center</span>
          <span className="font-mono">Vol. XII · Chennai Edition</span>
        </div>
      </div>
    </footer>
  );
}
