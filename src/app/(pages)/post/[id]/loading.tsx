import styles from "./loading.module.scss";

function Loading() {
  return (
    <div className={styles.loader}>
      <span className={styles.loader_text}>loading</span>
      <span className={styles.load}></span>
    </div>
  );
}

export default Loading;
