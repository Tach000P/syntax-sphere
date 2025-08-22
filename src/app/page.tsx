import PostItem from "@/components/PostItem/PostItem";
import { PostService } from "@/services/post.service";
import { NextPage } from "next";
import styles from "./page.module.scss";
import MainScreen from "@/ui/MainScreen/MainScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная - Syntax Sphere",
  description: "Главная страница Syntax Sphere с новостями и гайдами",
};

async function Page() {
  const posts = await PostService.getAll();

  return (
    <>
      <div className={styles.box}>
        <MainScreen />
        <div className={styles.posts}>
          {posts?.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Page;
