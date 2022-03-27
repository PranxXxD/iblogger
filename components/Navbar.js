import React from "react";
import Link from "next/Link";
import styles from "../styles/Home.module.css";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <Link href="/">
          <a>
            <li>Home</li>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <li>About</li>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <li>Contact</li>
          </a>
        </Link>
        <Link href="/blog">
          <a>
            <li>Blog</li>
          </a>
        </Link>
        <button>
          <AccountCircleOutlinedIcon />
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
