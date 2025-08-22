// import Layout from "@/app/layout";
import Empty from "@/components/Empty/Empty";
import PostItem from "@/components/PostItem/PostItem";
import { PostService } from "@/services/post.service";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const allowedTypes = ["news", "guides"];

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> => {
  const { type } = await params;
  if (!allowedTypes.includes(type)) {
    return {
      title: "Not Found",
      description: "This page does not exist.",
    };
  }
  const base = type === "news" ? "Новости" : "Гайды";
  return {
    title: `${base} - Syntax Sphere`,
    description: `Все ${base.toLowerCase()} на сайте`,
  };
};

async function Types({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;

  if (!allowedTypes.includes(type) || !type) {
    notFound();
  }

  const base = type === "news" ? "Новости" : "Гайды";

  const posts = await PostService.getAll(type);

  return (
    <div>
      <h1>{base}</h1>
      <div>
        {posts.length ? (
          posts.map((post) => <PostItem key={post.id} post={post} />)
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}

export default Types;



