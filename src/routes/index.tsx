import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Grace Tuition Center — Empowering Minds. Shaping Futures." },
      { name: "description", content: "Chennai's friendliest premium tuition center. Master mentors, board mastery and learning that students actually love." },
    ],
  }),
});

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative px-4 pt-4">
        <div className="mx-auto max-w-[1400px] rounded-[2rem] border-ink bg-cream p-6 shadow-block-lg md:p-12">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <span className="chip"><span className="h-2 w-2 rounded-full bg-clay" /> Admissions open · 2026</span>
              <h1 className="display-xl mt-6">
                Empowering<br />
                minds, <span className="italic-serif text-clay">shaping</span><br />
                futures.
              </h1>
              <p className="mt-6 max-w-md text-lg text-muted-foreground">
                A tuition center where students stop dreading study — and start owning it.
                Master mentors, small batches, big results.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/enroll" className="btn-ink rounded-full px-6 py-3 text-xs uppercase tracking-[0.18em]">Enroll Now →</Link>
                <Link to="/programs" className="btn-cream rounded-full px-6 py-3 text-xs uppercase tracking-[0.18em]">Explore Programs</Link>
              </div>
            </div>

            {/* Sticker collage */}
            <div className="relative md:col-span-4">
              <div className="relative h-[22rem]">
                <div className="absolute right-0 top-2 h-44 w-44 rounded-[40%] bg-clay shadow-block animate-blob" />
                <div className="absolute left-2 top-24 h-24 w-24 rounded-full border-ink bg-sun shadow-block" style={{ animation: "spin 22s linear infinite" }}>
                  <div className="grid h-full place-items-center font-display text-3xl">A+</div>
                </div>
                <div className="absolute right-6 bottom-4 rotate-[-6deg] rounded-2xl border-ink bg-cream px-4 py-3 shadow-block">
                  <div className="label text-clay">Mastery</div>
                  <div className="font-display text-3xl">98%</div>
                </div>
                <div className="absolute left-0 bottom-10 rotate-[4deg] rounded-2xl border-ink bg-sage px-4 py-3 shadow-block">
                  <div className="label">Toppers</div>
                  <div className="font-display text-3xl">120+</div>
                </div>
              </div>
            </div>
          </div>

          {/* footer strip */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t-2 border-ink pt-6">
            {[
              { k: "12+ yrs", v: "in practice" },
              { k: "1,200+", v: "students mentored" },
              { k: "98%", v: "board pass rate" },
              { k: "1:8", v: "mentor ratio" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl">{s.k}</div>
                <div className="label text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="my-10 overflow-hidden border-y-2 border-ink bg-clay py-4 text-cream">
        <div className="flex animate-marquee whitespace-nowrap font-display text-4xl">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-10 pr-10">
              {["Mathematics", "Physics", "Chemistry", "Biology", "English", "Social Science", "Board Mastery", "1-on-1"].map((t) => (
                <span key={t} className="flex items-center gap-10">
                  <span className="italic-serif">{t}</span>
                  <span aria-hidden className="text-sun">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* WHY GRACE — color blocks */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 md:py-24">
        <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <div className="label text-clay">Why Grace</div>
            <h2 className="display-lg mt-3">Built for how students <span className="italic-serif">actually</span> learn.</h2>
          </div>
          <p className="text-muted-foreground md:col-span-5">
            Six things we obsess over — so parents don't have to.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { n: "01", t: "AI-guided plans", d: "Personalized study plans that adapt to each student's pace and gaps.", bg: "bg-cream" },
            { n: "02", t: "Mastery, not memo.", d: "Concept-first teaching with depth, application and exam craft.", bg: "bg-sun" },
            { n: "03", t: "Visible growth", d: "Live dashboards so parents and students see progress weekly.", bg: "bg-cream" },
            { n: "04", t: "Board mastery", d: "Targeted revision sprints, mock papers and 1:1 doubt-clearing.", bg: "bg-clay text-cream" },
            { n: "05", t: "Small batches", d: "Limited seats per class — every student is seen, every session.", bg: "bg-cream" },
            { n: "06", t: "Proven results", d: "Top scorers across CBSE, State Board and entrance prep year after year.", bg: "bg-sage" },
          ].map((f) => (
            <div key={f.n} className={`card-block p-7 ${f.bg}`} data-cursor="hover">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-5xl">{f.n}</span>
                <span className="label">Pillar</span>
              </div>
              <div className="mt-8 font-display text-2xl">{f.t}</div>
              <p className={`mt-2 text-sm ${f.bg.includes("clay") ? "text-cream/80" : "text-muted-foreground"}`}>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 md:py-24">
        <div className="rounded-[2rem] border-ink bg-cream p-6 shadow-block md:p-12">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="label text-clay">Programs</div>
              <h2 className="display-lg mt-3">From Primary to Higher Secondary.</h2>
            </div>
            <Link to="/programs" className="ink-link text-sm">View all →</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Primary", d: "Grades 1–5", bg: "bg-sage" },
              { n: "02", t: "Middle", d: "Grades 6–8", bg: "bg-sun" },
              { n: "03", t: "High", d: "Grades 9–10", bg: "bg-cream" },
              { n: "04", t: "Higher Sec.", d: "Grades 11–12", bg: "bg-clay text-cream" },
            ].map((p) => (
              <Link
                key={p.n}
                to="/programs"
                data-cursor="hover"
                className={`card-block p-6 ${p.bg}`}
              >
                <div className="flex items-baseline justify-between">
                  <span className="label">{p.n}</span>
                  <span className="font-display text-xl">→</span>
                </div>
                <div className="mt-12 font-display text-3xl">{p.t}</div>
                <div className={`mt-1 text-sm ${p.bg.includes("clay") ? "text-cream/80" : "text-muted-foreground"}`}>{p.d}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="label text-clay">Student Ledger</div>
            <h2 className="display-lg mt-3">Progress, <span className="italic-serif">written down</span>.</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Each student has their own ledger — weekly mastery, weak topics, study plan and goals.
              No surprises, only direction.
            </p>
            <Link to="/about" className="mt-6 inline-block text-sm ink-link">How we teach →</Link>
          </div>
          <div className="card-block p-8">
            <div className="flex items-end justify-between border-b-2 border-ink pb-4">
              <div>
                <div className="label">Weekly mastery</div>
                <div className="font-display text-6xl leading-none">92<span className="text-3xl text-muted-foreground">%</span></div>
              </div>
              <span className="chip bg-sun">▲ 6.2%</span>
            </div>
            <div className="mt-6 flex h-36 items-end gap-2">
              {[40, 55, 48, 70, 62, 85, 92].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md border-2 border-ink"
                  style={{ height: `${h}%`, background: i === 6 ? "var(--clay)" : "var(--sun)" }}
                />
              ))}
            </div>
            <div className="mt-3 flex justify-between font-mono text-[10px] text-muted-foreground">
              {["W1","W2","W3","W4","W5","W6","W7"].map((w) => <span key={w}>{w}</span>)}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { k: "Math", v: "A+", bg: "bg-clay text-cream" },
                { k: "Science", v: "A", bg: "bg-sage" },
                { k: "English", v: "A", bg: "bg-sun" },
              ].map((s) => (
                <div key={s.k} className={`rounded-xl border-ink-1 p-3 text-center ${s.bg}`}>
                  <div className="label">{s.k}</div>
                  <div className="font-display text-2xl">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 md:py-24">
        <div className="rounded-[2rem] border-ink bg-sun p-10 shadow-block md:p-16">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-2">
              <div className="font-display text-8xl leading-none text-clay">"</div>
            </div>
            <div className="md:col-span-7">
              <p className="font-display text-3xl leading-tight md:text-4xl">
                My daughter went from dreading exams to <span className="italic-serif text-clay">looking forward</span> to her study sessions. Grace changed her relationship with learning.
              </p>
              <div className="mt-6 label">— Lakshmi P., parent · Class 10</div>
            </div>
            <div className="md:col-span-3">
              <div className="card-block bg-cream p-5">
                <div className="label text-clay">Parent rating</div>
                <div className="font-display text-5xl">4.9<span className="text-2xl text-muted-foreground">/5</span></div>
                <div className="label mt-2">Based on 312 reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 md:py-24">
        <div className="rounded-[2rem] border-ink bg-clay p-10 text-cream shadow-block-lg md:p-16">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <div className="label text-sun">Begin</div>
              <h2 className="display-lg mt-3">Book a free counseling session.</h2>
              <p className="mt-4 max-w-lg text-cream/85">
                Meet a senior mentor, design a personalized plan for your child, decide if Grace is right for them. No pressure, ever.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
              <Link to="/enroll" className="btn-cream rounded-full px-6 py-3 text-xs uppercase tracking-[0.18em]">Free Counseling →</Link>
              <Link to="/contact" className="rounded-full border-2 border-cream px-6 py-3 text-xs uppercase tracking-[0.18em] hover:bg-cream hover:text-ink transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
