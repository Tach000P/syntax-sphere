import { NextPage } from "next";
import styles from "./loading.module.scss";

const Loading: NextPage = () => {
  return (
    <div className={styles.loader}>
      <span className={styles.loader_text}>loading</span>
      <span className={styles.load}></span>
    </div>
  );
};

export default Loading;
