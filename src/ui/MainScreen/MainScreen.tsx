import { FC } from "react";
import Wrapper from "./Wrapper/Wrapper";
import styles from "./mainscreen.module.scss";
import DecorWrapper from "./DecorWrapper/DecorWrapper";

const MainScreen: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Wrapper />
      </div>
      <div className={styles.card}>
        <DecorWrapper />
      </div>
    </div>
  );
};

export default MainScreen;
