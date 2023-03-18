// import React, { useEffect, useState } from "react";
import Link from "next/Link";
// import { ColoredLine } from "../components/hr";
// import InfiniteScroll from "react-infinite-scroll-component";
import Blogs from "../models/Blogs";
import mongoose from "mongoose";
//step 1: collect all files from the blogdata directory
//step 2 : Iterate through them and display them

const Blog = ({allblogs}) => {
  // console.log(JSblogs);
 
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden min-h-screen ">
          <div className="flex flex-col container px-5 py-8 mx-auto">
            <div className="sm:flex sm:w-1/3 items-stretch justify-center m-auto sm:flex-col cursor-pointer">
              {Object.keys(allblogs).map((item) => {
                return (
                  <Link key={item._id} href={`/blogpost/${allblogs[item].slug}`}>
                  <div
                    className="flex-grow sm:text-left text-center rounded-2xl px-4 mt-2 sm:mt-0 hover:bg-slate-200 shadow-md transition hover:ease-in"
                    key={allblogs[item].slug}
                  >
                      <h3 className="md:text-2xl text-xl md:mt-6 py-4 font-medium text-gray-900 title-font">
                        {allblogs[item].title}
                      </h3>
                    <p className="leading-relaxed text-base w-auto">
                      {allblogs[item].desc.substr(0, 130)}
                    </p>
                    <a className="m-2 text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
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
  let allblogs = await Blogs.find();
  // console.log(products);
  // jsBlg is an object
  let blogs = {};
  // looping through the product array
  for (let item of allblogs) {
    // taking title as a key and jsBlg as an object
    if (item.title in blogs) {
      if (!blogs[item.title].category.includes(item.category)) {
        blogs[item.title].category.push(item.category);
      }
    }
    // display the blog if the category is available
    else {
      blogs[item.title] = JSON.parse(JSON.stringify(item));
      // if (item.title) {
      //   blogs[item.title].category = [item.category];
      // }
    }
  }
  return {
    props: {
      allblogs: JSON.parse(JSON.stringify(blogs)),
    }, // will be passed to the page component as props
  };
}


export default Blog;
