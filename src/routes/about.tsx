import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "Manifesto — Grace Tuition Center" },
      { name: "description", content: "Our teaching philosophy: mastery, mentorship and the slower craft of learning." },
    ],
  }),
});

function About() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 pb-12 pt-10">
          <div className="label">§ 02 — Manifesto</div>
          <h1 className="display-xl mt-6">
            On the slower<br />
            <span className="italic-serif text-accent">craft</span> of teaching.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-3">
            <div className="label">Index</div>
            <ol className="mt-4 space-y-2 font-mono text-xs">
              <li>I. The student first</li>
              <li>II. Mastery as method</li>
              <li>III. Mentor as compass</li>
              <li>IV. Quiet measurement</li>
            </ol>
          </aside>
          <article className="md:col-span-7 md:col-start-5">
            <p className="font-display text-3xl leading-snug md:text-4xl">
              Teaching is two crafts at once — the craft of explanation, and the craft of <span className="italic-serif text-accent">attention</span>.
            </p>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/85">
              <p>
                We hold both as inseparable. A clear teacher who does not see the student is half a teacher.
                A warm teacher who does not master the material is the other half. Grace insists on both.
              </p>
              <p>
                Our classrooms are intentionally small. Our mentors stay with their students across years, not terms.
                Our notes are written by hand. Our pace respects how learning actually happens — slow then sudden,
                quiet then luminous.
              </p>
              <p>
                We measure progress weekly, not anxiously. We talk to parents like collaborators. We treat every
                student as someone whose life will, in part, turn on the quality of these years.
              </p>
              <p className="italic-serif text-2xl text-accent">
                "The best preparation for an exam is an unhurried understanding."
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-[1400px] gap-0 px-6 py-24 md:grid-cols-3">
          {[
            { n: "I.", t: "The student first", d: "Every plan begins with who they are, not what we teach." },
            { n: "II.", t: "Mastery as method", d: "We teach concepts to the bone — and then to the application." },
            { n: "III.", t: "Mentor as compass", d: "A senior mentor stays with each student across years." },
          ].map((c) => (
            <div key={c.n} className="border-border p-8 md:border-r last:border-r-0">
              <div className="font-display text-4xl text-accent">{c.n}</div>
              <h3 className="mt-6 font-display text-2xl">{c.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
