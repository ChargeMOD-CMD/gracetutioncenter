import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Grace Tuition Center" },
      { name: "description", content: "Our teaching philosophy: mastery, mentorship and the slower craft of learning." },
    ],
  }),
});

function About() {
  return (
    <div>
      <section className="px-4 pt-4">
        <div className="mx-auto max-w-[1400px] rounded-[2rem] border-ink bg-cream p-8 shadow-block md:p-12">
          <div className="label text-clay">About</div>
          <h1 className="display-xl mt-6">
            Teaching is half craft,<br />
            half <span className="italic-serif text-clay">care</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Grace was built on a simple belief — students learn best when they're seen, challenged and trusted. The rest is method, repetition and patience.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { n: "I.", t: "Our mission", d: "To prepare students not just for exams — but for confident, curious, lifelong learning.", bg: "bg-cream" },
            { n: "II.", t: "Our philosophy", d: "Teach concepts deeply. Practice with intent. Mentor with empathy. Measure with honesty.", bg: "bg-sun" },
            { n: "III.", t: "Our approach", d: "AI-supported personalization, mastery checks, and small-batch coaching that scales attention.", bg: "bg-clay text-cream" },
          ].map((c) => (
            <div key={c.n} className={`card-block p-8 ${c.bg}`} data-cursor="hover">
              <div className="font-display text-5xl">{c.n}</div>
              <h3 className="mt-10 font-display text-3xl">{c.t}</h3>
              <p className={`mt-3 text-sm ${c.bg.includes("clay") ? "text-cream/80" : "text-muted-foreground"}`}>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-20">
        <div className="rounded-[2rem] border-ink bg-sage p-10 shadow-block md:p-16">
          <div className="label text-clay">The Grace Promise</div>
          <h2 className="display-lg mt-3">Six things we never compromise on.</h2>
          <div className="mt-8 grid gap-y-4 gap-x-10 md:grid-cols-2">
            {[
              "Small batches — every student is seen.",
              "Weekly mastery tracking with parent updates.",
              "1:1 doubt-clearing built into every program.",
              "Board-grade rigor, mentor-grade warmth.",
              "Same mentor across years — continuity matters.",
              "Honest measurement, never inflated reports.",
            ].map((p, i) => (
              <div key={i} className="flex items-baseline gap-4 border-b-2 border-ink py-3">
                <span className="font-mono text-sm text-clay">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-xl">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-20">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="font-display text-3xl leading-snug md:text-5xl">
              "The best preparation for an exam is an <span className="italic-serif text-clay">unhurried understanding</span>."
            </p>
            <div className="label mt-6">— A house principle</div>
          </div>
          <div className="md:col-span-5">
            <div className="card-block bg-clay p-8 text-cream">
              <div className="label text-sun">Want to meet us?</div>
              <h3 className="font-display text-3xl mt-3">Book a free counseling session.</h3>
              <Link to="/enroll" className="btn-cream mt-6 inline-flex rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.18em]">Enroll →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
