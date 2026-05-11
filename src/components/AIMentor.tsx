import { useState } from "react";
import { Sparkles, Send, X } from "lucide-react";

type Msg = { role: "user" | "bot"; text: string };

const seedReplies: Record<string, string> = {
  default: "I'm GRACE AI Mentor. Ask me about subjects, study plans, exam prep, or admissions.",
  admission: "Admissions are open year-round. Tap Enroll Now or call +91 63749 93259 for free counseling.",
  fees: "Fees depend on grade & subjects. Share your class and we'll send a tailored plan.",
  exam: "For board exams we run targeted revision sprints, mock tests and 1:1 doubt-clearing.",
};

function reply(q: string) {
  const s = q.toLowerCase();
  if (/(admission|enroll|join)/.test(s)) return seedReplies.admission;
  if (/(fee|price|cost)/.test(s)) return seedReplies.fees;
  if (/(exam|board|test|revision)/.test(s)) return seedReplies.exam;
  return "Great question! Our mentors will guide you. Meanwhile, explore Programs to see all subjects.";
}

export function AIMentor() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: seedReplies.default },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const user = input.trim();
    setMessages((m) => [...m, { role: "user", text: user }, { role: "bot", text: reply(user) }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-[22rem] max-w-[92vw] glass rounded-2xl p-4 shadow-[var(--shadow-glow)] animate-fade-up">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[image:var(--gradient-primary)]">
                <Sparkles className="h-4 w-4 text-white" />
              </span>
              <div>
                <div className="text-sm font-semibold">GRACE AI Mentor</div>
                <div className="text-[10px] text-muted-foreground">Online · learning with you</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-3 max-h-72 space-y-2 overflow-y-auto pr-1">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                  m.role === "user"
                    ? "ml-auto bg-[image:var(--gradient-primary)] text-white"
                    : "bg-white/5 text-foreground"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-xl bg-white/5 p-1.5">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask about subjects, fees, exams…"
              className="flex-1 bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button onClick={send} className="btn-hero rounded-lg p-2" aria-label="Send">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="relative grid h-16 w-16 place-items-center rounded-full bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)] transition hover:scale-105"
        aria-label="Open AI Mentor"
      >
        <span className="absolute inset-0 rounded-full border border-white/20 animate-spin-slow" />
        <span className="absolute -inset-2 rounded-full border border-highlight/40 animate-pulse-glow" />
        <Sparkles className="h-7 w-7 text-white" />
      </button>
    </div>
  );
}
