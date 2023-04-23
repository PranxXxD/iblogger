// import React, { useEffect, useState } from "react";
import Link from "next/Link";
// import { ColoredLine } from "../components/hr";
// import InfiniteScroll from "react-infinite-scroll-component";
import Blogs from "../models/Blogs";
import mongoose from "mongoose";
import { TbArrowMoveRight } from "react-icons/tb";
//step 1: collect all files from the blogdata directory
//step 2 : Iterate through them and display them

const Blog = ({ allblogs }) => {
  // console.log(JSblogs);
  const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      slug: "testing-blog",
      category: { title: 'JavaScript', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    // More posts...
  ]

  return (
    <>
      <div className="bg-white py-22 sm:py-24">
        <div className="mx-auto max-w-7 xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight  text-gray-900 sm:text-4xl">Top Blogs</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn the basics and upskill yourself.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {Object.keys(allblogs).map((item) => {
              return (
                <article key={allblogs._id} className="flex max-w-xl flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={allblogs[item].datetime} className="text-gray-500">
                      {allblogs[item].datetime}
                    </time>
                    <a
                      href={allblogs[item].category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {allblogs[item].category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={allblogs[item].href}>
                        <span className="absolute inset-0" />
                        {allblogs[item].title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{allblogs[item].desc}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img src={allblogs[item].author.image} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={allblogs[item].author.href}>
                          <span className="absolute inset-0" />
                          {allblogs[item].author.name}
                        </a>
                      </p>
                      {/* <p className="text-gray-600">{post.author.role}</p> */}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
      )
    </>
  );
};

export default Blog;


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


