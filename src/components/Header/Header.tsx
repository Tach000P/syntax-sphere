import { FC } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Logo from "@/ui/Logo/Logo";
import Input from "@/ui/Input/Input";
import Button from "@/ui/Button/Button";

const Header: FC = () => {
  const buttons = [
    { name: "Гайды", href: "/guides" },
    { name: "Новости", href: "/news" },
    { name: "О нас", href: "/about" },
  ];

  return (
    <div className={styles.nav}>
      <div className={styles.left_side}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Logo />
        </Link>
        {/* Buttons */}
        <div className={styles.buttons}>
          {buttons.map((button, index) => (
            <Button key={index} text={button.name} link={button.href} />
          ))}
        </div>
      </div>
      {/* Search */}
      <Input />
    </div>
  );
};

export default Header;
