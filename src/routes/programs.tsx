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
  { n: "01", t: "Primary", d: "Grades 1–5 · foundations & curiosity", bg: "bg-sage" },
  { n: "02", t: "Middle School", d: "Grades 6–8 · habits of thinking", bg: "bg-sun" },
  { n: "03", t: "High School", d: "Grades 9–10 · board mastery", bg: "bg-cream" },
  { n: "04", t: "Higher Secondary", d: "Grades 11–12 · exam excellence", bg: "bg-clay text-cream" },
];

const subjects = [
  "Mathematics", "Science", "Physics", "Chemistry",
  "Biology", "English", "Social Science",
];

const support = [
  { t: "Board Exam Prep", d: "Targeted revision sprints, mock papers, topic mastery." },
  { t: "Revision Programs", d: "Short, intense bursts to cement weak topics before exams." },
  { t: "1-on-1 Mentoring", d: "Personal mentors for students who need focused support." },
  { t: "Study Skills", d: "Note-taking, recall, time management and exam strategy." },
];

function Programs() {
  return (
    <div>
      <section className="px-4 pt-4">
        <div className="mx-auto max-w-[1400px] rounded-[2rem] border-ink bg-cream p-8 shadow-block md:p-12">
          <div className="label text-clay">Programs</div>
          <h1 className="display-xl mt-6">An <span className="italic-serif text-clay">unbroken</span> curriculum.</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            From the first foundations to higher secondary — a continuous path, taught with the same standards at every stage.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {grades.map((g) => (
            <Link key={g.n} to="/enroll" data-cursor="hover" className={`card-block p-6 ${g.bg}`}>
              <div className="flex items-baseline justify-between">
                <span className="label">{g.n}</span>
                <span className="font-display text-xl">→</span>
              </div>
              <div className="mt-12 font-display text-3xl">{g.t}</div>
              <div className={`mt-1 text-sm ${g.bg.includes("clay") ? "text-cream/80" : "text-muted-foreground"}`}>{g.d}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-16">
        <div className="rounded-[2rem] border-ink bg-cream p-8 shadow-block md:p-12">
          <div className="label text-clay">Subjects</div>
          <h2 className="display-lg mt-3">Master every subject that matters.</h2>
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {subjects.map((s, i) => {
              const bgs = ["bg-sage", "bg-sun", "bg-cream", "bg-sage", "bg-sun", "bg-cream", "bg-sage"];
              return (
                <div
                  key={s}
                  data-cursor="hover"
                  className={`card-block flex items-baseline justify-between p-5 ${bgs[i]}`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-clay">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-2xl">{s}</span>
                  </div>
                  <span className="font-display text-xl">→</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-16">
        <div className="label text-clay">Beyond the syllabus</div>
        <h2 className="display-lg mt-3">Extra support, built in.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {support.map((s, i) => (
            <div key={s.t} className={`card-block p-7 ${i % 2 === 0 ? "bg-cream" : "bg-sun"}`} data-cursor="hover">
              <div className="font-display text-2xl">{s.t}</div>
              <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link to="/enroll" className="btn-ink rounded-full px-6 py-3 text-xs uppercase tracking-[0.18em]">Begin enrollment →</Link>
        </div>
      </section>
    </div>
  );
}
