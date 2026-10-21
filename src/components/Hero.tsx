"use client";

import type { CSSProperties, PointerEvent } from "react";
import Link from "next/link";
import { ArrowDown, BookOpen, Search, Target, FlaskConical, FileText, Lightbulb, Sparkles } from "lucide-react";

const nodes = [
  [Lightbulb, "兴趣", "01"],
  [Search, "调查", "02"],
  [BookOpen, "空白", "03"],
  [Target, "问题", "04"],
  [FlaskConical, "验证", "05"],
  [FileText, "计划", "06"],
] as const;

export function Hero() {
  const move = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${(((event.clientX - rect.left) / rect.width) - 0.5) * 18}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${(((event.clientY - rect.top) / rect.height) - 0.5) * 18}px`);
  };

  return (
    <section className="hero hero-lab" onPointerMove={move}>
      <div className="hero-scan" aria-hidden="true" />
      <div className="hero-wordmark" aria-hidden="true">RESEARCH<br />COMPASS</div>
      <div className="shell hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><span /> 日本大学院 · 一对一研究指导</span>
          <h1>把模糊的想法，<br />变成一条<br /><em>可以走通的路。</em></h1>
          <p>从选题、文献到方法，把研究逻辑一步步走通。</p>
          <div className="tag-row"><span>选题定位</span><span>文献与 Research Gap</span><span>方法设计</span></div>
          <div className="hero-actions">
            <Link className="button kinetic-button" href="#services"><span>进入指导地图</span><ArrowDown size={16} /></Link>
            <Link className="button button-ghost" href="/research">浏览研究方向</Link>
          </div>
        </div>

        <div className="research-console" aria-label="从研究兴趣到研究计划书的动态路径图">
          <div className="console-top"><span><i /> PATH / 研究路径生成中</span><b>RC—LAB</b></div>
          <svg className="route-lines" viewBox="0 0 560 510" aria-hidden="true">
            <defs><filter id="glow"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>
            <path className="route-base" d="M94 92 C180 35 262 62 292 134 S406 182 465 127 S511 248 435 276 S293 255 266 342 S159 443 91 391" />
            <path className="route-active" d="M94 92 C180 35 262 62 292 134 S406 182 465 127 S511 248 435 276 S293 255 266 342 S159 443 91 391" filter="url(#glow)" />
          </svg>
          <div className="orbit orbit-one" aria-hidden="true" /><div className="orbit orbit-two" aria-hidden="true" />
          {nodes.map(([Icon, label, number], index) => (
            <div className={`console-node console-node-${index + 1}`} key={label} style={{ "--node-delay": `${index * 0.16}s` } as CSSProperties}>
              <span><Icon size={18} /></span><b>{label}</b><small>{number}</small>
            </div>
          ))}
          <div className="console-question"><Sparkles size={16} /><span>正在追问</span><strong>为什么是这个问题？</strong></div>
          <div className="console-result"><i /><span>研究逻辑清晰度</span><b>逐步建立</b></div>
          <div className="console-hint">移动鼠标，探索你的研究坐标</div>
        </div>
      </div>
      <Link className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><i /></Link>
    </section>
  );
}
