"use client";

import { useState } from "react";
import { Cpu, ScanSearch, AudioLines, MousePointer2, Glasses, GraduationCap, ChartNoAxesCombined, Network } from "lucide-react";
import { researchAreas, researchCategories } from "@/data/researchCases";

const icons = { cpu: Cpu, scan: ScanSearch, audio: AudioLines, mouse: MousePointer2, glasses: Glasses, graduation: GraduationCap, chart: ChartNoAxesCombined, network: Network };

export function ResearchCards({ limit }: { limit?: number }) {
  const [active, setActive] = useState("全部");
  const filtered = researchAreas.filter((item) => item.published && (active === "全部" || item.category === active)).slice(0, limit);
  return (
    <>
      {!limit && <div className="filter-row" role="group" aria-label="按研究领域筛选">{researchCategories.map((category) => <button type="button" className={active === category ? "active" : ""} key={category} onClick={() => setActive(category)}>{category}</button>)}</div>}
      <div className="research-grid">
        {filtered.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons] || Cpu;
          return <article className="research-card" key={item.id}>
            <div className="research-icon"><Icon size={24} /></div>
            <span className="research-category">{item.category}</span>
            <h3>{item.title}</h3><p>{item.description}</p>
            <div className="guidance-tags">{item.guidanceTypes.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>;
        })}
      </div>
    </>
  );
}
