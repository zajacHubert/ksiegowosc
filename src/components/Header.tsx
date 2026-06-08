"use client";

import styles from "./Header.module.css";
import logoImg from "../../public/logo.jpeg";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.navBox} container`}>
        <Link href="/">
          <div className={styles.logoContainer}>
            <Image src={logoImg} alt="logo" height={65} width={90} />
            <div>
              <h1>
                <span className={styles.line}>Anna Niemczewska</span>
                <span className={styles.line}>Biuro Rachunkowe</span>
              </h1>
            </div>
          </div>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/">Strona główna</Link>
              <Link href="/">Oferta</Link>
              <Link href="/">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
