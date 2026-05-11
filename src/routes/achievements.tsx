import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/achievements")({
  component: Achievements,
  head: () => ({
    meta: [
      { title: "Records — Grace Tuition Center" },
      { name: "description", content: "Top scorers, milestones and academic results, recorded year by year." },
    ],
  }),
});

const toppers = [
  { y: "2024", n: "Aarav S.", s: "Class 12 · 96.4%", note: "State 9th rank · Mathematics" },
  { y: "2024", n: "Meera K.", s: "Class 10 · 95.8%", note: "Centum in Science" },
  { y: "2023", n: "Rohan V.", s: "Class 12 · 94.2%", note: "Top NEET foundation" },
  { y: "2023", n: "Sneha P.", s: "Class 10 · 94.0%", note: "All-rounder distinction" },
  { y: "2022", n: "Ishaan T.", s: "Class 12 · 93.6%", note: "District topper · Physics" },
  { y: "2022", n: "Lakshmi R.", s: "Class 10 · 93.0%", note: "Centum in Mathematics" },
];

function Achievements() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 pb-12 pt-10">
          <div className="label">§ 05 — Records</div>
          <h1 className="display-xl mt-6">Results, <span className="italic-serif text-accent">recorded</span>.</h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="grid gap-0 divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            { k: "120+", v: "State & district toppers" },
            { k: "98%", v: "Pass rate across boards" },
            { k: "92%", v: "Students improved by 1+ grade" },
          ].map((s) => (
            <div key={s.v} className="p-10">
              <div className="font-display text-7xl leading-none">{s.k}</div>
              <div className="label mt-4">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="label mb-3">Recent toppers — by year</div>
        <h2 className="display-lg">An honest ledger.</h2>
        <div className="mt-10 grid grid-cols-[80px_1fr_1fr_2fr] items-baseline gap-6 border-y border-ink py-3 text-xs">
          <div className="label">Year</div>
          <div className="label">Name</div>
          <div className="label">Result</div>
          <div className="label">Note</div>
        </div>
        {toppers.map((t, i) => (
          <div
            key={t.n}
            className="grid grid-cols-[80px_1fr_1fr_2fr] items-baseline gap-6 border-b border-border py-6 transition-colors hover:bg-paper-2/40"
            data-cursor="hover"
          >
            <div className="font-mono text-sm text-muted-foreground">{t.y}</div>
            <div className="font-display text-2xl">{t.n}</div>
            <div className="italic-serif text-base">{t.s}</div>
            <div className="text-sm text-foreground/80">{t.note}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
