import { FC } from "react";
import styles from "./button.module.scss";
import Link from "next/link";

interface ButtonProps {
  text: string;
  link?: string;
}

const Button: FC<ButtonProps> = ({ text, link }) => {
  // Check if the link is external or internal
  const external = link?.startsWith("http") || link?.startsWith("https");
  const url = link ? (external ? link : `${link}`) : "";
  const target = external ? "_blank" : "_self";

  return url ? (
    <Link href={url} target={target}>
      <button className={styles.button}>
        <span>{text}</span>
      </button>
    </Link>
  ) : (
    <button className={styles.button}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
