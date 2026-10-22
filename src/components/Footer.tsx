import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { siteConfig } from "@/data/siteConfig";

const links = [
  ["关于指导", "/#about"], ["服务内容", "/#services"], ["升学指导", "/#guidance"], ["研究领域", "/research"],
  ["指导流程", "/#process"], ["常见问题", "/#faq"],
  ["隐私政策", "/privacy"], ["服务条款", "/terms"],
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <BrandMark />
          <p>{siteConfig.tagline}</p>
          <p className="footer-note">{siteConfig.notice}</p>
        </div>
        <div className="footer-links">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}<ArrowUpRight size={13} /></Link>)}
        </div>
      </div>
      <div className="shell footer-bottom">© {new Date().getFullYear()} Research Compass. All rights reserved.</div>
    </footer>
  );
}
