import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ResearchCards } from "@/components/ResearchCards";

export const metadata: Metadata = { title: "过往指导中涉及的研究方向", description: "从人工智能到跨学科研究，了解 Research Compass 过往指导中涉及的匿名化研究方向与方法类型。" };

export default function ResearchPage() {
  return <div className="subpage research-page"><div className="shell"><Link className="back-link" href="/"><ArrowLeft size={16} />返回首页</Link><div className="subpage-hero"><span className="section-kicker">研究领域</span><h1>过往指导中涉及的研究方向</h1><p>以下内容由既有指导主题匿名归纳，仅展示研究问题与方法类型，不对应任何一位学生、学校或完整课题。</p></div><ResearchCards /></div></div>;
}
