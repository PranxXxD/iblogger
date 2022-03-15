// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default function handler(req, res) {
  // console.log(req);
  fs.readdir("blogdata", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
    console.log(data);
    res.status(200).json(data);
  });
}
