import Router from "next/router";
import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Login.module.css";
import Header from "../app/components/Header";

export default function Login() {
  return (
    <main className={styles.main}>
      <Header />
      <h1>Hello there Log in muhfucker</h1>
    </main>
  );
}
