import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/programs")({
  component: Programs,
  head: () => ({
    meta: [
      { title: "Programs — Grace Tuition Center" },
      { name: "description", content: "Programs and subjects across grades 1–12 — board prep, mentoring and study skills." },
    ],
  }),
});

const grades = [
  { n: "01", t: "Primary", d: "Grades 1–5 — foundations & curiosity" },
  { n: "02", t: "Middle School", d: "Grades 6–8 — habits of thinking" },
  { n: "03", t: "High School", d: "Grades 9–10 — board mastery" },
  { n: "04", t: "Higher Secondary", d: "Grades 11–12 — exam excellence" },
];

const subjects = [
  "Mathematics", "Science", "Physics", "Chemistry",
  "Biology", "English", "Social Science",
];

const support = [
  { t: "Board Exam Preparation", d: "Targeted revision sprints, mock papers, topic mastery." },
  { t: "Revision Programs", d: "Short, intense bursts to cement weak topics before exams." },
  { t: "One-to-One Mentoring", d: "Personal mentors for students who need focused support." },
  { t: "Study Skills", d: "Note-taking, recall, time management and exam strategy." },
];

function Programs() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 pb-10 pt-10">
          <div className="label">§ 03 — Programs</div>
          <h1 className="display-xl mt-6">An <span className="italic-serif text-accent">unbroken</span> curriculum.</h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground">
            From the first foundations to higher secondary — a continuous path, taught by the same standards at every stage.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="rule" />
        {grades.map((g) => (
          <Link
            key={g.n}
            to="/enroll"
            data-cursor="hover"
            className="group grid grid-cols-[80px_1fr_auto] items-center gap-6 border-b border-border py-10 transition-colors hover:bg-paper-2/40"
          >
            <span className="number-marker">{g.n}</span>
            <div>
              <div className="font-display text-4xl group-hover:text-accent md:text-5xl">{g.t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{g.d}</div>
            </div>
            <span className="font-display text-3xl text-foreground/60 transition-transform group-hover:translate-x-1 group-hover:text-accent">→</span>
          </Link>
        ))}
      </section>

      <section className="border-y border-border bg-paper-2/30">
        <div className="mx-auto max-w-[1400px] px-6 py-20">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <div className="label">§ 03.A — Subjects</div>
              <h2 className="display-lg mt-3">Subjects.</h2>
            </div>
            <div className="md:col-span-9">
              <div className="grid grid-cols-2 gap-x-10 gap-y-2 md:grid-cols-3">
                {subjects.map((s, i) => (
                  <div key={s} className="flex items-baseline justify-between border-b border-border py-3">
                    <span className="font-display text-2xl">{s}</span>
                    <span className="number-marker">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="label">§ 03.B — Additional Support</div>
        <h2 className="display-lg mt-3">Beyond the syllabus.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {support.map((s) => (
            <div key={s.t} className="paper-card rounded-xl p-8" data-cursor="hover">
              <div className="font-display text-2xl">{s.t}</div>
              <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link to="/enroll" className="btn-ink rounded-full px-6 py-3 text-xs uppercase tracking-[0.18em]">Begin enrollment</Link>
        </div>
      </section>
    </div>
  );
}
