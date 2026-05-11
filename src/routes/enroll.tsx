import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/enroll")({
  component: Enroll,
  head: () => ({
    meta: [
      { title: "Enroll — GRACE Tuition Center" },
      { name: "description", content: "Request a free counseling session and start your child's personalized academic plan." },
    ],
  }),
});

function Enroll() {
  const [done, setDone] = useState(false);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-[0.2em] text-highlight">Enrollment</div>
        <h1 className="mt-3 font-display text-5xl font-semibold">Begin a <span className="text-gradient">smarter journey</span>.</h1>
        <p className="mt-4 text-muted-foreground">Tell us a little about the student. We'll reach out within one working day with a personalized plan.</p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <form
          onSubmit={(e) => { e.preventDefault(); setDone(true); }}
          className="glass rounded-3xl p-6 md:p-8"
        >
          {done ? (
            <div className="flex flex-col items-start gap-3 py-8">
              <CheckCircle2 className="h-8 w-8 text-highlight" />
              <div className="font-display text-2xl font-semibold">Thank you!</div>
              <p className="text-sm text-muted-foreground">A mentor will contact you shortly to schedule your free counseling session.</p>
            </div>
          ) : (
            <div className="grid gap-4">
              <Field label="Student Name" id="name" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Grade / Class" id="grade" placeholder="e.g. Class 10" />
                <Field label="School Board" id="board" placeholder="CBSE / State / ICSE" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Parent Name" id="parent" />
                <Field label="Phone / WhatsApp" id="phone" type="tel" placeholder="+91" />
              </div>
              <Field label="Email" id="email" type="email" />
              <div>
                <label className="mb-2 block text-sm text-muted-foreground" htmlFor="msg">Subjects of interest</label>
                <textarea
                  id="msg"
                  rows={3}
                  className="w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none focus:border-accent"
                  placeholder="e.g. Mathematics, Physics, Chemistry"
                />
              </div>
              <button className="btn-hero mt-2 rounded-xl px-5 py-3 text-sm font-medium">Request Free Counseling</button>
            </div>
          )}
        </form>

        <div className="space-y-4">
          {[
            { t: "Personal counseling", d: "30-min session with a senior mentor." },
            { t: "Custom study plan", d: "Designed around the student's goals & gaps." },
            { t: "No obligation", d: "Decide after meeting us — no pressure." },
          ].map((b) => (
            <div key={b.t} className="glass rounded-2xl p-5">
              <div className="font-display text-base font-semibold">{b.t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Field({ label, id, type = "text", placeholder }: { label: string; id: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-muted-foreground">{label}</label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none focus:border-accent"
      />
    </div>
  );
}
