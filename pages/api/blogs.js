// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Blogs from "../../models/Blogs";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let userblogs = new Blogs({
        title: req.body[i].title,
        desc: req.body[i].desc,
        slug: req.body[i].slug,
      });
      await userblogs.save();
      console.log(userblogs);
    }
    res.status(200).json({ success: "Success" });
  } else {
    res.status(400).json({ error: "This is bad request" });
  }
};

export default connectDb(handler);
