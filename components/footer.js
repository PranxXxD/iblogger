import React from "react";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <a target="_yles.nk" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Footer;
