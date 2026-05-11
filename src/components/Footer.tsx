import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="font-display text-lg font-semibold">GRACE Tuition Center</div>
          <p className="mt-3 text-sm text-muted-foreground">
            Empowering Minds. Shaping Futures. A next-generation learning experience built around the student.
          </p>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold">Explore</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/programs" className="hover:text-foreground">Programs</Link></li>
            <li><Link to="/faculty" className="hover:text-foreground">Faculty</Link></li>
            <li><Link to="/achievements" className="hover:text-foreground">Achievements</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-highlight" /> +91 63749 93259</li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-highlight" /> WhatsApp 63749 93259</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-highlight" /> info@gracetuitioncenter.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-highlight" /> Chennai, Tamil Nadu</li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold">Hours</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Weekdays · 4:00 PM – 9:00 PM</li>
            <li>Weekends · 9:00 AM – 6:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} GRACE Tuition Center · Crafted for academic excellence
      </div>
    </footer>
  );
}
