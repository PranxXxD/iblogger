import React, { useEffect, useState } from "react";
import styles from "../styles/blog.module.css";
import Link from "next/Link";
import { ColoredLine } from "../components/hr";

//step 1: collect all files from the blogdata directory
//step 2 : Iterate through them and display them

const blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    // console.log("UseEffect is running");
    // fetching the data and parsing into a json format
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setBlogs(parsed);
      });
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.blog}>
          <h2>Mostly Viewed Blogs</h2>
          <ColoredLine color="black" />
          {blogs.map((blogitem) => {
            return (
              <div className={styles.blogItems} key={blogitem.slug}>
                <Link href={`/blogpost/${blogitem.slug}`}>
                  <h3>{blogitem.Title}</h3>
                </Link>
                <p>{blogitem.content.substr(0, 130)}.....</p>
              </div>
            );
          })}

          {/* <div className={styles.blogItems}>
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
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default blog;
