import { createFileRoute, Link } from "@tanstack/react-router";
import { FloatingSymbols } from "@/components/FloatingSymbols";
import {
  ArrowRight, Sparkles, BookOpen, Brain, Trophy, Target,
  GraduationCap, LineChart, Users, ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "GRACE Tuition Center — Intelligent Academic Growth" },
      { name: "description", content: "Chennai's premium futuristic tuition center. AI-mentored learning, board exam mastery, and personalized growth pathways." },
    ],
  }),
});

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <FloatingSymbols />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-24 pt-12 md:grid-cols-2 md:pt-20">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-highlight" />
              AI-guided academic growth · Chennai
            </span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl">
              <span className="text-gradient">Empowering Minds.</span>
              <br />
              Shaping Futures.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              GRACE Tuition Center blends master-level mentorship with intelligent learning systems —
              built for students who refuse to settle for ordinary results.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/enroll" className="btn-hero inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium">
                Enroll Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/programs" className="rounded-xl border border-border bg-white/5 px-5 py-3 text-sm font-medium hover:bg-white/10">
                Explore Programs
              </Link>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-6">
              {[
                { k: "12+", v: "Years" },
                { k: "1.2k", v: "Students" },
                { k: "98%", v: "Pass Rate" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-2xl font-semibold text-gradient">{s.k}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Orb */}
          <div className="relative grid place-items-center">
            <div className="relative h-[26rem] w-[26rem] max-w-full">
              <div className="absolute inset-0 rounded-full bg-[image:var(--gradient-primary)] opacity-30 blur-3xl animate-pulse-glow" />
              <div className="absolute inset-6 rounded-full border border-white/10 animate-spin-slow" />
              <div className="absolute inset-14 rounded-full border border-highlight/30" style={{ animation: "spin 30s linear reverse infinite" }} />
              <div className="absolute inset-24 rounded-full bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)] grid place-items-center">
                <Brain className="h-16 w-16 text-white" />
              </div>
              {["A+", "97%", "∑", "π", "Δ"].map((t, i) => (
                <span
                  key={t}
                  className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-card/60 font-display text-sm backdrop-blur"
                  style={{ animation: `orbit ${14 + i * 2}s linear infinite`, animationDelay: `${i * -2}s` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PILLARS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-highlight">Why GRACE</div>
          <h2 className="mt-3 font-display text-4xl font-semibold">Designed around how students truly learn.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: Brain, title: "AI-guided Mentorship", desc: "Personalized study plans that adapt to each student's pace, gaps and goals." },
            { icon: Target, title: "Mastery, not Memorization", desc: "Concept-first teaching with depth, application and exam-grade rigor." },
            { icon: LineChart, title: "Visible Growth", desc: "Live performance dashboards so parents and students see progress weekly." },
            { icon: ShieldCheck, title: "Board Exam Mastery", desc: "Targeted revision sprints, mock tests and 1:1 doubt-clearing for board years." },
            { icon: Users, title: "Small Batches", desc: "Limited seats per batch — every student gets attention, every session." },
            { icon: Trophy, title: "Proven Results", desc: "Top scorers across CBSE, State Board and entrance prep year after year." },
          ].map((f) => (
            <div key={f.title} data-cursor="hover" className="card-tilt group glass rounded-2xl p-6">
              <div className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)]">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <div className="font-display text-lg font-semibold">{f.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-highlight">Programs</div>
            <h2 className="mt-3 font-display text-4xl font-semibold">From Primary to Higher Secondary.</h2>
          </div>
          <Link to="/programs" className="hidden text-sm text-muted-foreground hover:text-foreground sm:inline-flex">
            View all programs →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Primary", d: "Grades 1–5", icon: BookOpen },
            { t: "Middle School", d: "Grades 6–8", icon: GraduationCap },
            { t: "High School", d: "Grades 9–10", icon: Target },
            { t: "Higher Secondary", d: "Grades 11–12", icon: Trophy },
          ].map((p) => (
            <Link
              key={p.t}
              to="/programs"
              data-cursor="hover"
              className="card-tilt glass relative overflow-hidden rounded-2xl p-6"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[image:var(--gradient-primary)] opacity-20 blur-2xl" />
              <p.icon className="mb-6 h-7 w-7 text-highlight" />
              <div className="font-display text-xl font-semibold">{p.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{p.d}</div>
              <div className="mt-6 inline-flex items-center gap-2 text-xs text-foreground/80">
                Discover <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* DASHBOARD MOCK */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-highlight">AI Student Dashboard</div>
            <h2 className="mt-3 font-display text-4xl font-semibold">Track growth like never before.</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Each student gets a personalized dashboard — performance trends, weak topics, study plan, and goals.
              Parents stay informed, students stay motivated.
            </p>
          </div>
          <div className="glass relative rounded-3xl p-6 glow-ring">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-muted-foreground">Weekly Mastery</div>
                <div className="font-display text-3xl font-semibold text-gradient">92%</div>
              </div>
              <div className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs">▲ 6.2%</div>
            </div>
            <div className="mt-6 grid grid-cols-7 items-end gap-2 h-36">
              {[40, 55, 48, 70, 62, 85, 92].map((h, i) => (
                <div
                  key={i}
                  className="rounded-md bg-[image:var(--gradient-primary)] opacity-90"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs">
              {[
                { k: "Math", v: "A+" },
                { k: "Science", v: "A" },
                { k: "English", v: "A" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border border-border bg-white/5 p-3">
                  <div className="text-muted-foreground">{s.k}</div>
                  <div className="font-display text-lg">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="glass relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="relative">
            <h2 className="font-display text-4xl font-semibold md:text-5xl">
              Begin a smarter <span className="text-gradient">academic journey</span>.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Book a free counseling session — meet our mentors and design a personalized plan for your child.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/enroll" className="btn-hero rounded-xl px-6 py-3 text-sm font-medium">Free Counseling</Link>
              <Link to="/contact" className="rounded-xl border border-border bg-white/5 px-6 py-3 text-sm hover:bg-white/10">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
