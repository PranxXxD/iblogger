const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
  },
  { timestamps: true }
);

// mongoose.models = {};
// export default mongoose.model("Blogs", UserSchema);

// works same as above lines 12 and 13

export default mongoose.models.Blogs || mongoose.model("Blogs",BlogSchema);
