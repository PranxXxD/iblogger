import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ColoredLine } from "../../components/hr";
import * as fs from "fs";
import Image from "next/image";
import iphone12pro from "../../assets/iphone12pro.jpg";

//step 1 : Find the file corresponding to the slug
//step 2: populate them inside the page

const Slug = (props) => {
  // console.log(router.query);
  const [blog, setBlog] = useState(props.myBlog);

  //display the markup code in text fromat
  function createMarkup(c) {
    return { __html: c };
  }
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
    <>
      {/* <div>{blog && blog.content}</div> */}
      <section className="text-gray-600 body-font min-h-screen">
        <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <Image
              className="lg:w-2/6 md:w-3/6 m-20 object-cover object-center rounded-2xl"
              alt="iphone12pro"
              src={iphone12pro}
              width={900}
              height={400}
            />
            <h1 className="title-font sm:text-4xl text-3xl m-6 font-medium text-gray-900">
              {blog && blog.Title}
            </h1>
            <hr />
            {blog && (
              <div
                className="mb-8 py-4 leading-relaxed text-md text-gray-500 font-sans p-4"
                dangerouslySetInnerHTML={createMarkup(blog.content)}
              ></div>
            )}
          </div>
        </div>
      </section>
    </>
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
  // Dynamically fetcing data from the blogdata
  let allblg = await fs.promises.readdir(`blogdata`);
  allblg = allblg.map((item) => {
    // console.log(item);
    return { params: { slug: item.split(".")[0] } };
  });
  return {
    paths: allblg,
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
