import Link from "next/link";
import { ArrowRight, ChevronRight, CircleCheckBig } from "lucide-react";
import { Hero } from "@/components/Hero";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ResearchCards } from "@/components/ResearchCards";
import { advantages, faq, methodology, process, services } from "@/data/content";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section compact-section" id="about">
        <div className="shell">
          <Reveal><SectionHeading eyebrow="指导方式" title="不是代写，是一起把研究想清楚。" text="论文提供依据，问题决定方向，方法保证可行。" /></Reveal>
          <div className="advantage-grid">{advantages.map((item, i) => <Reveal className="advantage-card" delay={i * 70} key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></Reveal>)}</div>
        </div>
      </section>

      <section className="section section-tint" id="services">
        <div className="shell">
          <Reveal><SectionHeading eyebrow="服务内容" title="从选题到成稿，解决四件事。" /></Reveal>
          <div className="service-grid">{services.map((item, i) => <Reveal className="service-card" delay={i * 60} key={item.title}><div className="service-icon"><item.icon size={23} /></div><h3>{item.title}</h3><p>{item.text}</p><small><CircleCheckBig size={15} />{item.value}</small></Reveal>)}</div>
        </div>
      </section>

      <GuidanceSection />

      <section className="method-section">
        <div className="shell">
          <Reveal><SectionHeading eyebrow="研究逻辑" title="五步走通一份研究计划。" /></Reveal>
          <div className="method-track">{methodology.map((item, index) => <Reveal className="method-item" delay={index * 55} key={item.label}><div><span>{String(index + 1).padStart(2, "0")}</span><b>{item.label}</b></div><p>{item.text}</p>{index < methodology.length - 1 && <ChevronRight className="method-arrow" size={18} />}</Reveal>)}</div>
        </div>
      </section>

      <section className="section" id="research">
        <div className="shell">
          <Reveal><div className="heading-row"><SectionHeading eyebrow="研究领域" title="过往指导中涉及的方向" text="由既有指导主题匿名归纳，只展示研究问题与方法类型。" /><Link className="text-link" href="/research">查看全部 <ArrowRight size={15} /></Link></div></Reveal>
          <ResearchCards limit={4} />
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="shell">
          <Reveal><SectionHeading eyebrow="指导流程" title="四步完成。" /></Reveal>
          <div className="process-track">{process.map((item, i) => <Reveal className="process-item" delay={i * 55} key={item.step}><span>{item.step}</span><h3>{item.title}</h3><p>{item.text}</p></Reveal>)}</div>
        </div>
      </section>

      <section className="section section-tint" id="faq">
        <div className="shell faq-layout">
          <Reveal><SectionHeading eyebrow="常见问题" title="开始前，你可能想确认。" /></Reveal>
          <div className="faq-list">{faq.map(([question, answer], index) => <Reveal delay={index * 25} key={question}><details><summary>{question}<span>＋</span></summary><p>{answer}</p></details></Reveal>)}</div>
        </div>
      </section>
    </>
  );
}
