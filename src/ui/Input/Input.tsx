import { FC } from "react";
import styles from "./input.module.scss";
import Icon from "./icon";

const Input: FC = () => {
  return (
    <>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          name=""
          placeholder="Поиск..."
        />
        <button className={styles.searchButton}>
          <Icon />
        </button>
      </div>
    </>
  );
};

export default Input;
