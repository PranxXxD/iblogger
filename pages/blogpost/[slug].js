import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/blogpost.module.css";
import { ColoredLine } from "../../components/hr";
import * as fs from "fs";

//step 1 : Find the file corresponding to the slug
//step 2: populate them inside the page

const Slug = (props) => {
  // console.log(router.query);
  const [blog, setBlog] = useState(props.myBlog);

  // useEffect(() => {
  //   // Runs the code until the router is ready
  //   if (!router.isReady) return;
  //   const { slug } = router.query;
  //   // console.log("UseEffect is running");
  //   // fetching the data and parsing into a json format
  //   fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       setBlog(parsed);
  //     });
  // }, [router.isReady]);

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
// Method for the Server side Rendereing
// export async function getServerSideProps(context) {
//   // console.log(context.query);
//   const { slug } = context.query; //context.query is an object of the query string passed in the page's URL
//   // let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);
//   // let myBlog = await data.json(); //covert the data into a json format
//   return {
//     props: { myBlog }, // will be passed to the page component as props
//   };
// }

// Method for the Static side Rendering

export async function getStaticPaths() {
  return {
    paths: [
      // render the data from the given path
      { params: { slug: "newrelease-apple-12-pro" } },
      { params: { slug: "newrelease-apple-13-mini" } },
      { params: { slug: "newrelease-apple-13pro-apline-green" } },
      { params: { slug: "newrelease-apple-SE-2022" } },
      { params: { slug: "newrelease-apple-watch7" } },
    ],
    fallback: true, // false or 'blocking'
  };
}
// sends props to the server to fetch the whole data
export async function getStaticProps(context) {
  // console.log(context);
  const { slug } = context.params;

  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  };
}

export default Slug;
