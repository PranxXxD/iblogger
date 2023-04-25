const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String },
    href: { type: String },
    category: [{ title: { String }, href: { String } }],
    slug: { type: String, unique: true},
    desc: { type: String },
    date: { type: String },
    author: [{
      name: { String },
      role: { String },
      href: { String },
      imageUrl: { String },
    }
    ]
  },
  { timestamps: true, typeKey: '$type' }
);

// mongoose.models = {};
// export default mongoose.model("Blogs", UserSchema);

// works same as above lines 12 and 13

export default mongoose.models.Blogs || mongoose.model("Blogs", BlogSchema);
