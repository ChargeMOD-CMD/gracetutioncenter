import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Star, Award } from "lucide-react";

export const Route = createFileRoute("/achievements")({
  component: Achievements,
  head: () => ({
    meta: [
      { title: "Student Achievements — GRACE Tuition Center" },
      { name: "description", content: "Top scorers, milestones and proven academic outcomes from GRACE students." },
    ],
  }),
});

const toppers = [
  { n: "Aarav S.", s: "Class 12 · 96.4%", note: "State 9th rank, Mathematics" },
  { n: "Meera K.", s: "Class 10 · 95.8%", note: "Centum in Science" },
  { n: "Rohan V.", s: "Class 12 · 94.2%", note: "Top NEET foundation" },
  { n: "Sneha P.", s: "Class 10 · 94.0%", note: "All-rounder distinction" },
];

function Achievements() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-[0.2em] text-highlight">Achievements</div>
        <h1 className="mt-3 font-display text-5xl font-semibold">Results that <span className="text-gradient">speak louder</span> than promises.</h1>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          { icon: Trophy, k: "120+", v: "State & district toppers" },
          { icon: Star, k: "98%", v: "Pass rate across boards" },
          { icon: Award, k: "92%", v: "Students improved by 1+ grade" },
        ].map((s) => (
          <div key={s.v} className="glass rounded-2xl p-6">
            <s.icon className="h-6 w-6 text-highlight" />
            <div className="mt-4 font-display text-4xl font-semibold text-gradient">{s.k}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
          </div>
        ))}
      </div>

      <h2 className="mt-16 font-display text-3xl font-semibold">Recent top scorers</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {toppers.map((t) => (
          <div key={t.n} className="card-tilt glass rounded-2xl p-6" data-cursor="hover">
            <Trophy className="h-5 w-5 text-highlight" />
            <div className="mt-4 font-display text-lg font-semibold">{t.n}</div>
            <div className="text-sm text-muted-foreground">{t.s}</div>
            <div className="mt-3 text-xs text-foreground/80">{t.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
