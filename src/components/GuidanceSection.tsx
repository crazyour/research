import { NotebookPen } from "lucide-react";
import { applicationGuidance, researchPlanGuidance } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function GuidanceSection() {
  return (
    <section className="section guidance-section" id="guidance" aria-labelledby="guidance-title">
      <div className="shell">
        <Reveal>
          <div id="guidance-title">
            <SectionHeading
              eyebrow="升学与研究指导"
              title="从学校选择，到一份真正属于你的研究计划。"
              text="先把申请路径理清，再一步步学习如何提出问题、寻找依据并设计可执行的研究。"
            />
          </div>
        </Reveal>

        <div className="guidance-overview">
          {applicationGuidance.map((item, index) => (
            <Reveal className="guidance-card" delay={index * 55} key={item.number}>
              <div className="guidance-card-top">
                <span className="guidance-icon"><item.icon size={21} aria-hidden="true" /></span>
                <span className="guidance-number">{item.number}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="research-plan-guide">
          <div className="research-plan-shell">
            <div className="research-plan-intro">
              <div className="research-plan-label"><NotebookPen size={18} aria-hidden="true" /> 05 · RESEARCH PLAN</div>
              <h3>研究计划书<br />详细指导</h3>
              <p>不只是修改一篇计划书，而是带你理解研究形成的过程，一步步完成自己的研究计划。</p>
              <blockquote>讲解 · 提问 · 完成 · 反馈 · 重写</blockquote>
            </div>

            <div className="research-plan-steps">
              {researchPlanGuidance.map((item, index) => (
                <article className="research-plan-step" key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
