import { useState } from "react";
import { Send, X, Sparkles } from "lucide-react";

type Msg = { role: "user" | "bot"; text: string };

const seed: Record<string, string> = {
  default: "Hi! I'm your Grace mentor. Ask about subjects, study plans, exam prep or admissions ✨",
  admission: "Admissions are open. Tap Enroll, or call +91 63749 93259 for a free counseling session.",
  fees: "Fees depend on grade & subjects. Share the class — we'll send a tailored plan.",
  exam: "For boards we run focused revision sprints, mock papers and 1:1 doubt-clearing.",
};

function reply(q: string) {
  const s = q.toLowerCase();
  if (/(admission|enroll|join)/.test(s)) return seed.admission;
  if (/(fee|price|cost)/.test(s)) return seed.fees;
  if (/(exam|board|test|revision)/.test(s)) return seed.exam;
  return "Great question — a mentor will follow up. Meanwhile, browse Programs to see all subjects.";
}

export function AIMentor() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: "bot", text: seed.default }]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const u = input.trim();
    setMessages((m) => [...m, { role: "user", text: u }, { role: "bot", text: reply(u) }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-[22rem] max-w-[92vw] rounded-[1.5rem] border-ink bg-cream shadow-block-lg animate-fade-up">
          <div className="flex items-center justify-between border-b-2 border-ink bg-sun px-4 py-3 rounded-t-[1.4rem]">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-cream">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <div className="font-display text-lg leading-none">Mentor</div>
                <div className="label">Online · happy to help</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-ink/70 hover:text-ink">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="max-h-72 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl border-ink-1 px-3 py-2 text-sm leading-relaxed ${
                  m.role === "user" ? "ml-auto bg-clay text-cream" : "bg-sage"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 border-t-2 border-ink p-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask anything…"
              className="flex-1 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button onClick={send} className="btn-ink rounded-full p-2.5" aria-label="Send">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="btn-ink flex items-center gap-3 rounded-full px-5 py-3.5 text-xs uppercase tracking-[0.18em] shadow-block"
        aria-label="Open Mentor"
      >
        <Sparkles className="h-4 w-4 text-sun" />
        Ask the Mentor
      </button>
    </div>
  );
}
