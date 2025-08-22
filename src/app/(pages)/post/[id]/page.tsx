// import { IPost, IPostData, IPostSingle } from "@/interfaces/post.interface";
// import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PostService } from "@/services/post.service";
// import Layout from "@/app/layout";
import PostContent from "@/components/PostContent/PostContent";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  if (!id) {
    return {
      title: "Not Found",
      description: "This page does not exist.",
    };
  }
  const post = await PostService.getByID(String(id));
  return {
    title: `${post?.name} - Syntax Sphere`,
    description: `${post?.name} - информация о посте`,
  };
}

async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await PostService.getByID(String(id));

  return <PostContent post={post} />;
}

// interface Params extends ParsedUrlQuery {
//   id: string;
// }

// export const getStaticPaths: GetStaticPaths<Params> = async () => {
//   const data = await PostService.getAll();

//   return {
//     paths: data.map((post) => ({
//       params: {
//         id: post.id.toString(),
//       },
//     })),
//     fallback: "blocking",
//   };
// };

// export const getStaticProps: GetStaticProps<IPostSingle> = async ({
//   params,
// }) => {
//   const post = await PostService.getByID(String(params?.id));

//   return {
//     props: { post },
//     revalidate: 60,
//   };
// };

export default PostPage;



