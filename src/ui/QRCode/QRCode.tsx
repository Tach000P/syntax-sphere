import { FC } from "react";
import styles from "./qrCode.module.scss";
import Link from "next/link";

interface QRCodeProps {
  type: string;
  icon?: string;
  link: string;
}

const QRCOde: FC<QRCodeProps> = ({ type, icon, link }) => {
  const type_icon = type === "start" ? "url('/start.png')" : "url('/tg.png')";
  const qr = type === "start" ? "url('/start_qr.png')" : "url('/tg_qr.png')";
  const to =
    type === "start" ? `https://tmstart.me/${link}` : `https://t.me/${link}`;

  return (
    <Link
      href={link}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.qr} style={{ backgroundImage: qr }} />

      <div className={styles.prompt}>
        <div className={styles.token_container}>
          <div className={styles.icon} style={{ backgroundImage: type_icon }} />
        </div>
        <div className={styles.blurry_splash}></div>
        <p>
          Наведи мышкой
          <br />
          <span className={styles.bold}>Канал</span>{" "}
        </p>
        <p className={styles.small_text}>*тут много интересного</p>
      </div>
    </Link>
  );
};

export default QRCOde;
