import React from "react";
import styles from "../styles/sidecontent.module.css";

const Sidecontent = () => {
  return (
    <div className={styles.sideContainer}>
      <div className={styles.sideBlog}>
        <h2>Mostly Viewed Blogs</h2>
        <div className={styles.sideBlogs}>
          <h3>Apple new release</h3>
          <p>The new release of apple SE 2022 Edition</p>
        </div>
      </div>
    </div>
  );
};

export default Sidecontent;
