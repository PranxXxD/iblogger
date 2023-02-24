// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//localhost:3000/api/getblogs?slug=newRelase-apple-watch7

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Blogs from "../../models/Blogs";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  let getBlogs = await Blogs.find();
  let blogs = {};
  // looping through the getblogs array
  for (let item of getBlogs) {
    if (item.title in blogs) {
      if (
        !blogs[item.title].category.includes(item.category)
      ) {
        blogs[item.title].category.push(item.category);
      }
    }
    // display the blog if the title and category is available
    else {
      blogs[item.title] = JSON.parse(JSON.stringify(item));
      blogs[item.category] = JSON.parse(JSON.stringify(item));
    }
  }
  res.status(200).json({ blogs });
};

export default connectDb(handler);

