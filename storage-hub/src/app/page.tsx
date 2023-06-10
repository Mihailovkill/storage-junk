"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <h1>Hello there</h1>
    </main>
  );
}
