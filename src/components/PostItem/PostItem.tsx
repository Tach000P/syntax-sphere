import { IPostSingle } from "@/interfaces/post.interface";
import { FC } from "react";
import styles from "./postItem.module.scss";
import Link from "next/link";
import { bgImageURL, formatDate, truncateText } from "@/functions/format";

const PostItem: FC<IPostSingle> = ({ post }) => {
  if (!post) {
    return null;
  }

  // Define the maximum lengths for text
  const tml = {
    name: 30,
    description: 200,
  };

  const TYPE = post.type === "news" ? "Новость" : "Гайд";
  const LINK_URL = `/post/${post.id}`;
  const NAME = truncateText(post.name, tml.name);
  const TIME = formatDate(post.createdAt);
  const IMAGE = bgImageURL(post.image);
  const DESCRIPTION = truncateText(post.description, tml.description);

  return (
    <Link href={LINK_URL} className={styles.card}>
      <div style={{ backgroundImage: IMAGE }} className={styles.card2}>
        <div className={styles.card_content}>
          <div className={styles.info}>
            <h3 className={styles.name}>{NAME}</h3>
            <div className={styles.description}>
              <p className={styles.text}>{DESCRIPTION}</p>
            </div>
          </div>
          <div className={styles.card_footer}>
            <span className={styles.item}>{"Приветствие"}</span>
            <span className={styles.item}>{TIME}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
