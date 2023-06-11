import Link from "next/link";
import styles from "@/styles/components/Buttons/RegisterButton.module.css";

const RegisterButton = () => {
  return (
    <div className={styles.registerButtonContainer}>
      <Link href="/registration" className={styles.registrationLink}>
        <button className={styles.registerButton}>Register</button>
      </Link>
    </div>
  );
};
