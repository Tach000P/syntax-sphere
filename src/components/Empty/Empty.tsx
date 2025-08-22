import { FC } from "react";
import styles from "./empty.module.scss";

const Empty: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.loader}>
          <span>Еще пишем...</span>
          <span>Еще пишем...</span>
        </div>
      </div>
      <div className={styles.typewriter}>
        <div className={styles.slide}>
          <i></i>
        </div>
        <div className={styles.paper}></div>
        <div className={styles.keyboard}></div>
      </div>
    </div>
  );
};

export default Empty;
