import styles from "./logo.module.scss";

import { FC } from "react";

interface LogoProps {
  font_size?: number;
  icon_size?: number;
}

const Logo: FC<LogoProps> = ({ font_size, icon_size }) => {
  const FONT_SIZE = `${font_size}px` || "22px"; // Default font size if not provided
  const ICON_SIZE = icon_size || 45;

  return (
    <div className={styles.logo}>
      <div
        className={styles.icon}
        style={{ width: ICON_SIZE, height: ICON_SIZE }}
      />
      <span style={{ fontSize: FONT_SIZE }}>Syntax Sphere</span>
    </div>
  );
};

export default Logo;
