import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/blogpost.module.css";
import { ColoredLine } from "../../components/hr";

//step 1 : Find the file corresponding to the slug
//step 2: populate them inside the page

const Slug = () => {
  // console.log(router.query);
  const [blog, setBlog] = useState();
  const router = useRouter();

  useEffect(() => {
    // Runs the code until the router is ready
    if (!router.isReady) return;
    const { slug } = router.query;
    // console.log("UseEffect is running");
    // fetching the data and parsing into a json format
    fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setBlog(parsed);
      });
  }, [router.isReady]);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.Title}</h1>
        <ColoredLine color="black" />
        <div>{blog && blog.content}</div>

        <hr />
      </main>
    </div>
  );
};

export default Slug;
