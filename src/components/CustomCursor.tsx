import { useEffect, useRef } from "react";

export function CustomCursor() {
  const orb = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let ox = x, oy = y;
    let raf = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
    };
    const tick = () => {
      ox += (x - ox) * 0.18;
      oy += (y - oy) * 0.18;
      if (orb.current) orb.current.style.transform = `translate(${ox}px, ${oy}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor='hover']")) orb.current?.classList.add("is-hover");
      else orb.current?.classList.remove("is-hover");
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={orb} className="cursor-orb" />
      <div ref={dot} className="cursor-dot" />
    </>
  );
}
