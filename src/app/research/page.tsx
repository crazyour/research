import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ResearchCards } from "@/components/ResearchCards";

export const metadata: Metadata = { title: "研究指导涉及的领域", description: "从人工智能到跨学科研究，了解 Research Compass 研究指导涉及的宽泛学术领域与指导类型。" };

export default function ResearchPage() {
  return <div className="subpage research-page"><div className="shell"><Link className="back-link" href="/"><ArrowLeft size={16} />返回首页</Link><div className="subpage-hero"><span className="section-kicker">研究领域</span><h1>可以研究什么？</h1><p>以下仅展示宽泛领域，不公开个人研究方案。</p></div><ResearchCards /></div></div>;
}
