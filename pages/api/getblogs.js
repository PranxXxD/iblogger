// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//localhost:3000/api/getblogs?slug=newRelase-apple-watch7

import * as fs from "fs";

export default function handler(req, res) {
  // console.log(req);
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Blogpost Not Found" });
    }
    console.log(req.query);
    res.status(200).json(JSON.parse(data));
  });
}
