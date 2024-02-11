import Link from "next/link";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        codietmall
      </Link>
      <Link className={styles.setting} href="/setting">
        설정
      </Link>
    </header>
  );
}
