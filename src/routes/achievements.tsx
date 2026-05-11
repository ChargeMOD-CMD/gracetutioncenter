import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/achievements")({
  component: Achievements,
  head: () => ({
    meta: [
      { title: "Wins — Grace Tuition Center" },
      { name: "description", content: "Top scorers, milestones and academic results, recorded year by year." },
    ],
  }),
});

const toppers = [
  { y: "2024", n: "Aarav S.", s: "Class 12 · 96.4%", note: "State 9th rank · Mathematics", bg: "bg-sun" },
  { y: "2024", n: "Meera K.", s: "Class 10 · 95.8%", note: "Centum in Science", bg: "bg-sage" },
  { y: "2023", n: "Rohan V.", s: "Class 12 · 94.2%", note: "Top NEET foundation", bg: "bg-cream" },
  { y: "2023", n: "Sneha P.", s: "Class 10 · 94.0%", note: "All-rounder distinction", bg: "bg-clay text-cream" },
  { y: "2022", n: "Ishaan T.", s: "Class 12 · 93.6%", note: "District topper · Physics", bg: "bg-sage" },
  { y: "2022", n: "Lakshmi R.", s: "Class 10 · 93.0%", note: "Centum in Math", bg: "bg-sun" },
];

function Achievements() {
  return (
    <div>
      <section className="px-4 pt-4">
        <div className="mx-auto max-w-[1400px] rounded-[2rem] border-ink bg-cream p-8 shadow-block md:p-12">
          <div className="label text-clay">Wins</div>
          <h1 className="display-xl mt-6">Results, <span className="italic-serif text-clay">recorded</span>.</h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { k: "120+", v: "State & district toppers", bg: "bg-clay text-cream" },
            { k: "98%", v: "Pass rate across boards", bg: "bg-sun" },
            { k: "92%", v: "Improved by 1+ grade", bg: "bg-sage" },
          ].map((s) => (
            <div key={s.v} className={`card-block p-10 ${s.bg}`}>
              <div className="font-display text-7xl leading-none">{s.k}</div>
              <div className={`label mt-4 ${s.bg.includes("clay") ? "text-cream/80" : ""}`}>{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-16">
        <div className="rounded-[2rem] border-ink bg-cream p-8 shadow-block md:p-12">
          <div className="label text-clay">Recent toppers</div>
          <h2 className="display-lg mt-3">An honest scoreboard.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {toppers.map((t) => (
              <div key={t.n} className={`card-block p-6 ${t.bg}`} data-cursor="hover">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs">{t.y}</span>
                  <span className="font-display text-xl">★</span>
                </div>
                <div className="mt-8 font-display text-2xl">{t.n}</div>
                <div className={`italic-serif text-sm ${t.bg.includes("clay") ? "text-cream/85" : "text-foreground/80"}`}>{t.s}</div>
                <div className={`mt-4 border-t-2 border-ink pt-3 text-xs ${t.bg.includes("clay") ? "text-cream/70" : "text-muted-foreground"}`}>{t.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
