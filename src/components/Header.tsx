"use client";

import styles from "./Header.module.css";
import logoImg from "../../public/logo.jpeg";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const handleMobileMenuSwitch = () => {
    setIsMobileOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!navRef.current) return;

      const target = event.target as Node;

      if (!navRef.current.contains(target)) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={`${styles.navBox} container`}>
        <Link href="/">
          <div className={styles.logoContainer}>
            <Image src={logoImg} alt="logo" height={65} width={90} />
            <div className={styles.titleBox}>
              <h1>
                <span className={`${styles.line} ${styles.big}`}>
                  Anna Niemczewska
                </span>
                <span className={`${styles.line} ${styles.small}`}>
                  Biuro Rachunkowe
                </span>
              </h1>
            </div>
          </div>
        </Link>

        <nav
          className={`${styles.menu} ${isMobileOpen ? styles.active : ""}`}
          ref={navRef}
        >
          <ul className={styles.menuItems}>
            <li>
              <Link
                href="/"
                className={styles.menuItem}
                onClick={() => setIsMobileOpen(false)}
              >
                Strona Główna
              </Link>
            </li>
            <li>
              <Link
                href="/oferta"
                className={styles.menuItem}
                onClick={() => setIsMobileOpen(false)}
              >
                Oferta
              </Link>
            </li>
            <li>
              <Link
                href="/kontakt"
                className={styles.menuItem}
                onClick={() => setIsMobileOpen(false)}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.iconsBox} onClick={handleMobileMenuSwitch}>
          {isMobileOpen ? (
            <IoClose size={40} color="#fff" />
          ) : (
            <GiHamburgerMenu size={40} color="#fff" />
          )}
        </div>
      </div>
    </header>
  );
};
