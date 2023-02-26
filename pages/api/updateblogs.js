// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "../../middleware/mongoose";
import Blogs from "../../models/Blogs";

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body)
    for(let i=0; i< req.body.length; i++){
        let b = await Blogs.findByIdAndUpdate(req.body[i]._id,req.body[i])
    }    
    res.status(200).json({ success: "Blog Updated Sucessfully in Database" });
  } else {
    res.status(400).json({ error: "This is bad request" });
  }
};

export default connectDb(handler);
