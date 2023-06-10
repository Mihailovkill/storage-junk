import styles from "@/styles/components/Buttons/LoginButton.module.css";
import Link from "next/link";
import Image from "next/image";

const LoginButton = () => {
  return (
    <Link href={"/login"}>
      <button className={styles.loginButton}>
        <Image
          src={"/icons/book.png"}
          width={30}
          height={20}
          alt="loginButton"
        />
      </button>
    </Link>
  );
};

export default LoginButton;
