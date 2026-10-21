import type { Metadata } from "next";
export const metadata: Metadata = { title: "服务条款" };
export default function TermsPage() { return <div className="subpage legal-page"><article className="shell narrow"><span className="section-kicker">服务约定</span><h1>服务条款</h1><p className="legal-updated">当前为开发预览版，正式签约前以双方确认的服务协议为准。</p><h2>1. 服务性质</h2><p>本服务提供研究选题、文献理解、研究设计、计划书结构与表达等指导，不属于大学或研究室的官方服务。</p><h2>2. 学生参与与学术诚信</h2><p>学生应真实参与研究思考并理解提交材料。服务不包含代替考试、伪造材料或其他违反申请规则与学术诚信的行为。</p><h2>3. 服务范围</h2><p>具体指导范围、修改次数、答疑形式和交付事项，以服务开始前双方确认的书面约定为准。</p><h2>4. 结果说明</h2><p>研究指导不保证教授内诺、考试合格或最终录取。</p></article></div>; }
