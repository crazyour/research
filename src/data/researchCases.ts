export type ResearchArea = {
  id: string;
  title: string;
  category: string;
  description: string;
  guidanceTypes: string[];
  published: boolean;
};

// 由过往指导内容匿名归纳：只保留研究问题与方法层级，不对应任何单一学生课题。
export const researchAreas: ResearchArea[] = [
  {
    id: "ai-ml",
    title: "人工智能与机器学习",
    category: "AI / ML",
    description: "围绕小样本学习、模型解释与人类知识融入等问题，探索如何让模型在数据有限或判断依据不透明的场景中，做出更稳定、可理解的预测。",
    guidanceTypes: ["小样本学习", "可解释 AI", "模型评价"],
    published: true,
  },
  {
    id: "cv-mm",
    title: "计算机视觉与多模态 AI",
    category: "Computer Vision",
    description: "处理图像、视频及其他传感信息，关注弱光、运动变化、时序错位与信息互补，并通过多模态对齐和融合实验验证效果。",
    guidanceTypes: ["图像识别", "多模态融合", "时序对齐"],
    published: true,
  },
  {
    id: "nlp-speech",
    title: "自然语言处理与语音技术",
    category: "NLP / Speech",
    description: "围绕对话理解、知识检索与可靠回答展开研究，关注信息何时适用、冲突如何处理，以及条件不足时系统应如何追问和解释。",
    guidanceTypes: ["对话系统", "知识检索", "可靠性"],
    published: true,
  },
  {
    id: "hci",
    title: "人机交互与用户体验",
    category: "HCI / UX",
    description: "关注技术如何影响人的理解、信任、选择与感受，通过原型、问卷、访谈或行为数据比较不同交互与呈现方式。",
    guidanceTypes: ["交互设计", "用户实验", "体验评价"],
    published: true,
  },
  {
    id: "vr",
    title: "虚拟现实与交互技术",
    category: "VR / XR",
    description: "研究沉浸式环境如何影响临场感、社会连接、学习体验与行为感受，并结合量表、行为记录和访谈评价体验效果。",
    guidanceTypes: ["沉浸体验", "临场感", "对照实验"],
    published: true,
  },
  {
    id: "edu-ai",
    title: "人工智能与教育技术",
    category: "Education × AI",
    description: "围绕学习材料组织、问题生成、记忆复习与个性化反馈，探索 AI 如何减轻准备负担，同时保留学习者的主动思考。",
    guidanceTypes: ["学习支持", "人机协同", "效果评价"],
    published: true,
  },
  {
    id: "data",
    title: "数据科学与信息分析",
    category: "Data Science",
    description: "从行为、健康、平台或业务数据中建立可解释的分析流程，关注变量选择、时间情境与多目标权衡，将数据转化为决策支持。",
    guidanceTypes: ["数据建模", "预测推荐", "决策支持"],
    published: true,
  },
  {
    id: "interdisciplinary",
    title: "跨学科研究",
    category: "Interdisciplinary",
    description: "将人工智能与心理、教育、健康、社会或经营问题结合，从真实问题和人的体验出发，选择适合的数据、系统与评价方法。",
    guidanceTypes: ["心理与行为", "社会应用", "混合方法"],
    published: true,
  },
];

export const researchCategories = ["全部", ...Array.from(new Set(researchAreas.map((item) => item.category)))];
