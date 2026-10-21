import type { Metadata } from "next";
export const metadata: Metadata = { title: "隐私政策" };
export default function PrivacyPage() { return <Legal title="隐私政策" updated="开发预览版"><h2>1. 信息收集</h2><p>本站当前不设置联系表单，不主动收集姓名、联系方式或研究资料。</p><h2>2. 研究资料保护</h2><p>未经明确授权，不公开学生身份、原始研究题目、创新点、具体算法或实验设计。</p><h2>3. 政策更新</h2><p>如未来增加信息收集功能，将在启用前说明用途、保存方式与用户权利。</p></Legal>; }
function Legal({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) { return <div className="subpage legal-page"><article className="shell narrow"><span className="section-kicker">隐私与资料保护</span><h1>{title}</h1><p className="legal-updated">更新状态：{updated}</p>{children}</article></div>; }
