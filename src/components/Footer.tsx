import Image from "next/image";
import styles from "./Footer.module.css";
import logoImg from "../../public/logo.jpeg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.contentBox}>
          <div className={styles.logoContainer}>
            <Image src={logoImg} alt="logo" height={40} width={60} />
            <div className={styles.titleBox}>
              <p>
                <span className={`${styles.line} ${styles.big}`}>
                  Anna Niemczewska
                </span>
                <span className={`${styles.line} ${styles.small}`}>
                  Biuro Rachunkowe
                </span>
              </p>
            </div>
          </div>
          <div className={styles.textBox}>
            <p>&copy; {new Date().getFullYear()} Wszelkie prawa zastrzeżone</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
