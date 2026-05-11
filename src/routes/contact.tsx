import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Grace Tuition Center" },
      { name: "description", content: "Reach Grace Tuition Center in Chennai. Phone, WhatsApp, email and location." },
    ],
  }),
});

const channels = [
  { t: "Telephone", v: "+91 63749 93259", href: "tel:+916374993259" },
  { t: "WhatsApp", v: "Message us", href: "https://wa.me/916374993259" },
  { t: "Correspondence", v: "info@gracetuitioncenter.com", href: "mailto:info@gracetuitioncenter.com" },
  { t: "In person", v: "Chennai, Tamil Nadu", href: "#map" },
];

function Contact() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 pb-12 pt-10">
          <div className="label">§ 07 — Contact</div>
          <h1 className="display-xl mt-6">Let us <span className="italic-serif text-accent">talk</span> learning.</h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="rule" />
        {channels.map((c, i) => (
          <a
            key={c.t}
            href={c.href}
            data-cursor="hover"
            className="group grid grid-cols-[60px_1fr_auto] items-baseline gap-6 border-b border-border py-8 transition-colors hover:bg-paper-2/40"
          >
            <span className="number-marker">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <div className="label">{c.t}</div>
              <div className="mt-2 font-display text-3xl group-hover:text-accent md:text-4xl">{c.v}</div>
            </div>
            <span className="font-display text-3xl text-foreground/60 transition-transform group-hover:translate-x-1 group-hover:text-accent">→</span>
          </a>
        ))}
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="label">Hours</div>
            <ul className="mt-4 space-y-2 font-display text-2xl">
              <li>Mon–Fri · <span className="italic-serif">16:00 – 21:00</span></li>
              <li>Sat–Sun · <span className="italic-serif">09:00 – 18:00</span></li>
            </ul>
          </div>
          <div id="map" className="paper-card overflow-hidden rounded-xl md:col-span-8">
            <iframe
              title="Grace Tuition Center location"
              src="https://www.google.com/maps?q=Chennai,Tamil+Nadu&output=embed"
              className="h-80 w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
