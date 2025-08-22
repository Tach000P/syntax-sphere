import { MetadataRoute } from "next";

const Robots = (): MetadataRoute.Robots => {
  const SITE_URL = process.env.SITE_URL;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
};

export default Robots;
