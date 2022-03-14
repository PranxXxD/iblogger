import React from "react";
import styles from "../styles/blog.module.css";
import Link from "next/Link";

//step 1: collect all files from the blogdata directory
//step 2 : Iterate through them and display them

const profile = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.blog}>
          <h2>Mostly Viewed Blogs</h2>
          <div className={styles.blogItems}>
            <Link href={"/blogpost/iPhoneSE-2022"}>
              <h3>Apple new release</h3>
            </Link>
            <p>The new release of apple SE 2022 Edition</p>
          </div>

          <div className={styles.blogItems}>
            <h3>Apple new release</h3>
            <p>The new release of apple SE 2022 Edition</p>
          </div>

          <div className={styles.blogItems}>
            <h3>Apple new release</h3>
            <p>The new release of apple SE 2022 Edition</p>
          </div>

          <div className={styles.blogItems}>
            <h3>Apple new release</h3>
            <p>The new release of apple SE 2022 Edition</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default profile;
