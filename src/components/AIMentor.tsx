import { useState } from "react";
import { Send, X } from "lucide-react";

type Msg = { role: "user" | "bot"; text: string };

const seed: Record<string, string> = {
  default: "I am the Grace Mentor. Ask about subjects, study plans, exam prep or admissions.",
  admission: "Admissions remain open. Tap Enroll, or call +91 63749 93259 for a free counseling session.",
  fees: "Fees vary by grade & subject. Share the class — we'll send a tailored plan.",
  exam: "For boards we run focused revision sprints, mock papers and one-to-one doubt-clearing.",
};

function reply(q: string) {
  const s = q.toLowerCase();
  if (/(admission|enroll|join)/.test(s)) return seed.admission;
  if (/(fee|price|cost)/.test(s)) return seed.fees;
  if (/(exam|board|test|revision)/.test(s)) return seed.exam;
  return "A mentor will follow up. Meanwhile, browse Programs to see all subjects.";
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
        <div className="mb-3 w-[22rem] max-w-[92vw] rounded-xl border border-ink bg-card shadow-[6px_6px_0_var(--ink)] animate-fade-up">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <div className="font-display text-lg leading-none">Mentor</div>
              <div className="label mt-1">A correspondence</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-foreground/60 hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="max-h-72 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i}>
                <div className="label mb-1">{m.role === "user" ? "You" : "Mentor"}</div>
                <div
                  className={`text-sm leading-relaxed ${
                    m.role === "user" ? "text-foreground" : "italic-serif text-foreground"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 border-t border-border p-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Write a question…"
              className="flex-1 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button onClick={send} className="btn-ink rounded-md p-2" aria-label="Send">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="btn-ink flex items-center gap-3 rounded-full px-5 py-3 text-xs uppercase tracking-[0.18em] shadow-[4px_4px_0_var(--ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_var(--ink)] transition-transform"
        aria-label="Open Mentor"
      >
        <span className="h-2 w-2 rounded-full bg-paper animate-blink" />
        Ask the Mentor
      </button>
    </div>
  );
}
