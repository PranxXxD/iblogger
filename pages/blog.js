import React, { useEffect, useState } from "react";
import styles from "../styles/blog.module.css";
import Link from "next/Link";
import { ColoredLine } from "../components/hr";
import * as fs from "fs";

//step 1: collect all files from the blogdata directory
//step 2 : Iterate through them and display them

const blog = (props) => {
  const [blogs, setBlogs] = useState(props.allblogs);
  // console.log(props);
  // useEffect(() => {
  //   // console.log("UseEffect is running");
  //   // fetching the data and parsing into a json format
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       setBlogs(parsed);
  //     });
  // }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.blog}>
          <h2>Mostly Viewed Blogs</h2>
          <ColoredLine color="black" />
          {blogs.map((blogitem) => {
            return (
              <div className={styles.blogItems} key={blogitem.slug}>
                <div className={styles.card}>
                  <Link href={`/blogpost/${blogitem.slug}`}>
                    <h3>{blogitem.Title} &rarr;</h3>
                  </Link>
                  <p>{blogitem.metadesc.substr(0, 130)}.....</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};
// Method for the Server side Rendereing
// export async function getServerSideProps(context) {
//   // console.log(context);
//   let data = await fetch("http://localhost:3000/api/blogs");
//   let allblogs = await data.json(); //convert the data into a json format
//   return {
//     props: { allblogs }, // will be passed to the page component as props
//   };
// }

// Method for the static side rendering
export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allblogs = [];

  // fetch the data from the dir and storing in the item
  for (let index = 0; index < data.length; index++) {
    const item = data[index];

    // read  data from the file
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    // console.log(myfile);

    //pushing data of myfile in allblogs
    allblogs.push(JSON.parse(myfile));
  }
  return {
    props: { allblogs }, // will be passed to the page component as props
  };
}

export default blog;
