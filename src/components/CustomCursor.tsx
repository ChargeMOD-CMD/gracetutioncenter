import { useEffect, useRef } from "react";

export function CustomCursor() {
  const blob = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let bx = x, by = y;
    let raf = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
    };
    const tick = () => {
      bx += (x - bx) * 0.18;
      by += (y - by) * 0.18;
      if (blob.current) blob.current.style.transform = `translate(${bx}px, ${by}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor='hover']")) blob.current?.classList.add("is-hover");
      else blob.current?.classList.remove("is-hover");
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
      <div ref={blob} className="cursor-blob" />
      <div ref={dot} className="cursor-dot" />
    </>
  );
}
