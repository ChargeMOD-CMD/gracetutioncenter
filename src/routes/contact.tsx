import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

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
  { icon: Phone, t: "Telephone", v: "+91 63749 93259", href: "tel:+916374993259", bg: "bg-sun" },
  { icon: MessageCircle, t: "WhatsApp", v: "Message us", href: "https://wa.me/916374993259", bg: "bg-sage" },
  { icon: Mail, t: "Email", v: "info@gracetuitioncenter.com", href: "mailto:info@gracetuitioncenter.com", bg: "bg-cream" },
  { icon: MapPin, t: "In person", v: "Chennai, Tamil Nadu", href: "#map", bg: "bg-clay text-cream" },
];

function Contact() {
  return (
    <div>
      <section className="px-4 pt-4">
        <div className="mx-auto max-w-[1400px] rounded-[2rem] border-ink bg-cream p-8 shadow-block md:p-12">
          <div className="label text-clay">Contact</div>
          <h1 className="display-xl mt-6">Let's <span className="italic-serif text-clay">talk</span> learning.</h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
            <a key={c.t} href={c.href} data-cursor="hover" className={`card-block p-6 ${c.bg}`}>
              <c.icon className="h-7 w-7" />
              <div className="mt-10 label">{c.t}</div>
              <div className="mt-2 font-display text-2xl">{c.v}</div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-16">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="card-block bg-sun p-8 md:col-span-4">
            <Clock className="h-7 w-7" />
            <div className="mt-8 label">Hours</div>
            <ul className="mt-4 space-y-3 font-display text-2xl leading-tight">
              <li>Mon–Fri<br /><span className="italic-serif">4 PM – 9 PM</span></li>
              <li>Sat–Sun<br /><span className="italic-serif">9 AM – 6 PM</span></li>
            </ul>
          </div>
          <div id="map" className="card-block overflow-hidden p-0 md:col-span-8">
            <iframe
              title="Grace Tuition Center location"
              src="https://www.google.com/maps?q=Chennai,Tamil+Nadu&output=embed"
              className="h-full min-h-[22rem] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
