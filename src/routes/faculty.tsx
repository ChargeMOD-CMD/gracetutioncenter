import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faculty")({
  component: Faculty,
  head: () => ({
    meta: [
      { title: "Faculty — Grace Tuition Center" },
      { name: "description", content: "Senior mentors who teach with depth, patience and a long view." },
    ],
  }),
});

const team = [
  { n: "Mrs. Anitha R.", r: "Lead Mathematics Mentor", e: "14 yrs · CBSE & State", bg: "bg-cream", initials: "AR" },
  { n: "Mr. Karthik S.", r: "Physics & Chemistry", e: "11 yrs · Higher Secondary", bg: "bg-sun", initials: "KS" },
  { n: "Ms. Divya M.", r: "Biology & Science", e: "9 yrs · Boards + NEET", bg: "bg-sage", initials: "DM" },
  { n: "Mr. Rajesh V.", r: "English & Communication", e: "12 yrs · Language coaching", bg: "bg-clay text-cream", initials: "RV" },
  { n: "Ms. Priya L.", r: "Social Science", e: "8 yrs · Concept-first teaching", bg: "bg-cream", initials: "PL" },
  { n: "Mrs. Hema P.", r: "Primary & Middle School", e: "10 yrs · Foundations", bg: "bg-sage", initials: "HP" },
];

function Faculty() {
  return (
    <div>
      <section className="px-4 pt-4">
        <div className="mx-auto max-w-[1400px] rounded-[2rem] border-ink bg-cream p-8 shadow-block md:p-12">
          <div className="label text-clay">Faculty</div>
          <h1 className="display-xl mt-6">Mentors who <span className="italic-serif text-clay">stay</span>.</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Our faculty teach the same students across years. Continuity is part of the curriculum.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((t) => (
            <div key={t.n} className={`card-block p-7 ${t.bg}`} data-cursor="hover">
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-full border-ink bg-ink font-display text-xl text-cream">
                  {t.initials}
                </div>
                <div>
                  <div className="font-display text-2xl">{t.n}</div>
                  <div className={`italic-serif text-base ${t.bg.includes("clay") ? "text-cream/85" : "text-foreground/80"}`}>{t.r}</div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between border-t-2 border-ink pt-4">
                <span className="label">Tenure</span>
                <span className="font-mono text-xs">{t.e}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
