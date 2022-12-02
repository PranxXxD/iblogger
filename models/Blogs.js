const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

// mongoose.models = {};
// export default mongoose.model("User", UserSchema);

// works same as above lines 12 and 13

export default mongoose.models.Blogs || mongoose.model("Blogs", UserSchema);
