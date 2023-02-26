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
      //  blogs[item.title].category = [item.title];
  }
 }

  res.status(200).json({blogs});
};


export default connectDb(handler);

