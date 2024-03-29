// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose";
import User from "../../models/User";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    // destructuring object
    const { name, email } = req.body;
    // encrypting the password
    let user = new User({
      name,
      email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.AES_SECRET_KEY
      ).toString(),
    });
    await user.save();
    res.status(200).json({ success: "Success" });
  } else {
    res.status(400).json({ error: "This is bad request" });
  }
};

// establish connection with the mongodb
export default connectDb(handler);
