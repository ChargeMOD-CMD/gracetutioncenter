export function FloatingSymbols() {
  const symbols = ["∑", "π", "√", "∞", "≈", "Δ", "θ", "λ", "f(x)", "H₂O", "E=mc²", "α", "β", "📚"];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {symbols.map((s, i) => (
        <span
          key={i}
          className="absolute font-display text-2xl text-white/10 animate-float-slow"
          style={{
            top: `${(i * 53) % 90 + 5}%`,
            left: `${(i * 37) % 92 + 4}%`,
            animationDelay: `${(i % 6) * 0.7}s`,
            fontSize: `${14 + (i % 5) * 6}px`,
          }}
        >
          {s}
        </span>
      ))}
    </div>
  );
}
