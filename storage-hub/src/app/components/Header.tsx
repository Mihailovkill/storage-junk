import React, { useState } from "react";
import styles from "@/styles/components/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import LoginButton from "./Buttons/LoginButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Link href={"/"}>
            {" "}
            <Image src={"/logo.jpg"} alt="logo" width={130} height={90} />{" "}
          </Link>
        </div>
      </div>
      <div className={styles.searchContainer}></div>
      <div className={styles.loginContainer}>
        <LoginButton />
      </div>
      <div
        className={styles.dropdownMenuContainer}
        onClick={() => setIsOpen(!isOpen)}
      >
        <button>
          <Image
            src={"/icons/menuButton.png"}
            width={30}
            height={20}
            alt="menu"
          ></Image>
        </button>
        {isOpen && (
          <div className={styles.dropdownMenu}>
            <Navbar />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
