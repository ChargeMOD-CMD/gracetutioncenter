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
      <section className="px-4 pt-4">
        <div className="mx-auto max-w-[1400px] rounded-[2rem] border-ink bg-cream p-8 shadow-block md:p-12">
          <div className="label text-clay">Enrollment</div>
          <h1 className="display-xl mt-6">Begin a <span className="italic-serif text-clay">considered</span> year.</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Tell us a little about the student — we'll respond within one working day with a personalized plan.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-20">
        <div className="grid gap-8 md:grid-cols-12">
          <aside className="space-y-5 md:col-span-4">
            {[
              { n: "01", t: "Personal counseling", d: "30-min session with a senior mentor.", bg: "bg-sun" },
              { n: "02", t: "Custom study plan", d: "Built around the student's goals & gaps.", bg: "bg-sage" },
              { n: "03", t: "No obligation", d: "Decide after meeting us — never any pressure.", bg: "bg-clay text-cream" },
            ].map((b) => (
              <div key={b.n} className={`card-block p-6 ${b.bg}`}>
                <div className="font-display text-4xl">{b.n}</div>
                <div className="mt-6 font-display text-xl">{b.t}</div>
                <p className={`mt-2 text-sm ${b.bg.includes("clay") ? "text-cream/80" : "text-muted-foreground"}`}>{b.d}</p>
              </div>
            ))}
          </aside>

          <form
            onSubmit={(e) => { e.preventDefault(); setDone(true); }}
            className="card-block p-8 md:col-span-8 md:p-10"
          >
            {done ? (
              <div className="py-12 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border-ink bg-sun font-display text-3xl">✓</div>
                <div className="mt-6 font-display text-4xl">Thank you!</div>
                <p className="mx-auto mt-3 max-w-md italic-serif text-lg text-muted-foreground">
                  A mentor will reach out shortly to schedule your free counseling session.
                </p>
              </div>
            ) : (
              <div className="space-y-7">
                <Field label="Student Name" id="name" />
                <div className="grid gap-7 sm:grid-cols-2">
                  <Field label="Grade / Class" id="grade" placeholder="e.g. Class 10" />
                  <Field label="School Board" id="board" placeholder="CBSE / State / ICSE" />
                </div>
                <div className="grid gap-7 sm:grid-cols-2">
                  <Field label="Parent Name" id="parent" />
                  <Field label="Phone / WhatsApp" id="phone" type="tel" placeholder="+91" />
                </div>
                <Field label="Email" id="email" type="email" />
                <div>
                  <label className="label mb-2 block" htmlFor="msg">Subjects of interest</label>
                  <textarea
                    id="msg"
                    rows={3}
                    className="w-full rounded-xl border-ink bg-sage px-4 py-3 text-base outline-none focus:bg-sun"
                    placeholder="Mathematics, Physics, Chemistry…"
                  />
                </div>
                <button className="btn-ink w-full rounded-full px-6 py-4 text-xs uppercase tracking-[0.2em]">
                  Request free counseling →
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
        className="w-full rounded-full border-ink bg-sage px-5 py-3 text-base outline-none placeholder:text-muted-foreground/60 focus:bg-sun"
      />
    </div>
  );
}
