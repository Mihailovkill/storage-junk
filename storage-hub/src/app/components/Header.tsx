import React, { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}></div>
      <div className={styles.searchContainer}></div>
      <div className={styles.loginContainer}></div>
      <div
        className={styles.dropdownMenuContainer}
        onClick={() => setIsOpen(!isOpen)}
      ></div>
    </div>
  );
};

export default Header;
