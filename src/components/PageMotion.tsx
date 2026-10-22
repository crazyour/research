"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const chapters = [
  ["about", "理念"],
  ["services", "服务"],
  ["guidance", "指导"],
  ["research", "领域"],
  ["process", "流程"],
  ["faq", "问答"],
] as const;

export function PageMotion() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);

      let current: string = chapters[0][0];
      for (const [id] of chapters) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.42) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true"><i style={{ transform: `scaleX(${progress})` }} /></div>
      <nav className="chapter-rail" aria-label="页面章节">
        {chapters.map(([id, label], index) => (
          <Link className={active === id ? "active" : ""} href={`/#${id}`} key={id} aria-label={`跳到${label}`}>
            <span>{String(index + 1).padStart(2, "0")}</span><b>{label}</b>
          </Link>
        ))}
      </nav>
    </>
  );
}
