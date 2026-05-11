import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — GRACE Tuition Center" },
      { name: "description", content: "Reach GRACE Tuition Center in Chennai. Phone, WhatsApp, email and location." },
    ],
  }),
});

function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-[0.2em] text-highlight">Contact</div>
        <h1 className="mt-3 font-display text-5xl font-semibold">Let's <span className="text-gradient">talk learning</span>.</h1>
        <p className="mt-4 text-muted-foreground">We're here on weekdays evenings and all day on weekends.</p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Phone, t: "Call", v: "+91 63749 93259", href: "tel:+916374993259" },
          { icon: MessageCircle, t: "WhatsApp", v: "Chat with us", href: "https://wa.me/916374993259" },
          { icon: Mail, t: "Email", v: "info@gracetuitioncenter.com", href: "mailto:info@gracetuitioncenter.com" },
          { icon: MapPin, t: "Visit", v: "Chennai, Tamil Nadu", href: "#map" },
        ].map((c) => (
          <a
            key={c.t}
            href={c.href}
            className="card-tilt glass rounded-2xl p-6"
            data-cursor="hover"
          >
            <c.icon className="h-6 w-6 text-highlight" />
            <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
            <div className="mt-1 font-display text-lg">{c.v}</div>
          </a>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-[1fr_2fr]">
        <div className="glass rounded-2xl p-6">
          <Clock className="h-6 w-6 text-highlight" />
          <div className="mt-4 font-display text-lg font-semibold">Business Hours</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Mon – Fri · 4:00 PM – 9:00 PM</li>
            <li>Sat – Sun · 9:00 AM – 6:00 PM</li>
          </ul>
        </div>
        <div id="map" className="glass overflow-hidden rounded-2xl">
          <iframe
            title="GRACE Tuition Center location"
            src="https://www.google.com/maps?q=Chennai,Tamil+Nadu&output=embed"
            className="h-72 w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
