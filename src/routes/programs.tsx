import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calculator, Atom, FlaskConical, Leaf, Languages, Globe2,
  GraduationCap, BookOpen, Target, Trophy, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/programs")({
  component: Programs,
  head: () => ({
    meta: [
      { title: "Programs & Subjects — GRACE Tuition Center" },
      { name: "description", content: "School tuition, board exam prep, subject mastery and one-to-one mentoring across grades 1–12." },
    ],
  }),
});

const grades = [
  { t: "Primary", d: "Grades 1–5 · foundations & curiosity", icon: BookOpen },
  { t: "Middle School", d: "Grades 6–8 · critical thinking & habits", icon: GraduationCap },
  { t: "High School", d: "Grades 9–10 · board mastery", icon: Target },
  { t: "Higher Secondary", d: "Grades 11–12 · exam excellence", icon: Trophy },
];

const subjects = [
  { t: "Mathematics", icon: Calculator },
  { t: "Science", icon: FlaskConical },
  { t: "Physics", icon: Atom },
  { t: "Chemistry", icon: FlaskConical },
  { t: "Biology", icon: Leaf },
  { t: "English", icon: Languages },
  { t: "Social Science", icon: Globe2 },
];

function Programs() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-[0.2em] text-highlight">Programs</div>
        <h1 className="mt-3 font-display text-5xl font-semibold">Learning pathways for every <span className="text-gradient">stage</span>.</h1>
        <p className="mt-4 text-muted-foreground">
          Pick a stage, choose your subjects, and we'll design a personalized plan around your goals.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {grades.map((g) => (
          <div key={g.t} className="card-tilt glass relative overflow-hidden rounded-2xl p-6" data-cursor="hover">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[image:var(--gradient-primary)] opacity-20 blur-2xl" />
            <g.icon className="h-7 w-7 text-highlight" />
            <div className="mt-4 font-display text-xl font-semibold">{g.t}</div>
            <div className="mt-1 text-sm text-muted-foreground">{g.d}</div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <div className="text-xs uppercase tracking-[0.2em] text-highlight">Subjects</div>
        <h2 className="mt-3 font-display text-3xl font-semibold">Master every subject that matters.</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {subjects.map((s) => (
            <div key={s.t} className="card-tilt glass flex items-center gap-3 rounded-xl p-4" data-cursor="hover">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-[image:var(--gradient-primary)]">
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <div className="font-medium">{s.t}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 grid gap-5 md:grid-cols-2">
        {[
          { t: "Board Exam Preparation", d: "Targeted revision sprints, full-length mocks and topic mastery." },
          { t: "Revision Programs", d: "Short, intense bursts to cement weak topics before exams." },
          { t: "One-to-One Mentoring", d: "Personal mentors for students needing focused support." },
          { t: "Study Skills Development", d: "Note-taking, recall, time management and exam strategy." },
        ].map((s) => (
          <div key={s.t} className="glass rounded-2xl p-6">
            <div className="font-display text-lg font-semibold">{s.t}</div>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link to="/enroll" className="btn-hero inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium">
          Start enrollment <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
