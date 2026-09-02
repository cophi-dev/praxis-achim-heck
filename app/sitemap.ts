import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://praxis-achim-heck.vercel.app";
  const paths = ["", "/leistungen", "/therapeut", "/kosten", "/infos", "/infos/heilungsverlauf", "/kontakt", "/impressum", "/datenschutz"];
  return paths.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 }));
}
