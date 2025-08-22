import { IPostSingle } from "@/interfaces/post.interface";
import { FC } from "react";
import styles from "./postContent.module.scss";
import { formatDate } from "@/functions/format";

const PostContent: FC<IPostSingle> = ({ post }) => {
  if (!post) return <div></div>;

  const NAME = post.name;
  const IMAGE = `url('${post.cover}')` || "url('/no-immage.jpg')";
  const DESCRIPTION = post.description;
  const TYPE = post.type === "news" ? "Новость" : "Гайд";
  const CATEGORIES = post.categories;
  const TIME = formatDate(post.createdAt);

  return (
    <div>
      <div style={{ backgroundImage: IMAGE }} className={styles.image} />

      <h1 className={styles.name}>{NAME}</h1>

      <p className={styles.description}>{DESCRIPTION}</p>

      <div className={styles.info}>
        <span className={styles.head}>Категория: </span>
        <div className={styles.categories}>
          {CATEGORIES.map((p, i) => (
            <div key={i} className={styles.item}>
              {p}
            </div>
          ))}
        </div>
        <span className={styles.head}>Тип: </span>
        <div className={styles.item}>{TYPE}</div>
        <span className={styles.head}>Время публикации: </span>
        <div className={styles.item}>{TIME}</div>
      </div>
    </div>
  );
};

export default PostContent;
