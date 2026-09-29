import type { NextConfig } from "next";

/**
 * Old IONOS paths → existing routes.
 * Next matches each source with and without a trailing slash.
 * `/infos` itself is a live page and is not a redirect source.
 */
const legacyRedirects: { source: string; destination: string }[] = [
  { source: "/anfahrt", destination: "/kontakt" },
  { source: "/öffnungszeiten", destination: "/kontakt" },
  { source: "/%C3%B6ffnungszeiten", destination: "/kontakt" },
  { source: "/infos/", destination: "/infos" },
  { source: "/infos/motiv", destination: "/infos" },
  { source: "/infos/wissenswertes", destination: "/infos#wissen" },
  { source: "/infos/gesundheits-abo", destination: "/kosten" },
  { source: "/infos/experten-allianz", destination: "/infos#allianz" },
  { source: "/leistungen/o-s-t-e-o", destination: "/leistungen#osteo" },
  { source: "/leistungen/p-h-y-s-i-o", destination: "/leistungen#physio" },
  { source: "/leistungen/c-h-i-r-o", destination: "/leistungen#chiro" },
  { source: "/sitemap", destination: "/sitemap.xml" },
];

const existingRoutes = new Set([
  "/",
  "/leistungen",
  "/therapeut",
  "/kosten",
  "/infos",
  "/infos/heilungsverlauf",
  "/kontakt",
  "/impressum",
  "/datenschutz",
  "/sitemap.xml",
  "/robots.txt",
]);

for (const redirect of legacyRedirects) {
  if (existingRoutes.has(redirect.source)) {
    throw new Error(`Redirect source collides with an existing route: ${redirect.source}`);
  }
}

const nextConfig: NextConfig = {
  // The built-in trailing-slash rule is a 308 and runs before these redirects.
  // Skipping it lets each legacy path (with or without a slash) answer with 301.
  // The catch-all below keeps the previous 308 for every other trailing-slash URL.
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      ...legacyRedirects.map((redirect) => ({
        ...redirect,
        statusCode: 301,
      })),
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
        missing: [{ type: "header", key: "x-nextjs-data" }],
      },
    ];
  },
};

export default nextConfig;
