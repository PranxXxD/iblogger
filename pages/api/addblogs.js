// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "../../middleware/mongoose";
import Blogs from "../../models/Blogs";

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body)
    for (let i = 0; i > req.body.length; i++) {
      let b = new Blogs({
        title: req.body[i].title,
        category: req.body[i].category,
        slug: req.body[i].slug,
        desc: req.body[i].desc,
      });
      await b.save();
    }
    res.status(200).json({ success: "Blog Added Sucessfully in Database" });
  } else {
    res.status(400).json({ error: "This is bad request" });
  }
};

export default connectDb(handler);
