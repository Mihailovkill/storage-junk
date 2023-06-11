"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OverviewCard from "./components/Cards/OverviewCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.introContainer}>
        <div className={styles.introTitle}>
          <h1 className={styles.introH1}>Hello there</h1>
        </div>
        <div className={styles.introText}>
          <p className={styles.intro}>
            This app will allow you to store blogs, manage code snippets, create
            to-do lists, and plan events with a calendar.
          </p>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <p className={styles.infoRegistration}>
          For your own personal Blog you can regiter below:
        </p>
        <div className={styles.registerButtonContainer}>
          <Link href="/registration" className={styles.registrationLink}></Link>
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
        <OverviewCard
          title="To-do Lists"
          description="Stay organized with our intuitive to-do list feature."
        />
        <OverviewCard
          title="Calendar Events"
          description="Never miss any event with our event planning feature."
        />
      </div>
      <Footer />
    </main>
  );
}
