// import React, { useEffect, useState } from "react";
import Link from "next/Link";
// import { ColoredLine } from "../components/hr";
// import InfiniteScroll from "react-infinite-scroll-component";
import Blogs from "../models/Blogs";
import mongoose from "mongoose";
//step 1: collect all files from the blogdata directory
//step 2 : Iterate through them and display them

const Blog = ({JSblogs}) => {
  // console.log(JSblogs);
 
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden min-h-screen ">
          <div className="flex flex-col container px-5 py-8 mx-auto">
            <div className="sm:flex sm:w-1/3 items-stretch justify-center m-auto sm:flex-col cursor-pointer">
              {Object.keys(JSblogs).map((item) => {
                return (
                  <Link key={item._id} href={`/blogs/${JSblogs[item].slug}`}>
                  <div
                    className="flex-grow sm:text-left text-center rounded-2xl px-4 mt-2 sm:mt-0 hover:bg-slate-200 shadow-md transition hover:ease-in"
                    // key={JSblogs[item].slug}
                  >
                    <Link href={`/blogs/${JSblogs[item].slug}`}>
                      <h3 className="md:text-2xl text-xl md:mt-6 py-4 font-medium text-gray-900 title-font">
                        {JSblogs[item].title}
                      </h3>
                    </Link>
                    <p className="leading-relaxed text-base w-auto">
                      {JSblogs[item].desc.substr(0, 130)}
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
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
    </>
  );
};
// Method for the Server side Rendereing
// fetching the data from the mongodb
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let JSblogs = await Blogs.find();
  // console.log(products);
  // jsBlg is an object
  let jsBlg = {};
  // looping through the product array
  for (let item of JSblogs) {
    // taking title as a key and jsBlg as an object
    if (item.title in jsBlg) {
      if (!jsBlg[item.title].category.includes(item.category)) {
        jsBlg[item.title].category.push(item.category);
      }
    }
    // display the blog if the category is available
    else {
       jsBlg[item.title] = JSON.parse(JSON.stringify(item));
      if (item.title) {
        jsBlg[item.title].category = [item.category];
      }
    }
  }
  return {
    props: {
      JSblogs: JSON.parse(JSON.stringify(jsBlg)),
    }, // will be passed to the page component as props
  };
}


export default Blog;
