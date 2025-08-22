import { PostService } from "@/services/post.service";
import type { MetadataRoute } from "next";

export const generatePostsSitemap = async (): Promise<
  Array<{ id: number }>
> => {
  const posts = await PostService.getAll();
  return posts;
};

const Sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const SITE_URL = process.env.SITE_URL;
  const lastModified = new Date();

  const posts = await generatePostsSitemap();

  const postsUrls = posts.map((post) => ({
    url: `${SITE_URL}/posts/${post.id}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: `${SITE_URL}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/guides`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/news`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    ...postsUrls,
  ];
};

export default Sitemap;
