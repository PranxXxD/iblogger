import React, { useEffect, useState } from "react";
import Link from "next/Link";
import { ColoredLine } from "../components/hr";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";

//step 1: collect all files from the blogdata directory
//step 2 : Iterate through them and display them

const Blog = (props) => {
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
  const [count, setCount] = useState(2);

  const fetchData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    let Data = await fetch(
      `http://localhost:3001/api/blogs/?count=${count + 2}`
    );
    setCount(count + 2);
    let data = await Data.json();
    setBlogs(data);
  };
  return (
    <>
      <InfiniteScroll
        dataLength={blogs.length} //This is important field to render the next data
        next={fetchData}
        hasMore={props.allCount !== blogs.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <section className="text-gray-600 body-font overflow-hidden min-h-screen ">
          <div className="flex flex-col container px-5 py-8 mx-auto">
            <div className="sm:flex sm:w-1/2 items-stretch justify-center m-auto sm:flex-col cursor-pointer ">
              {blogs.map((blogitem) => {
                return (
                  <div
                    className="flex-grow sm:text-left text-center rounded-2xl px-4 mt-2 sm:mt-0 hover:bg-slate-100 shadow-md transition hover:ease-in-out"
                    key={blogitem.slug}
                  >
                    <Link href={`/blogpost/${blogitem.slug}`}>
                      <h3 className="md:text-2xl text-xl md:mt-6 py-4 font-medium text-gray-900 title-font">
                        {blogitem.Title}
                      </h3>
                    </Link>
                    <p className="leading-relaxed text-base w-auto">
                      {blogitem.metadesc.substr(0, 130)}
                    </p>
                    <a className="m-2 text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </InfiniteScroll>
    </>
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
  let allCount = data.length;
  let myfile;
  let allblogs = [];

  // fetch the data from the dir and storing in the item
  for (let index = 0; index < 2; index++) {
    const item = data[index];

    // read  data from the file
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    // console.log(myfile);

    //pushing data of myfile in allblogs
    allblogs.push(JSON.parse(myfile));
  }
  return {
    props: { allblogs, allCount }, // will be passed to the page component as props
  };
}

export default Blog;
