import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageMotion } from "@/components/PageMotion";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: "Research Compass｜日本大学院研究计划书指导与研究选题辅导", template: "%s｜Research Compass" },
  description: siteConfig.description,
  keywords: ["日本大学院研究计划书", "日本修士研究计划书", "研究计划书辅导", "研究选题", "先行研究调查", "Research Gap", "情报学研究计划书"],
  openGraph: { title: "Research Compass｜日本大学院研究指导", description: siteConfig.description, type: "website", locale: "zh_CN" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN" data-scroll-behavior="smooth"><body><a className="skip-link" href="#main-content">跳到主要内容</a><PageMotion /><Navbar /><main id="main-content">{children}</main><Footer /></body></html>;
}
