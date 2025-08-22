import { FC } from "react";
import styles from "./decorWrapper.module.scss";

const DecorWrapper: FC = () => {
  return (
    <div className={styles.decorWrapper}>
      <img src="/logo_icon.png" alt="Лого" />
    </div>
  );
};

export default DecorWrapper;
