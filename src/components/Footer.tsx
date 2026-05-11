import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 px-4 pb-6">
      <div className="mx-auto max-w-[1400px] rounded-[2rem] border-ink bg-ink p-10 text-cream shadow-block-clay md:p-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-7xl leading-none">Grace.</div>
            <p className="mt-6 max-w-sm text-base text-cream/80">
              Empowering minds. <span className="italic-serif">Shaping futures</span> — one student at a time.
            </p>
            <Link to="/enroll" className="btn-cream mt-8 inline-flex rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.18em]">
              Enroll now →
            </Link>
          </div>
          <div className="md:col-span-3">
            <div className="label text-sun">Navigate</div>
            <ul className="mt-4 space-y-2.5 text-base">
              <li><Link to="/about" className="ink-link">About</Link></li>
              <li><Link to="/programs" className="ink-link">Programs</Link></li>
              <li><Link to="/faculty" className="ink-link">Faculty</Link></li>
              <li><Link to="/achievements" className="ink-link">Wins</Link></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="label text-sun">Reach us</div>
            <ul className="mt-4 space-y-1.5 text-base">
              <li>+91 63749 93259</li>
              <li>info@gracetuitioncenter.com</li>
              <li>Chennai, Tamil Nadu</li>
              <li className="pt-3 text-cream/70">Mon–Fri · 4 PM – 9 PM</li>
              <li className="text-cream/70">Sat–Sun · 9 AM – 6 PM</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-cream/20 pt-6 text-xs text-cream/60">
          <span>© {new Date().getFullYear()} Grace Tuition Center</span>
          <span className="font-mono uppercase tracking-[0.18em]">Made with care · Chennai</span>
        </div>
      </div>
    </footer>
  );
}
