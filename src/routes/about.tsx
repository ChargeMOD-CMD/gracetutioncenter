import { createFileRoute } from "@tanstack/react-router";
import { Heart, Compass, Sparkles, Shield } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — GRACE Tuition Center" },
      { name: "description", content: "Our teaching philosophy, mission and the academic growth strategy behind GRACE Tuition Center." },
    ],
  }),
});

function About() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-[0.2em] text-highlight">About GRACE</div>
        <h1 className="mt-3 font-display text-5xl font-semibold">A learning brand built around the <span className="text-gradient">student</span>.</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          We believe great teaching is half craft, half care. GRACE is built on master-level subject expertise paired with
          mentorship that respects each student's individual pace, ambition and personality.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          { icon: Compass, title: "Our Mission", body: "To prepare students not just for exams — but for confident, curious, lifelong learning." },
          { icon: Heart, title: "Our Philosophy", body: "Teach concepts deeply. Practice with intent. Mentor with empathy. Measure with honesty." },
          { icon: Sparkles, title: "Our Approach", body: "AI-supported personalization, mastery checks, and small-batch coaching that scales attention, not class size." },
        ].map((c) => (
          <div key={c.title} className="glass card-tilt rounded-2xl p-6" data-cursor="hover">
            <c.icon className="h-6 w-6 text-highlight" />
            <div className="mt-4 font-display text-lg font-semibold">{c.title}</div>
            <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 grid gap-10 md:grid-cols-2">
        <div className="glass rounded-3xl p-8">
          <Shield className="h-6 w-6 text-highlight" />
          <h2 className="mt-4 font-display text-2xl font-semibold">The GRACE Promise</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>· Small batches — every student is seen.</li>
            <li>· Weekly mastery tracking with parent updates.</li>
            <li>· 1:1 doubt-clearing built into every program.</li>
            <li>· Board-grade rigor, mentor-grade warmth.</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-8">
          <h2 className="font-display text-2xl font-semibold">Why parents choose us</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Parents tell us they value three things most: visible academic progress, students who actually
            <em> enjoy </em>studying, and mentors who treat learning as a long relationship — not a service.
          </p>
        </div>
      </div>
    </div>
  );
}
