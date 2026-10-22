import {
  BookOpenCheck,
  CalendarDays,
  Compass,
  FileSearch,
  FlaskConical,
  GraduationCap,
  Mail,
  Search,
} from "lucide-react";

export const advantages = [
  { number: "01", title: "先找依据", text: "从论文出发，不凭空制造创新点。" },
  { number: "02", title: "再问问题", text: "让背景、问题与方法前后相连。" },
  { number: "03", title: "确保能做", text: "把范围控制在修士阶段可完成的程度。" },
];

export const services = [
  { icon: Compass, title: "选题与研究室匹配", text: "结合你的背景、兴趣和目标研究室，缩小研究范围。", value: "找到适合自己的方向" },
  { icon: FileSearch, title: "文献与 Research Gap", text: "比较已有研究，找出仍需验证的问题。", value: "让选题有证据" },
  { icon: FlaskConical, title: "方法与验证设计", text: "明确数据、实验、基线和评价指标。", value: "让方案真正可执行" },
  { icon: BookOpenCheck, title: "计划书结构与修改", text: "整理逻辑，修改结构与学术表达。", value: "让你能够独立说明" },
];

export const applicationGuidance = [
  {
    number: "01",
    icon: GraduationCap,
    title: "择校定位",
    text: "结合学历、专业、语言成绩、预算和地区偏好，划分冲刺、稳妥、保底院校。",
  },
  {
    number: "02",
    icon: Search,
    title: "研究室与导师筛选",
    text: "判断研究方向匹配度，整理适合联系的教授与研究室。",
  },
  {
    number: "03",
    icon: CalendarDays,
    title: "申请时间规划",
    text: "梳理套磁、出愿、材料提交、笔试和面试等关键节点。",
  },
  {
    number: "04",
    icon: Mail,
    title: "套磁指导",
    text: "修改联系教授的邮件、个人介绍及研究兴趣说明。",
  },
];

export const researchPlanGuidance = [
  {
    title: "背景与兴趣梳理",
    text: "结合本科专业、学习经历、已有能力和研究兴趣，找到适合继续深入的方向。",
  },
  {
    title: "研究选题定位",
    text: "将宽泛的兴趣拆分为具体的研究对象、应用场景和实际问题，控制研究范围。",
  },
  {
    title: "先行研究整理",
    text: "从研究目的、研究对象、研究方法、主要结论和研究限制等方面阅读、比较论文。",
  },
  {
    title: "Research Gap 分析",
    text: "根据已有文献，找出尚未充分研究的问题、现有方法的不足或需要进一步验证的部分。",
  },
  {
    title: "研究问题设计",
    text: "将 Research Gap 转化为具体、明确且可以通过数据回答的研究问题。",
  },
  {
    title: "研究方法设计",
    text: "明确研究对象、数据来源、实验或调查流程、比较方式、分析方法和评价指标。",
  },
  {
    title: "可行性检查",
    text: "判断研究所需的数据、技术、时间和资源是否符合修士阶段的实际条件。",
  },
  {
    title: "计划书结构搭建",
    text: "按照研究背景、先行研究、研究空白、研究目的、研究问题、研究方法、预期结果和研究进度搭建完整框架。",
  },
  {
    title: "分段写作与修改",
    text: "由学生按照框架逐步完成初稿，再针对逻辑、证据、引用、学术表达和日语表述进行多轮修改。",
  },
];

export const methodology = [
  { label: "背景", text: "为什么重要" },
  { label: "文献", text: "别人做了什么" },
  { label: "问题", text: "还缺少什么" },
  { label: "方法", text: "准备怎么做" },
  { label: "验证", text: "如何判断结果" },
];

export const process = [
  { step: "01", title: "沟通", text: "了解背景与目标。" },
  { step: "02", title: "定位", text: "确定方向与范围。" },
  { step: "03", title: "设计", text: "完成文献、问题与方法。" },
  { step: "04", title: "完善", text: "修改计划书并答疑。" },
];

export const faq = [
  ["还没有研究方向，可以开始吗？", "可以。先从你的背景、兴趣和目标领域开始梳理。"],
  ["指导包含哪些内容？", "包含选题、文献、Research Gap、方法设计和计划书修改，具体范围开始前确认。"],
  ["包含日语修改吗？", "包含计划书相关的日语表达与逻辑修改。"],
  ["会代写或保证录取吗？", "不会。服务强调你本人参与研究，也不承诺录取结果。"],
  ["研究资料会公开吗？", "不会未经授权公开；网站只展示宽泛领域。"],
];
