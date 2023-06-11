"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import Header from "./components/Header";
import OverviewCard from "./components/Cards/OverviewCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.introContainer}>
        <div className={styles.introTitle}>
          <h1 className={styles.introH1}>Hello there</h1>
        </div>
        <div className={styles.introText}>
          <span className={styles.intro}>
            This app will allow you to store blogs, manage code snippets, create
            to-do lists, and plan events with a calendar.
          </span>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <OverviewCard
          title="Blogs"
          description="Write, store, and manage your blogs all in one place."
        />
        <OverviewCard
          title="Code Snippets"
          description="Keep your code snippets for future reference."
        />
      </div>
    </main>
  );
}
