import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/research", "/privacy", "/terms"].map((path) => ({ url: `${siteConfig.siteUrl}${path}`, lastModified: new Date(), changeFrequency: path ? "monthly" : "weekly", priority: path ? 0.7 : 1 })); }
