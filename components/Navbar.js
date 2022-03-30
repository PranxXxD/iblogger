import React from "react";
import Link from "next/Link";
import styles from "../styles/Home.module.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import MuiButton from "@mui/material/Button";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.ul}>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
        <Link href="/blog">
          <li>Blog</li>
        </Link>
        <div className={styles.dropdown}>
          <MuiButton>
            <AccountCircleRoundedIcon
              // style={{ color: "black" }}
              href="/userlogin"
              className={styles.dropbtn}
            />
          </MuiButton>
          <div class={styles.dropdowncontent}>
            <li className={styles.droplink}>
              <a href="/userlogin">Login</a>
            </li>
            <li className={styles.droplink}>
              <a href="/SignIn">Signup</a>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
