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
  { n: "Mrs. Anitha R.", r: "Lead Mathematics Mentor", e: "14 years · CBSE & State Board" },
  { n: "Mr. Karthik S.", r: "Physics & Chemistry", e: "11 years · Higher Secondary" },
  { n: "Ms. Divya M.", r: "Biology & Science", e: "9 years · Boards + NEET foundations" },
  { n: "Mr. Rajesh V.", r: "English & Communication", e: "12 years · Language coaching" },
  { n: "Ms. Priya L.", r: "Social Science", e: "8 years · Concept-first teaching" },
  { n: "Mrs. Hema P.", r: "Primary & Middle School", e: "10 years · Foundational learning" },
];

function Faculty() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 pb-12 pt-10">
          <div className="label">§ 04 — Faculty</div>
          <h1 className="display-xl mt-6">Mentors who <span className="italic-serif text-accent">stay</span>.</h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground">
            Our faculty teach the same students across years. Continuity is part of the curriculum.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="rule" />
        {team.map((t, i) => (
          <div
            key={t.n}
            data-cursor="hover"
            className="group grid grid-cols-[60px_1fr_auto] items-baseline gap-6 border-b border-border py-10 transition-colors hover:bg-paper-2/40"
          >
            <span className="number-marker">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <div className="font-display text-3xl group-hover:text-accent md:text-4xl">{t.n}</div>
              <div className="mt-2 italic-serif text-base text-foreground/80">{t.r}</div>
            </div>
            <div className="text-right">
              <div className="label">Tenure</div>
              <div className="mt-1 font-mono text-xs">{t.e}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
