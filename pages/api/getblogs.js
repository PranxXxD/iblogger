// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//localhost:3000/api/getblogs?slug=newRelase-apple-watch7

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "../../middleware/mongoose";
import Blogs from "../../models/Blogs";

const handler = async (req, res) => {
  let CodingBlogs = await Blogs.find();
  let blogs = {};
  // looping through the getblogs array
  for (let item of CodingBlogs) {
    if (item.category in blogs) {
      if (
        !blogs[item.category].title.includes[item.title]
      ) {
        blogs[item.category].push(item.title);
      }
    }
    // display the blog if the title and category is available
    else {
      blogs[item.category] = JSON.parse(JSON.stringify(item));  
      //  blogs[item.category].title = [item.title];
  }
 }

  res.status(200).json({blogs});
};


export default connectDb(handler);

