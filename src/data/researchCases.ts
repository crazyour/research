export type ResearchArea = {
  id: string;
  title: string;
  category: string;
  description: string;
  guidanceTypes: string[];
  icon: string;
  published: boolean;
};

// 仅包含可公开的宽泛分类。正式上线前应依据已授权资料逐条核对。
export const researchAreas: ResearchArea[] = [
  { id: "ai-ml", title: "人工智能与机器学习", category: "AI / ML", description: "机器学习与智能信息处理。", guidanceTypes: ["方向", "文献", "方法"], icon: "cpu", published: true },
  { id: "cv-mm", title: "计算机视觉与多模态 AI", category: "Computer Vision", description: "图像、视频与多源信息分析。", guidanceTypes: ["课题", "Baseline", "实验"], icon: "scan", published: true },
  { id: "nlp-speech", title: "自然语言处理与语音技术", category: "NLP / Speech", description: "语言理解、语音处理与学习支持。", guidanceTypes: ["文献", "问题", "可行性"], icon: "audio", published: true },
  { id: "hci", title: "人机交互与用户体验", category: "HCI / UX", description: "交互行为与用户体验评价。", guidanceTypes: ["实验", "问卷", "统计"], icon: "mouse", published: true },
  { id: "vr", title: "虚拟现实与交互技术", category: "VR / XR", description: "VR、XR 与数字体验。", guidanceTypes: ["场景", "交互", "评价"], icon: "glasses", published: true },
  { id: "edu-ai", title: "人工智能与教育技术", category: "Education × AI", description: "AI 学习支持与效果评价。", guidanceTypes: ["对象", "文献", "验证"], icon: "graduation", published: true },
  { id: "data", title: "数据科学与信息分析", category: "Data Science", description: "数据分析、预测与信息处理。", guidanceTypes: ["变量", "分析", "指标"], icon: "chart", published: true },
  { id: "interdisciplinary", title: "跨学科研究", category: "Interdisciplinary", description: "AI 与心理、社会及经营研究。", guidanceTypes: ["匹配", "范围", "方法"], icon: "network", published: true },
];

export const researchCategories = ["全部", ...Array.from(new Set(researchAreas.map((item) => item.category)))];
