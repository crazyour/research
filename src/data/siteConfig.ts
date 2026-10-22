export const siteConfig = {
  name: "Research Compass",
  chineseName: "日本大学院研究指导",
  tagline: "从研究想法，到真正可执行的研究计划。",
  description:
    "提供日本大学院修士研究计划书专业指导，涵盖研究选题、先行研究调查、Research Gap 分析、研究方法设计、研究室匹配与计划书修改。",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  notice:
    "本服务为独立研究指导与升学准备支持服务，与各大学及研究室不存在官方隶属关系。",
};

export const navigation = [
  { label: "关于指导", href: "/#about" },
  { label: "服务内容", href: "/#services" },
  { label: "升学指导", href: "/#guidance" },
  { label: "研究领域", href: "/research" },
  { label: "指导流程", href: "/#process" },
  { label: "常见问题", href: "/#faq" },
];
