import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";

export const Route = createFileRoute("/faculty")({
  component: Faculty,
  head: () => ({
    meta: [
      { title: "Faculty & Mentors — GRACE Tuition Center" },
      { name: "description", content: "Meet the experienced mentors guiding GRACE students." },
    ],
  }),
});

const team = [
  { n: "Mrs. Anitha R.", r: "Lead Mathematics Mentor", e: "14 yrs · CBSE & State Board" },
  { n: "Mr. Karthik S.", r: "Physics & Chemistry", e: "11 yrs · Higher Secondary" },
  { n: "Ms. Divya M.", r: "Biology & Science", e: "9 yrs · Boards + NEET foundations" },
  { n: "Mr. Rajesh V.", r: "English & Communication", e: "12 yrs · Language coaching" },
  { n: "Ms. Priya L.", r: "Social Science", e: "8 yrs · Concept-first teaching" },
  { n: "Mrs. Hema P.", r: "Primary & Middle School", e: "10 yrs · Foundational learning" },
];

function Faculty() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-[0.2em] text-highlight">Faculty</div>
        <h1 className="mt-3 font-display text-5xl font-semibold">Mentors who shape <span className="text-gradient">careers</span>.</h1>
        <p className="mt-4 text-muted-foreground">
          A team of experienced educators who teach with depth, patience and a relentless focus on student outcomes.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {team.map((t) => (
          <div key={t.n} className="card-tilt glass rounded-2xl p-6" data-cursor="hover">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)]">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-display text-lg font-semibold">{t.n}</div>
                <div className="text-sm text-highlight">{t.r}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{t.e}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
