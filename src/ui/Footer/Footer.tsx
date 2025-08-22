import { FC } from "react";
import Logo from "../Logo/Logo";
import styles from "./footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Logo font_size={32} icon_size={85} />
      <p>© 2025 Syntax Sphere. Все права зашищены.</p>
    </footer>
  );
};

export default Footer;
