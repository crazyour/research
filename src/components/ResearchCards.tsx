"use client";

import { useState } from "react";
import { researchAreas, researchCategories } from "@/data/researchCases";
import { ResearchVisual } from "@/components/ResearchVisual";

export function ResearchCards({ limit }: { limit?: number }) {
  const [active, setActive] = useState("全部");
  const filtered = researchAreas.filter((item) => item.published && (active === "全部" || item.category === active)).slice(0, limit);
  return (
    <>
      {!limit && <div className="filter-row" role="group" aria-label="按研究领域筛选">{researchCategories.map((category) => <button type="button" className={active === category ? "active" : ""} key={category} onClick={() => setActive(category)}>{category}</button>)}</div>}
      <div className="research-grid">
        {filtered.map((item) => (
          <article className={`research-card${limit ? " research-card-compact" : ""}`} key={item.id}>
            <ResearchVisual id={item.id} title={item.title} />
            <div className="research-card-body">
              <span className="research-category">{item.category}</span>
              <h3>{item.title}</h3><p>{item.description}</p>
              <div className="guidance-tags">{item.guidanceTypes.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
