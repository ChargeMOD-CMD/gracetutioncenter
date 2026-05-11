import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Grace Tuition Center — A practice of careful teaching" },
      { name: "description", content: "Chennai's editorial-minded tuition center. Master-led mentorship, board exam mastery and a slower, sharper way to learn." },
    ],
  }),
});

function Home() {
  return (
    <div>
      {/* MASTHEAD */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 pb-10 pt-6">
          <div className="flex items-center justify-between text-xs">
            <span className="label">Vol. XII — Edition 04</span>
            <span className="label">Chennai · Tamil Nadu</span>
            <span className="label hidden sm:inline">Founded 2013</span>
          </div>
          <div className="rule mt-4 origin-left animate-draw" />
          <div className="mt-10 grid items-end gap-8 md:grid-cols-12">
            <h1 className="display-xl md:col-span-9">
              Empowering minds.<br />
              <span className="italic-serif text-accent">Shaping</span> futures —<br />
              one student at a time.
            </h1>
            <div className="md:col-span-3">
              <div className="label mb-3">Subtitle</div>
              <p className="text-base leading-relaxed">
                A tuition center practising the slower craft of mastery —
                small batches, master mentors and quietly excellent results.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/enroll" className="btn-ink rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.16em]">Enroll Now</Link>
                <Link to="/programs" className="btn-outline-ink rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.16em]">Programs</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <section className="overflow-hidden border-b border-border bg-paper-2/40 py-4">
        <div className="flex animate-marquee whitespace-nowrap font-display text-3xl">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-10 pr-10">
              {[
                "Mathematics",
                "Physics",
                "Chemistry",
                "Biology",
                "English",
                "Social Science",
                "Board Mastery",
                "One-to-One",
                "Revision",
              ].map((t) => (
                <span key={t} className="flex items-center gap-10">
                  <span className="italic-serif">{t}</span>
                  <span aria-hidden className="text-accent">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* INTRO ESSAY + STATS */}
      <section className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-2">
            <div className="label">§ 01</div>
            <div className="mt-2 font-display text-2xl">Notes</div>
          </div>
          <div className="md:col-span-7">
            <p className="font-display text-3xl leading-snug md:text-4xl">
              We don't believe in louder classrooms — we believe in <span className="italic-serif text-accent">deeper ones</span>.
              At Grace, the work is unhurried, the attention is honest, and the standard is unmistakable.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Our students learn to think before they answer; to question before they memorise; to study with method, not panic.
              The result is a quiet kind of confidence — the kind that performs, again and again, when it counts.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="space-y-6 border-l border-ink pl-6">
              {[
                { k: "12+", v: "Years in practice" },
                { k: "1,200", v: "Students mentored" },
                { k: "98%", v: "Board pass rate" },
                { k: "120+", v: "State & district toppers" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-4xl leading-none">{s.k}</div>
                  <div className="label mt-1.5">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-y border-border bg-paper-2/30">
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <div className="label">§ 02 — Method</div>
              <h2 className="display-lg mt-3">A different way of teaching.</h2>
            </div>
            <Link to="/about" className="hidden text-sm text-foreground/70 ink-link sm:inline">Read the manifesto →</Link>
          </div>

          <div className="grid divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0">
            {[
              { n: "I.", t: "Mastery, not memorisation", d: "We teach concepts deeply — applications, edge cases, exam craft." },
              { n: "II.", t: "Mentorship over instruction", d: "Each student is known by name, by goals and by the topics they fear most." },
              { n: "III.", t: "Honest measurement", d: "Weekly mastery checks. Parents informed. Students never blindsided." },
              { n: "IV.", t: "Small batches", d: "Limited seats per class. Attention is a feature, not an afterthought." },
              { n: "V.", t: "Board-grade rigor", d: "Mock papers and revision sprints structured to the board calendar." },
              { n: "VI.", t: "Calm classrooms", d: "Quiet, focused rooms where good thinking is allowed time to happen." },
            ].map((p) => (
              <div key={p.n} className="p-8 transition-colors hover:bg-paper" data-cursor="hover">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-3xl text-accent">{p.n}</span>
                  <span className="label">Pillar</span>
                </div>
                <h3 className="mt-6 font-display text-2xl">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS INDEX */}
      <section className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="label">§ 03 — Index</div>
            <h2 className="display-lg mt-3">Programs.</h2>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">From the foundational years to higher secondary — a continuous curriculum.</p>
          </div>
          <div className="md:col-span-8">
            <div className="rule" />
            {[
              { n: "01", t: "Primary", d: "Grades 1–5 · foundations & curiosity" },
              { n: "02", t: "Middle School", d: "Grades 6–8 · habits of thinking" },
              { n: "03", t: "High School", d: "Grades 9–10 · board mastery" },
              { n: "04", t: "Higher Secondary", d: "Grades 11–12 · exam excellence" },
            ].map((row) => (
              <Link
                key={row.n}
                to="/programs"
                data-cursor="hover"
                className="group grid grid-cols-[60px_1fr_auto] items-center gap-6 border-b border-border py-7 transition-colors hover:bg-paper-2/40"
              >
                <span className="number-marker">{row.n}</span>
                <div>
                  <div className="font-display text-3xl group-hover:text-accent">{row.t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{row.d}</div>
                </div>
                <span className="font-display text-2xl text-foreground/60 transition-transform group-hover:translate-x-1 group-hover:text-accent">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DASHBOARD AS LEDGER */}
      <section className="border-y border-border bg-paper-2/30">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <div className="label">§ 04 — Ledger</div>
            <h2 className="display-lg mt-3">Progress, written down.</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Every student has a private ledger — weekly mastery, weak topics, plan ahead.
              <span className="italic-serif"> No surprises, only direction.</span>
            </p>
          </div>
          <div className="paper-card rounded-xl p-8">
            <div className="flex items-end justify-between border-b border-border pb-4">
              <div>
                <div className="label">Weekly mastery</div>
                <div className="font-display text-5xl leading-none">92<span className="text-2xl text-muted-foreground">%</span></div>
              </div>
              <div className="font-mono text-xs text-accent">▲ 6.2</div>
            </div>
            <div className="mt-6 flex h-36 items-end gap-2">
              {[40, 55, 48, 70, 62, 85, 92].map((h, i) => (
                <div key={i} className="flex-1 bg-ink/85" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="mt-3 flex justify-between font-mono text-[10px] text-muted-foreground">
              {["W1","W2","W3","W4","W5","W6","W7"].map((w) => <span key={w}>{w}</span>)}
            </div>
            <div className="mt-6 grid grid-cols-3 divide-x divide-border border-t border-border pt-4 text-center">
              {[{ k: "Math", v: "A+" }, { k: "Science", v: "A" }, { k: "English", v: "A" }].map((s) => (
                <div key={s.k}>
                  <div className="label">{s.k}</div>
                  <div className="mt-1 font-display text-2xl">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — editorial column */}
      <section className="mx-auto max-w-[1400px] px-6 py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-2 md:pt-2">
            <div className="label">§ 05</div>
            <div className="mt-2 font-display text-2xl">Begin</div>
          </div>
          <div className="md:col-span-10">
            <p className="display-lg">
              A free counseling session — meet the mentors,
              <span className="italic-serif text-accent"> design a plan,</span> begin the year on purpose.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/enroll" className="btn-ink rounded-full px-6 py-3 text-xs uppercase tracking-[0.18em]">Request counseling</Link>
              <Link to="/contact" className="btn-outline-ink rounded-full px-6 py-3 text-xs uppercase tracking-[0.18em]">Contact</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
