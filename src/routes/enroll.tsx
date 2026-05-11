import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/enroll")({
  component: Enroll,
  head: () => ({
    meta: [
      { title: "Enroll — Grace Tuition Center" },
      { name: "description", content: "Request a free counseling session and begin a personalized academic plan." },
    ],
  }),
});

function Enroll() {
  const [done, setDone] = useState(false);

  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 pb-12 pt-10">
          <div className="label">§ 06 — Enrollment</div>
          <h1 className="display-xl mt-6">Begin a <span className="italic-serif text-accent">considered</span> year.</h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground">
            Tell us a little about the student — we'll respond within one working day with a personalized plan.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-4">
            <div className="space-y-8">
              {[
                { n: "I.", t: "Personal counseling", d: "30-min session with a senior mentor." },
                { n: "II.", t: "Custom study plan", d: "Built around the student's goals & gaps." },
                { n: "III.", t: "No obligation", d: "Decide after meeting us — never any pressure." },
              ].map((b) => (
                <div key={b.n} className="border-l border-ink pl-5">
                  <div className="font-display text-3xl text-accent">{b.n}</div>
                  <div className="mt-2 font-display text-xl">{b.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
                </div>
              ))}
            </div>
          </aside>

          <form
            onSubmit={(e) => { e.preventDefault(); setDone(true); }}
            className="md:col-span-8"
          >
            {done ? (
              <div className="paper-card rounded-xl p-12">
                <div className="label">Filed</div>
                <div className="mt-3 font-display text-4xl">Thank you.</div>
                <p className="mt-4 italic-serif text-lg text-foreground/85">
                  A mentor will write to you shortly to schedule a free counseling session.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <Field label="Student Name" id="name" />
                <div className="grid gap-8 sm:grid-cols-2">
                  <Field label="Grade / Class" id="grade" placeholder="e.g. Class 10" />
                  <Field label="School Board" id="board" placeholder="CBSE / State / ICSE" />
                </div>
                <div className="grid gap-8 sm:grid-cols-2">
                  <Field label="Parent Name" id="parent" />
                  <Field label="Phone / WhatsApp" id="phone" type="tel" placeholder="+91" />
                </div>
                <Field label="Email" id="email" type="email" />
                <div>
                  <label className="label mb-2 block" htmlFor="msg">Subjects of interest</label>
                  <textarea
                    id="msg"
                    rows={3}
                    className="w-full border-b border-ink bg-transparent py-3 text-lg outline-none focus:border-accent"
                    placeholder="Mathematics, Physics, Chemistry…"
                  />
                </div>
                <button className="btn-ink rounded-full px-6 py-3 text-xs uppercase tracking-[0.18em]">
                  Request free counseling
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({ label, id, type = "text", placeholder }: { label: string; id: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={id} className="label mb-2 block">{label}</label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full border-b border-ink bg-transparent py-3 font-display text-2xl outline-none placeholder:text-muted-foreground/60 focus:border-accent"
      />
    </div>
  );
}
